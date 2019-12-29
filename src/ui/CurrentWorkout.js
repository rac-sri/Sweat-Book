import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Topbar} from './TopBar';

export const CurrentWorkout = () => (
  <View>
    <View style={styles.topbar}>
      <Topbar>
        <Text style={styles.textbar}>CurrentWorkout</Text>
      </Topbar>
    </View>
    <Text>currentWorksout</Text>
  </View>
);

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    height: 50,
    borderBottomColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {justifyContent: 'center', alignItems: 'center'},
  textbar: {
    color: 'white',
    fontSize: 30,
  },
});
