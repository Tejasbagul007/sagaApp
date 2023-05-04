import { View, Text } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { NameContext } from '../../App';

const CompC = () => {
   const myName = useContext(NameContext);
  return (
    <View>
     <Text>{myName}</Text>
    </View>
  );
};

export default CompC;
