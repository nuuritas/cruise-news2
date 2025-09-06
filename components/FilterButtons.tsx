import React from 'react';
import { categories } from '../data/articles';

interface FilterButtonsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex gap-2 lg:gap-3 mb-4 lg:mb-6 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`flex h-8 lg:h-9 shrink-0 items-center justify-center gap-x-2 rounded-md px-3 lg:px-4 text-xs lg:text-sm font-medium transition-colors ${
            activeCategory === category
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
