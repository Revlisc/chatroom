import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { Card, ListItem, List, Icon } from 'react-native-elements';





class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    renderItem ({item}) {
        return (
            <ListItem bottomDivider title={item.name} subtitle={item.content} >     
                
                <Icon name='chevron-right' />
            </ListItem> 
        )
    }
   
    
    //working on getting an updatable form to work, base on todo list
    render() {

        return (
                <SafeAreaView > 
                    <Card >
                        <Text>Posts</Text>
                        <FlatList
                            data={this.props.posts}
                            renderItem={this.renderItem}
                            
                        /> 
                    </Card>
                </SafeAreaView>  
        )
    }
    
}

export default Post;