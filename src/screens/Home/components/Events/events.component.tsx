import { View, Text } from "react-native";
import { EventsProps } from "./events.types";
import { Title } from "./components/Title/title.component";
import { Dates } from "./components/Dates/dates.component";
import { Content } from "./components/Content/content.component";
import { Divider } from "./components/Divider/divider.component";

export const Events: React.FC<EventsProps> = ({
  name,
  description,
  location,
  startDate,
  endDate,
  participants,
}) => {
  return (
    <View className="w-full flex flex-col rounded-xl bg-gray-100 border border-gray-300 px-4 py-2 mt-4">
      <Title title={name} />
      <Dates initialDate={startDate} finalDate={endDate} />
      <Divider />
      <Content
        description={description}
        location={location}
        participants={participants}
      />
    </View>
  );
};
