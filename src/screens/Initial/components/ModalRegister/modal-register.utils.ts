import * as yup from "yup";
import { FormFields } from "./modal-register.types";

export const registerSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .test("password", "Senha inválida", function (value) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(value);
    }),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("A confirmação de senha é obrigatória"),
});

export const formFields: FormFields[] = [
  {
    id: 0,
    name: "name",
    placeholder: "Nome",
  },
  {
    id: 1,
    name: "email",
    placeholder: "E-mail",
  },
];

export const secureFormFields: FormFields[] = [
  {
    id: 0,
    name: "password",
    placeholder: "Senha",
  },
  {
    id: 1,
    name: "confirm_password",
    placeholder: "Confirmar Senha",
  },
];

export const SUCCESS_MESSAGE = "Cadastro realizado com sucesso!";
export const ERROR_MESSAGE = "Erro ao realizar cadastro!";
