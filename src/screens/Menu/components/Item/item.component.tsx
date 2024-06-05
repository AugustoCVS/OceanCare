import React from "react";

import { View, Text } from "react-native";
import { ItemsProps } from "./item.types";

export const Item: React.FC<ItemsProps> = ({ label, value }) => {
  return (
    <View className="flex flex-row items-center mb-3">
      <Text className="text-lg font-bold">{label}:</Text>
      <Text className="text-lg pl-2">{value}</Text>
    </View>
  );
};
