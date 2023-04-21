// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text, TouchableOpacity } from 'react-native';

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// function HomeScreen({ navigation }) {
//   return (
//     <View>
//       <TouchableOpacity onPress={() => navigation.openDrawer()}>
//         <Text>Open Drawer</Text>
//       </TouchableOpacity>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function AboutScreen() {
//   return (
//     <View>
//       <Text>About Screen</Text>
//     </View>
//   );
// }

// function ContactScreen() {
//   return (
//     <View>
//       <Text>Contact Screen</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// function LogoutScreen() {
//   return (
//     <View>
//       <Text>Log Out</Text>
//     </View>
//   );
// }

// function HomeDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home1" component={HomeScreen} />
//       <Drawer.Screen name="About" component={AboutScreen} />
//       <Drawer.Screen name="Contact" component={ContactScreen} />
//       <Drawer.Screen name="Log Out" component={LogoutScreen} />
//     </Drawer.Navigator>
//   );
// }

// function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home2" component={HomeDrawer} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home3" component={TabNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Create the Stack Navigator
const Stack = createStackNavigator();

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

// Home Screen with Bottom Tab Navigator
function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab 1" component={Tab1Screen} />
      <Tab.Screen name="Tab 2" component={Tab2Screen} />
      <Tab.Screen name="Tab 3" component={Tab3Screen} />
    </Tab.Navigator>
  );
}

// Tab 1 Screen
function Tab1Screen() {
  return (
    <View style={styles.container}>
      <Text>Tab 1 Screen</Text>
    </View>
  );
}

// Tab 2 Screen
function Tab2Screen() {
  return (
    <View style={styles.container}>
      <Text>Tab 2 Screen</Text>
    </View>
  );
}

// Tab 3 Screen
function Tab3Screen() {
  return (
    <View style={styles.container}>
      <Text>Tab 3 Screen</Text>
    </View>
  );
}

// Drawer Screen with Log Out Button
function DrawerScreen({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle Log Out Button Click
  function handleLogOut() {
    setIsLoggedIn(false);
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Text>Drawer Screen</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
}

// Login Screen with Login Button
function LoginScreen({ navigation }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle Login Button Click
  function handleLogin() {
    setIsLoggedIn(true);
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Log In" onPress={handleLogin} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* If User is Not Logged In */}
        {!isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginScreen} />
        ) : (
          // If User is Logged In
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Drawer" component={DrawerScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

