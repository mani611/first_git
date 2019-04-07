// import library for making the component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
         <Text style={textStyle}>{props.headerText}</Text>
        </View>
    ) ;
};

// - create component to increase the font size of header component
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        ShadowOffset: { width: 10, height:10 },
        shadowOpacity: 10,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 40
    }
};

// make the component to available other part of the app
export default Header;