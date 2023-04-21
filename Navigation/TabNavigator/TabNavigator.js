import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeDrawer from '../DrawerNavigation/HomeDrawer';
import ProductWrapper from '../../Component/ProductWrapper';
// import userList from '../../Component/userList';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="TabHome" component={HomeDrawer} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Add-To-Cart" component={ProductWrapper} />
        {/* <Stack.Screen name="User" component={userList} /> */}
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  function ProfileScreen() {
    return (
      <View>
        <Text style={Styles.Tejas}>Profile Screen</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View>
        <Text style={Styles.Tejas}>Settings Screen </Text>
      </View>
    );
  }

  const Styles = StyleSheet.create({
    Tejas: {
      color: 'black',
    },
    Tejas1: {
      backgroundColor: 'black',
      padding: 20,
    },
  });
