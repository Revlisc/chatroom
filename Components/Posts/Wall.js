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
                {
                    key: 2,
                    content: 'I am the second',
                    name: "Jane Doe"
                }
                
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

        name={this.state.posts.name} content={this.state.posts.content}
    */

    render() {
        
        return (
            <View>
                <Post posts={this.state.posts}  /> 
            </View>
                
            
        )
    }

}

export default Wall;