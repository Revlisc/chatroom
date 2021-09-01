import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';


function renderItem ({posts}) {
    return (
        <Card
            featuredTitle={posts.name}
        >
            <Text>{posts.content}</Text>
        </Card>
    )
}

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: this.props.content
        }
    }

   

    //working on getting an updatable form to work, base on todo list
    render() {

        return (
            <View >
                <FlatList
                    data={this.props.posts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        )
    }
    
}

export default Post;