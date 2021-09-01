import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { v4 as uuid } from 'uuid';

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts =[]
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTask({...this.state, id: uuid(), completed: false});
        this.setState({task: ''});
    }

    render() {
        return (
            <TextInput
                placeholder="What's on your mind?"
                name='newpost'
                value={this.state.posts}
                id='newpost'
                onChange={this.onChange}
                onSubmitEditing={this.handleSubmit}
            />
        )
    }
}

export default NewPost;