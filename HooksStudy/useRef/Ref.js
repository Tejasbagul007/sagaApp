import { View, Text, Button } from 'react-native';
import React, {useRef, useEffect} from 'react';

const Ref = () => {
 const newRef = useRef();

 useEffect(()=>{
     console.log(newRef);
     console.log(newRef.current.innerHTML);
 },[]);

 const handleHeading = ()=>{
    newRef.current.style.color  = 'red';
    // newRef.current.style.fontFamily() = 'cooper';
 };

  return (
    <View>
      <Text ref={newRef}>useRef Hook</Text>
      <Button title='Click' onPress={handleHeading}/>
    </View>
  );
};

export default Ref;
