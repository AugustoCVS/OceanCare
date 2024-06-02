import { Modal } from "@/components/Modais/Gerenic/generic-modal.component";
import { ModalLoginProps, useLoginProps } from "./modal-login.types";
import { useModalLogin } from "./modal-login.hook";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "./modal-login.utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/Input/input.component";
import { View } from "react-native";
import { SecureInput } from "@/components/SecureInput/secure-input.component";
import { Button } from "@/components/Button/button.component";

export const ModalLogin: React.FC<ModalLoginProps> = ({ modalRef }) => {
  const { states, actions } = useModalLogin({ modalRef });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<useLoginProps>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <Modal
      modalizeRef={modalRef}
      title="Login"
      handleClose={actions.handleCloseModal}
    >
      <View className="flex flex-col mt-4 w-80">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <SecureInput
              placeholder="Senha"
              onChangeText={onChange}
              errorMessage={errors.password?.message}
            />
          )}
        />
      </View>
      <View className="w-full py-6 flex items-center">
        <Button
          isFirstStyle
          text="Confirmar"
          disabled={states.isPending}
          onPress={handleSubmit(actions.handleLogin)}
        />
      </View>
    </Modal>
  );
};
