// src/components/Task.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Task = ({ task, completed, onTaskAction }) => {
  return (
    <View style={styles.task}>
      <Text style={completed ? styles.completedText : styles.text}>{task}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onTaskAction('complete')}>
          <Icon name="check" size={20} color="#0fff47" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onTaskAction('delete')}>
          <Icon name="trash" size={20} color="#ff170f" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#989',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    textDecorationLine: 'none',
    color: '#2d2d2d',
  },
  completedText: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'gray',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 5,
  },
});

export default Task;
