import { Carousel } from 'react-native-ui-lib';
import styled from 'styled-components/native';

export const ViewModal = styled.View`
  width: 90%;
  height: 90%;
  padding: 25px;
  align-items: center;
  elevation: 6;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const BacgroundView = styled.View`
  flex: 1;
`;

export const CenteredView = styled.View`
  background-color: #00000070;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewTopModal = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewFlex = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
