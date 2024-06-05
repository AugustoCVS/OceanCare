import { View, Text } from "react-native";
import { Header } from "./components/Header/header.component";
import { useRanking } from "./ranking.hook";
import { ModalReportTrash } from "@/components/Modais/ModalReportTrash/modal-report-trash.component";

export const Ranking: React.FC = () => {
  const { refs, actions } = useRanking();

  return (
    <>
      <View className="w-full h-full flex flex-col items-center">
        <Header
          handleOpenModal={actions.handleOpenModalReportTrash}
          navigateToHome={actions.handleNavigateToHome}
        />
      </View>

      <ModalReportTrash modalRef={refs.modalReportTrashRef} />
    </>
  );
};
