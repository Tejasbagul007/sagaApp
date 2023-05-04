import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from '@mdi/react';
// import { mdiPlus } from '@mdi/js';


const HomeScreen = ({ navigation }) => {
  const data = useSelector((state) => state.addMobilesReducer.mobile);
  //console.log("Show data from Home", data);

  const handleSubmit = () => {
    //    navigation.navigate('ProductData');
    navigation.navigate('AddProduct');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Mobile Specification( Implemented via Redux)</Text>
      <View>
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={(({ item }) => {
              return (
                <View style={styles.renderData}>
                  <Text style={styles.titleData}>{item.title}</Text>
                  <Text style={styles.colorData}>{item.color}</Text>
                </View>
              );
            })}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() =>
        handleSubmit()
      }><Text>Go Back & Add Mobile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    backgroundColor: 'lightgreen',
  },

  heading: {
    fontSize: 18,
    width: 350,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    top: 500,
    width: 150,
    height: 40,
    left: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.4,
    backgroundColor: 'black',
  },
  renderData: {
    borderWidth: 1,
    borderColor: 'gold',
    marginTop: 10,
    backgroundColor: 'pink',
  },
  titleData: {
    fontSize: 27,
    color: 'black',
    fontStyle: 'Roboto',
  },
  colorData: {
    color: 'black',
    fontStyle: 'italic',
  },

});
