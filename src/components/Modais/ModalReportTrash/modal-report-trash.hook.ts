import { useMutation } from "@tanstack/react-query";

import { ModalReportTrashProps } from "./modal-report-trash.types";
import { ReportsService } from "@/services/reports";
import { RequestReportProps } from "@/services/interfaces/reports";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useMessage } from "@/utils/message";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "./modal-report-trash.utils";

export const useModalReportTrash = ({ modalRef }: ModalReportTrashProps) => {
  const user = useSelector((state: RootState) => state.user);

  const { showToast } = useMessage();

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["reportTrash"],
    mutationFn: async (data: RequestReportProps) =>
      await ReportsService.createReport({
        data: {
          name: data.name,
          type: data.type,
          description: data.description,
          location: data.location,
        },
        userId: user.id,
      }),
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

  const handleRegisterReport = (data: RequestReportProps) => {
    mutate(data);
  };

  return {
    states: {
      isPending,
    },
    actions: {
      handleCloseModal,
      handleRegisterReport,
    },
  };
};
