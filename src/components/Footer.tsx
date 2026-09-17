import React from 'react';
import { Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { NOTION_TUTORIAL_URL } from '../data/tools';

export const Footer: React.FC = () => {
  const handleTutorialClick = (e: React.MouseEvent) => {
    if (!NOTION_TUTORIAL_URL || NOTION_TUTORIAL_URL.startsWith('#')) {
      e.preventDefault();
      alert('Link Tutorial Notion akan segera tersedia.');
    }
  };

  return (
    <footer 
      id="main-footer"
      className="mt-20 border-t border-stone-200/80 bg-white/60 py-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white shadow-xs">
                <span className="font-extrabold text-sm">M</span>
                <Sparkles className="w-3 h-3 ml-0.5 text-amber-200" />
              </div>
              <h2 className="text-lg font-bold text-stone-900 tracking-tight">
                MommyAI <span className="text-orange-600 font-semibold">Tools</span>
              </h2>
            </div>
            <p className="mt-2 text-sm text-stone-600 max-w-sm">
              Satu tempat untuk mengakses seluruh tools kreatif MommyAI.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href={NOTION_TUTORIAL_URL}
              onClick={handleTutorialClick}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-tutorial-link"
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-orange-600 transition-colors py-1"
            >
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span>Tutorial</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
          <p id="footer-copyright">
            &copy; {new Date().getFullYear()} MommyAI. All rights reserved.
          </p>
          <p className="text-stone-400">
            Koleksi Tools AI Kreatif & Produktivitas
          </p>
        </div>
      </div>
    </footer>
  );
};
