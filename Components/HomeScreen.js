import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wall from './Posts.js/Wall';

const HomeScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                <Wall />
            </Text>
        </View>
    )
}

export default HomeScreen;