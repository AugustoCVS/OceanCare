import { View } from "react-native";
import { Header } from "./components/Header/header.component";
import { useRanking } from "./ranking.hook";
import { ModalReportTrash } from "@/components/Modais/ModalReportTrash/modal-report-trash.component";
import { UserList } from "./components/UserList/user-list.component";

export const Ranking: React.FC = () => {
  const { refs, states, actions } = useRanking();

  return (
    <>
      <View className="w-full h-full flex flex-col items-center">
        <Header
          handleOpenModal={actions.handleOpenModalReportTrash}
          navigateToHome={actions.handleNavigateToHome}
        />

        <UserList
          userList={states.userList}
          isLoading={states.isLoading}
          onRefresh={actions.handleRefetch}
        />
      </View>

      <ModalReportTrash modalRef={refs.modalReportTrashRef} />
    </>
  );
};
