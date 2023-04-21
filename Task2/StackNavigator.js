import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import StackNavigator from './Navigation/StackNavigator/StackNavigator';
import Login from './Task2/Login';
import Home from './Task2/Home';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle :{
           backgroundColor : 'yellow',
        },
        headerTintColor: 'black',
      }}
      >
      <Stack.Screen name="Login" component={Login} options={{
        title : 'Log In',
      }}/>
      <Stack.Screen name="Home" component={Home} options={{
        title : 'On Home page : Data',
      }}/>
      </Stack.Navigator>
  );
};

export default StackNavigator;
