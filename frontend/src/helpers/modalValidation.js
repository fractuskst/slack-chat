import * as yup from 'yup';

export default (channels) => {
  const names = channels.map((channel) => channel.name);

  return yup.object().shape({
    name: yup
      .string()
      .min(3, 'Слишком короткое!')
      .max(20, 'Слишком длинное!')
      .required('Обязательное поле')
      .notOneOf(names, 'Название должно быть уникальным'),
  });
};
