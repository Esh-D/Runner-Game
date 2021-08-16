import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

function GameOver({ navigation }) {
    return(
        <View style={styles.container}>

            <Text style={styles.title}>~ GAME OVER ~</Text>

            <View style={styles.mainButtonContainer}>
                <Button 
                    mode="contained"
                    style={styles.mainButtons}
                    onPress={() => navigation.navigate('PlayingScreen')}>
                    <Text style={styles.mainButtons}>PLAY AGAIN</Text>
                </Button>
                <Button 
                    mode="contained"
                    style={styles.mainButtons}
                    onPress={() => navigation.navigate('LevelSelect')}>
                    <Text style={styles.mainButtons}>LEVEL SELECT</Text>
                </Button>
            </View>

            <View style={styles.lesserButtonContainer}>
                <Button 
                    mode="contained"
                    style={styles.lesserButtons}
                    onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.lesserButtonsText}>settings</Text>
                </Button>
                <Button 
                    mode="contained"
                    style={styles.lesserButtons}
                    onPress={() => navigation.navigate('Stats')}>
                    <Text style={styles.lesserButtonsText}>stats</Text>
                </Button>
            </View>
        </View>
    )
}

export default GameOver;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141B41',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: windowDiagonal * 0.08,
        fontWeight: 'bold',
        color: '#6F9CEB',
        paddingBottom: windowHeight * 0.08
      },
      mainButtonContainer: {
        flexDirection: 'row',
        paddingTop: windowHeight * 0.01,
        paddingBottom: windowHeight * 0.02
      },
      mainButtons: {
        borderWidth: windowDiagonal * 0.008622,
        borderColor: '#6F9CEB',
        backgroundColor: '#306BAC',
        fontSize: windowDiagonal * 0.03,
        color: '#FFF',
        fontWeight: 'bold',
        width: windowWidth * 0.35,
        margin: windowWidth * 0.01
      },
      lesserButtonContainer: {
        flexDirection: 'row',
      },
      lesserButtonsText: {
        fontSize: windowDiagonal * 0.015,
        fontWeight: 'bold',
        color: '#306BAC',
      },
      lesserButtons: {
        borderWidth: windowDiagonal * 0.006467,
        borderColor: '#306BAC',
        backgroundColor: '#141B41',
        width: windowWidth * 0.2,
        margin: windowWidth * 0.02
        
      }
});

/*
Alternative Game Over Screen Style (change in button placement)

import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

function GameOver() {
    return(
        <View style={styles.container}>

            <Text style={styles.title}>~ GAME OVER ~</Text>

            <View style={styles.mainButtonContainer}>
                <Button 
                    mode="contained"
                    style={styles.mainButtons}>
                    <Text style={styles.mainButtons}>PLAY AGAIN</Text>
                </Button>
            </View>

            <View style={styles.lesserButtonContainer}>
                <Button 
                    mode="contained"
                    style={styles.lesserButtons}>
                    <Text style={styles.lesserButtonsText}>settings</Text>
                </Button>
                <Button 
                    mode="contained"
                    style={styles.mainButtons}>
                    <Text style={styles.mainButtons}>LEVEL SELECT</Text>
                </Button>
                <Button 
                    mode="contained"
                    style={styles.lesserButtons}>
                    <Text style={styles.lesserButtonsText}>stats</Text>
                </Button>
            </View>
        </View>
    )
}

export default GameOver;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141B41',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: windowDiagonal * 0.08,
        fontWeight: 'bold',
        color: '#6F9CEB',
        paddingBottom: windowHeight * 0.08
      },
      mainButtonContainer: {
        flexDirection: 'row',
        paddingTop: windowHeight * 0.01,
        paddingBottom: windowHeight * 0.01
      },
      mainButtons: {
        borderWidth: windowDiagonal * 0.008622,
        borderColor: '#6F9CEB',
        backgroundColor: '#306BAC',
        fontSize: windowDiagonal * 0.03,
        color: '#FFF',
        fontWeight: 'bold',
        width: windowWidth * 0.35,
        margin: windowWidth * 0.01
      },
      lesserButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      lesserButtonsText: {
        fontSize: windowDiagonal * 0.015,
        fontWeight: 'bold',
        color: '#306BAC',
      },
      lesserButtons: {
        borderWidth: windowDiagonal * 0.006467,
        borderColor: '#306BAC',
        backgroundColor: '#141B41',
        width: windowWidth * 0.2,
        margin: windowWidth * 0.02
        
      }
});
*/