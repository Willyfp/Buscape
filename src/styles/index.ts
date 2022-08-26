import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const StyledButton = styled(Button)<typeof Button>`
  width: 100%;
  border-radius: 5px;
  margin-top: 5px;
`;

export const StyledTextInput = styled(TextInput)`
  margin-top: 20px;
  width: 100%;
`;

export const ViewAlignedCenter = styled.View`
  width: 100%;
  align-items: center;
`;

export const ViewRowBetween = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
