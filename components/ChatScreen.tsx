import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';

const ChatScreen = ({navigation}) => {
  let [message, setMessage] = React.useState('');
  const [messageArray, setMessageArray] = React.useState([]);
  let addChat = (message: string) => {
    database().ref('/messages').push({
      name: message,
    });
  };
  let messageRef = database().ref('/messages');
  React.useEffect(() => {
    messageRef.on('value', snapshot => {
      let data = snapshot.val();
      const items = Object.values(data);
      setMessageArray(items);
    });
  }, []);

  let onSubmitClick = () => {
    addChat(message);
  };
  return (
    <View className="flex flex-col h-full p-2 gap-2 justify-end">
      <Text>
        Add person's name here when mapping: Sample, map the chat from the
        database here
      </Text>
      {messageArray.length > 0 ? (
        messageArray.map(mess => {
          return (
            <View>
              <Text>{mess.name}</Text>
            </View>
          );
        })
      ) : (
        <Text>No items</Text>
      )}
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
