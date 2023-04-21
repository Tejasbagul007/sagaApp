
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.openDrawer()} options={{ headerShown: false }}/>
      <Text style={Styles.Tejas}>Home Screen</Text>
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

