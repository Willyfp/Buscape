import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Divider, List, Text } from 'react-native-paper';
import { Avatar, Modal, ModalProps } from 'react-native-ui-lib';
import { themeStyledComponents } from '../../../../../../../App';
import { CenteredView, ViewModal, ViewTopModal } from '../../styles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { User } from '../../../../../../store/reducers/auth/types';

export const LikesList = ({
  visible,
  onRequestClose,
  likes,
}: ModalProps & { likes: User[] }) => {
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
            <Text
              style={{
                color: themeStyledComponents.colors.text.primary,
                marginLeft: 8,
                fontSize: 24,
              }}
            >
              Curtidas
            </Text>

            <TouchableOpacity onPress={onRequestClose}>
              <FontAwesome5Icon
                name="times"
                size={30}
                color={themeStyledComponents.colors.text.primary}
              />
            </TouchableOpacity>
          </ViewTopModal>
          <List.Subheader
            style={{
              color: themeStyledComponents.colors.text.primary,
              fontWeight: 'bold',
              fontSize: 24,
              display: 'none',
            }}
          >
            curtidas
          </List.Subheader>
          <List.Section style={{ width: '100%' }}>
            {likes.map(item => (
              <>
                <List.Item
                  title={likes[0]?.name}
                  titleStyle={{
                    color: themeStyledComponents.colors.text.primary,
                  }}
                  left={() => (
                    <Avatar
                      size={50}
                      source={{
                        uri:
                          likes[0]?.photo ||
                          'https://th.bing.com/th/id/OIP.o7G8MHM0THDO9Npw9_69cAAAAA?pid=ImgDet&rs=1',
                      }}
                    />
                  )}
                />
                <Divider />
              </>
            ))}
          </List.Section>
        </ViewModal>
      </CenteredView>
    </Modal>
  );
};
