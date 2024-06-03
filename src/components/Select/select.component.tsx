import React from "react";
import { FormControl, Select as NativeBaseSelect } from "native-base";
import { SelectProps } from "./select.types";

export const SelectComponent: React.FC<SelectProps> = ({
  placeholder,
  selectedValue,
  onChangeValue,
  isInvalid,
  errorMessage,
  children,
}) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseSelect
        // @ts-ignore-next-line
        optimized={false}
        placeholder={placeholder}
        selectedValue={selectedValue}
        onValueChange={onChangeValue}
        bg="gray.100"
        h={12}
        w={80}
        isFocusVisible={true}
        borderWidth={1}
        borderColor={"#173042FC"}
        borderRadius={10}
      >
        {children}
      </NativeBaseSelect>
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
};
