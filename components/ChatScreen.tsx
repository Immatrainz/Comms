import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View className="flex flex-col h-full justify-end">
      <Text>
        Add person's name here when mapping: Sample, map the chat from the
        database here
      </Text>
      <TextInput
        className="bg-white border-2 border-black h-10"
        placeholder="Type a message here..."
      />
    </View>
  );
};

export default ChatScreen;
