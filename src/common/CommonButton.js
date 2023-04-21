import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

// This component is for changing the color of Cart icon When user Add Any Item in it.
const CommonButton = ({onPress, title, bgColor, textColor, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 50,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
