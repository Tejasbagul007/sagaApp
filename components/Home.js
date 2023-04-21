import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import DrawerNavigator from './DrawerNavigation/DrawerNavigator';

const Home = ({navigation}) => {
  return (
    <View style={Styles.home}>
      <Text style={Styles.homeText}>Home Screen Here...</Text>
      <Button
        title="Go to Main page"
        onPress={() => navigation.navigate('Welcome')}
      />
      {/* <View>
        {' '}
        <DrawerNavigator />
      </View> */}
    </View>
  );
};

const Styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'pink',
  },
});

export default Home;
