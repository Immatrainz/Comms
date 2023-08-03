import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <TextInput
        className="m-5 bg-white border-2 border-black h-10"
        placeholder="Email"
      />
      <TextInput
        className="m-5 bg-white border-2 border-black h-10"
        placeholder="Password"
      />
      <Button title="Submit" />
    </View>
  );
};

export default Login;
