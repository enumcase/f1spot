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
  const { featuredRace, regularRaces } = useMemo(() => {
    if (!showFeatured) {
      return { featuredRace: null, regularRaces: races };
    }
    return {
      featuredRace: races[0],
      regularRaces: races.slice(1)
    };
  }, [races, showFeatured]);
  
  // Memoize the race lists to maintain referential equality
  const regularRaceList = useMemo(() => {
    return regularRaces.map((race) => (
      <RaceCard key={race.id} race={race} />
    ));
  }, [regularRaces]);
  
  const allRacesList = useMemo(() => {
    return races.map((race) => (
      <div key={race.id}>
        <RaceCard race={race} />
      </div>
    ));
  }, [races]);
  
  return (
    <section className="mb-8 md:mb-12">
      {title && (
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4 md:mb-6">
          {title}
        </h2>
      )}
      
      {showFeatured && featuredRace ? (
        <div className="max-w-5xl">
          {/* Use a flex layout to ensure equal heights */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            {/* Featured race on the left - takes full height on desktop */}
            <div className="md:w-1/4 aspect-square md:aspect-auto">
              <div className="h-full">
                <RaceCard race={featuredRace} isLarge={true} isFullHeight={true} />
              </div>
            </div>
            
            {/* Grid of other upcoming races on the right */}
            <div className="md:w-3/4">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {regularRaceList}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Standard grid layout for past races
        <div className="max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {allRacesList}
          </div>
        </div>
      )}
    </section>
  );
} 