import { View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export const EventEmpty: React.FC = () => {
  return (
    <View className="w-full flex flex-col items-center justify-center gap-8 mt-8">
      <MaterialIcons name="event" size={120} color="#BFBFBF" />
      <Text className="text-2xl font-bold text-gray-500">
        Nenhum Evento Encontrado
      </Text>
    </View>
  );
};
