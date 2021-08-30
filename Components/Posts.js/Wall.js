import { AddTypenameToAbstract } from 'graphql-tools';
import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    

    render() {
        const wallItems = ({items}) => {
            return (
                <ListItem
                    title='Post'
                    subtitle="Loren Ipsum"

                />
            )
        }
        return (
            <View >
                <h1 style={{justifyContent: 'center', alignItems: 'center'}}> Wall</h1>
                {
                    this.state.posts.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => AddPost(index)} >
                                <Post text={item} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }

}

export default Wall;