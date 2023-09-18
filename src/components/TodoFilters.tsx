import React from 'react';
import './TodoFilters.css'

enum Filter {
  All = 'All',
  Completed = 'Completed',
  Active = 'Active',
}

interface TodoFiltersProps {
  selectedFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

function TodoFilters({ selectedFilter, onFilterChange }: TodoFiltersProps) {
  return (
    <div>
      <button className='button' onClick={() => onFilterChange(Filter.All)}>All</button>
      <button className='button' onClick={() => onFilterChange(Filter.Completed)}>Completed</button>
      <button className='button' onClick={() => onFilterChange(Filter.Active)}>Active</button>
    </div>
  );
}

export default TodoFilters;