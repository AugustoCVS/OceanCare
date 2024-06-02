import { View, Pressable } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Input } from "../Input/input.component";
import { SecureInputProps } from "./scecure-input.types";

export const SecureInput: React.FC<SecureInputProps> = ({
  placeholder,
  value,
  onChangeText,
  handleShowPassword,
  isSecurePassword,
}) => {
  return (
    <View className="flex items-center justify-center mt-4">
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecurePassword}
      />

      <Pressable
        className="absolute right-4 top-3"
        onPress={handleShowPassword}
      >
        {isSecurePassword ? (
          <Entypo name="eye-with-line" size={24} color="#B3B3B3" />
        ) : (
          <AntDesign name="eyeo" size={24} color="#B3B3B3" />
        )}
      </Pressable>
    </View>
  );
};
