import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isFirstStyle,
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
    >
      {children}
    </TouchableOpacity>
  );
};
