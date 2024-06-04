import { View, Text } from "react-native";

export const Title: React.FC<{ text: string }> = ({ text }) => {
  return <Text className="text-blue-300 text-xl font-bold">{text}</Text>;
};
