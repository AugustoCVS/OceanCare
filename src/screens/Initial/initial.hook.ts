import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export const useInitial = () => {
  const modalRegisterRef = useRef<Modalize>(null);

  const handleOpenModalRegister = (): void => {
    modalRegisterRef.current?.open();
  };

  return {
    refs: {
      modalRegisterRef,
    },
    actions: {
      handleOpenModalRegister,
    },
  };
};
