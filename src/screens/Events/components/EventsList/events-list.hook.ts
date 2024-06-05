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

export const useEventsList = ({ refetch }: { refetch: () => void }) => {
  const user = useSelector((state: RootState) => state.user);

  const { showToast } = useMessage();

  const userId = user.id;

  const handleSubscribeUser = useMutation({
    mutationKey: ["subscribeUser"],
    mutationFn: async ({ eventId }: { eventId: number }) => {
      await EventsService.subscribeUserOnEvent({
        eventId: eventId,
        userId: userId,
      });
    },
    onError: () => {
      showToast({
        title: SUBSCRIBE_ERROR_MESSAGE,
        error: true,
      });
    },
    onSuccess: () => {
      refetch();
      showToast({
        title: SUBSCRIBE_SUCCESS_MESSAGE,
        error: false,
      });
    },
  });

  const userAlreadySubscribed = ({ users }: { users: UserProps[] }) => {
    return users.some((user) => user.id === userId);
  };

  return {
    actions: {
      handleSubscribeUser,
      userAlreadySubscribed,
    },
  };
};
