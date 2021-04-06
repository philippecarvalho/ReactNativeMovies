import React from 'react';
import {Image, StyleSheet} from 'react-native';
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
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return (
                <Image
                  style={styles.singleRatingStar}
                  source={
                    focused
                      ? require('./img/Home.png')
                      : require('./img/Home-inactive.png')
                  }
                />
              );
            } else if (route.name === 'Pesquisar') {
              return (
                <Image
                  style={styles.singleRatingStar}
                  source={
                    focused
                      ? require('./img/Search.png')
                      : require('./img/Search-inactive.png')
                  }
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4d5ce7',
          showLabel: false,
          style: {height: 70, elevation: 10, borderTopWidth: 1},
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

const styles = StyleSheet.create({
  singleRatingStar: {
    width: 28,
    height: 28,
    marginTop: 5,
    marginRight: 10,
  },
});

export default App;
