import { Pressable, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { CTAProps } from "./cta.types";

export const CTA: React.FC<CTAProps> = ({
  description,
  icon,
  onPress,
  title,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-full flex flex-row items-center justify-between rounded-xl bg-gray-100 border border-gray-300 px-4 py-2 mt-4"
    >
      <View className="flex flex-row items-center gap-x-4">
        {icon}
        <View className="flex flex-col">
          <Text className="font-bold text-blue-100 text-md">{title}</Text>
          <Text className="text-sm">{description}</Text>
        </View>
      </View>

      <AntDesign name="rightcircleo" size={16} color="#173042FC" />
    </Pressable>
  );
};
