import React from 'react';
import { Search } from './Search';
import { CategoryFilter } from './CategoryFilter';
import { CategoryFilterType } from '../types';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedCategory: CategoryFilterType;
  onSelectCategory: (cat: CategoryFilterType) => void;
  categoryCounts: Record<CategoryFilterType, number>;
  resultCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  resultCount,
}) => {
  return (
    <section 
      id="hero-section"
      className="pt-6 pb-4 sm:pt-8 sm:pb-6 text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-stone-900 tracking-tight leading-[1.18]">
          Semua Tools AI MommyAI dalam{' '}
          <span className="text-orange-600 inline-block">
            Satu Tempat
          </span>
        </h1>

        {/* Supporting text */}
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
          Pilih tools yang kamu butuhkan dan mulai berkarya dengan AI.
        </p>

        {/* Search Field */}
        <div className="mt-5 sm:mt-6">
          <Search 
            query={searchQuery} 
            onQueryChange={onSearchChange} 
            resultCount={resultCount}
          />
        </div>

        {/* Category Filter */}
        <div className="mt-4 sm:mt-5">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={onSelectCategory}
            categoryCounts={categoryCounts}
          />
        </div>
      </div>
    </section>
  );
};
