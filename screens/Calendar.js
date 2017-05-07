import React, { Component } from 'react';
import Navigator from 'native-navigation';
import {
  StyleSheet,
  View,
} from 'react-native';
import moment from 'moment';
import Screen from '../components/Screen';
import CalendarComponent from 'react-native-calendar-component';
import { CALENDAR, RECORDBATH, BATHDETAIL } from '../routes';

export default class Calendar extends Component {
  handlePrevButtonPress(e) {
    const { date } = this.props;
    const prevDate = moment(date).subtract(1, 'months').toString();
    Navigator.push(
      CALENDAR, { date: prevDate }
    );
  }

  handleNextButtonPress(e) {
    const { date } = this.props;
    const nextDate = moment(date).add(1, 'months').toString();
    Navigator.push(
      CALENDAR, { date: nextDate }
    );
  }

  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <CalendarComponent
            date={new Date(this.props.date)}
            onPrevButtonPress={this.handlePrevButtonPress.bind(this)}
            onNextButtonPress={this.handleNextButtonPress.bind(this)}
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

Calendar.defaultProps = {
  date: moment().toString(),
}
