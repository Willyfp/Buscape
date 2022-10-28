import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Divider, List } from 'react-native-paper';
import { Avatar } from 'react-native-ui-lib';
import { useTheme } from 'styled-components';
import { User } from '../../../../store/reducers/auth/types';
import { Alert } from 'react-native';

export const ChatItem = ({
  userID,
  senderID,
  chatID,
}: {
  userID: string;
  senderID: string;
  chatID: string;
}) => {
  const { colors } = useTheme();

  const { navigate } = useNavigation();

  const [user, setUser] = React.useState({} as User);

  useEffect(() => {
    (async () => {
      const subscriber = await firestore()
        .collection('users')
        .doc(userID)
        .get();

      setUser(subscriber.data() as User);
    })();
  }, []);

  const handleDelete = () => {
    Alert.alert('Deletar', 'Deseja deletar essa conversa?', [
      {
        text: 'Sim',
        onPress: async () => {
          await firestore().collection('chats').doc(chatID).delete();
        },
        style: 'destructive',
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <>
      <List.Item
        onLongPress={handleDelete}
        onPress={() =>
          navigate('MessageScreen', { userID: senderID, receiverID: userID })
        }
        title={user?.name}
        titleStyle={{ color: colors.primary, fontWeight: 'bold', fontSize: 24 }}
        style={{ padding: 20 }}
        left={() => (
          <Avatar
            containerStyle={{ marginRight: 20 }}
            size={50}
            source={{
              uri:
                user?.photo ||
                'https://th.bing.com/th/id/OIP.o7G8MHM0THDO9Npw9_69cAAAAA?pid=ImgDet&rs=1',
            }}
          />
        )}
      />
      <Divider />
    </>
  );
};
