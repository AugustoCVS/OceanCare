import { ReportType } from '@/services/interfaces/reports';
import * as yup from 'yup';
import { FormFields } from './modal-report-trash.types';

export const reportTrashSchema = yup.object().shape({
  name: yup.string().required('Obrigatório preencher o nome'),
  type: yup.string<ReportType>().required('Obrigatório preencher o tipo de lixo'),
  description: yup.string().required('Obrigatório preencher a descrição'),
  location: yup.string().required('Obrigatório preencher a localização'),
});

export const ReportedTypeList = [
  { id: 0, value: ReportType.TRASH, label: 'Lixo' },
  { id: 1, value: ReportType.OTHER, label: 'Outro' },
  { id: 2, value: ReportType.BOTTLES, label: 'Garrafa' },
  { id: 3, value: ReportType.OIL, label: 'Óleo' },
  { id: 4, value: ReportType.PACKAGING, label: 'Embalagens' },
  { id: 5, value: ReportType.CHEMICALS, label: 'Produtos Químicos' },
  { id: 6, value: ReportType.CLOTHES, label: 'Roupas' },
]

export const formFields: FormFields[] = [
  {
    id: 0,
    name: 'name',
    placeholder: 'Nome',
  },
  {
    id: 1,
    name: 'description',
    placeholder: 'Descrição',
  },
  {
    id: 2,
    name: 'location',
    placeholder: 'Localização',
  },
]

export const SUCCESS_MESSAGE = 'Reportado com sucesso!';
export const ERROR_MESSAGE = 'Erro ao reportar lixo';