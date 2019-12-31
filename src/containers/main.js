import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';
import {CurrentWorkout} from './CurrentWorkout';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 0,
    };
  }

  handleTabChange = ({i}) => {
    this.setState({activeTab: i});
  };
  render() {
    return (
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1">
          <LinearGradient
            colors={['#52EDC7', '#5AC8FB']}
            style={{height: Dimensions.get('window').height}}>
            <CurrentWorkout tabLabel="+" activeTab={this.state.activeTab} />
            <Icon
              name="plus"
              size={30}
              color="#900"
              style={{top: 300, left: 200}}
            />
          </LinearGradient>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </ViewPager>
    );
  }
}
const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});
