import { RefObject } from "react";
import { Modalize } from "react-native-modalize";
import * as yup from "yup";
import { loginSchema } from "./modal-login.utils";

export type ModalLoginProps = {
  modalRef: RefObject<Modalize>;
};

export type useLoginProps = yup.InferType<typeof loginSchema>;
