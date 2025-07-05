'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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

// Arrow Icons for navigation
const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function SeatAreaCard({ seatArea }: SeatAreaCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [imageErrors, setImageErrors] = useState<number[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    if (seatArea.viewImages && seatArea.viewImages.length > 1) {
      setActiveImageIndex((prev) => (prev + 1) % seatArea.viewImages.length);
    }
  };

  const prevImage = () => {
    if (seatArea.viewImages && seatArea.viewImages.length > 1) {
      setActiveImageIndex((prev) => (prev - 1 + seatArea.viewImages.length) % seatArea.viewImages.length);
    }
  };

  // Handle image load success
  const handleImageLoad = useCallback((index: number) => {
    setLoadedImages(prev => prev.includes(index) ? prev : [...prev, index]);
  }, []);

  // Handle image load error
  const handleImageError = useCallback((index: number) => {
    setImageErrors(prev => prev.includes(index) ? prev : [...prev, index]);
  }, []);

  // Preload images effect
  useEffect(() => {
    if (seatArea.viewImages && seatArea.viewImages.length > 0) {
      seatArea.viewImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.onload = () => handleImageLoad(index);
        img.onerror = () => handleImageError(index);
        img.src = src;
      });
    }
  }, [seatArea.viewImages, handleImageLoad, handleImageError]);

  // Touch and mouse event handlers for swipe functionality
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const diffX = currentX - startX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        prevImage();
      } else {
        nextImage();
      }
    }
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden transition-all hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600">
      {/* Image Carousel Section */}
      {seatArea.viewImages && seatArea.viewImages.length > 0 && (
        <div 
          ref={carouselRef}
          className="relative aspect-video bg-slate-200 dark:bg-slate-700 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Loading skeleton */}
          {!loadedImages.includes(activeImageIndex) && !imageErrors.includes(activeImageIndex) && (
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 dark:from-rose-950/20 dark:via-pink-950/20 dark:to-rose-900/20 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-rose-200 dark:border-rose-800 border-t-rose-500 rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Actual image */}
          {loadedImages.includes(activeImageIndex) && (
            <Image 
              src={seatArea.viewImages[activeImageIndex]}
              alt={`View from ${seatArea.name}`}
              fill
              className="object-cover transition-opacity duration-300"
              draggable={false}
              priority={activeImageIndex === 0}
            />
          )}
          
          {/* Error placeholder */}
          {imageErrors.includes(activeImageIndex) && (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800">
              <div className="text-center">
                <div className="text-2xl mb-2">📷</div>
                <div className="text-sm">Image unavailable</div>
              </div>
            </div>
          )}
          
          {/* Navigation arrows for desktop */}
          {seatArea.viewImages.length > 1 && (
            <>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-80 hover:opacity-100 z-20"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-80 hover:opacity-100 z-20"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </>
          )}
          
          {/* Improved dots with better visibility */}
          {seatArea.viewImages.length > 1 && (
            <div className="absolute bottom-0 left-0 right-0 z-10">
              {/* Shadow overlay for better dot visibility */}
              <div className="bg-gradient-to-t from-black/50 via-black/20 to-transparent h-16 w-full"></div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {seatArea.viewImages.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 border border-white/30 ${ 
                      index === activeImageIndex 
                        ? 'bg-white scale-110 shadow-lg' 
                        : 'bg-white/60 hover:bg-white/80 hover:scale-105'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex(index);
                    }}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Swipe indicator */}
          {seatArea.viewImages.length > 1 && (
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
              {activeImageIndex + 1} / {seatArea.viewImages.length}
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