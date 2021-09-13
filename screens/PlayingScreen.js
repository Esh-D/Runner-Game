import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateData from '../functions/updateData';
import { useTheme } from '../contexts/ThemeProvider'; 

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

//the runner, character controlled entity
import Runner from '../game-components/Runner';

//floor the runner will be running on
import Floor from '../game-components/Floor';

//The 2 types of obstacles
import Spike from '../game-components/Spike';
import Block from '../game-components/Block';

function PlayingScreen({ navigation }) {
    const { theme } = useTheme();

    return(
        <View style={[styles.container, { backgroundColor: theme.background.backgroundColor}]}>
            <Text style={{ color: '#FFF' }}>This is the PlayingScreen Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('GameOver')}> <Text>Go to GameOver screen</Text> </Button>
            <Button style={{margin: 10}} mode="contained" onPress={() => navigation.navigate('LevelComplete')}> <Text>Go to LevelComplete screen</Text> </Button>
        </View>
    )
}

export default PlayingScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141B41',
      alignItems: 'center',
      justifyContent: 'center',
    }
});