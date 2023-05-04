// import {View, Text} from 'react-native';
import React from 'react';
//import Reducer from './HooksStudy/useReducer/useReducer';
//import Ref from './HooksStudy/useRef/Ref';
//import Hook3 from './HooksStudy/3HooksCombo/3Hook';
//import ProductForm from './Component/ProductForm';
//import Form from './Task3/Form';

// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Task33/Home';
import ProductData from './Task33/AddProduct';
import { Provider } from 'react-redux';
import { configureStore } from './Task33/redux/store';
//import AppNavigator from './src/AppNavigator';
// import {Provider} from 'react-redux';
// import MainContainer from './src/MainContainer';
// import { store } from './src/redux/store/Store';



// --------------------------------Task 33-------------------------------------------------

const Stack = createStackNavigator();


const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="AddProduct" component={ProductData} initialRoutes={true}/>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;



// --------------------------------useContext & REF Hook-------------------------------------------------

// const App = () => {
//   return (
//     <View>
//     {/* <Reducer/> */}
//     {/* <Ref/> */}
//     {/* <Hook3/> */}
//     {/* <ProductForm/> */}
//     <Form/>
//     </View>
//   );
//   };

// export default App;

// --------------------------------useContext Hook-------------------------------------------------

// import CompA from './HooksStudy/useContext/CompA';
// import { createContext } from 'react';

// export const NameContext = createContext();
// export const Name2Context = createContext();

// const App = () => {
//   return (
//     <NameContext.Provider value={'Tejas'}>
//     <Name2Context.Provider value={'Bagul'}>
//     <CompA/>
//     </Name2Context.Provider>
//     </NameContext.Provider>
//   );
//   };

// export default App;

// ---------------------------------GROCERY APP-------------------------------------------------

// const App = () => {
//   return (
//     <Provider store={store}>
//       <MainContainer />
//     </Provider>
//   );
//   };

// export default App;

// ---------------------------------REDUX-------------------------------------------------


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProductWrapper from './Component/ProductWrapper';
// import userList from './Component/userList';

// //import StackNavigator from './Task2/StackNavigator';
// import StackNavigator from './Navigation/StackNavigator/StackNavigator';

// function App() {
//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }

// export default App;

// -------------------------NAVIGATION IN LOGIN APP FORST TASK------------------------------------

// const Stack = createStackNavigator();
// function App() {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//     <Stack.Screen name="Home" component={ProductWrapper} />
//     <Stack.Screen name="User" component={userList} />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;







