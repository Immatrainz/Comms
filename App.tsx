/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
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

const Homepage = ({navigation}) => {
  const handleClick = () => {};
  return (
    <View>
      <Text className="bg-green-400 text-lg">Welcome to Comms!</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Text>Sign up</Text>
      <Button title="Test Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
