import { RootState } from "@/redux/store";
import { EventsService } from "@/services/events";
import { EventsProps } from "@/services/interfaces/events";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";

export const useHome = () => {
  const user = useSelector((state: RootState) => state.user);

  const modalReportTrashRef = useRef<Modalize>(null);

  const handleOpenModalReportTrash = (): void => {
    modalReportTrashRef.current?.open();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => await EventsService.getEventsByUser({
      userId: user.id,
      page: 0,
      size: 20,
     }),
    refetchOnWindowFocus: false,
  })

  const eventsList = data?.content

  return {
    refs: {
      modalReportTrashRef,
    },
    states: {
      isLoading,
      eventsList,
    },
    actions: {
      handleOpenModalReportTrash,
    },
  };
}