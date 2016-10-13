/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image,
Dimensions
} from 'react-native';

import Selector from "./components/Selector"

export default class example extends Component {
  render() {
      var {height, width} = Dimensions.get('window');

    return (
        <Image source={require("./background.png")} style={{resizeMode: "cover", width: width}}>
              <View style={{paddingTop: 20}}>
              <Text>Picker Test</Text>
                  <Selector title="Pick your language"
                            multiSelect={false}
                  collection={[
                      {id: 1, name: "Item 1"},
                      {id: 2, name: "Item 2"},
                      {id: 3, name: "Item 3"},
                      {id: 4, name: "Item 4"},
                  ]}
                  />
              </View>
        </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
