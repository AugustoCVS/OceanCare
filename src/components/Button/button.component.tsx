import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    className={
      className
        ? className
        : "bg-blue-200 w-72 h-16 rounded-lg flex items-center justify-center text-center"
    }
  >
    {children}
  </TouchableOpacity>
);
