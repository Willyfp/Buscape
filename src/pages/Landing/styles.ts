import styled from 'styled-components/native';

export const ContainerLanding = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 25px;
`;

export const Logo = styled.Image`
  margin-top: 20px;
  height: 150px;
  width: 150px;
`;

export const ImageLanding = styled.Image`
  margin-top: 20px;
  height: 360px;
  width: 360px;
`;
