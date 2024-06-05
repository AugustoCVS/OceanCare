import { View, Text } from "react-native";
import { ContentProps } from "./content.types";

export const Content: React.FC<ContentProps> = ({
  description,
  location,
  participants,
}) => {
  const infos = [
    {
      id: 0,
      title: "Descrição",
      content: description,
    },
    {
      id: 1,
      title: "Local",
      content: location,
    },
    {
      id: 2,
      title: "Participantes",
      content: participants,
    },
  ];

  return (
    <View className="w-full flex flex-col gap-2 text-left">
      {infos.map((info) => (
        <View className="w-full flex flex-col gap-1" key={info.id}>
          <Text className="text-blue-100 text-md font-bold">{info.title}</Text>
          <Text className="text-black text-md flex-1">{info.content}</Text>
        </View>
      ))}
    </View>
  );
};
