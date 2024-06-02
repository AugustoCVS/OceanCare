import React from "react";
import { Modalize } from "react-native-modalize";
import { Center } from "native-base";

import { Portal } from "react-native-portalize";
import { GenericModalProps } from "./generic-modal.types";
import { GenericModalHeader } from "./components/Header/header.component";

export const Modal: React.FC<GenericModalProps> = ({
  modalizeRef,
  title,
  children,
  handleClose,
  HeaderComponent,
  ...props
}) => {
  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        adjustToContentHeight
        childrenStyle={{
          paddingBottom: 20,
          position: "relative",
        }}
        HeaderComponent={
          HeaderComponent ? (
            HeaderComponent
          ) : (
            <GenericModalHeader title={title} onClose={handleClose} />
          )
        }
        {...props}
      >
        <Center>{children}</Center>
      </Modalize>
    </Portal>
  );
};
