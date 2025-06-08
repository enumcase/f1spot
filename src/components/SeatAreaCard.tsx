'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SeatArea } from '@/lib/data/circuits';

interface SeatAreaCardProps {
  seatArea: SeatArea;
}

// Simple Chevron Down Icon Component
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Simple Chevron Up Icon Component  
const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

export default function SeatAreaCard({ seatArea }: SeatAreaCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if the card should have a slightly different style if it's, for example, a premium area
  // For now, let's assume a standard card style for all.

  return (
    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600">
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
        
        {/* Quick Advantages (Always visible) */}
        {seatArea.advantages.length > 0 && (
          <div className="mb-3">
            <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-1 text-xs sm:text-sm uppercase tracking-wider">Key Advantages</h4>
            <ul className="list-disc list-inside space-y-0.5 text-slate-600 dark:text-slate-300 text-sm">
              {seatArea.advantages.slice(0, 2).map((adv, i) => (
                <li key={i}>{adv}</li>
              ))}
              {seatArea.advantages.length > 2 && (
                <li className="text-rose-500 dark:text-rose-400 font-medium">
                  +{seatArea.advantages.length - 2} more advantages
                </li>
              )}
            </ul>
          </div>
        )}
        
        {/* Expand/Collapse Button */}
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-sm font-medium text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition-colors"
          >
            <span>
              {isExpanded ? 'Show Less' : 'View Full Details & Tips'}
            </span>
            {isExpanded ? (
              <ChevronUpIcon className="w-4 h-4 ml-2" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 ml-2" />
            )}
          </button>
        </div>

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
            {/* All Advantages */}
            {seatArea.advantages.length > 2 && (
              <div>
                <h4 className="font-medium text-emerald-600 dark:text-emerald-400 mb-2 text-sm uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  All Advantages
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-300 text-sm text-left">
                  {seatArea.advantages.map((adv, i) => (
                    <li key={i} className="text-left">{adv}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Disadvantages */}
            {seatArea.disadvantages.length > 0 && (
              <div>
                <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2 text-sm uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  Things to Consider
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-300 text-sm text-left">
                  {seatArea.disadvantages.map((dis, i) => (
                    <li key={i} className="text-left">{dis}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tips */}
            {seatArea.tips.length > 0 && (
              <div>
                <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2 text-sm uppercase tracking-wider flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Expert Tips
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-300 text-sm text-left">
                  {seatArea.tips.map((tip, i) => (
                    <li key={i} className="text-left">{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 