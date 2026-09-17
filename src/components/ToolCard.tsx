import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ToolItem } from '../types';
import { ToolCoverGraphic } from './ToolCoverGraphic';

interface ToolCardProps {
  tool: ToolItem;
  onOpenPlaceholderAlert?: (toolName: string) => void;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onOpenPlaceholderAlert }) => {
  const isPlaceholderUrl = !tool.url || tool.url === '#' || tool.url.startsWith('#');

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPlaceholderUrl) {
      e.preventDefault();
      if (onOpenPlaceholderAlert) {
        onOpenPlaceholderAlert(tool.name);
      } else {
        alert(`Link untuk tool "${tool.name}" akan segera tersedia.`);
      }
    }
  };

  const categoryStyles: Record<string, string> = {
    Content: 'bg-stone-100 text-stone-700 border-stone-200/80',
    Design: 'bg-orange-50 text-orange-700 border-orange-200/80',
    Video: 'bg-amber-50 text-amber-800 border-amber-200/80',
    Affiliate: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    Education: 'bg-sky-50 text-sky-800 border-sky-200/80',
  };

  const badgeClass = categoryStyles[tool.category] || 'bg-stone-100 text-stone-700 border-stone-200';

  return (
    <article
      id={`tool-card-${tool.id}`}
      className="group flex flex-col bg-white rounded-2xl border border-stone-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-orange-200/90 transition-all duration-200 hover:-translate-y-1 overflow-hidden h-full"
    >
      {/* 1. Cover Image Area */}
      <div className="relative">
        <ToolCoverGraphic tool={tool} />
        
        {/* Category Badge placed nicely over the visual or in header */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold border backdrop-blur-sm shadow-xs ${badgeClass}`}>
            {tool.category}
          </span>
          {tool.badge && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-orange-600 text-white shadow-xs">
              {tool.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 flex flex-col p-4 sm:p-5 justify-between">
        <div>
          {/* 2. Tool Name */}
          <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight group-hover:text-orange-600 transition-colors">
            {tool.name}
          </h3>

          {/* 3. Short Description */}
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
            {tool.description}
          </p>
        </div>

        {/* 5. Button: Buka Tool */}
        <div className="mt-4 pt-3 border-t border-stone-100">
          <a
            href={tool.url}
            onClick={handleButtonClick}
            target="_blank"
            rel="noopener noreferrer"
            id={`open-tool-button-${tool.id}`}
            aria-label={`Buka Tool ${tool.name} di tab baru`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 shadow-sm shadow-orange-600/20 transition-all duration-150 active:scale-[0.98] min-h-[42px]"
          >
            <span>Buka Tool</span>
            <ExternalLink className="w-4 h-4 opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
};
