import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Input = styled.input`
  width: 200px;
  margin-top: ${({ theme }) => theme.space.ml};
`;
