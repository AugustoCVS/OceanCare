import { UserProps } from "@/services/interfaces/user";
import { Title } from "./components/Title/title.component";
import { Text, View } from "react-native";
import { Divider } from "./components/Divider/divider.component";
import { AchievementsList } from "@/components/AchievementsList/achievements-list.component";

export const UserCard: React.FC<UserProps> = ({
  achievements,
  id,
  name,
  reportedTrash,
}) => {
  return (
    <View
      className="w-full flex flex-col rounded-xl bg-gray-100 shadow shadow-gray-600 px-4 py-2 mt-4"
      key={id}
    >
      <Title title={name} reportedTrash={reportedTrash} />
      <Divider />
      <AchievementsList achievements={achievements} />
    </View>
  );
};
