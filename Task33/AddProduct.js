import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addMobile, deleteMobile } from './redux/actions';

const ProductData = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const dataItem = useSelector((state)=>state.reducer);
  const dispatch = useDispatch();

  const handleAddMobiles = () => {
    const mobiles = {
      id: Math.random() + 10 + Math.random(),
      title: title,
      color: color,
    };
    dispatch(addMobile(mobiles));
    navigation.navigate("Home");
  };

  const handleDeleteMobiles = () => {
    const mobiles = {
      id: Math.random() + 10 + Math.random(),
      title: title,
      color: color,
    };
    dispatch(deleteMobile(mobiles));
    navigation.navigate("Home");
  };

  useEffect(()=>{
    let result = mobiles.filter((element)=>{
         return element.name === mobiles.name;
    });

    if (result.length){
      setIsAdded(true);
    }
    else {
      setIsAdded(false);
    }
  },[dataItem]);

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }} >
        <Text style={styles.text}>Mobile Name:</Text>
        <TextInput style={styles.title} placeholder="Enter Mobile Name here..." onChangeText={setTitle} value={title} />
      </View>
      <View style={{ margin: 20 }} >
        <Text style={styles.text}>Color Name:</Text>
        <TextInput style={styles.title} placeholder="Enter color Name..." onChangeText={setColor} value={color} multiline={true} />
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => handleAddMobiles()}><Text>Add Mobile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductData;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'skyblue',
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  title: {
    backgroundColor: 'black',
  },
  btn: {
    top: 25,
    width: 100,
    height: 40,
    marginTop: 40,
    left: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.4,
    color: 'black',
    backgroundColor: 'black',
    textShadowColor: 'black',
  },
});
