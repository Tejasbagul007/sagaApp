import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';


const Home = () => {
  const route = useRoute();
  return (
    <View style={Styles.Tejas1}>
      <Text style={Styles.size}>userName: {route.params.username}</Text>
      <Text style={Styles.size}>Password: {route.params.password}</Text>
    </View>
  );
};

export default Home;

const Styles = StyleSheet.create({
  Tejas: {
    color: 'black',
  },
  Tejas1: {
    backgroundColor: 'black',
    padding: 20,
  },
  size: {
    fontSize: 20,
  },
});
