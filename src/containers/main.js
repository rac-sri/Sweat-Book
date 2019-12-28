import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export const Main = () => {
  return (
    <ScrollableTabView>
      <Text tabLabel="Tab #1">My</Text>
      <Text tabLabel="Tab #2">favorite</Text>
      <Text tabLabel="Tab #3">project</Text>
    </ScrollableTabView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
