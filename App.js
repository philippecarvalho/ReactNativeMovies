import React from 'react';
import Home from './components/Home';
import Single from './components/Single';
import Explorar from './components/Explorar';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Single" component={Single} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
      {/* <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#4d5ce7',
          labelStyle: {
            fontSize: 16,
            padding: 15,
          },
        }}>
        <Tab.Screen name="Home" component={MyStack} />
        <Tab.Screen name="Explorar" component={Explorar} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
