import * as yup from 'yup';
import { ERROR_REQUIRED } from '../../yup';

export const schemaValidation = yup.object({
  email: yup.string().required(ERROR_REQUIRED),
  password: yup.string().required(ERROR_REQUIRED),
});
