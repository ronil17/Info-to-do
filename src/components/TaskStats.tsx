import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskStats: React.FC = () => {
  const { tasks } = useTaskContext();

  const completedCount = tasks.filter(task => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="task-stats">
      <span>Completed: {completedCount}</span>
      <span>Pending: {pendingCount}</span>
    </div>
  );
};

export default TaskStats;
