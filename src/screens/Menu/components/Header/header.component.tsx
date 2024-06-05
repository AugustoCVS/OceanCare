import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { HeaderProps } from "./header.types";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Header: React.FC<HeaderProps> = ({ name, handleChangePhoto }) => {
  return (
    <View className="flex items-center mb-6">
      <TouchableOpacity
        className="w-28 h-28 rounded-full bg-gray-600 flex items-center justify-center mb-8"
        onPress={handleChangePhoto}
      >
        <FontAwesome name="camera" size={40} color="white" />
      </TouchableOpacity>
      <View>
        <Text className="text-xl font-bold">{name}</Text>
      </View>
    </View>
  );
};
