import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
// import { updateFormData } from './redux/action';
import { addUser, deleteMobile, updateColor } from './redux/reducers/reducer';
//import { ScrollView } from 'react-native-gesture-handler';

function Form() {
  const dispatch = useDispatch();
  const mobileList = useSelector((state) => state.mobiles.value);

  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [newColor, setNewColor] = useState('');

  return (
    <View style={styles.Main}>
      <View style={styles.displayData}>
      <Text style={{color:'black'}}> Mobile Name : </Text>
        <TextInput
           //value={name}
          //value={name}
          placeholder="Enter Mobile Name..."
          onChangeText={event => {
            setName(event.target.value);
          }}
        />
        <Text style={{color:'black'}}>Color Name : </Text>
        <TextInput
          //value={color}
          placeholder="Enter color Name..."
          onChangeText={event => {
            setColor(event.target.value);
          }}
        />
        <Button
          onPress={() => {
            dispatch(
              addUser({
                price : mobileList[mobileList.length - 1].price + 1,
                name,
                color,
              })
            );
          }}
          title="Add Mobile"
        />
      </View>

      <ScrollView style={styles.displayUsers}>
        {mobileList.map((mobile) => {
          return (
            <View style={styles.App} >
              <Text style={{color:'black', fontSize:25}}>{mobile.name}</Text>
              <Text style={{color:'blue', fontSize:15}}> {mobile.color}</Text>
              <TextInput
                // value={newUsername}
                placeholder="New color..."
                onChangeText={(event) => {
                  setNewColor(event.target.value);
                }}
              />
              <View style={styles.con}>
              {/* <Button
                onPress={() => {
                  dispatch(
                    updateColor({ price: mobile.price, color: newColor })
                  );
                }}
                title="Update color"
              /> */}
              </View>
              <View style={styles.con}>
              <Button
                onPress={() => {
                  dispatch(deleteMobile({ price: mobile.price }));
                }}
                title="Delete Mobile"
              />
            </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({

  Main:{
    justifyContent:'center',
    alignItem: 'center',
    flexDirection: 'column',
    backgroundColor:'skyblue',
  },
  displayUsers:{
    marginTop: 10,
    backgroundColor:'brown',
  },
  displayData:{
    marginTop: 20,
    padding:20,
  },
  App : {
    width:300,
    height:220,
    padding:40,
    margin: 10,
    borderRadius:10,
    // shadowColor: 0 4, 8, 0, rgba(0, 0, 0, 0.1), 0 6 20 0 rgba(0, 0, 0, 0.19);
    textAlign: 'center',
    //backgroundColor:'brown',
  },
  con:{
   margin: 2,
   paddingHorizontal:0.2,
  
  },
});


// const Form = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = () => {
//     const data = { name, email };
//     dispatch(updateFormData(data));
//   };

//   return (
//     <View>
//     <Text>Enter Name : </Text>
//       <TextInput
//         placeholder="Name"
//         onChangeText={text => setName(text)}
//         value={name}
//       />
//       <Text>Enter Email : </Text>
//       <TextInput
//         placeholder="Email"
//         onChangeText={text => setEmail(text)}
//         value={email}
//       />
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// // style={Styles.container}
// export default Form;


// Form.js
// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import { useDispatch } from 'react-redux';
// // import { updateFormData } from './actions';
// import { updateFormData } from './redux/action';
// import { connect } from 'react-redux';

// const Form = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = () => {
//     dispatch(updateFormData(name, email));
//   };

//   const mapDispatchToProps = dispatch => ({
//     updateFormData: (name, email) => dispatch(updateFormData(name, email)),
//   });

//   export default connect(null, mapDispatchToProps)(Form);

//   return (
//     <View>
//     <Text>Enter Name : </Text>
//       <TextInput
//         placeholder="Name"
//         onChangeText={text => setName(text)}
//         value={name}
//       />
//       <Text>Enter Email : </Text>
//       <TextInput
//         placeholder="Email"
//         onChangeText={text => setEmail(text)}
//         value={email}
//       />
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// export default Form;
