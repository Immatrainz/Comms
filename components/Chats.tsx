import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';
import ChatScreen from './ChatScreen.tsx';

const Chats = ({navigation}) => {
  let [chatSelected, setChatSelected] = React.useState(false);
  let [chat, setChat] = React.useState(null);
  let clickOnChat = () => {
    setChatSelected(true);
    //setChat(); add the selected chat
    // pull the chat details from database and sent it to the chat screen for display
  };
  return (
    <View className="flex flex-col">
      <View className="border border-solid border-black p-4">
        <Text>Chat for this user in the database go here</Text>
        <Text>Ability to block the user</Text>
        <Text>Ability to mute the user</Text>
        <Text>Group this chat with other people</Text>
      </View>
      <Text>Chat for this user in the database go here</Text>
    </View>
  );
};

export default Chats;
