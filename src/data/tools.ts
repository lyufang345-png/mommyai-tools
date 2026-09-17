import { ToolItem, CategoryFilterType } from '../types';

export const CATEGORIES: readonly CategoryFilterType[] = [
  'Semua',
  'Content',
  'Design',
  'Video',
  'Affiliate',
  'Education',
] as const;

export const INITIAL_TOOLS: ToolItem[] = [
  {
    id: 'character-sheet',
    name: 'Character Sheet',
    description: 'Buat character sheet AI yang konsisten untuk berbagai kebutuhan kreatif.',
    category: 'Design',
    image: '',
    url: 'https://chatgpt.com/g/g-6a73ee6f5a6881919e33a7a88714a7fc-momai-character-sheet-master',
    badge: 'Populer',
  },
  {
    id: 'food-ads-creator',
    name: 'Food Ads Creator',
    description: 'Buat visual iklan makanan yang menarik dari foto produk.',
    category: 'Design',
    image: '',
    url: 'https://share.gemini.google/LRNXDpoD7eKn',
  },
  {
    id: 'worksheet-storybook',
    name: 'Worksheet & Storybook',
    description: 'Buat worksheet dan storybook anak dengan bantuan AI.',
    category: 'Education',
    image: '',
    url: 'https://chatgpt.com/g/g-6a64c660a6248191ab786debfefdf48a-momai-storybook-worksheet-builder',
  },
  {
    id: 'infographic-studio',
    name: 'Infographic Studio',
    description: 'Buat infografis menarik dari topik atau informasi pilihanmu.',
    category: 'Content',
    image: '',
    url: 'https://chatgpt.com/g/g-6a71c180b39481918f69aa1837177e3b-momai-infographic-studio',
  },
  {
    id: 'affiliate-content-builder-pro',
    name: 'Affiliate Content Builder Pro',
    description: 'Buat konsep dan materi konten affiliate dengan lebih cepat.',
    category: 'Affiliate',
    image: '',
    url: 'https://chatgpt.com/g/g-6a7d290ad1788191999a25385b346fdf-momai-affiliate-content-builder-pro',
    badge: 'Pro',
  },
  {
    id: 'animation-builder',
    name: 'Animation Builder',
    description: 'Buat konsep animasi, storyboard, hingga prompt produksi AI.',
    category: 'Video',
    image: '',
    url: 'https://chatgpt.com/g/g-6a64cc7cf27c81919caba33553cad950-momai-animation-builder',
  },
  {
    id: 'selfie-studio',
    name: 'Selfie Studio',
    description: 'Buat konsep dan prompt konten AI selfie yang konsisten.',
    category: 'Content',
    image: '',
    url: 'https://chatgpt.com/g/g-6a7409d69ea081918c58751650dc00f8-momai-selfie-studio',
  },
  {
    id: 'motion-graphic-studio',
    name: 'Motion Graphic Studio',
    description: 'Buat storyboard dan prompt motion graphic untuk berbagai konten.',
    category: 'Video',
    image: '',
    url: 'https://gemini.google.com/gem/10uvi0lMwZKoYXkzYX4-nu7TwxuIZw1Hj?usp=sharing',
  },
  {
    id: 'carousel-studio',
    name: 'Carousel Studio',
    description: 'Buat carousel visual untuk konten edukasi, promosi, dan sosial media.',
    category: 'Content',
    image: '',
    url: 'https://chatgpt.com/g/g-6a69e176e8c48191ab8b79e0aa2a5d37-mom-ai-carousel-studio',
  },
];

export const NOTION_TUTORIAL_URL: string = '#tutorial-notion-placeholder';
