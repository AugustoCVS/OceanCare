import { useMutation } from "@tanstack/react-query";
import { ModalUpdateInfoProps } from "./modal-update-info.types";
import { useMessage } from "src/utils/message";
import { UserService } from "@/services/user";
import { UpdateUserInfoRequest } from "@/services/interfaces/user";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-update-info.utils";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/User/user.slice";

export const useModalUpdateInfo = ({
  modalRef,
  userInfo,
}: ModalUpdateInfoProps) => {
  const { showToast } = useMessage();
  const dispatch = useDispatch();

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["updateUserInfo"],
    mutationFn: async (data: UpdateUserInfoRequest) =>
      await UserService.updateUserInfo({ data, userId: userInfo.id }),
    onSuccess: (res) => {
      dispatch(setUser(res));
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

  const handleUpdateUserInfo = (data: UpdateUserInfoRequest): void => {
    mutate(data);
  }

  return {
    states: {
      isPending,
    },
    actions: {
      handleCloseModal,
      handleUpdateUserInfo,
    },
  };
};
