import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Edit3, Trash2 } from 'lucide-react';
import { type Recipe, db } from '../db';
import { cn } from '../lib/utils';
import { ConfirmationDialog } from './ConfirmationDialog';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: () => void;
  onEdit: (e: React.MouseEvent) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick, onEdit }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDelete = async () => {
    await db.recipes.delete(recipe.id!);
    setIsConfirmOpen(false);
  };

  return (
    <>
      <ConfirmationDialog 
        isOpen={isConfirmOpen}
        title="Delete Recipe"
        message={`Are you sure you want to delete "${recipe.title}"? This action cannot be undone.`}
        onConfirm={handleDelete}
        onCancel={() => setIsConfirmOpen(false)}
      />
      <motion.div
        layout
        whileHover={{ scale: 1.015, y: -2 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
        onClick={onClick}
        className="interactive-glass p-4 rounded-[24px] flex flex-col gap-2 group overflow-hidden cursor-pointer"
      >
        {/* Hover Highlight Bloom */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] -translate-x-[-10%] -translate-y-[10%] group-hover:bg-accent/20 group-hover:blur-[60px] transition-all duration-150 pointer-events-none" />
        
        <div className="flex justify-between items-start gap-3 relative z-10">
          <div className="space-y-0.5">
            <h3 className="text-lg font-black leading-tight group-hover:text-accent transition-colors text-white line-clamp-1">{recipe.title}</h3>
          </div>
          <div className="flex gap-1 transition-opacity duration-150">
            <button 
              onClick={onEdit}
              className="p-1.5 hover:bg-white/20 active:scale-90 rounded-full text-white hover:text-bright transition-all duration-150 bg-white/10 border border-white/10 shadow-sm"
            >
              <Edit3 size={13} className="text-white" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsConfirmOpen(true); }}
              className="p-1.5 hover:bg-red-500/30 active:scale-90 rounded-full text-white hover:text-red-300 transition-all duration-150 bg-white/10 border border-white/10 shadow-sm"
            >
              <Trash2 size={13} className="text-white" />
            </button>
          </div>
        </div>
        
        {recipe.imageUrl && (
          <div className="overflow-hidden rounded-lg relative z-10 h-32 bg-white/5">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-white/5">
                   <div className="w-6 h-6 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
                </div>
              )}
             <img 
               src={recipe.imageUrl} 
               alt={recipe.title} 
               referrerPolicy="no-referrer" 
               className={cn("w-full h-full object-cover transition-all duration-500 group-hover:scale-105", imageLoaded ? "opacity-100" : "opacity-0")}
               onLoad={() => setImageLoaded(true)}
             />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t border-white/20 mt-auto relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/60">
            {recipe.ingredients.length} Components
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
            {new Date(recipe.updatedAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}
          </div>
        </div>
      </motion.div>
    </>
  );
};
