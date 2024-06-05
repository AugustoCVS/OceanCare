import { View } from "react-native";
import { Header } from "./components/Header/header.component";
import { useEvents } from "./events.hook";
import { EventsList } from "./components/EventsList/events-list.component";

export const Events: React.FC = () => {
  const { states, actions } = useEvents();

  return (
    <>
      <View className="w-full h-full flex flex-col items-center">
        <Header
          onChangeValue={actions.handleSearchEvent}
          value={states.searchEvent}
        />

        <EventsList
          events={states.eventsList}
          isLoading={states.isLoading}
          onRefresh={actions.handleRefetch}
        />
      </View>
    </>
  );
};
