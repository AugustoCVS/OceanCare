import { View } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

import Whale from "@/assets/logo.svg";
import { AchievementsType } from "@/services/interfaces/user";

export const AchievementsList: React.FC<{
  achievements: AchievementsType[];
}> = ({ achievements }) => {
  const renderIcons: Record<string, JSX.Element> = {
    FiftyReports: <FontAwesome5 name="fish" size={28} color="#173042FC" />,
    HundredReports: (
      <MaterialCommunityIcons name="dolphin" size={28} color="#173042FC" />
    ),
    TwoHundredReports: (
      <FontAwesome5 name="octopus-deploy" size={28} color="#173042FC" />
    ),
    FiveHundredReports: <AntDesign name="star" size={28} color="#173042FC" />,
    ThousandReports: (
      <MaterialCommunityIcons name="turtle" size={28} color="#173042FC" />
    ),
    TwoThousandReports: (
      <MaterialCommunityIcons name="submarine" size={28} color="#173042FC" />
    ),
    ThreeThousandReports: (
      <MaterialCommunityIcons name="shark" size={28} color="#173042FC" />
    ),
    FiveThousandReports: (
      <MaterialCommunityIcons name="jellyfish" size={28} color="#173042FC" />
    ),
    TenThousandReports: <Whale width={28} height={28} />,
  };

  return (
    <View className="w-full flex flex-row py-4 gap-x-2">
      {achievements.map((achievement, index) => (
        <View key={index}>{renderIcons[achievement]}</View>
      ))}
    </View>
  );
};
