import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Card, ListItem, List } from 'react-native-elements';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


function renderItem ({posts}) {
    return (
        <ListItem>   
            <Card
                featuredTitle={posts.name}
            >
                <Text>{posts.content}</Text>
            </Card>
        </ListItem> 
    )
}

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

   
    /*
    <FlatList
                    data={this.props.posts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
    */
    //working on getting an updatable form to work, base on todo list
    render() {

        return (
                    <FlatList
                        data={this.props.posts}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    /> 
        )
    }
    
}

export default Post;