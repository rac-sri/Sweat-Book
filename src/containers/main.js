import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

export const Main = () => (
  <ViewPager style={styles.viewPager} initialPage={0}>
    <View key="1">
      <Text>First page</Text>
    </View>
    <View key="2">
      <Text>Second page</Text>
    </View>
  </ViewPager>
);

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
