import { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ToolsGrid } from './components/ToolsGrid';
import { Footer } from './components/Footer';
import { INITIAL_TOOLS } from './data/tools';
import { CategoryFilterType, ToolItem } from './types';
import { Sparkles, Info, X } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilterType>('Semua');
  const [placeholderToolNotice, setPlaceholderToolNotice] = useState<string | null>(null);

  // Filter tools dynamically by search query and category
  const filteredTools = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return INITIAL_TOOLS.filter((tool: ToolItem) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'Semua' || tool.category === selectedCategory;

      if (!matchesCategory) return false;

      // Search query filter (matches name, description, category)
      if (!q) return true;

      const matchesName = tool.name.toLowerCase().includes(q);
      const matchesDescription = tool.description.toLowerCase().includes(q);
      const matchesCategoryName = tool.category.toLowerCase().includes(q);

      return matchesName || matchesDescription || matchesCategoryName;
    });
  }, [searchQuery, selectedCategory]);

  // Compute tool counts per category for the filter chips
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilterType, number> = {
      Semua: INITIAL_TOOLS.length,
      Content: 0,
      Design: 0,
      Video: 0,
      Affiliate: 0,
      Education: 0,
    };

    INITIAL_TOOLS.forEach((tool) => {
      if (counts[tool.category] !== undefined) {
        counts[tool.category]++;
      }
    });

    return counts;
  }, []);

  const handleResetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('Semua');
  }, []);

  const handleHomeClick = useCallback(() => {
    handleResetFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [handleResetFilters]);

  const handleAllToolsClick = useCallback(() => {
    handleResetFilters();
    const element = document.getElementById('tools-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [handleResetFilters]);

  const handlePlaceholderAlert = useCallback((toolName: string) => {
    setPlaceholderToolNotice(toolName);
    // Auto-dismiss notification after 4 seconds
    setTimeout(() => {
      setPlaceholderToolNotice((current) => (current === toolName ? null : current));
    }, 4000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans">
      {/* Sticky Header */}
      <Header
        onHomeClick={handleHomeClick}
        onAllToolsClick={handleAllToolsClick}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Search & Category Filter */}
        <Hero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
          resultCount={filteredTools.length}
        />

        {/* Tools Section */}
        <div id="tools-container" className="pt-1 pb-12">
          {/* Active Filter Summary Bar */}
          <div className="flex items-center justify-between mb-5 pb-2 border-b border-stone-200/60">
            <div className="flex items-center gap-2 text-stone-700 font-medium text-sm sm:text-base">
              <span className="font-semibold text-stone-900">
                {selectedCategory === 'Semua' ? 'Semua Tools' : `Kategori: ${selectedCategory}`}
              </span>
              <span className="text-stone-400">&bull;</span>
              <span className="text-stone-500 text-xs sm:text-sm">
                Menampilkan {filteredTools.length} dari {INITIAL_TOOLS.length} tools
              </span>
            </div>

            {(searchQuery || selectedCategory !== 'Semua') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="text-xs sm:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Reset Filter
              </button>
            )}
          </div>

          {/* Dynamic Tools Grid */}
          <ToolsGrid
            tools={filteredTools}
            onResetFilters={handleResetFilters}
            onOpenPlaceholderAlert={handlePlaceholderAlert}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modern Notice Toast for placeholder URLs */}
      {placeholderToolNotice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 max-w-md bg-stone-900 text-white px-5 py-4 rounded-2xl shadow-2xl border border-stone-800 flex items-start gap-3.5 animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          <div className="w-8 h-8 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              Tautan Siap Dikonfigurasi
            </p>
            <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
              Tool <strong className="text-orange-400">"{placeholderToolNotice}"</strong> saat ini masih menggunakan placeholder URL (<code className="text-stone-400">#</code>). Tautan eksternal siap diisi.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPlaceholderToolNotice(null)}
            className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors"
            aria-label="Tutup notifikasi"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
