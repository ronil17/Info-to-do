import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskStats from './components/TaskStats';
import { useTaskContext } from './context/TaskContext';

const App: React.FC = () => {
  const { addTask } = useTaskContext();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      
      <div className="w-full max-w-md">
        {/* Task Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
        
        {/* Task Filter */}
        <TaskFilter />

        {/* Task Stats */}
        <TaskStats />

        {/* Task List */}
        <TaskList />
      </div>
    </div>
  );
};

export default App;
