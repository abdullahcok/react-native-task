// TaskList.js
import React from 'react';
import { FlatList } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks, handleTaskAction }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Task
          task={item.text}
          completed={item.completed}
          onTaskAction={(action) => handleTaskAction(index, action)}
        />
      )}
    />
  );
};

export default TaskList;
