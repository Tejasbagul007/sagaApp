import { View, Text } from 'react-native';
import React from 'react';
import CompC from './CompC';
import { useContext } from 'react';
import { Name2Context } from '../../App';

const CompB = () => {
    const myName2 = useContext(Name2Context);
  return (
    <View>
       <CompC/>
       <Text>{myName2}</Text>
    </View>
  );
};

export default CompB;
