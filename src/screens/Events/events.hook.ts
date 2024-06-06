import { EventsService } from "@/services/events";
import { useMessage } from "@/utils/message";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ERROR_MESSAGE } from "./events.constants";
import { useFocusEffect } from "@react-navigation/native";

export const useEvents = () => {
  const { showToast } = useMessage();

  const [searchEvent, setSearchEvent] = useState<string>("");

  const handleSearchEvent = (value: string): void => {
    setSearchEvent(value);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await EventsService.getAllEvents({
        page: 0,
        size: 20,
        name: searchEvent,
      }).catch((err) => {
        console.log(err)
        showToast({
          title: ERROR_MESSAGE,
          error: true,
        });
      });

      return res;
    },
  });

  const eventsList = data?.content || [];

  const handleRefetch = (): void => {
    refetch();
  };

  useFocusEffect(() => {
    refetch();
  });

  return {
    states: {
      searchEvent,
      eventsList,
      isLoading,
    },
    actions: {
      handleSearchEvent,
      handleRefetch,
    },
  };
};
