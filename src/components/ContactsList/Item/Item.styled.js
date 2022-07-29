import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.ml};
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: ${({ theme }) => theme.space.m};
`;

export const Button = styled.button`
  border: ${({ theme }) => theme.radii.none};
  border-radius: ${({ theme }) => theme.radii.none};
  cursor: pointer;
`;
