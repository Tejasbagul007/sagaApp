import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
//import Parent from './Parent';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  });

  return (
    <View>
      <Text>Splash hiiiii</Text>
    </View>
  );
};

export default Splash;
