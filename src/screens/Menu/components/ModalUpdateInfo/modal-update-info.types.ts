import { RefObject } from "react";
import { Modalize } from "react-native-modalize";

import * as yup from "yup";
import { updateUserInfoSchema } from "./modal-update-info.utils";
import { UserProps } from "@/services/interfaces/user";

export type ModalUpdateInfoProps = {
  modalRef: RefObject<Modalize>;
  userInfo: UserProps;
};

export type formProps = yup.InferType<typeof updateUserInfoSchema>;
