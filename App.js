import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './Components/Pages/RootNavigator';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import RootReducer from './Components/Pages/RootReducer'

const store = createStore(RootReducer); 

function App(props){
  return (
    <Provider store={store} >
    <NavigationContainer>
    <RootNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;