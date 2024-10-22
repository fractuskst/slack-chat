import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const useModalValidation = (channels) => {
  const { t } = useTranslation();
  const names = channels.map((channel) => channel.name);

  return yup.object().shape({
    name: yup
      .string()
      .min(3, t('modals.errors.nameLength'))
      .max(20, t('modals.errors.nameLength'))
      .required(t('modals.errors.required'))
      .notOneOf(names, t('modals.errors.unique')),
  });
};

export default useModalValidation;
