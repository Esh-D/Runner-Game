import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { NavigationContainer } from '@react-navigation/native';

import MainMenu from './screens/MainMenu';
import LevelSelect from './screens/LevelSelect';
import PlayingScreen from './screens/PlayingScreen';
import GameOver from './screens/GameOver';

export default function App() {
  //locking display orientation in landscape mode
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  return (
    <NavigationContainer>
        
    </NavigationContainer>

  );
}

