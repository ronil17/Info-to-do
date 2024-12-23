import React, { createContext, useContext, useState } from 'react';

// Define the Task type
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Define the context type
interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
  filter: 'All' | 'Completed' | 'Pending';
  setFilter: (filter: 'All' | 'Completed' | 'Pending') => void;
}

// Create the context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Hook to use the context
export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

// TaskProvider Component
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'All' | 'Completed' | 'Pending'>('All');

  // Add a new task
  const addTask = (title: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title, completed: false },
    ]);
  };

  // Delete a task by ID
  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks based on the current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true; // 'All'
  });

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        deleteTask,
        toggleTaskCompletion,
        filter,
        setFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
