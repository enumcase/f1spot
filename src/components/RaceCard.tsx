'use client';

import { useState, useCallback, useMemo } from 'react';
import { Race, formatRaceDay, formatRaceDate, formatRaceTime } from '@/lib/data/races';
import Image from 'next/image';
import Link from 'next/link';

interface RaceCardProps {
  race: Race;
  isLarge?: boolean;
  isFullHeight?: boolean;
  showUpcomingTag?: boolean;
}

export default function RaceCard({ race, isLarge = false, isFullHeight = false, showUpcomingTag = false }: RaceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Memoize background color to avoid recalculating on every render
  const backgroundColor = useMemo(() => {
    const colors = [
      'bg-rose-600', 'bg-blue-600', 'bg-slate-700', 'bg-indigo-600', 
      'bg-orange-600', 'bg-emerald-600', 'bg-amber-600', 'bg-cyan-600'
    ];
    const index = race.title.charCodeAt(0) % colors.length;
    return colors[index];
  }, [race.title]);
  
  // Memoize aspect ratio class
  const aspectRatioClass = useMemo(() => {
    return isFullHeight ? 'h-full' : 'aspect-square';
  }, [isFullHeight]);

  // Memoize formatted date and time values
  const formattedValues = useMemo(() => {
    return {
      day: formatRaceDay(race.timestamp),
      date: formatRaceDate(race.timestamp),
      time: formatRaceTime(race.timestamp)
    };
  }, [race.timestamp]);
  
  // Event handlers with useCallback to prevent recreation on each render
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);
  
  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);
  
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);
  
  return (
    <Link 
      href={`/gps/${race.id}`}
      className="block w-full h-full focus-ring"
      aria-label={`View details for ${race.title} race`}
    >
      <div 
        className={`relative overflow-hidden rounded-xl antialiased will-change-transform
          ${aspectRatioClass}
          ${isHovered ? 'shadow-md' : 'shadow-sm'}
          card-hover
        `}
        style={{
          isolation: 'isolate',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Color (visible during loading or error) */}
        <div className={`absolute inset-0 ${backgroundColor} z-0`} />
        
        {/* Race Image */}
        {!imageError && (
          <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl z-5">
            <Image
              src={race.imageUrl}
              alt={race.title}
              fill
              className={`object-cover transition-standard ${isHovered ? 'scale-105' : 'scale-100'}`}
              sizes={isLarge ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 50vw, 25vw"}
              priority={true}
              quality={90}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
          </div>
        )}
        
        {/* Gradient Overlay - separate from image for smoother edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10 rounded-xl z-10" />
        
        {/* Race Title Symbol (shown when no image) */}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-light opacity-20 z-5">
            {race.title.charAt(0)}
          </div>
        )}

        {/* Upcoming Tag */}
        {showUpcomingTag && (
          <div className="absolute top-2 right-2 z-20 bg-rose-500 text-white text-xs font-medium px-2 py-1 rounded-md">
            Upcoming
          </div>
        )}
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 z-20 p-3 md:p-4 w-full">
          <div className={`font-medium tracking-tight text-white
            ${isLarge 
              ? 'text-xl sm:text-2xl' 
              : 'text-lg sm:text-xl'
            }`}
          >
            {race.title}
          </div>
          <div className={`text-slate-200 flex items-center gap-1 flex-wrap
            text-xs sm:text-sm
            mt-1
          `}>
            <span className="font-medium">{formattedValues.day}, {formattedValues.date}</span>
            <span className="inline-block w-1 h-1 rounded-full bg-rose-500 mx-1" />
            <span>{formattedValues.time}</span>
          </div>
        </div>
      </div>
    </Link>
  );
} 