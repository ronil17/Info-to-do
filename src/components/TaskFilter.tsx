import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskFilter: React.FC = () => {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="task-filter">
      <button
        onClick={() => setFilter('All')}
        className={filter === 'All' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => setFilter('Completed')}
        className={filter === 'Completed' ? 'active' : ''}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('Pending')}
        className={filter === 'Pending' ? 'active' : ''}
      >
        Pending
      </button>
    </div>
  );
};

export default TaskFilter;
