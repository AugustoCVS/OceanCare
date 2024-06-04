import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useAchievements = () => {
  const user = useSelector((state: RootState) => state.user);

  const achievementsList = user.achievements;
  const reportedTrash = user.reportedTrash;

  return {
    states: {
      achievementsList,
      reportedTrash,
    },
  };
};
