import { useToast } from "native-base";

export const useMessage = () => {
  const toast = useToast();

  const showToast = ({title, error}: {title: string, error?: boolean }): void => {
    toast.show({
      title: title,
      duration: 3000,
      bgColor: error ? "red.500" : "green.500",
      placement: "top",
    });
  };

  return {
    showToast,
  }
}