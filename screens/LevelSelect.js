import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { windowHeight, windowWidth, windowDiagonal } from '../contexts/Dimensions.js';

function LevelSelect() {

    //Will add ScrollView when/if I make >4 levels
    return(
            <View style={styles.container}>

                <Text style={styles.title}>LEVEL SELECT</Text>
                
                <View style={styles.levelButtonContainer}>
                    <Button
                        mode="contained"
                        style={styles.levelButton}>
                        <Text style={styles.levelText}>1</Text>
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.levelButtonDisabled}>
                        <Text style={styles.levelText}></Text>
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.levelButtonDisabled}>
                        <Text style={styles.levelText}></Text>
                    </Button>
                </View>

            </View>
    )
}

export default LevelSelect;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141B41',
        alignItems: 'center',
    },
    title: {
        fontSize: windowDiagonal * 0.08,
        fontWeight: 'bold',
        color: '#6F9CEB',
        paddingTop: windowHeight * 0.08,
        paddingBottom: windowHeight * 0.08
    },
    levelButtonContainer: {
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    levelText: {
        fontSize: windowDiagonal * 0.08,
        borderWidth: windowDiagonal * 0.006467, 
        color: '#FFF',
    },
    levelButton: {
        borderWidth: windowDiagonal * 0.006467,
        borderColor: '#FFF',
        backgroundColor: '#306BAC',
        width: windowWidth * 0.2,
        margin: windowWidth * 0.02
    },
    levelButtonDisabled: {
        borderWidth: windowDiagonal * 0.006467,
        borderColor: '#FFF',
        backgroundColor: '#141B41',
        width: windowWidth * 0.2,
        margin: windowWidth * 0.02
    }
});