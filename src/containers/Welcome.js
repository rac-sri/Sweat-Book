import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Welcome = props => (
  <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Exercises!</Text>
    </View>
    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitle}>Log your fitness</Text>
    </View>
    <View style={{padding: 70, top: 280}}>
      <TouchableOpacity style={styles.button}>
        <Button
          title="Start Workout"
          color="#k1f4ff"
          onPress={props.startWorkout}
        />
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContianer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  title: {
    fontSize: 48,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  },
  lastWorkoutContainer: {
    flex: 0.3,
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: 'white',
    padding: 60,
  },
  button: {
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#EADCDC',
  },
});
