import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('отображает список задач', () => {
    const todos = [
      { text: 'Задача 1', completed: false },
      { text: 'Задача 2', completed: true },
    ];

    const { getByText } = render(<TodoList todos={todos} onDeleteTodo={() => {}} onToggleComplete={() => {}} />);

    expect(screen.getByText('Задача 1')).toBeInTheDocument();
    expect(screen.getByText('Задача 2')).toBeInTheDocument();
  });

  it('вызывает функцию onDeleteTodo при удалении задачи', () => {
    const todos = [{ text: 'Задача', completed: false }];
    const onDeleteTodo = jest.fn();

    const { getByText } = render(<TodoList todos={todos} onDeleteTodo={onDeleteTodo} onToggleComplete={() => {}} />);
    const deleteButton = expect(screen.getByText('Delete'));

    fireEvent.click(deleteButton);

    expect(onDeleteTodo).toHaveBeenCalledTimes(1);
  });

  it('вызывает функцию onToggleComplete при изменении состояния задачи', () => {
    const todos = [{ text: 'Задача', completed: false }];
    const onToggleComplete = jest.fn();

    const { getByText } = render(<TodoList todos={todos} onDeleteTodo={() => {}} onToggleComplete={onToggleComplete} />);
    const checkbox = expect(screen.getByText('Задача')) ;

    fireEvent.click(checkbox);

    expect(onToggleComplete).toHaveBeenCalledTimes(1);
  });
});