import { EventsService } from "@/services/events";
import { useMessage } from "@/utils/message";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ERROR_MESSAGE } from "./events.constants";

export const useEvents = () => {
  const { showToast } = useMessage();

  const [searchEvent, setSearchEvent] = useState<string>("");

  const handleSearchEvent = (value: string): void => {
    setSearchEvent(value);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["events", searchEvent],
    queryFn: async () =>
      EventsService.getAllEvents({
        page: 0,
        size: 20,
        name: searchEvent,
      }).catch(() => {
        showToast({
          title: ERROR_MESSAGE,
          error: true,
        });
      }),
  });

  const eventsList = data?.content || [];

  const handleRefetch = (): void => {
    refetch();
  };

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
