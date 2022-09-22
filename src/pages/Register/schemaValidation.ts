import * as yup from 'yup';
import { ERROR_REQUIRED } from '../../yup';

export const schemaValidation = yup.object({
  nome: yup.string().required(ERROR_REQUIRED),
  email: yup.string().required(ERROR_REQUIRED),
  password: yup.string().required(ERROR_REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});
