import { View, Text } from "react-native";

import { Button } from "@/components/Button/button.component";
import Logo from "src/assets/logo-initial.svg";

export const Initial: React.FC = () => {
  return (
    <View className="bg-blue-100 flex flex-col w-full h-full items-center justify-between p-20">
      <View className="pt-20">
        <Logo />
      </View>

      <View className="flex flex-col gap-4">
        <Button isFirstStyle>
          <Text className="text-black text-lg font-bold">Login</Text>
        </Button>

        <Button>
          <Text className="text-black text-lg font-bold">Registrar</Text>
        </Button>
      </View>
    </View>
  );
};
