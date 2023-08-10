/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/Login.tsx';
import ChatScreen from './components/ChatScreen.tsx';
// const styles = StyleSheet.create({
//   center: {
//     alignItems: 'center',
//   },
// });

// type GreetingProp = {
//   name: string;
// };

// const Greeting = (props: GreetingProp) => {
//   return (
//     <View style={styles.center}>
//       <Text>Welcome to Comms!</Text>
//     </View>
//   );
// };

const Stack = createNativeStackNavigator();

const Register = ({navigation}) => {
  const handleClick = () => {};
  return (
    <View>
      <Text className="bg-green-400 text-lg ">Welcome to Comms!</Text>
      <TextInput className="m-4 p-2 border" placeholder="Email" />
      <TextInput className="ml-4 mr-4 mb-4 p-2 border" placeholder="Password" />
      <TextInput
        className="ml-4 mr-4 mb-4 p-2 border"
        placeholder=" Confirm Password"
      />

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
