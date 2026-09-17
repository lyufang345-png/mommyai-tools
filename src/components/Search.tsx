import React from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

interface SearchProps {
  query: string;
  onQueryChange: (val: string) => void;
  resultCount?: number;
}

export const Search: React.FC<SearchProps> = ({ query, onQueryChange, resultCount }) => {
  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-stone-400">
          <SearchIcon className="w-5 h-5 text-stone-400" />
        </div>
        
        <input
          id="tools-search-input"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Cari tools..."
          className="w-full pl-11 pr-11 py-3.5 sm:py-4 rounded-2xl bg-white border border-stone-200/90 text-stone-900 placeholder:text-stone-400 text-base shadow-[0_2px_12px_rgba(0,0,0,0.03)] focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
        />

        {query && (
          <button
            id="clear-search-button"
            type="button"
            onClick={() => onQueryChange('')}
            className="absolute right-3.5 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            aria-label="Hapus pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {query && typeof resultCount === 'number' && (
        <div className="absolute left-2 -bottom-6 text-xs text-stone-500 font-medium">
          Ditemukan <span className="text-orange-600 font-semibold">{resultCount}</span> tools
        </div>
      )}
    </div>
  );
};
