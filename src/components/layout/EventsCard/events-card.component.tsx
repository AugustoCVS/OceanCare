import { View } from "react-native";
import { EventsCardProps } from "./events-card.types";
import { Title } from "./components/Title/title.component";
import { Dates } from "./components/Dates/dates.component";
import { Content } from "./components/Content/content.component";
import { Divider } from "./components/Divider/divider.component";

export const EventsCard: React.FC<EventsCardProps> = ({
  name,
  description,
  location,
  startDate,
  endDate,
  participants,
}) => {
  return (
    <View className="w-80 flex flex-col rounded-xl bg-gray-100 border border-gray-300 px-4 py-2 mt-4">
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
