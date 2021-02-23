import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {counterSelector, increment, decrement} from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();

  const {value} = useSelector(counterSelector);

  const onIncrementPressed = () => {
    dispatch(increment());
  };

  const onDecrementPressed = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onDecrementPressed}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={onIncrementPressed}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: '#e9e5e5',
  },
  count: {
    fontSize: 16,
    marginHorizontal: 8,
  },
});

export default Counter;
