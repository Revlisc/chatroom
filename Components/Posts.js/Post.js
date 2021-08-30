import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';

const Post = () => {

    const [text, setText] = useState('');

    handle
    //working on getting an updatable form to work, base on todo list
    return (
        <View >
            <TextInput 
                placeholder={"What's on your mind?"}
                value={post}
                name={post}
                onChangeText={text => setText(text) }
                defaultValue={text}
            />
            <Button 
                onSubmit={this.handleSubmit}
            >
                <Text>Post</Text>
            </Button>
        </View>

    )
    
}

export default Post;