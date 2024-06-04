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
      content: description,
    },
    {
      id: 1,
      content: location,
    },
    {
      id: 2,
      content: `Participantes: ${participants}`,
    },
  ];

  return (
    <View className="w-full flex flex-col gap-2 text-left">
      {infos.map((info) => (
        <Text className="text-black text-md flex-1" key={info.id}>
          {info.content}
        </Text>
      ))}
    </View>
  );
};
