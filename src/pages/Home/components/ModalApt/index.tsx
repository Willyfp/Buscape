import React from 'react';
import { ModalProps } from 'react-native';
import { Modal } from 'react-native-ui-lib';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'styled-components';
import { themeStyledComponents } from '../../../../../App';
import { StyledButton } from '../../../../styles';
import { APType } from '../../../../utils/fakeApts';
import { openNavigation } from '../../../../utils/location';
import AboutApt from './components/AboutApt';
import ListImages from './components/ListImages';
import { CenteredView, CloseModal, ViewModal, ViewTopModal } from './styles';

const ModalApt = ({
  onRequestClose,
  visible,
  apart,
}: ModalProps & { apart: APType }) => {
  const { colors } = useTheme();

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
    >
      <CenteredView>
        <ViewModal>
          <ViewTopModal>
            <CloseModal onPress={onRequestClose}>
              <FontAwesome5Icon
                name="times"
                size={30}
                color={themeStyledComponents.colors.text.primary}
              />
            </CloseModal>
          </ViewTopModal>

          <ListImages images={apart.images} />

          <AboutApt apartamento={apart} />

          <StyledButton
            style={{ marginTop: 30 }}
            mode="outlined"
            icon="compass"
            onPress={() =>
              openNavigation(apart.coords.latitude, apart.coords.longitude)
            }
          >
            Ir agora
          </StyledButton>
        </ViewModal>
      </CenteredView>
    </Modal>
  );
};

export default ModalApt;
