import { RootState } from "@/redux/store";
import { TabTypes } from "@/routes/tab.routes";
import { EventsService } from "@/services/events";
import { EventsProps } from "@/services/interfaces/events";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";

export const useHome = () => {
  const user = useSelector((state: RootState) => state.user);

  const navigation = useNavigation<TabTypes>();

  const modalReportTrashRef = useRef<Modalize>(null);

  const handleOpenModalReportTrash = (): void => {
    modalReportTrashRef.current?.open();
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["events", user.id],
    queryFn: async () => await EventsService.getEventsByUser({
      userId: user.id,
      page: 0,
      size: 20,
     }),
  })

  const eventsList = data?.content

  const handleRefetchEvents = (): void => {
    refetch()
  }

  const handleNavigateToEvents = () => {
    navigation.navigate("Events")
  }

  const handleNavigateToRanking = () => {
    navigation.navigate("Ranking")
  }

  useFocusEffect(() => {
    refetch()
  })

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
      handleRefetchEvents,
      handleNavigateToEvents,
      handleNavigateToRanking
    },
  };
}