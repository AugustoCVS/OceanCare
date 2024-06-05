import { View } from "react-native";
import { EventsCardProps } from "./events-card.types";
import { Title } from "./components/Title/title.component";
import { Dates } from "./components/Dates/dates.component";
import { Content } from "./components/Content/content.component";
import { Divider } from "./components/Divider/divider.component";
import { Button } from "@/components/Button/button.component";

export const EventsCard: React.FC<EventsCardProps> = ({
  name,
  description,
  location,
  startDate,
  endDate,
  participants,
  userAlreadySubscribed,
  isScreen,
  loading,
  handleSubscribeUser,
}) => {
  const renderButton = () => {
    if (!isScreen) return null;

    if (userAlreadySubscribed) {
      return (
        <Button
          text="Inscrito"
          className="bg-gray-600 w-72 p-2 rounded-lg flex items-center justify-center text-center"
          textColor="text-white"
          disabled
        />
      );
    }

    return (
      <Button
        text="Se inscrever"
        onPress={handleSubscribeUser}
        className="bg-blue-100 w-72 p-2 rounded-lg flex items-center justify-center text-center"
        textColor="text-white"
        loading={loading}
      />
    );
  };

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

      {renderButton()}
    </View>
  );
};
