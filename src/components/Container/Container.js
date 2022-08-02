import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto 0;
  align-items: center;
  width: 380px;
  border-radius: ${({ theme }) => theme.radii.normal};
`;
