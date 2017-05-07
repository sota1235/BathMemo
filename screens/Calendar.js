import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import moment from 'moment';
import Screen from '../components/Screen';
import CalendarComponent from 'react-native-calendar-component';
import { CALENDAR, RECORDBATH, BATHDETAIL } from '../routes';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.date = this.props.date;

    if (this.date === null || this.date === undefined) {
      this.date = moment();
    }
  }

  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <CalendarComponent
            date={this.date.toDate()}
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
});
