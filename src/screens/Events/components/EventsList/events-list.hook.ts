import { RootState } from "@/redux/store";
import { EventsService } from "@/services/events";
import { useMessage } from "@/utils/message";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import {
  SUBSCRIBE_ERROR_MESSAGE,
  SUBSCRIBE_SUCCESS_MESSAGE,
} from "./events-list.constants";
import { UserProps } from "@/services/interfaces/user";

export const useEventsList = () => {
  const user = useSelector((state: RootState) => state.user);

  const { showToast } = useMessage();

  const handleSubscribeUser = useMutation({
    mutationKey: ["subscribeUser"],
    mutationFn: async ({ eventId }: { eventId: number }) => {
      await EventsService.subscribeUserOnEvent({
        eventId: eventId,
        userId: user.id,
      });
    },
    onError: () => {
      showToast({
        title: SUBSCRIBE_ERROR_MESSAGE,
        error: true,
      });
    },
    onSuccess: () => {
      showToast({
        title: SUBSCRIBE_SUCCESS_MESSAGE,
        error: false,
      });
    },
  });

  const shouldButtonBeDisabled = (users: UserProps[]) => {
    const hasUser = users.some((user) => user.id === user.id);

    return hasUser;
  };

  return {
    actions: {
      handleSubscribeUser,
      shouldButtonBeDisabled,
    },
  };
};
