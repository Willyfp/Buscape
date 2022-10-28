import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Appbar, List } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { themeStyledComponents } from '../../../App';
import firestore from '@react-native-firebase/firestore';
import { ChatItem } from './components/ChatItem';

const mapStateToProps = ({ auth }: RootState) => ({
  user: auth.getIn(['user']),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Chat = ({ user }: PropsFromRedux) => {
  const [chats, setChats] = React.useState([]);

  const db = firestore();

  useEffect(() => {
    const subscriber = db
      .collection('chats')
      .where('users', 'array-contains', user.id)
      .onSnapshot(querySnapshot => {
        const chats: any = [];

        querySnapshot.forEach(documentSnapshot => {
          chats.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setChats(chats);
      });

    return () => subscriber();
  }, []);

  return (
    <>
      <Appbar.Header
        mode="center-aligned"
        style={{ backgroundColor: 'transparent', marginBottom: 20 }}
      >
        <Appbar.Content
          title="Mensagens"
          titleStyle={{
            color: themeStyledComponents.colors.primary,
            fontSize: 28,
            fontWeight: 'bold',
          }}
        />
      </Appbar.Header>

      <ScrollView>
        <List.Section style={{ width: '100%' }}>
          {chats.map(chat => (
            <ChatItem
              chatID={chat.key as string}
              key={chat.key}
              userID={chat.users.find(item => item !== user.id)}
              senderID={user.id}
            />
          ))}
        </List.Section>
      </ScrollView>
    </>
  );
};

export default connector(Chat);
