import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

import { SearchBar } from "@/components/SearchBar/search-bar.component";
import { PLACEHOLDER } from "./header.constants";
import { HeaderProps } from "./header.types";

export const Header: React.FC<HeaderProps> = ({ onChangeValue, value }) => {
  return (
    <View className="w-full h-40 bg-blue-100 flex flex-row items-center justify-center pt-8">
      <SearchBar
        icon={<FontAwesome5 name="search" size={20} color="#173042FC" />}
        placeholder={PLACEHOLDER}
        value={value}
        onChangeValue={onChangeValue}
      />
    </View>
  );
};
