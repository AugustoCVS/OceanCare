import { View, Text } from "react-native";

import { Button } from "@/components/Button/button.component";
import Logo from "src/assets/logo-initial.svg";
import { useInitial } from "./initial.hook";
import { ModalRegister } from "./components/ModalRegister/modal-register.component";
import { ModalLogin } from "./components/ModalLogin/modal-login.component";

export const Initial: React.FC = () => {
  const { actions, refs } = useInitial();

  return (
    <>
      <View className="bg-blue-100 flex flex-col w-full h-full items-center justify-between p-20">
        <View className="pt-20">
          <Logo />
        </View>

        <View className="flex flex-col gap-4">
          <Button
            isFirstStyle
            onPress={actions.handleOpenModalLogin}
            text="Login"
          />

          <Button onPress={actions.handleOpenModalRegister} text="Registrar" />
        </View>
      </View>

      <ModalRegister modalRef={refs.modalRegisterRef} />
      <ModalLogin modalRef={refs.modalLoginRef} />
    </>
  );
};
