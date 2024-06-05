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
  textColor,
  loading,
  ...rest
}) => {
  const background = isFirstStyle
    ? "bg-blue-300"
    : "bg-white border border-blue-300";

  const textButtonColor = textColor ? textColor : "text-black";

  return (
    <TouchableOpacity
      {...rest}
      className={
        className
          ? className
          : `${background} w-72 h-16 rounded-lg flex items-center justify-center text-center`
      }
      disabled={disabled || loading}
    >
      {children ? (
        children
      ) : (
        <Text className={`${textButtonColor} text-lg font-bold`}>
          {loading ? (
            <Spinner color="#173042FC" size="sm" className="pt-1" />
          ) : (
            text
          )}
        </Text>
      )}
    </TouchableOpacity>
  );
};
