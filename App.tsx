/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login.tsx';
import ChatScreen from './components/ChatScreen.tsx';
import auth, {firebase} from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Register = ({navigation}) => {
  let [email, setEmail] = React.useState('');
  let [password, setPassword] = React.useState('');
  let [passwordCheck, setPasswordCheck] = React.useState('');
  let [errorMessage, setErrorMessage] = React.useState('');
  let [valid, setValid] = React.useState(true);

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const createUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        Alert.alert('Success! Account successfully created');
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleSignup = () => {
    if (!email) {
      setErrorMessage('Please enter an email');
      setValid(false);
    } else if (!password || password.length < 8) {
      setErrorMessage('Please enter a password with minimum of 8 characters');
      setValid(false);
    } else if (!validateEmail(email)) {
      setErrorMessage('Invalid email');
      setValid(false);
    } else {
      createUser(email, password);
    }
  };

  return (
    <View>
      <Text className="bg-green-400 text-lg ">Welcome to Comms!</Text>
      {!valid && <Text className="bg-green-400 text-lg ">{errorMessage}</Text>}
      <TextInput
        className="m-4 p-2 border"
        placeholder="Email"
        onChangeText={setEmail}
      />
      <TextInput
        className="ml-4 mr-4 mb-4 p-2 border"
        placeholder="Password"
        onChangeText={setPassword}
      />
      <TextInput
        className="ml-4 mr-4 mb-4 p-2 border"
        placeholder=" Confirm Password"
        onChangeText={setPasswordCheck}
      />
      <View className="flex flex-row h-10 bg-yellow-400 justify-center">
        <Button title="Sign up" />
      </View>
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Test Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
