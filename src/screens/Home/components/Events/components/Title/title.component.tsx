import { Text } from "react-native";

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return <Text className="text-blue-100 font-bold">{title}</Text>;
};
