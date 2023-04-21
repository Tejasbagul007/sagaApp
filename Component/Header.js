import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  // data taken from reducer here..
  const [cartItems, setCartItems] = useState(0); //default count is 0

  useEffect(()=>{
  setCartItems(cartData.length); // Adding the cart
  },[cartData]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.font1}>******Redux Implementation*****</Text>
      <Text style={Styles.font}>{cartItems}</Text>
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'gold',
  },
  font: {
    fontSize: 30,
    padding: 10,
    color: 'black',
    textAlign: 'right',
  },
  font1: {
    textAlign: 'left',
    fontSize: 18,
    color: 'black',
    marginTop: 5,
  },
  set: {
    backgroundColor:'pink',
    height: 40,
    width: 40,
    padding: 20,
    borderRadius: 15,
    textAlign: 'right',
    color: 'black',
  },
});
