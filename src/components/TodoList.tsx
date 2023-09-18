import React from 'react';
import './TodoList.css';

interface TodoItem {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  onDeleteTodo: (index: number) => void;
  onToggleComplete: (index: number) => void;
}

function TodoList({ todos, onDeleteTodo, onToggleComplete }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li className="todo-list" key={index}>
            <label>
              <div className='line-through'>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleComplete(index)}
                />
                <span className={todo.completed ? 'completed' : ''}>
                  {todo.text}
                </span>
              </div>
            </label>
            <button className='button' onClick={() => onDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;