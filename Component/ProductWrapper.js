import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Header from './Header';
import Product from './Product';
import { ScrollView } from 'react-native-gesture-handler';

function ProductWrapper({navigation}) {
const products = [
  {
    name : 'Samsung Mobile',
    color : 'white',
    price : 35000,
    Image : 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
  },
  {
    name : 'Apple I Phone',
    color : 'black',
    price : 150000,
  },
  {
    name : 'MI Mobile',
    color : 'green',
    price : 20000,
  },
];

// const handleUserList = ()=>{
//     navigation.navigate('User');
//     console.warn('called');
// };

  return (
    <View style={Styles.container}>
    {/* <Button title="Go to User List" onPress={handleUserList}/> */}
    <Header/>
    <ScrollView>{
      products.map((item)=> <Product item={item}/>
    )
    }
    </ScrollView>
    </View>
  );
}

export default  ProductWrapper;

const Styles = StyleSheet.create({
   container: {
    flex : 1,
    backgroundColor:'skyblue',
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






