'use client';

import { useMemo, useState } from 'react';
import RaceCard from '@/components/RaceCard';
import { Race } from '@/lib/data/races';

interface RaceGridProps {
  title?: string;
  races: Race[];
  showFeatured?: boolean;
}

export default function RaceGrid({ title, races, showFeatured = false }: RaceGridProps) {
  const [showAllRaces, setShowAllRaces] = useState(false);
  
  if (!races.length) return null;
  
  // Memoize the featured race and regular races to avoid recalculating on every render
  const { featuredRace, regularRaces, remainingRaces } = useMemo(() => {
    if (!showFeatured) {
      return { featuredRace: null, regularRaces: [], remainingRaces: races };
    }

    // Take first race as featured
    const featured = races[0];
    
    // Take next 6 races for the top grid (or fewer if not enough races)
    const topGridCount = Math.min(6, races.length - 1);
    const topGrid = races.slice(1, 1 + topGridCount);
    
    // All remaining races go to the bottom grid
    const remaining = races.slice(1 + topGridCount);
    
    return {
      featuredRace: featured,
      regularRaces: topGrid,
      remainingRaces: remaining
    };
  }, [races, showFeatured]);
  
  return (
    <section className="mb-8 md:mb-12">
      {title && (
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4 md:mb-6">
          {title}
        </h2>
      )}
      
      {showFeatured && featuredRace ? (
        <div>
          {/* Large screens: Side by side layout */}
          <div className="hidden lg:flex lg:flex-row lg:gap-4 lg:mb-4">
            {/* Featured race (MUR) - left side */}
            <div className="lg:w-1/3">
              <RaceCard 
                race={featuredRace}
                isLarge={true}
                isFullHeight={true}
              />
            </div>
            
            {/* Regular races - right side */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 h-full">
                {regularRaces.map((race) => (
                  <div key={race.id}>
                    <RaceCard 
                      race={race}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Small/Medium screens: Stacked layout */}
          <div className="lg:hidden space-y-4">
            {/* Featured race (MUR) - top, larger/squarish */}
            <div className="w-full">
              <RaceCard 
                race={featuredRace}
                isLarge={true}
                isFullHeight={false}
              />
            </div>
            
            {/* Regular races - below MUR */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {regularRaces.map((race) => (
                <div key={race.id}>
                  <RaceCard 
                    race={race}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Show More button if there are remaining races */}
          {remainingRaces.length > 0 && (
            <div className="flex justify-center mt-6 mb-2">
              <button 
                onClick={() => setShowAllRaces(!showAllRaces)} 
                className="px-4 py-2 bg-transparent border border-red-500 hover:bg-red-500 hover:text-white focus:outline-none dark:border-red-400 dark:hover:bg-red-500 rounded-md transition-colors text-sm font-medium text-red-500 dark:text-red-400"
                aria-expanded={showAllRaces}
              >
                {showAllRaces ? 'Show Less' : `Show ${remainingRaces.length} More Race${remainingRaces.length > 1 ? 's' : ''}`}
              </button>
            </div>
          )}
          
          {/* Remaining races (conditionally rendered) */}
          {showAllRaces && remainingRaces.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {remainingRaces.map((race) => (
                <div key={race.id}>
                  <RaceCard 
                    race={race}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        // Standard grid layout for past races
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {races.map((race) => (
            <div key={race.id}>
              <RaceCard 
                race={race}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
} 