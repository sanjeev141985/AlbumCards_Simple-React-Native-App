import React from 'react';
import { Text, View } from 'react-native';


//Create a Component
const Header = (props) => {
    console.log(this.props);
    const { textStyle, viewStyle } = Styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const Styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 66,
        paddingTop: 15, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2

    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to the other part of the application.
export default Header;
