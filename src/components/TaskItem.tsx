import React from 'react';
import { Task } from '../context/TaskContext';
import { useTaskContext } from '../context/TaskContext';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { toggleTaskCompletion, deleteTask } = useTaskContext();

  return (
    <div className="task-item flex items-center justify-between p-2 border-b">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="cursor-pointer"
        />
        <span
          className={`${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white  px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
