import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ChatScreen = ({navigation}) => {
  let [message, setMessage] = React.useState('');
  const [messageArray, setMessageArray] = React.useState([]);

  let addChat = (message: object) => {
    database()
      .ref('/messages')
      .push({
        // message to the user
        user: 'User1',
        // time and date the message was sent
        date: '',
        // users can toggle to like a certain message
        like: false,
        // who the message is going to
        message: {
          name: 'User2',
          m: message,
        },
      });
  };
  let messageRef = database().ref('/messages');

  React.useEffect(() => {
    messageRef.on('value', snapshot => {
      let data = snapshot.val();
      setMessageArray(Object.values(data));
    });
  }, []);

  let onSubmitClick = () => {
    addChat(message);
  };
  return (
    <View className="flex flex-col h-full p-2 gap-2 justify-end">
      <View className="flex flex-col-reverse">
        {messageArray.length > 0 ? (
          messageArray.map((mess, index) => {
            return (
              <View key={index}>
                <Text>
                  Date:
                  {mess.name} : {mess.m}
                  Ability to react
                </Text>
              </View>
            );
          })
        ) : (
          <Text>Start a chat!</Text>
          <Text>Block</Text>
        )}
      </View>
      <TextInput
        className="bg-white border-2 border-black h-10"
        onChangeText={setMessage}
        placeholder="Type a message here..."
      />
      <Button title="Submit" onPress={onSubmitClick} />
    </View>
  );
};

export default ChatScreen;
