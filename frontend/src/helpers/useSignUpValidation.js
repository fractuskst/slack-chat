import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const useSignUpValidation = () => {
  const { t } = useTranslation();
  return yup.object().shape({
    username: yup
      .string()
      .min(3, t('forms.errors.login'))
      .max(20, t('forms.errors.login'))
      .required(t('modals.errors.required')),

    password: yup.string().min(6, t('forms.errors.password')).required(t('forms.errors.required')),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], t('forms.errors.passwordConfirm'))
      .required(t('forms.errors.required')),
  });
};

export default useSignUpValidation;
