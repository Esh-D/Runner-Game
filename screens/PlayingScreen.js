import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

function PlayingScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={{ color: '#FFF' }}>This is the PlayingScreen Screen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('GameOver')}> <Text>Go to GameOver screen</Text> </Button>
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