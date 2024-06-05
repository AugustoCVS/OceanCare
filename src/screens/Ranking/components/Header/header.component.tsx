import { Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import { HeaderProps } from "./header.types";
import { Button } from "@/components/Button/button.component";

export const Header: React.FC<HeaderProps> = ({
  navigateToHome,
  handleOpenModal,
}) => {
  return (
    <View className="w-full h-40 bg-blue-100 flex flex-row items-center justify-between px-4 pt-8">
      <FontAwesome6
        name="ranking-star"
        size={40}
        color="#D2F6FF"
        onPress={navigateToHome}
      />
      <Text className="text-blue-300 text-xl font-bold">Ranking</Text>
      <Button
        text="Reportar"
        className="bg-blue-300 w-24 h-10 rounded-lg flex items-center justify-center text-center"
        onPress={handleOpenModal}
      />
    </View>
  );
};
