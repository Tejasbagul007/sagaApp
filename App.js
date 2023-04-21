import {View, Text} from 'react-native';
import React from 'react';
//import AppNavigator from './src/AppNavigator';
import {Provider} from 'react-redux';
import MainContainer from './src/MainContainer';
import { store } from './src/redux/store/Store';


const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;

// ----------------------------------------------------------------------------------


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

// -------------------------------------------------------------

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







