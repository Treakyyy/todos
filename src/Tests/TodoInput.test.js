import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './TodoInput';

test('добавление новой задачи', () => {
  const onInputChange = jest.fn();
  const onAddTodo = jest.fn();
  const inputText = 'Новая задача';

  render(
    <TodoInput
      inputText={inputText}
      onInputChange={onInputChange}
      onAddTodo={onAddTodo}
    />
  );

  const inputElement = screen.getByPlaceholderText('Add a new todo...');
  fireEvent.change(inputElement, { target: { value: inputText } });

  expect(onInputChange).toHaveBeenCalledWith(expect.anything());

  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);

  expect(onAddTodo).toHaveBeenCalledWith(expect.anything());

  expect(inputElement).toHaveValue('');
});