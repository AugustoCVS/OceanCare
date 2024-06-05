import { Controller, useForm } from "react-hook-form";
import { Modal } from "../Gerenic/generic-modal.component";
import { useModalReportTrash } from "./modal-report-trash.hook";
import {
  ModalReportTrashProps,
  useReportTrashProps,
} from "./modal-report-trash.types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ReportedTypeList,
  formFields,
  reportTrashSchema,
} from "./modal-report-trash.utils";
import { View } from "react-native";
import { Input } from "@/components/Input/input.component";
import { SelectComponent } from "@/components/Select/select.component";
import { Select } from "native-base";
import { Button } from "@/components/Button/button.component";

export const ModalReportTrash: React.FC<ModalReportTrashProps> = ({
  modalRef,
}) => {
  const { states, actions } = useModalReportTrash({ modalRef });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<useReportTrashProps>({
    resolver: yupResolver(reportTrashSchema),
  });

  const renderFormFields = () => {
    return (
      <View className="flex flex-col">
        {formFields.map((field) => {
          return (
            <Controller
              key={field.id}
              control={control}
              name={field.name as keyof useReportTrashProps}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder={field.placeholder}
                  onChangeText={onChange}
                  errorMessage={
                    errors[field.name as keyof useReportTrashProps]?.message
                  }
                />
              )}
            />
          );
        })}
      </View>
    );
  };

  const renderSelectField = () => {
    return (
      <View className="w-full px-9">
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, value } }) => (
            <SelectComponent
              placeholder="Selecione o tipo de lixo"
              errorMessage={errors.type?.message}
              selectedValue={value}
              onChangeValue={(itemValue) => onChange(itemValue)}
            >
              {ReportedTypeList.map((item) => (
                <Select.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </SelectComponent>
          )}
        />
      </View>
    );
  };

  return (
    <Modal
      modalizeRef={modalRef}
      handleClose={actions.handleCloseModal}
      title="Reportar"
    >
      {renderFormFields()}
      {renderSelectField()}
      <View className="w-full pb-6 flex items-center">
        <Button
          isFirstStyle
          text="Registrar"
          onPress={handleSubmit(actions.handleRegisterReport)}
          loading={states.isPending}
        />
      </View>
    </Modal>
  );
};
