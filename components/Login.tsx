import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  const signUserIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Authenticated successfully');
        navigation.navigate('Chats');
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <View>
      <TextInput
        className="m-4 p-2 border"
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        className="ml-4 mr-4 p-2 border"
        placeholder="Password"
        onChangeText={setPassword}
      />
      <Button
        title="Submit"
        onPress={() => {
          signUserIn(email, password);
        }}
      />
    </View>
  );
};

export default Login;
