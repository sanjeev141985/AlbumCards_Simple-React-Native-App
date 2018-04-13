// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('album', () => App);


//imprt a library to create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
const myApp = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//Render it to the device
AppRegistry.registerComponent('album', () => myApp);
