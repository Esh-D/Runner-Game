import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import MainMenu from './screens/MainMenu';

export default function App() {
  //locking display orientation in landscape mode
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  return (
    <MainMenu />
  );
}

