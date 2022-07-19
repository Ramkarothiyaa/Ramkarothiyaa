import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './Home';
import Card from './Card'
import ShowCart from './ShowCart';

const Stack = createNativeStackNavigator();


const RootNavigator = () => {
  return (


      <Stack.Navigator>
      {/* //   <Stack.Screen
      //     name="Home"
      //     component={Home}
      //     options={{
      //     headerShown:false,
      //     }}
      //   /> */}

<Stack.Screen
          name="Card"
          component={Card}
          options={{
          headerShown:false,
          }}
        />  


<Stack.Screen
          name="ShowCart"
          component={ShowCart}
          options={{
          headerShown:false,
          }}
        />         


</Stack.Navigator>
  );
};

export default RootNavigator;