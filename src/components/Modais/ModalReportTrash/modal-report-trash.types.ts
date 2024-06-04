import * as yup from "yup";
import { Modalize } from "react-native-modalize";
import { reportTrashSchema } from "./modal-report-trash.utils";

export type ModalReportTrashProps = {
  modalRef: React.RefObject<Modalize>;
};

export type FormFields = {
  id: number;
  name: string;
  placeholder: string;
};


export type useReportTrashProps = yup.InferType<typeof reportTrashSchema>;