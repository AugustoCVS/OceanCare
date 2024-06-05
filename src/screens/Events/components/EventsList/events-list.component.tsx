import { FlatList, RefreshControl } from "react-native";
import { EventsListProps } from "./events-list.types";
import { EventsCard } from "@/components/layout/EventsCard/events-card.component";
import { ListEmpty } from "@/components/ListEmtpy/list-empty.component";
import { useEventsList } from "./events-list.hook";

export const EventsList: React.FC<EventsListProps> = ({
  events,
  isLoading,
  onRefresh,
}) => {
  const { actions } = useEventsList({
    refetch: onRefresh,
  });

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          tintColor={"#173042FC"}
        />
      }
      contentContainerStyle={{
        alignItems: "center",
        paddingBottom: 16,
        minHeight: "100%",
      }}
      renderItem={({ item }) => (
        <EventsCard
          name={item.name}
          description={item.description}
          location={item.location}
          startDate={item.startDate}
          endDate={item.endDate}
          participants={item.users.length}
          handleSubscribeUser={() => {
            actions.handleSubscribeUser.mutate({ eventId: item.id });
          }}
          userAlreadySubscribed={actions.userAlreadySubscribed({
            users: item.users,
          })}
          isScreen
          loading={actions.handleSubscribeUser.isPending}
        />
      )}
      ListEmptyComponent={
        <ListEmpty loading={isLoading} isEventEmpty isSecondary />
      }
    />
  );
};
