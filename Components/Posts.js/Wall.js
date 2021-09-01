import { AddTypenameToAbstract } from 'graphql-tools';
import { Component } from 'react';
import React from 'react-native';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import Post from './Post';

class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }



    render() {
        const wallItems = this.state.posts.map(item => {
            return <Post
                key={item.id}
                id={item.id}
                value={item.content}
            />
            
        })
        return (
            <View >
                <h1 style={{justifyContent: 'center', alignItems: 'center'}}> Wall</h1>
                {
                    this.state.posts.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => AddPost(index)} >
                                <Text>{wallItems}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

}

export default Wall;