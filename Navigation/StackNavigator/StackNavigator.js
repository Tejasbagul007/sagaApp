import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Authentication } from '../LoginScreen/Authentication';
import TabNavigator from '../TabNavigator/TabNavigator';
import LoginScreen from '../LoginScreen/LoginScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Auth" component={Authentication} options={{ headerShown: false }} initialRoutes={true}/>
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} initialRoutes={true}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} initialRoutes={false} />
    </Stack.Navigator>
  );
}
