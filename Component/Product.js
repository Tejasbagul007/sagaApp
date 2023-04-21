import { View, Text, StyleSheet, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { addToCart,removeFromCart } from './redux/action';
import { useDispatch, useSelector } from 'react-redux'; //This is hook of redux use to call the function


const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.reducer);
    const [isAdded, setIsAdded] = useState(false);

    const handleaddToCart = (item)=>{
        dispatch(addToCart(item));
    };

    const handleRemoveFromCart = (item) =>{
      dispatch(removeFromCart(item.name));
      // console.warn(item);
  };

    // useEffect(()=>{
    //   if (cartItems && cartItems.length){
    //      cartItems.forEach((element)=>{
    //         if (element.name === item.name){
    //              setIsAdded(true);
    //         }
    //      });
    //   }
    // },[cartItems]);

    useEffect(()=>{
      let result = cartItems.filter((element)=>{
           return element.name === item.name;
      });

      if (result.length){
        setIsAdded(true);
      }
      else {
        setIsAdded(false);
      }
    },[cartItems]);


  return (
    <View style={Styles.container}>
      <Text style={Styles.font}>{item.name}</Text>
      <Text style={Styles.font}>{item.color}</Text>
      <Text style={Styles.font}>{item.price}</Text>
      <Image style={Styles.img} source={require('./asset/free-mobile-phone-icon-2635-thumb.png')}/>
      {
        isAdded ?
        <Button title="Remove from Cart" onPress={()=>handleRemoveFromCart(item)}/>
        :
        <Button title="Add To Cart" onPress={()=>handleaddToCart(item)}/>
      }
    </View>
  );
};

export default Product;

const Styles = StyleSheet.create({
    container: {
     alignItems: 'center',
     borderBottomColor: 'gold',
     borderBottomWidth: 2,
     padding: 10,
    },
    font:{
      fontSize: 20,
      color: 'black',
    },
    img:{
     resizeMode: 'cover',
     width:200,
     height:200,
    },
 });
