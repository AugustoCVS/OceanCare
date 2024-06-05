import { View, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

export const UsersEmpty: React.FC = () => {
  return (
    <View className="w-full flex flex-col items-center justify-center gap-8 mt-20">
      <Feather name="users" size={120} color="#BFBFBF" />
      <Text className="text-2xl font-bold text-gray-500">
        Nenhum Usuário Encontrado
      </Text>
    </View>
  );
};
