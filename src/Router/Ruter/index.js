import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  PageFive,
  PageFour,
    PageOne,
    PageThree,
    PageTwo
} from '../../pages';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../../components';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();



const Ruter = () => {
  return (
    <Stack.Navigator initialRouteName="PageOne">
      <Stack.Screen
        name="PageOne"
        component={PageOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pagetwo"
        component={PageTwo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pagethree"
        component={PageThree}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PageFour"
        component={PageFour}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PageFive"
        component={PageFive}
        options={{headerShown: false}}
      />

     
    </Stack.Navigator>
  );
};

export default Ruter;