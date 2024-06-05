import { ButtonSectionsProps } from "./button-section.types";
import { Button } from "@/components/Button/button.component";

export const ButtonSection: React.FC<ButtonSectionsProps> = ({
  handleUpdateUserInfo,
  loading,
}) => {
  return (
    <Button
      className="bg-green-100 w-72 h-12 rounded-lg flex items-center justify-center text-center"
      onPress={handleUpdateUserInfo}
      loading={loading}
      text="Atualizar"
    />
  );
};
