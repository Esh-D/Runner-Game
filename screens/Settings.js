import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#FFF' }} >This is the Settings Screen</Text>
            <Button mode="contained" onPress={() => navigation.goBack()}> <Text>back</Text> </Button>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#141B41',
      alignItems: 'center',
      justifyContent: 'center',
    }
});