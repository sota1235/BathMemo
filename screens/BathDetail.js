import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Navigator from 'native-navigation';
import Screen from '../components/Screen';
import { BATHDETAIL } from '../routes';

export default class BathDetail extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Bath Detail Screen
          </Text>
          <Button
            title="Pop"
            onPress={() => Navigator.pop()}
          />
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
