import { Octicons, FontAwesome6 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import { Header } from "./components/Header/header.component";
import { ModalReportTrash } from "@/components/Modais/ModalReportTrash/modal-report-trash.component";
import { useHome } from "./home.hook";
import { Achievements } from "./components/Achievements/achievements.component";
import { CTA } from "@/components/CTA/cta.component";
import { CTAList } from "./home.constants";
import { View } from "react-native";

export const Home: React.FC = () => {
  const { refs, actions } = useHome();

  const renderCtaIcons: Record<string, JSX.Element> = {
    cleaning: <Octicons name="report" size={28} color="#173042FC" />,
    ranking: <FontAwesome6 name="ranking-star" size={28} color="#173042FC" />,
  };

  const renderActions: Record<string, () => void> = {
    reportTrash: actions.handleOpenModalReportTrash,
    ranking: () => {},
  };

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

        <View className="flex flex-col">
          {CTAList.map((cta) => (
            <CTA
              key={cta.id}
              description={cta.description}
              icon={renderCtaIcons[cta.icon]}
              onPress={renderActions[cta.action]}
              title={cta.title}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
