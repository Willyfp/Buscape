import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Appbar, IconButton, Text, TextInput } from 'react-native-paper';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { Avatar, View } from 'react-native-ui-lib';
import { User } from '../../../../store/reducers/auth/types';
import ProfileOtherPeople from '../../../Home/components/ModalApt/components/ProfileOtherPeople';
import { ViewFlex } from '../../../Home/components/ModalApt/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { StyledTextInput, ViewRowBetween } from '../../../../styles';
import { useForm, Controller } from 'react-hook-form';

const Message = ({ route }) => {
  const { navigate } = useNavigation();

  const { control, setValue, handleSubmit } = useForm();

  const { colors } = useTheme();

  const { receiverID, userID } = route.params;

  const [profile, setProfile] = React.useState({
    visible: false,
    user: {} as User,
  });

  const [docRef, setDocRef] =
    React.useState<
      FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>
    >();
  const [receiver, setReceiver] = React.useState({} as User);

  const [loading, setLoading] = React.useState(true);

  const [messages, setMessages] = React.useState([]);

  const refBody = useRef(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const subscriber = await firestore()
        .collection('users')
        .doc(receiverID)
        .get();

      setReceiver(subscriber.data() as User);
      setLoading(false);
    })();
  }, [receiverID]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const docRef = await firestore()
          .collection('chats')
          .where('users', 'array-contains', userID)
          .get();

        const doc = docRef.docs.find(doc =>
          doc.data().users.includes(receiverID),
        );

        setDocRef(doc?.ref);

        const subscriber = doc?.ref
          .collection('messages')
          .orderBy('timestamp', 'asc')
          .onSnapshot(querySnapshot => {
            const messages: any = [];

            querySnapshot.forEach(documentSnapshot => {
              messages.push({
                ...documentSnapshot.data(),
                key: documentSnapshot.id,
              });
            });

            setMessages(messages);
          });

        return () => subscriber?.();
      })();
    }, []),
  );

  useFocusEffect(
    React.useCallback(() => {
      refBody.current?.scrollToEnd({ animated: true });
    }, [messages]),
  );

  const onSubmit = async ({ message }) => {
    await docRef?.collection('messages').add({
      message,
      user: userID,
      timestamp: firestore.FieldValue.serverTimestamp(),
    });

    setValue('message', '');
  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: colors.primary }}>
        <Appbar.BackAction
          onPress={() => {
            navigate('Chat');
          }}
          iconColor="white"
        />

        <Avatar
          containerStyle={{ marginRight: 20 }}
          size={35}
          source={{
            uri:
              receiver?.photo && !loading
                ? receiver?.photo
                : 'https://th.bing.com/th/id/OIP.o7G8MHM0THDO9Npw9_69cAAAAA?pid=ImgDet&rs=1',
          }}
        />

        <Appbar.Content
          titleStyle={{ fontWeight: 'bold', fontSize: 24, color: '#fff' }}
          title={loading ? '' : receiver?.name?.split(' ')[0]}
        />

        <Appbar.Action
          iconColor="#fff"
          icon="account"
          onPress={() => setProfile({ visible: true, user: receiver })}
        />
      </Appbar.Header>

      <ScrollView ref={refBody} contentContainerStyle={{ padding: 24 }}>
        {messages.map(message => {
          const date = new Date(message?.timestamp.seconds * 1000);

          const dateFormated = `${
            date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
          }/${
            date.getMonth() + 1 < 10
              ? '0' + date.getMonth() + 1
              : date.getMonth() + 1
          }/${date.getFullYear()}  ${
            date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
          }:${
            date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
          }`;

          return (
            <View
              style={{
                width: '100%',
                alignItems: message.user === userID ? 'flex-end' : 'flex-start',
              }}
            >
              <View
                style={{
                  padding: 12,
                  backgroundColor:
                    message.user === userID ? '#61A2DA95' : colors.border,
                  marginBottom: 12,
                  borderRadius: 12,
                  maxWidth: '60%',
                }}
                key={message.key}
              >
                <Text style={{ fontSize: 16 }}>{message.message}</Text>
                <Text style={{ fontSize: 12, color: '#00000065' }}>
                  {dateFormated}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <ViewRowBetween
        style={{
          marginBottom: 16,
          justifyContent: 'space-around',
          paddingHorizontal: 16,
        }}
      >
        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, value } }) => (
            <StyledTextInput
              onChangeText={onChange}
              value={value}
              style={{ backgroundColor: '#61A2DA30' }}
              right={
                <TextInput.Icon
                  icon="send"
                  disabled={!value}
                  onPress={handleSubmit(onSubmit)}
                />
              }
              placeholder="Envie uma mensagem"
            />
          )}
        />
      </ViewRowBetween>

      <ProfileOtherPeople
        {...profile}
        onRequestClose={() => setProfile({ visible: false, user: {} as User })}
      />
    </>
  );
};

export default Message;
