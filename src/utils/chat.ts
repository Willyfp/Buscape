import { User } from '../store/reducers/auth/types';
import firestore from '@react-native-firebase/firestore';
import { navigate } from '../Routes/RootNavigation';

export const createChat = async ({
  userID,
  receiverID,
}: {
  userID: Pick<User, 'id'>;
  receiverID: Pick<User, 'id'>;
}) => {
  const db = firestore();

  const userChats = await db
    .collection('chats')
    .where('users', 'array-contains', userID)
    .get();

  const chatsData = userChats.docs.find(
    chat => chat.data().users.find(user => user === receiverID)?.length > 0,
  );

  if (!chatsData) {
    db.collection('chats').add({ users: [userID, receiverID] });
    navigate('MessageScreen', { userID, receiverID });
  } else {
    navigate('MessageScreen', { userID, receiverID });
  }
};
