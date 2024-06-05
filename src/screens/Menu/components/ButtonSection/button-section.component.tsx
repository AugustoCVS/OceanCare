import { Text, View } from "react-native";
import { ButtonSectionProps } from "./button-section.types";
import { Button } from "@/components/Button/button.component";

export const ButtonSection: React.FC<ButtonSectionProps> = ({
  handleLogout,
  handleUpdateInfo,
}) => {
  return (
    <View className="w-full items-center p-4 flex-col gap-4">
      <Button onPress={handleUpdateInfo} text="Atualizar Informações" />

      <Button onPress={handleLogout} text="Sair" isFirstStyle />
    </View>
  );
};
