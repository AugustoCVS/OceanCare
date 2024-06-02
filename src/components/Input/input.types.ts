import { KeyboardTypeOptions } from "react-native";

export type InputProps = {
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
};
