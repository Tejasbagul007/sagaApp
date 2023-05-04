import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useEffect, useState, useRef } from 'react';
//import { TextInput } from 'react-native-gesture-handler';

const Hook3 = () => {  //useState, useEffect and useRef Implementations

    const [value, valueSet] = useState(0);
    const [value1, valueSet1] = useState(0);

    const ref = useRef();

    useEffect(() => {
        console.log('hello');
    }); // calling again and again

    useEffect(() => {
        console.log('hello1');
    }, []); // calling when on screen load only

    useEffect(() => {
        console.log('hello2');
    }, [value]); //conditional rendering depends on changing the value.



    return (
        <View style={styles.container}>
            <Text>{value}</Text>

            <TouchableOpacity style={styles.app} onPress={() => {
                valueSet(value + 1);
            }}><Text>Increase Count 1</Text></TouchableOpacity>

            <Text style={{ marginTop: 20, }}>{value1}</Text>
            <TouchableOpacity style={styles.app} onPress={() => {
                //valueSet1(value1 + 1);
                ref.current.clear();
            }}><Text>Increase Count 2</Text></TouchableOpacity>
            <TextInput style={styles.text} placeholder='write here..' ref={ref} />
        </View>
    );
};

export default Hook3;

const styles = StyleSheet.create({
    app: {
        width: 100,
        height: 40,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.4,
    },
    container: {
        //  flex:1,
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
    },
    text: {
        width: 300,
        height: 50,
        borderWidth: 1,
        marginTop: 30,
    },
});
