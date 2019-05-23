/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ...this.splitDate(new Date())
    }

    this.init()
  }

  init () {
    setInterval(() => {
      this.setState(
        this.splitDate(new Date())
      )
    }, 1000)
  }

  splitDate (date) {
    const result = {
      years: date.getFullYear(),
      mounth: date.getMonth() + 1,
      days: date.getDate(),
      week: date.getDay(),

      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    }

    const weekMap = {
      '00': '天',
      '01': '一',
      '02': '二',
      '03': '三',
      '04': '四',
      '05': '五',
      '06': '六',
    }

    for (const key in result) {
      result[key] = result[key] >= 10 ? result[key] : '0' + result[key]
      if (key === 'week') result[key] = weekMap[result[key]]
    }
    
    return result
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>

        <View style={styles.timeContainer}>
          <Text style={styles.time}>{`${this.state.hours}:${this.state.minutes}`}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text style={styles.date}>{`${this.state.years}年${this.state.mounth}月${this.state.days}日  周${this.state.week}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
  },

  timeContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  dateContainer: {
    height: '20%',
    justifyContent: 'center'
  },

  time: {
    color: '#fff',
    fontSize: 140,
    textAlign: 'center'
  },

  date: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  }
});
