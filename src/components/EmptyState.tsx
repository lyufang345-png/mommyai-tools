import React from 'react';
import { SearchX, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onReset }) => {
  return (
    <div 
      id="tools-empty-state"
      className="w-full max-w-md mx-auto py-16 px-6 text-center flex flex-col items-center justify-center bg-white/70 border border-stone-200/80 rounded-3xl shadow-sm my-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4">
        <SearchX className="w-8 h-8 text-orange-600" />
      </div>

      <h3 className="text-xl font-bold text-stone-900 tracking-tight">
        Tools tidak ditemukan
      </h3>

      <p className="mt-2 text-sm sm:text-base text-stone-600 leading-relaxed max-w-xs">
        Coba gunakan kata kunci atau kategori lainnya.
      </p>

      <button
        id="reset-search-filter-button"
        type="button"
        onClick={onReset}
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors active:scale-95"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Reset Pencarian & Kategori</span>
      </button>
    </div>
  );
};
