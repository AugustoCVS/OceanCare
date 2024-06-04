import { useMutation } from "@tanstack/react-query";
import { ModalRegisterProps } from "./modal-register.types";
import { RegisterRequestProps } from "@/services/interfaces/auth";
import { AuthService } from "@/services/auth";
import { useMessage } from "@/utils/message";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-register.utils";

export const useModalRegister = ({ modalRef }: ModalRegisterProps) => {
  const { showToast } = useMessage();

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  const { isPending, mutate } = useMutation({
    mutationFn: (data: RegisterRequestProps) => AuthService.register({ data }),
    onSuccess: () => {
      handleCloseModal();
      showToast({
        title: SUCCESS_MESSAGE,
      });
    },
    onError: () => {
      showToast({
        title: ERROR_MESSAGE,
        error: true,
      });
    },
  });

  const handleRegister = (data: RegisterRequestProps): void => {
    mutate(data);
  };

  return {
    states: {
      isPending,
    },
    actions: {
      handleCloseModal,
      handleRegister,
    },
  };
};
