import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={Styles.welcome}>
      <Text style={Styles.welcomeText}>Welcome..</Text>
      <Button
        title="Login Here.."
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'skyblue',
  },
});

export default Welcome;
