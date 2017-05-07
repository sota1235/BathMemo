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
import { CALENDAR, RECORDBATH, BATHDETAIL } from '../routes';

export default class Calendar extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Calendar Screen
          </Text>
          <Text>
            Push Buttons
          </Text>
          <Button
            title="Record Bath"
            onPress={() => Navigator.push(RECORDBATH)}
          />
          <Button
            title="Bath Detail"
            onPress={() => Navigator.push(BATHDETAIL)}
          />
          <Text>
            Other Buttons
          </Text>
          <Button
            title="Present"
            onPress={() => Navigator.present(CALENDAR)}
          />
          <Button
            title="Pop"
            onPress={() => Navigator.pop()}
          />
          <Button
            title="Dismiss"
            onPress={() => Navigator.dismiss()}
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
