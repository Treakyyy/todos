import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoFilters from './TodoFilters';

describe('TodoFilters', () => {
  it('отображает кнопки фильтрации', () => {
    const selectedFilter = 'All';
    const onFilterChange = jest.fn();

    const { getByText } = render(
      <TodoFilters selectedFilter={selectedFilter} onFilterChange={onFilterChange} />
    );

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('вызывает функцию onFilterChange при выборе фильтра', () => {
    const selectedFilter = 'All';
    const onFilterChange = jest.fn();

    const { getByText } = render(
      <TodoFilters selectedFilter={selectedFilter} onFilterChange={onFilterChange} />
    );

    fireEvent.click(screen.getByText('Completed'));

    expect(onFilterChange).toHaveBeenCalledWith('Completed');
  });
});