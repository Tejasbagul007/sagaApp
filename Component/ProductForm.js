import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setProductName, setProductDescription, setProductPrice } from './redux/action';

const ProductForm = () => {
    const dispatch = useDispatch();
    const productState = useSelector(state => state.reducer2);
    // || operator to provide a default value of an empty object in case the reducer2 state is undefined.
    // This way, even if the reducer2 state is undefined, we can still access the productName, productDescription, and productPrice properties without causing an error.
    const { productName, productDescription, productPrice } = productState || {};
    //const { productName, productDescription, productPrice } = useSelector(state => state.reducer2);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isOk, setisOk] = useState(false);

    const handleNameChange = (text) => {
        setName(text);
        dispatch(setProductName(text));
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
        dispatch(setProductDescription(text));
    };

    const handlePriceChange = (text) => {
        setPrice(text);
        dispatch(setProductPrice(text));
    };

    const handleSubmit = () => {
        // Do something with the form data
        console.log(`Product Name: ${productName}`);
        console.log(`Product Description: ${productDescription}`);
        console.log(`Product Price: ${productPrice}`);

    // const newProduct = { productName, productDescription, productPrice };
    // dispatch(addProduct(newProduct));

    // // Clear the form inputs
    // setProductName('');
    // setProductDescription('');
    // setProductPrice('');
    };

    return (
        <View style={Styles.container}>
            <Text>Enter Product Name:</Text>
            <TextInput value={name} onChangeText={handleNameChange} placeholder="Product Name" />

            <Text>Enter Product Color:</Text>
            <TextInput value={description} onChangeText={handleDescriptionChange} placeholder="Product Description" />

            <Text>Enter Product Price:</Text>
            <TextInput value={price} onChangeText={handlePriceChange} placeholder="Product Price" />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default ProductForm;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 20,
    },
});
