import React, { useState } from 'react';
import { Sparkles, Menu, X, ExternalLink, BookOpen, Layers, Home } from 'lucide-react';
import { NOTION_TUTORIAL_URL } from '../data/tools';

interface HeaderProps {
  onHomeClick?: () => void;
  onAllToolsClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick, onAllToolsClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTutorialClick = (e: React.MouseEvent) => {
    if (!NOTION_TUTORIAL_URL || NOTION_TUTORIAL_URL.startsWith('#')) {
      e.preventDefault();
      alert('Link Tutorial Notion akan segera tersedia.');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Left */}
          <div 
            onClick={onHomeClick}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="brand-logo-button"
          >
            {/* MommyAI Logo Placeholder */}
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-sm shadow-orange-500/25 group-hover:bg-orange-500 transition-colors">
              <span className="font-extrabold text-lg tracking-tighter">M</span>
              <Sparkles className="w-3.5 h-3.5 ml-0.5 text-amber-200 animate-pulse" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-stone-900 tracking-tight leading-tight">
                MommyAI <span className="text-orange-600 font-semibold">Tools</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-medium text-stone-500 -mt-0.5">
                Creative AI Tools
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            <button
              onClick={onHomeClick}
              id="nav-home"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
            >
              Home
            </button>
            <button
              onClick={onAllToolsClick}
              id="nav-all-tools"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
            >
              All Tools
            </button>
            <a
              href={NOTION_TUTORIAL_URL}
              onClick={handleTutorialClick}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-tutorial"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold text-orange-700 bg-orange-50 hover:bg-orange-100/80 border border-orange-200/80 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span>Tutorial</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              type="button"
              className="p-2.5 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-dropdown" 
          className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-4 pt-2 pb-4 space-y-2 shadow-lg"
        >
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onHomeClick?.();
            }}
            id="mobile-nav-home"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-stone-800 hover:bg-stone-200/60 transition-colors text-left"
          >
            <Home className="w-5 h-5 text-stone-500" />
            <span>Home</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onAllToolsClick?.();
            }}
            id="mobile-nav-all-tools"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-base font-medium text-stone-800 hover:bg-stone-200/60 transition-colors text-left"
          >
            <Layers className="w-5 h-5 text-stone-500" />
            <span>All Tools</span>
          </button>
          <a
            href={NOTION_TUTORIAL_URL}
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleTutorialClick(e);
            }}
            target="_blank"
            rel="noopener noreferrer"
            id="mobile-nav-tutorial"
            className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-orange-800 bg-orange-50 border border-orange-200 hover:bg-orange-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-orange-600" />
              <span>Tutorial Notion</span>
            </div>
            <ExternalLink className="w-4 h-4 text-orange-600 opacity-80" />
          </a>
        </div>
      )}
    </header>
  );
};
