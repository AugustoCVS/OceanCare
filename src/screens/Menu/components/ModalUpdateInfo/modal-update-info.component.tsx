import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { ModalUpdateInfoProps, formProps } from "./modal-update-info.types";
import { useModalUpdateInfo } from "./modal-update-info.hook";
import { formFields, updateUserInfoSchema } from "./modal-update-info.utils";
import { ButtonSection } from "./components/ButtonSection/buttin-section.component";
import { Input } from "@/components/Input/input.component";
import { Modal } from "@/components/Modais/Gerenic/generic-modal.component";

export const ModalUpdateInfo: React.FC<ModalUpdateInfoProps> = ({
  modalRef,
  userInfo,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: yupResolver(updateUserInfoSchema),
    values: {
      name: userInfo?.name,
      email: userInfo?.email,
    },
  });

  const { states, actions } = useModalUpdateInfo({ modalRef, userInfo });

  const renderInputs = () => {
    return (
      <View className="w-full flex items-center justify-center">
        {formFields.map((field) => {
          return (
            <Controller
              key={field.id}
              control={control}
              name={field.name as keyof formProps}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder={field.placeholder}
                  onChangeText={onChange}
                  errorMessage={errors[field.name as keyof formProps]?.message}
                  value={control._formValues[field.name]}
                />
              )}
            />
          );
        })}
      </View>
    );
  };

  return (
    <Modal
      title="Atualizar Dados"
      modalizeRef={modalRef}
      handleClose={actions.handleCloseModal}
    >
      <View className=" items-center py-4">
        {renderInputs()}
        <ButtonSection
          handleUpdateUserInfo={handleSubmit(actions.handleUpdateUserInfo)}
          loading={states.isPending}
        />
      </View>
    </Modal>
  );
};
