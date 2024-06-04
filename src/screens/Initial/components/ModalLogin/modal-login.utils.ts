import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),

  password: yup
    .string()
    .required("A senha é obrigatória")
});

export const ERROR_MESSAGE = "Erro ao realizar login";
export const SUCCESS_MESSAGE = "Login realizado com sucesso";
