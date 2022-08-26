import styled from 'styled-components/native';

export const ContainerLogin = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 25px;
`;

export const ImageLogin = styled.Image`
  height: 360px;
  width: 360px;
`;
