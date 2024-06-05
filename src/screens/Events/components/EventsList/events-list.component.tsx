import { FlatList, RefreshControl } from "react-native";
import { EventsListProps } from "./events-list.types";
import { EventsCard } from "@/components/layout/EventsCard/events-card.component";
import { ListEmpty } from "@/components/ListEmtpy/list-empty.component";

export const EventsList: React.FC<EventsListProps> = ({
  events,
  isLoading,
  handleSubscribeUserOnEvent,
  onRefresh,
}) => {
  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          tintColor={"#173042FC"}
        />
      }
      contentContainerStyle={{
        gap: 20,
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
      renderItem={({ item }) => (
        <EventsCard
          name={item.name}
          description={item.description}
          location={item.location}
          startDate={item.startDate}
          endDate={item.endDate}
          participants={item.users.length}
        />
      )}
      ListEmptyComponent={
        <ListEmpty loading={isLoading} isEventEmpty isSecondary />
      }
    />
  );
};
