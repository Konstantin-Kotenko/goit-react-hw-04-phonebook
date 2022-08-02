import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormContact,
  Label,
  Input,
  Button,
  ErrorText,
} from './ContactForm.styled';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Enter name')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Enter number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormContact>
        <Label>
          Name
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContact>
    </Formik>
  );
};
