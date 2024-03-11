import React from 'react';
import FilterLink from './link';

const FILTER_TITLES = ['All', 'Active', 'Completed'];

const Footer = ({
  active,
  completed,
  currentFilter,
  onFilter,
  onDeleteCompleted,
}: {
  active: number;
  completed: number;
  currentFilter: string;
  onFilter: (filter: string) => void;
  onDeleteCompleted: () => void;
}) => {
  const itemWord = active === 1 ? 'item' : 'items';
  return (
    <footer className="footy py-[10px] px-[15px] text-center border-t border-solid border-[#e6e6e6]">
      <span className="text-left">
        <strong>{active || 'No'}</strong> {itemWord} left
      </span>
      <ul className="filters relative">
        {FILTER_TITLES.map(filter => (
          <li key={filter}>
            <FilterLink
              onClick={() => onFilter(filter)}
              selected={filter === currentFilter}
            >
              {filter}
            </FilterLink>
          </li>
        ))}
      </ul>
      {completed > 0 && (
        <button className="clear-completed" onClick={() => onDeleteCompleted()}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
