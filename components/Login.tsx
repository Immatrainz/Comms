import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <TextInput className="m-4 p-2 border" placeholder="Email" />
      <TextInput className="ml-4 mr-4 p-2 border" placeholder="Password" />
      <Button title="Submit" />
    </View>
  );
};

export default Login;
