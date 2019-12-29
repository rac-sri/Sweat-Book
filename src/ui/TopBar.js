import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Topbar = props => (
  <View style={[styles.container, props.styles]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1,
  },
});
