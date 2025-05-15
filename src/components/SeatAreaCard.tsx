'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SeatArea } from '@/lib/data/circuits';

interface SeatAreaCardProps {
  seatArea: SeatArea;
}

export default function SeatAreaCard({ seatArea }: SeatAreaCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Determine if the card should have a slightly different style if it's, for example, a premium area
  // For now, let's assume a standard card style for all.

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl ring-1 ring-slate-900/5">
      {/* Image Carousel Section (Optional, could be simplified for a card) */}
      {seatArea.viewImages && seatArea.viewImages.length > 0 && (
        <div className="relative aspect-video bg-slate-200 dark:bg-slate-700">
          <Image 
            src={seatArea.viewImages[activeImageIndex]}
            alt={`View from ${seatArea.name}`}
            fill
            className="object-cover"
            onError={(e) => { 
              // Attempt to hide the image and show placeholder text or a default image
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const placeholder = parent.querySelector('.image-placeholder');
                if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
              }
              e.currentTarget.style.display = 'none'; 
            }}
          />
          <div className="image-placeholder absolute inset-0 flex items-center justify-center text-slate-500 dark:text-slate-400" style={{ display: 'none' }}>
            No view image
          </div>
          {seatArea.viewImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {seatArea.viewImages.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${ 
                    index === activeImageIndex 
                      ? 'bg-rose-500 scale-125' 
                      : 'bg-white/70 hover:bg-white'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click or other parent events
                    setActiveImageIndex(index);
                  }}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">{seatArea.name}</h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {seatArea.description}
        </p>
        
        {/* Price */}
        <div className="mb-4">
          <p className="text-rose-600 dark:text-rose-400 font-semibold text-md sm:text-lg">
            {seatArea.price.range 
              ? `${seatArea.price.currency} ${seatArea.price.range[0]} - ${seatArea.price.range[1]}`
              : seatArea.price.amount
              ? `${seatArea.price.currency} ${seatArea.price.amount}`
              : 'Price not available'
            }
          </p>
        </div>
        
        {/* Collapsible Details (Example - could be expanded with a button) */}
        {/* For simplicity, we'll show some key advantages directly */}
        {seatArea.advantages.length > 0 && (
          <div className="mb-3">
            <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-1 text-xs sm:text-sm uppercase tracking-wider">Key Advantages</h4>
            <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300 text-sm">
              {seatArea.advantages.slice(0, 2).map((adv, i) => ( // Show first 2 advantages
                <li key={i}>{adv}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Call to action or more info link (optional) */}
        {/* 
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <button className="text-sm font-medium text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 w-full text-left">
            View Full Details & Tips &rarr;
          </button>
        </div>
        */}
      </div>
    </div>
  );
} 