import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export const useInitial = () => {
  const modalRegisterRef = useRef<Modalize>(null);
  const modalLoginRef = useRef<Modalize>(null);

  const handleOpenModalRegister = (): void => {
    modalRegisterRef.current?.open();
  };

  const handleOpenModalLogin = (): void => {
    modalLoginRef.current?.open();
  }

  return {
    refs: {
      modalRegisterRef,
      modalLoginRef,
    },
    actions: {
      handleOpenModalRegister,
      handleOpenModalLogin,
    },
  };
};
