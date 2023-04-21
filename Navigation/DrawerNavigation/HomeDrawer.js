import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Log Out" component={LogoutScreen} />
      </Drawer.Navigator>
    );
  }

  function AboutScreen() {
    return (
      <View>
        <Text style={Styles.Tejas}>About Screen</Text>
      </View>
    );
  }
  function ContactScreen() {
    return (
      <View>
        <Text style={Styles.Tejas}>Contact Screen</Text>
      </View>
    );
  }
  function LogoutScreen({ navigation }) {
    return (
      <View style={Styles.btn}>
        {/* <Text style={Styles.Tejas}>Welcome..</Text> */}
        {/* Logout button */}
        <Button title="Logout"
          onPress={()=> {
            AsyncStorage.removeItem('isLoggedIn');
            navigation.navigate('Login');
          }}
        />
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
    btn: {
      padding: 50,
      margin: 10,
      color: 'voilet',
      backgroundColor: 'black',
    },
  });
