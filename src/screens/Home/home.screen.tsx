import { Octicons, FontAwesome6 } from "@expo/vector-icons";
import { FlatList, View, ScrollView, Text, RefreshControl } from "react-native";

import { Header } from "./components/Header/header.component";
import { ModalReportTrash } from "@/components/Modais/ModalReportTrash/modal-report-trash.component";
import { useHome } from "./home.hook";
import { Achievements } from "./components/Achievements/achievements.component";
import { CTA } from "@/components/CTA/cta.component";
import { CTAList } from "./home.constants";

import { Events } from "./components/Events/events.component";
import { ListEmpty } from "@/components/ListEmtpy/list-empty.component";

export const Home: React.FC = () => {
  const { refs, states, actions } = useHome();

  const renderCtaIcons: Record<string, JSX.Element> = {
    cleaning: <Octicons name="report" size={28} color="#173042FC" />,
    ranking: <FontAwesome6 name="ranking-star" size={28} color="#173042FC" />,
    events: <FontAwesome6 name="calendar" size={28} color="#173042FC" />,
  };

  const renderActions: Record<string, () => void> = {
    reportTrash: actions.handleOpenModalReportTrash,
    ranking: () => {},
    events: () => {},
  };

  return (
    <>
      <Header handleOpenModal={actions.handleOpenModalReportTrash} />

      <ModalReportTrash modalRef={refs.modalReportTrashRef} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 20,
        }}
        refreshControl={
          <RefreshControl
            refreshing={states.isLoading}
            onRefresh={actions.handleRefetchEvents}
            tintColor={"#173042FC"}
          />
        }
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

        <View className="flex flex-col gap-1 mt-6">
          <Text className="mb-[-10px] text-black-100 font-bold">
            Eventos que está participando
          </Text>
          <FlatList
            data={states.eventsList}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 20,
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            renderItem={({ item }) => (
              <Events
                name={item.name}
                description={item.description}
                location={item.location}
                startDate={item.startDate}
                endDate={item.endDate}
                participants={item.users.length}
              />
            )}
            ListEmptyComponent={
              <ListEmpty loading={states.isLoading} isEventEmpty isSecondary />
            }
          />
        </View>
      </ScrollView>
    </>
  );
};
