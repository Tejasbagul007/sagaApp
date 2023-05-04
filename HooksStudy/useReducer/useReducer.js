import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useReducer } from 'react';

const Reducer = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state;
        }
    };

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <View>
            <Text style={Styles.con1}>Using UseReducer Hook</Text>
            <Text style={Styles.con} >Count : {count}</Text>
            <View style={Styles.btn2}>
            <Button title='increment' onPress={() => dispatch('increment')} />
            </View>
            <View style={Styles.btn2}>
            <Button  title='decrement' onPress={() => dispatch('decrement')} />
            </View>
            <View style={Styles.btn2}>
            <Button  title='reset' onPress={() => dispatch('reset')} />
            </View>
        </View>
    );
};

export default Reducer;

const Styles = StyleSheet.create({
    con: {
      color: 'white',
      fontSize: 50,
      marginBottom: 20,
      padding: 30,
    },
    con1: {
        color: 'white',
        fontSize: 30,
        marginBottom: 2,
        padding: 20,
      },
    btn2: {
      margin: 10,
    },
});
