import React from 'react';
import './TodoInput.css'

interface TodoInputProps {
    inputText: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAddTodo: () => void;
  }
  
function TodoInput({ inputText, onInputChange, onAddTodo }: TodoInputProps) {
    return (
        <div className="add-todo">
            <input
                type="text"
                placeholder="Add a new todo..."
                value={inputText}
                onChange={onInputChange}
            />
            <button className='button' onClick={onAddTodo}>Add</button>
        </div>
    );
}

  export default TodoInput;