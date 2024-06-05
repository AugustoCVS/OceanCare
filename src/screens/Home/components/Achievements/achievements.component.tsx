import { useAchievements } from "./achievements.hook";

import { View } from "react-native";
import { Description } from "./components/Description/description.component";
import { AchievementsList } from "@/components/AchievementsList/achievements-list.component";

export const Achievements: React.FC = () => {
  const { states } = useAchievements();

  return (
    <View className="w-full flex flex-col items-center shadow shadow-gray-600 mt-4">
      <Description reportedTrash={states.reportedTrash} />

      <AchievementsList achievements={states.achievementsList} />
    </View>
  );
};
