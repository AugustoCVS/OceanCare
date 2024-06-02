import { RefObject } from "react";
import {Modalize} from 'react-native-modalize';
import * as yup from 'yup';

import { registerSchema } from "./modal-register.utils";

export type ModalRegisterProps = {
    modalRef: RefObject<Modalize>;
}

export type FormFields = {
    name: string;
    placeholder: string;
}

export type useRegisterProps = yup.InferType<typeof registerSchema>