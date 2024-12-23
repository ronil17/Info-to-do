import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from '../context/TaskContext';

const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
