import { Text } from "react-native";

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return <Text className="text-blue-100 text-lg font-bold">{title}</Text>;
};
