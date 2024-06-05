import { TabTypes } from "@/routes/tab.routes";
import { useNavigation } from "@react-navigation/native";
import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export const useRanking = () => {
  const navigation = useNavigation<TabTypes>();

  const modalReportTrashRef = useRef<Modalize>(null);

  const handleOpenModalReportTrash = (): void => {
    modalReportTrashRef.current?.open();
  }

  const handleNavigateToHome = (): void => {
    navigation.navigate("Home");
  }

  return {
    refs: {
      modalReportTrashRef,
    },
    actions: {
      handleOpenModalReportTrash,
      handleNavigateToHome,
    }
  }
}