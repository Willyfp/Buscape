import React from 'react';
import { Text, Chip } from 'react-native-paper';
import { Avatar, Modal, ModalProps } from 'react-native-ui-lib';
import { themeStyledComponents } from '../../../../../../../App';
import {
  CenteredView,
  ScrollViewModal,
  ViewModal,
  ViewTopModal,
} from '../../styles';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { User } from '../../../../../../store/reducers/auth/types';
import { StyledButton, ViewAlignedCenter } from '../../../../../../styles';
import { useTheme } from 'styled-components';
import { createChat } from '../../../../../../utils/chat';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ auth }: RootState) => ({
  myUser: auth.getIn(['user']),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ProfileOtherPeople = ({
  visible,
  myUser,
  onRequestClose,
  user,
}: ModalProps & { user: User } & PropsFromRedux) => {
  const { colors } = useTheme();

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
    >
      <CenteredView>
        <ViewModal style={{ height: '60%' }}>
          <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <ViewTopModal>
              <TouchableOpacity onPress={onRequestClose}>
                <FontAwesome5Icon
                  name="times"
                  size={30}
                  color={themeStyledComponents.colors.text.primary}
                />
              </TouchableOpacity>
            </ViewTopModal>

            <Avatar
              containerStyle={{ marginVertical: 20 }}
              size={140}
              source={{
                uri:
                  user.photo ||
                  'https://th.bing.com/th/id/OIP.o7G8MHM0THDO9Npw9_69cAAAAA?pid=ImgDet&rs=1',
              }}
            />

            <Text style={{ fontSize: 24 }}>
              {user.name + '  '}
              {user.gender && (
                <FontAwesome5Icon
                  name={user.gender === 'Masculino' ? 'mars' : 'venus'}
                  size={20}
                  color={user.gender === 'Masculino' ? 'blue' : 'pink'}
                  style={!user.gender ? { display: 'none' } : {}}
                />
              )}
            </Text>

            <Text>{user.description}</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: 32,
              }}
            >
              {user.myCaracteristics?.map(item => (
                <Chip style={{ margin: 2, height: 40 }} key={item}>
                  {item}
                </Chip>
              ))}
            </View>

            <ViewAlignedCenter
              style={{ padding: 24, flex: 1, justifyContent: 'flex-end' }}
            >
              <StyledButton
                icon="message"
                mode="contained-tonal"
                buttonColor={colors.primary}
                onPress={() => {
                  createChat({ userID: myUser.id, receiverID: user.id as any });
                  onRequestClose();
                }}
              >
                Enviar mensagem
              </StyledButton>
            </ViewAlignedCenter>
          </ScrollView>
        </ViewModal>
      </CenteredView>
    </Modal>
  );
};

export default connector(ProfileOtherPeople);
