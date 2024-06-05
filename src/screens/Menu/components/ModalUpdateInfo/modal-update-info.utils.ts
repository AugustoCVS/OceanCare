import * as yup from "yup";

export const updateUserInfoSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Digite um e-mail válido"),
});

export const formFields = [
  {
    id: 0,
    name: "name",
    label: "Nome",
    placeholder: "Nome",
  },
  {
    id: 1,
    name: "email",
    label: "E-mail",
    placeholder: "E-mail",
  },
];

export const SUCCESS_MESSAGE = "Informações atualizadas com sucesso!";
export const ERROR_MESSAGE = "Erro ao atualizar informações!";
