import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./button.types";
import { Spinner } from "native-base";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isFirstStyle,
  disabled,
  text,
  ...rest
}) => {
  const background = isFirstStyle
    ? "bg-blue-300"
    : "bg-white border border-blue-300";

  return (
    <TouchableOpacity
      {...rest}
      className={
        className
          ? className
          : `${background} w-72 h-16 rounded-lg flex items-center justify-center text-center`
      }
      disabled={disabled}
    >
      {children ? (
        children
      ) : (
        <Text className="text-black text-lg font-bold">
          {disabled ? (
            <Spinner color="#173042FC" size="sm" className="pt-1" />
          ) : (
            text
          )}
        </Text>
      )}
    </TouchableOpacity>
  );
};
