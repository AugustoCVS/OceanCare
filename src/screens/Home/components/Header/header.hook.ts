import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useHeader = () => {
  const user = useSelector((state: RootState) => state.user);

  return {
    states: {
      user,
    },
  };
};
