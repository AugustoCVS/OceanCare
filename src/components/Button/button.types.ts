import { TouchableOpacityProps } from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
  isFirstStyle?: boolean;
  disabled?: boolean;
  text?: string;
};