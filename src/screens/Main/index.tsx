import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Brand, Counter} from '../../components';

const MainScreen = () => {
  return (
    <View style={styles.root}>
      <Brand />
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
