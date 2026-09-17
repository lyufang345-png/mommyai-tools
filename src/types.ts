export type ToolCategory = 'Content' | 'Design' | 'Video' | 'Affiliate' | 'Education';

export type CategoryFilterType = 'Semua' | ToolCategory;

export interface ToolItem {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  image: string;
  url: string;
  badge?: string;
  isPopular?: boolean;
}
