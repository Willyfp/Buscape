import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import { themeStyledComponents } from '../../../App';

export const StyledMap = styled(MapView)`
  flex: 1;
`;

export const stylesMap = () => ({
  container: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
  },
  textInput: {
    marginVertical: 10,
    elevation: 6,
    color: themeStyledComponents.colors.primary,
  },
  description: {
    color: themeStyledComponents.colors.primary,
  },
});

export const HouseIcon = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 30px;
`;
