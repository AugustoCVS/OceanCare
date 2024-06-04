import { Header } from "./components/Header/header.component";
import { ModalReportTrash } from "@/components/Modais/ModalReportTrash/modal-report-trash.component";
import { useHome } from "./home.hook";
import { ScrollView } from "react-native-gesture-handler";
import { Achievements } from "./components/Achievements/achievements.component";

export const Home: React.FC = () => {
  const { refs, actions } = useHome();

  return (
    <>
      <Header handleOpenModal={actions.handleOpenModalReportTrash} />

      <ModalReportTrash modalRef={refs.modalReportTrashRef} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          padding: 20,
        }}
      >
        <Achievements />
      </ScrollView>
    </>
  );
};
