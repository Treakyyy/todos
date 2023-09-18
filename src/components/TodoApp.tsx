import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoFilters from './TodoFilters';
import './TodoApp.css'

enum Filter {
  All = 'All',
  Completed = 'Completed',
  Active = 'Active',
}

function TodoApp() {
  interface TodoItem {
    text: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: TodoItem = {
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleFilterChange = (selectedFilter: Filter) => {
    setFilter(selectedFilter);
  };

  const handleToggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case Filter.All:
        return true;
      case Filter.Completed:
        return todo.completed;
      case Filter.Active:
        return !todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className="todo-app">
        <h1>To-Do List</h1>
        <TodoInput
          inputText={inputText}
          onInputChange={handleInputChange}
          onAddTodo={handleAddTodo}
        />
      <div>
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onToggleComplete={handleToggleComplete}
        />
        <TodoFilters
          selectedFilter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default TodoApp;
