import React from 'react';
import { ToolItem } from '../types';
import { ToolCard } from './ToolCard';
import { EmptyState } from './EmptyState';

interface ToolsGridProps {
  tools: ToolItem[];
  onResetFilters: () => void;
  onOpenPlaceholderAlert?: (toolName: string) => void;
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({
  tools,
  onResetFilters,
  onOpenPlaceholderAlert,
}) => {
  if (tools.length === 0) {
    return <EmptyState onReset={onResetFilters} />;
  }

  return (
    <section 
      id="tools-grid-section" 
      aria-label="Daftar Tools MommyAI"
      className="w-full"
    >
      <div 
        id="tools-cards-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-6 lg:gap-8"
      >
        {tools.map((tool) => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            onOpenPlaceholderAlert={onOpenPlaceholderAlert}
          />
        ))}
      </div>
    </section>
  );
};
