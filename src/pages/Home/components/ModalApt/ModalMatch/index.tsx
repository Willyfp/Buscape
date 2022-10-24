import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Avatar, Modal, ModalProps } from 'react-native-ui-lib';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { themeStyledComponents } from '../../../../../../App';
import { User } from '../../../../../store/reducers/auth/types';
import { StyledButton } from '../../../../../styles';
import { ViewRow } from '../../../../Profile/components/PersonalInfo/styles';
import { ProfileOtherPeople } from '../components/ProfileOtherPeople';
import { CenteredView, ViewFlex, ViewModal, ViewTopModal } from '../styles';

export const ModalMatch = ({
  visible,
  onRequestClose,
  user,
  matchedUser,
}: ModalProps & { user: User; matchedUser: User }) => {
  const [profile, setProfile] = React.useState({
    visible: false,
    user: {} as User,
  });

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
    >
      <CenteredView>
        <ViewModal style={{ height: '45%' }}>
          <ViewTopModal>
            <Text
              style={{
                color: themeStyledComponents.colors.text.primary,
                marginLeft: 8,
                fontSize: 24,
              }}
            >
              Deu Match!
            </Text>

            <TouchableOpacity onPress={onRequestClose}>
              <FontAwesome5Icon
                name="times"
                size={30}
                color={themeStyledComponents.colors.text.primary}
              />
            </TouchableOpacity>
          </ViewTopModal>

          <ViewRow
            style={{
              marginTop: 25,
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            <Avatar
              size={120}
              source={{
                uri:
                  user.photo ||
                  'https://th.bing.com/th/id/OIP.o7G8MHM0THDO9Npw9_69cAAAAA?pid=ImgDet&rs=1',
              }}
            />
            <Avatar
              size={120}
              source={{
                uri:
                  matchedUser.photo ||
                  'https://th.bing.com/th/id/OIP.o7G8MHM0THDO9Npw9_69cAAAAA?pid=ImgDet&rs=1',
              }}
            />
          </ViewRow>

          <Text
            style={{
              textAlign: 'center',
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 14,
            }}
          >
            Seus gostos combinam! Envie uma mensagem e conheça seu parceiro
            ideal.
          </Text>

          <ViewFlex>
            <StyledButton
              style={{ marginTop: 30, fontWeight: 'bold' }}
              mode="outlined"
              icon="message"
            >
              Enviar mensagem
            </StyledButton>
            <StyledButton
              mode="contained"
              icon="account-circle"
              onPress={() => setProfile({ visible: true, user: matchedUser })}
            >
              Veja o perfil
            </StyledButton>
          </ViewFlex>

          <ProfileOtherPeople
            {...profile}
            onRequestClose={() =>
              setProfile({ visible: false, user: {} as User })
            }
          />
        </ViewModal>
      </CenteredView>
    </Modal>
  );
};
