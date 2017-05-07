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
import CalendarComponent from 'react-native-calendar-component';
import { CALENDAR, RECORDBATH, BATHDETAIL } from '../routes';

export default class Calendar extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <CalendarComponent />
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
});
