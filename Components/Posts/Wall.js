import { AddTypenameToAbstract } from 'graphql-tools';
import React,  { Component } from 'react';
//import React from 'react-native';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import Post from './Post';

class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    id: 1,
                    key: 1,
                    content: 'test',
                    name: 'John Doe'
                },
                
            ]
        }
    }

    /*
    <Post
                key={item.id}
                id={item.id}
                value={item.content}
            />
            const wallItems = this.state.posts.map(item => {
            return <Post />

            <TouchableOpacity key={index}  >
                    <Post />
                </TouchableOpacity>
            
        })
        style={{justifyContent: 'center', alignItems: 'center'}}
    */

    render() {
        
        return (
            <View>
                {
                    this.state.posts.map(item => {
                        return (
                            <Post data={item} key={item.id}/>
                        )
                    })
                }
                
                
            </View>
                
            
        )
    }

}

export default Wall;