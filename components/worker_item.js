import { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export default function WorkerItem({ item, onPress }) {
    //console.log('worker: ', item);
  return (
    <Pressable style={styles.container} onPress={() => onPress(worker)}>
      <Text style={styles.circle}>
        {item.worker.name.charAt(0).toUpperCase()}</Text>
      <Text style={styles.name}>
        {item.worker.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    alignContent: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    color: 'white',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    backgroundColor: 'tomato',
    marginLeft: 10,
    marginRight: 20,
  },
  name: {
    fontSize: 15,
    height: 50,
    textAlignVertical: 'center',
  },
});