//import liraries
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const HomeScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const SettingsScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// };

// const LoginScreen = ({ navigation }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     AsyncStorage.getItem('isLoggedIn').then((value) => {
//       if (value === 'true') {
//         setIsLoggedIn(true);
//       }
//     });
//   }, []);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     AsyncStorage.setItem('isLoggedIn', 'true');
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Home' }],
//     });
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Log in" onPress={handleLogin} />
//     </View>
//   );
// };

// const HomeDrawer = ({ navigation }) => {
//   const handleLogout = () => {
//     AsyncStorage.removeItem('isLoggedIn');
//     navigation.reset({
//       index: 0,
//       routes: [{ name: 'Login' }],
//     });
//   };

//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="HomeTabs" component={HomeTabs} />
//       <Drawer.Screen name="Log Out" onPress={handleLogout} />
//     </Drawer.Navigator>
//   );
// };

// const HomeTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeDrawer} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
