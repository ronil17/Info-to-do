import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();

  const handleAdd = () => {
    if (title.trim()) {
      addTask(title);
      setTitle('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
