import React, { useState } from 'react';
import './TodoList.css'


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
  const [completedTodos, setCompletedTodos] = useState<boolean[]>(
    new Array(todos.length).fill(false)
  );

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li className="todo-list" key={index}>
            <label>
              <div className='x'>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleComplete(index)}
                />
                <span className={completedTodos[index] ? 'completed' : ''}>
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