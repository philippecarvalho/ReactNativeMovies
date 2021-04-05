import React from 'react';
import {View} from 'react-native';
import Home from './components/Home';
import Single from './components/Single';
import Search from './components/Search';
import GenreResult from './components/GenreResult';

import GeneralStatusBarColor from './components/GeneralStatusBarColor';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Single" component={Single} />
      <Stack.Screen name="Genre Result" component={GenreResult} />
    </Stack.Navigator>
  );
}

function PesquisarTab() {
  return (
    <Stack.Navigator
      initialRouteName="Pesquisar"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Pesquisar" component={Search} />
      <Stack.Screen name="Single" component={Single} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <GeneralStatusBarColor
        backgroundColor="#1e68d8"
        barStyle="light-content"
      />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#4d5ce7',
          labelStyle: {
            fontSize: 16,
            padding: 15,
          },
        }}>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Pesquisar" component={PesquisarTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
