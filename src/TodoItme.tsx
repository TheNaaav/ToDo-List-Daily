import React from 'react';

interface TodoItemProps {
  todo: { task: string; completed: boolean };
  toggleComplete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete }) => {
  return (
    <div className="flex items-center space-x-2 mb-3">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        className="h-5 w-5"
      />
      <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.task}</span>
    </div>
  );
}

export default TodoItem;
