// import library for making the component
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

// make a component(class based component)
class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }
    render() {
        console.log(this.state);
        return (
            <View>
                <Text>Album List!!!!</Text>
            </View>
        );

    }
}
// make the component to available other part of the app
export default AlbumList;