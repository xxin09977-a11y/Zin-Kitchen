import React from 'react';
import { motion } from 'motion/react';

export const RecipeCardSkeleton = () => {
  return (
    <div className="interactive-glass p-4 rounded-[24px] flex flex-col gap-2 overflow-hidden w-full opacity-60">
      <div className="flex justify-between items-start gap-3 relative z-10 w-full animate-pulse">
        <div className="space-y-2 w-full">
          <div className="h-5 bg-white/20 w-3/4 rounded-full"></div>
          <div className="h-4 bg-white/10 w-1/2 rounded-full"></div>
        </div>
        <div className="flex gap-1">
          <div className="w-7 h-7 bg-white/10 rounded-full"></div>
          <div className="w-7 h-7 bg-white/10 rounded-full"></div>
        </div>
      </div>
      <div className="h-32 bg-white/5 rounded-lg mt-2 relative z-10 animate-pulse"></div>
      <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4 animate-pulse relative z-10">
        <div className="h-3 bg-white/10 rounded-full w-20"></div>
        <div className="h-3 bg-white/10 rounded-full w-12"></div>
      </div>
    </div>
  );
};
