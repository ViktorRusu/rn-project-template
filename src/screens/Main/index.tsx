import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Brand} from '../../components';

const MainScreen = () => {
  return (
    <View style={styles.root}>
      <Brand />
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
