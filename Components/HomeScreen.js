import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wall from './Posts/Wall';

const HomeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Wall />
        </View>
    )
}

export default HomeScreen;