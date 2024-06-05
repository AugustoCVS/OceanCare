import { TabTypes } from "@/routes/tab.routes";
import { UserService } from "@/services/user";
import { useMessage } from "@/utils/message";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";
import { ERROR_MESSAGE } from "./ranking.constants";

export const useRanking = () => {
  const navigation = useNavigation<TabTypes>();
  const { showToast } = useMessage();

  const modalReportTrashRef = useRef<Modalize>(null);

  const handleOpenModalReportTrash = (): void => {
    modalReportTrashRef.current?.open();
  };

  const handleNavigateToHome = (): void => {
    navigation.navigate("Home");
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ranking"],
    queryFn: async () =>
      await UserService.getUsers().catch(() => {
        showToast({
          title: ERROR_MESSAGE,
          error: true,
        });
      }),
  });
  const userList = data?.content || [];

  const handleRefetch = (): void => {
    refetch();
  };
  
  useFocusEffect(() => {
    refetch()
  })

  return {
    refs: {
      modalReportTrashRef,
    },
    states: {
      isLoading,
      userList,
    },
    actions: {
      handleOpenModalReportTrash,
      handleNavigateToHome,
      handleRefetch,
    },
  };
};
