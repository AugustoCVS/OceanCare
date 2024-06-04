import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export const useHome = () => {
  const modalReportTrashRef = useRef<Modalize>(null);

  const handleOpenModalReportTrash = (): void => {
    modalReportTrashRef.current?.open();
  };

  return {
    refs: {
      modalReportTrashRef,
    },
    actions: {
      handleOpenModalReportTrash,
    },
  };
}