import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = async () => {

    const correctUsername = 'Tejas';
    const correctPassword = 'password';

    if (username === correctUsername && password === correctPassword) {
      try {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.navigate('Tab');
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Incorrect username or password');
    }
    };
    return (
      <View style={Styles.Tejas1}>
        <Text>Username:</Text>
        <TextInput value={username} onChangeText={setUsername} placeholder="Username" />
        <Text>Password:</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Password" />
        <Button title="Log In" onPress={handleSignIn} />
      </View>
    );
};

export default LoginScreen;


const Styles = StyleSheet.create({
  Tejas: {
    color: 'black',
  },
  Tejas1: {
    backgroundColor: 'black',
    padding: 20,
  },
});


