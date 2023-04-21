// import { View, Text } from 'react-native';
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './LoginScreen/LoginScreen';


// const Auth = createNativeStackNavigator();

// const AuthStack = () => {
//     return (
//         <AppNavigator>
//             <Auth.Screen name="Login" component={LoginScreen}
//                 options={{ headerShown: false }}
//             />
//         </AppNavigator>
//     );
// };

// export default AuthStack;

import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../TabNavigator/TabNavigator';
// import LoginScreen from './LoginScreen/LoginScreen';


const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value !== null) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignIn = async () => {
    // In a real app, you would perform a network request to authenticate the user
    // and retrieve an access token or session token

    // For this example, we'll just use a hardcoded username and password
    const correctUsername = 'Tejas';
    const correctPassword = 'password';

    if (username === correctUsername && password === correctPassword) {
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Incorrect username or password');
    }
  };

  // const handleSignOut = async () => {
  //   try {
  //     await AsyncStorage.removeItem('isLoggedIn');
  //     setIsLoggedIn(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  if (isLoggedIn) {
    return (

      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="AuthScreen" component={AuthScreen} /> */}
      </Stack.Navigator>
    );
  }
else {
  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};
}
  

export default LoginScreen;
//-------------------------- Working ---------->
//import React, { useState} from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import TabNavigator from '../TabNavigator/TabNavigator';

// const Stack = createStackNavigator();

//   export default function LoginScreen({ navigation }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const handleLogin = () => {
//       // Perform login validation here
//       if (username === 'Tejas' && password === 'password') {
//         setIsAuthenticated(true);
//       } else {
//         alert('Invalid username or password');
//       }
//     };

//     if (isAuthenticated) {
//       return (
//         // <Stack.Navigator initialRouteName={!isAuthenticated ? "Login" : "Tab"}>
//           <Stack.Navigator>
//             <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
//             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//             {/* <Stack.Screen name="AuthScreen" component={AuthScreen} /> */}
//           </Stack.Navigator>
//       );
//     } else {
//       return (
//         <View style={Styles.Tejas1}>
//           <Text>Username:</Text>
//           <TextInput value={username} onChangeText={setUsername} />
//           <Text>Password:</Text>
//           <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} />
//           <Button title="Log In" onPress={handleLogin} />
//         </View>
//       );
//     }
//   }



// Authentication Screen
// function AuthScreen({ navigation }) {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   useEffect(() => {
//     checkLoginStatus();
//   }, []);

//   const checkLoginStatus = async () => {
//     const isLoggedInString = await AsyncStorage.getItem('isLoggedIn');

//     if (isLoggedInString == true) {
//       navigation.navigate('Home');
//     }
//     else {
//       navigation.navigate('Login');
//     }
//   };

//   const AuthhandleLogin = async () => {
//     await AsyncStorage.setItem('isLoggedIn', 'true');
//     setIsLoggedIn(true);
//     navigation.navigate('Home');
//   };

//   const AuthhandleLogout = async () => {
//     await AsyncStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//     // navigation.navigate('Login1');
//   };

//   return (
//     <View>
//       {/* {isLoggedIn ? (
//         <>
//           <Text>You are logged in!</Text>
//           <Button title="Logout" onPress={AuthhandleLogout} />
//         </>
//       ) : (
//         <Button title="Login" onPress={AuthhandleLogin} />
//       )} */}
//     </View>
//   );
// }
