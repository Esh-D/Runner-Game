import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainMenu from './screens/MainMenu';
import LevelSelect from './screens/LevelSelect';
import PlayingScreen from './screens/PlayingScreen';
import GameOver from './screens/GameOver';
import Stats from './screens/Stats';
import Settings from './screens/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  //locking display orientation in landscape mode
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="LevelSelect" component={LevelSelect} />
          <Stack.Screen name="PlayingScreen" component={PlayingScreen} />
          <Stack.Screen name="GameOver" component={GameOver} />
          <Stack.Screen name="Stats" component={Stats} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>

  );
}

