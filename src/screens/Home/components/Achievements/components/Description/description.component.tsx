import { View, Text } from "react-native";
import { ProgressBar } from "react-native-paper";

export const Description: React.FC<{ reportedTrash: number }> = ({
  reportedTrash,
}) => {
  return (
    <View className="w-full flex flex-col">
      <Text className="w-full text-black text-lg font-bold text-center">
        Lixo Reportado
      </Text>
      <ProgressBar
        progress={reportedTrash}
        color="#D2F6FF"
        className="rounded-md mt-2"
      />
    </View>
  );
};
