import { View, Pressable } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Input } from "../Input/input.component";
import { SecureInputProps } from "./scecure-input.types";
import { useState } from "react";

export const SecureInput: React.FC<SecureInputProps> = ({
  placeholder,
  onChangeText,
  errorMessage,
}) => {
  const [isSecurePassword, setIsSecurePassword] = useState(true);

  return (
    <View className="flex items-center justify-center">
      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={isSecurePassword}
        errorMessage={errorMessage}
      />

      <Pressable
        className="absolute right-4 top-3"
        onPress={() => setIsSecurePassword(!isSecurePassword)}
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
