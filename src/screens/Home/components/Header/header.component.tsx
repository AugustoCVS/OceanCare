import { View } from "react-native";

import Logo from "@/assets/logo.svg";
import { Title } from "./components/Title/title.component";
import { useHeader } from "./header.hook";
import { Button } from "@/components/Button/button.component";
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({ handleOpenModal }) => {
  const { states } = useHeader();

  return (
    <View className="w-full h-40 bg-blue-100 flex flex-row items-center justify-between px-4 pt-8">
      <Logo width={80} height={80} />
      <Title text={states.user.name} />
      <Button
        text="Reportar"
        className="bg-blue-300 w-24 h-12 rounded-lg flex items-center justify-center text-center"
        onPress={handleOpenModal}
      />
    </View>
  );
};
