'use client';

import { useMemo } from 'react';
import RaceCard from '@/components/RaceCard';
import { Race } from '@/lib/data/races';

interface RaceGridProps {
  title?: string;
  races: Race[];
  showFeatured?: boolean;
}

export default function RaceGrid({ title, races, showFeatured = false }: RaceGridProps) {
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
          {/* All races in a unified grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-flow-dense">
            {/* Featured race spanning 2 rows */}
            <div className="row-span-2 h-full">
              <RaceCard 
                race={featuredRace}
                isLarge={true}
                isFullHeight={true}
              />
            </div>
            
            {/* Regular races */}
            {regularRaces.map((race) => (
              <div key={race.id}>
                <RaceCard 
                  race={race}
                />
              </div>
            ))}
            
            {/* Remaining races */}
            {remainingRaces.map((race) => (
              <div key={race.id}>
                <RaceCard 
                  race={race}
                />
              </div>
            ))}
          </div>
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