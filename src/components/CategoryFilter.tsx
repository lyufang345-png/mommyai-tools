import React from 'react';
import { CategoryFilterType } from '../types';
import { CATEGORIES } from '../data/tools';

interface CategoryFilterProps {
  selectedCategory: CategoryFilterType;
  onSelectCategory: (category: CategoryFilterType) => void;
  categoryCounts: Record<CategoryFilterType, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}) => {
  return (
    <div className="w-full flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar py-2.5">
      <div 
        role="tablist" 
        aria-label="Filter kategori tools" 
        className="inline-flex items-center gap-2 min-w-max flex-nowrap pl-0.5 pr-6 sm:pr-8"
      >
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;
          const count = categoryCounts[category] ?? 0;

          return (
            <button
              key={category}
              id={`category-chip-${category.toLowerCase()}`}
              role="tab"
              aria-selected={isSelected}
              onClick={() => onSelectCategory(category)}
              type="button"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 select-none active:scale-95 ${
                isSelected
                  ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/25 ring-2 ring-orange-600/20'
                  : 'bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-50 border border-stone-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.02)]'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-medium transition-colors ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-stone-100 text-stone-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
