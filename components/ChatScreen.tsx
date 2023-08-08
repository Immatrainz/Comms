import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';

const ChatScreen = ({navigation}) => {
  let [message, setMessage] = React.useState('');
  const [messageArray, setMessageArray] = React.useState([]);

  let addChat = (message: object) => {
    database().ref('/messages').push({
      name: 'User',
      m: message,
    });
  };
  let messageRef = database().ref('/messages');

  React.useEffect(() => {
    messageRef.on('value', snapshot => {
      let data = snapshot.val();
      const chat = Object.values(data);
      setMessageArray(chat);
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
                  {mess.name} : {mess.m}
                </Text>
              </View>
            );
          })
        ) : (
          <Text>Start a chat!</Text>
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
