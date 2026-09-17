import React from 'react';
import { 
  User,
  UserCheck,
  Eye,
  UtensilsCrossed, 
  BookOpen, 
  BarChart3, 
  Sparkles, 
  Film, 
  Camera, 
  Activity, 
  Layers
} from 'lucide-react';
import { ToolItem } from '../types';

interface ToolCoverGraphicProps {
  tool: ToolItem;
}

export const ToolCoverGraphic: React.FC<ToolCoverGraphicProps> = ({ tool }) => {
  return (
    <div className="relative w-full h-36 sm:h-38 overflow-hidden rounded-t-2xl flex items-center justify-center select-none">
      {getCoverVisual(tool.id, tool.category)}
    </div>
  );
};

function getCoverVisual(id: string, category: string) {
  switch (id) {
    case 'character-sheet':
      return (
        <div className="w-full h-full bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-stone-100 flex items-center justify-center relative p-4 select-none">
          {/* Dotted background matching visual language of existing covers */}
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Character Reference Sheet UI illustration */}
          <div className="relative flex items-center gap-3">
            {/* Main Character Person Card */}
            <div className="w-20 h-24 rounded-2xl bg-white shadow-md border border-orange-100 flex flex-col items-center justify-between p-2 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full flex items-center justify-between px-0.5">
                <span className="text-[9px] font-bold text-orange-600 uppercase tracking-wider">Sheet</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100/80 flex items-center justify-center text-orange-600">
                <User className="w-6 h-6" />
              </div>
              <div className="w-full flex justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-stone-300" />
              </div>
            </div>

            {/* Poses and Angle Indicator UI */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 bg-white/95 px-2.5 py-1 rounded-lg border border-orange-100 shadow-xs">
                <span className="text-[10px] font-semibold text-stone-800">Character Turnaround</span>
              </div>

              {/* Small pose/profile indicator shapes */}
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-lg bg-white shadow-xs border border-orange-200/80 flex items-center justify-center text-orange-600" title="Front Pose">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-white shadow-xs border border-stone-200/80 flex items-center justify-center text-stone-600" title="Side Profile">
                  <UserCheck className="w-3.5 h-3.5 text-stone-600" />
                </div>
                <div className="w-7 h-7 rounded-lg bg-white shadow-xs border border-stone-200/80 flex items-center justify-center text-stone-500" title="Detail / Eyes">
                  <Eye className="w-3.5 h-3.5 text-stone-500" />
                </div>
              </div>

              {/* Badges / Indicators */}
              <div className="flex items-center gap-1 text-[9px]">
                <span className="font-medium text-stone-500">Pose</span>
                <span className="text-stone-300">•</span>
                <span className="font-medium text-stone-500">Angle</span>
                <span className="text-stone-300">•</span>
                <span className="font-semibold text-orange-600">Consistent</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'food-ads-creator':
      return (
        <div className="w-full h-full bg-gradient-to-br from-orange-50/90 via-amber-50/40 to-stone-100 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-center justify-center">
            {/* Camera & Food frame aesthetic */}
            <div className="relative w-24 h-24 rounded-2xl bg-white shadow-md border border-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-105 transition-transform duration-300">
              <UtensilsCrossed className="w-8 h-8" />
              <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-orange-600 text-[10px] font-semibold text-white rounded-full shadow-sm">
                HD Ads
              </div>
            </div>
          </div>
        </div>
      );

    case 'worksheet-storybook':
      return (
        <div className="w-full h-full bg-gradient-to-br from-amber-50/90 via-emerald-50/30 to-stone-100 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-7 h-7" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-xs font-semibold text-stone-700">Story & Learn</span>
              </div>
              <div className="w-20 h-2 rounded-full bg-amber-200/80" />
              <div className="w-14 h-2 rounded-full bg-stone-200" />
            </div>
          </div>
        </div>
      );

    case 'infographic-studio':
      return (
        <div className="w-full h-full bg-gradient-to-br from-stone-50 via-orange-50/50 to-stone-100 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-end gap-2 bg-white px-4 py-3 rounded-2xl shadow-md border border-stone-200/70 group-hover:scale-105 transition-transform duration-300">
            <div className="w-4 h-10 bg-orange-200 rounded-t-md" />
            <div className="w-4 h-14 bg-orange-400 rounded-t-md" />
            <div className="w-4 h-18 bg-orange-600 rounded-t-md flex items-center justify-center" />
            <div className="w-4 h-8 bg-stone-200 rounded-t-md" />
            <div className="ml-2 flex items-center justify-center text-stone-600">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      );

    case 'affiliate-content-builder-pro':
      return (
        <div className="w-full h-full bg-gradient-to-br from-orange-100/60 via-amber-50 to-stone-100 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-orange-200/80 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-7 h-7 text-orange-600" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-stone-800 tracking-wide uppercase">Affiliate Pro</span>
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded bg-orange-600 text-[10px] font-bold text-white">Conversion</span>
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-[11px] text-stone-500 font-medium">Viral Hook</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'animation-builder':
      return (
        <div className="w-full h-full bg-gradient-to-br from-stone-100 via-rose-50/40 to-orange-50/60 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-md border border-stone-200/70 group-hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
              <Film className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1">
                <span className="w-3.5 h-3.5 rounded bg-stone-200" />
                <span className="w-3.5 h-3.5 rounded bg-orange-300" />
                <span className="w-3.5 h-3.5 rounded bg-orange-600" />
              </div>
              <span className="text-[11px] font-medium text-stone-600">Storyboard AI</span>
            </div>
          </div>
        </div>
      );

    case 'selfie-studio':
      return (
        <div className="w-full h-full bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-stone-100 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white shadow-md border border-orange-200/70 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-8 h-8" />
            </div>
            <div className="absolute -bottom-1 px-2.5 py-0.5 rounded-full bg-stone-800 text-white text-[10px] font-semibold tracking-wider">
              PORTRAIT
            </div>
          </div>
        </div>
      );

    case 'motion-graphic-studio':
      return (
        <div className="w-full h-full bg-gradient-to-br from-orange-50/80 via-stone-50 to-amber-50/50 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-center gap-2.5 bg-white px-4 py-3 rounded-2xl shadow-md border border-stone-200/70 group-hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-sm shadow-orange-600/30">
              <Activity className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-stone-800">Dynamic Motion</span>
              <span className="text-[11px] text-stone-500 font-medium">60 FPS Prompts</span>
            </div>
          </div>
        </div>
      );

    case 'carousel-studio':
      return (
        <div className="w-full h-full bg-gradient-to-br from-stone-50 via-orange-50/50 to-stone-100 flex items-center justify-center relative p-6">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative flex items-center justify-center">
            {/* Overlapping carousel slide cards */}
            <div className="w-12 h-16 rounded-xl bg-stone-200 -rotate-12 transform shadow-sm opacity-80" />
            <div className="w-14 h-18 rounded-xl bg-orange-100 -rotate-6 transform shadow-sm -ml-5 border border-orange-200/60" />
            <div className="w-16 h-20 rounded-xl bg-white shadow-md flex flex-col items-center justify-center -ml-5 border border-orange-200 z-10 group-hover:scale-105 transition-transform duration-300">
              <Layers className="w-6 h-6 text-orange-600 mb-1" />
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-stone-100 flex items-center justify-center relative p-6">
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
      );
  }
}
