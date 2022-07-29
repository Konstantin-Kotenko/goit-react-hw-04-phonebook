import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormContact = styled(Form)`
  border: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  width: 360px;
  padding: ${({ theme }) => theme.space.ml};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Input = styled(Field)`
  margin-top: ${({ theme }) => theme.space.ml};
`;

export const Button = styled.button`
  margin-top: ${({ theme }) => theme.space.ml};
  width: 130px;
  border-radius: 5px;
  border: ${({ theme }) => theme.borders.none};
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;
