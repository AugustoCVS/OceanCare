import { View, Text } from "react-native";
import { TitleProps } from "./title.types";

export const Title: React.FC<TitleProps> = ({ reportedTrash, title }) => {
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Text className="text-lg font-bold">{title}</Text>
      <Text className="text-sm text-gray-500">
        Lixo reportado: {reportedTrash}
      </Text>
    </View>
  );
};
