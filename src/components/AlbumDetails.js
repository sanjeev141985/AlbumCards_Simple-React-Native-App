import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const {
        headerContentStyle,
        thumbnailSize,
        thumbnailContainerStyle,
        headerFontStyle,
        imageStyle
    } = styles;

    return (
        < Card >
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailSize}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerFontStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{ uri: image }}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </ Button>
            </CardSection>
        </Card >
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    headerFontStyle: {
        fontSize: 18
    },

    thumbnailSize: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        //alignItem: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetails;
