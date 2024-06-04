import { Text, View } from "react-native";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Modal } from "@/components/Modais/Gerenic/generic-modal.component";
import { ModalRegisterProps, useRegisterProps } from "./modal-register.types";
import { useModalRegister } from "./modal-register.hook";
import {
  formFields,
  registerSchema,
  secureFormFields,
} from "./modal-register.utils";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "@/components/Input/input.component";
import { SecureInput } from "@/components/SecureInput/secure-input.component";
import { Button } from "@/components/Button/button.component";

export const ModalRegister: React.FC<ModalRegisterProps> = ({ modalRef }) => {
  const { states, actions } = useModalRegister({ modalRef });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<useRegisterProps>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <Modal
      modalizeRef={modalRef}
      title="Registrar"
      handleClose={actions.handleCloseModal}
    >
      <ScrollView
        className="flex flex-col mt-4 w-80"
        style={{ maxHeight: 500 }}
        showsVerticalScrollIndicator={false}
      >
        {formFields.map((field) => {
          return (
            <Controller
              key={field.id}
              control={control}
              name={field.name as keyof useRegisterProps}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder={field.placeholder}
                  onChangeText={onChange}
                  errorMessage={
                    errors[field.name as keyof useRegisterProps]?.message
                  }
                />
              )}
            />
          );
        })}
        {secureFormFields.map((field) => {
          return (
            <Controller
              key={field.id}
              control={control}
              name={field.name as keyof useRegisterProps}
              render={({ field: { onChange } }) => (
                <SecureInput
                  placeholder={field.placeholder}
                  onChangeText={onChange}
                  errorMessage={
                    errors[field.name as keyof useRegisterProps]?.message
                  }
                />
              )}
            />
          );
        })}
        <Text className="text-gray-600 text-xs px-4 mb-4 text-center">
          A senha deve conter pelo menos 8 dígitos, sendo letras maiúsculas e
          minúsculas, números e um caractere especial.
        </Text>
      </ScrollView>
      <View className="w-full pb-6 flex items-center">
        <Button
          isFirstStyle
          text="Registrar"
          onPress={handleSubmit(actions.handleRegister)}
          disabled={states.isPending}
        />
      </View>
    </Modal>
  );
};
