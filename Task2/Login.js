import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Home',{
            username : username,
            password : password,
        });
    };

  return (
    <View style={Styles.Tejas1}>
        <Text>Username:</Text>
        <TextInput value={username} onChangeText={setUsername} placeholder="Username" />
        <Text>Password:</Text>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry={true} placeholder="Password" />
        <Button title="Log In" onPress={handleLogin} />
      </View>
  );
};

export default Login;

const Styles = StyleSheet.create({
  Tejas: {
    color: 'black',
  },
  Tejas1: {
    backgroundColor: 'black',
    padding: 20,
  },
});
