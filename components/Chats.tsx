import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import database from '@react-native-firebase/database';

const Chats = ({navigation}) => {
  return (
    <View className="flex flex-col">
      <View className="border border-solid border-black p-4">
        <Text>Chat for this user in the database go here</Text>
      </View>
      <Text>Chat for this user in the database go here</Text>
    </View>
  );
};

export default Chats;
