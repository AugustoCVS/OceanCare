import React from "react";
import { Pressable, View, Text } from "react-native";
import { Center } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { GenericModalHeaderProps } from "./header.types";

export const GenericModalHeader: React.FC<GenericModalHeaderProps> = ({
  title,
  onClose,
}) => {
  return (
    <Center
      h="60px"
      borderTopLeftRadius="lg"
      borderTopRightRadius="lg"
      bg="bg-white"
    >
      {title && (
        <View className="flex items-center justify-center text-center text-lg">
          <Text className="text-3xl font-bold text-blue-100">{title}</Text>
        </View>
      )}

      <Pressable onPress={onClose} className="absolute right-4 top-4">
        <AntDesign name="close" size={26} color="#173042FC" />
      </Pressable>
    </Center>
  );
};
