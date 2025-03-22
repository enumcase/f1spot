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
  
  // Function to compute a grid template that gives us column-first ordering
  const getGridTemplateAreas = (itemCount: number, columns: number) => {
    const rows = Math.ceil(itemCount / columns);
    
    // Create a matrix of area names
    const areas = Array(rows).fill(0).map(() => Array(columns).fill('.'));
    
    // Fill in the areas with positions in column-first order
    let count = 0;
    for (let col = 0; col < columns; col++) {
      for (let row = 0; row < rows; row++) {
        if (count < itemCount) {
          areas[row][col] = `item${count}`;
          count++;
        }
      }
    }
    
    // Convert to grid-template-areas format
    return areas.map(row => `"${row.join(' ')}"`).join(' ');
  };
  
  // Compute grid style for the upcoming races grid
  const upcomingGridStyle = useMemo(() => {
    if (!showFeatured || regularRaces.length === 0) return {};
    
    const columns = 3; // md:grid-cols-3
    const templateAreas = getGridTemplateAreas(regularRaces.length, columns);
    
    return {
      gridTemplateAreas: templateAreas,
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
    };
  }, [regularRaces.length, showFeatured]);
  
  // Generate styles for each race card in the upcoming races grid
  const getRaceCardStyle = (index: number) => {
    return { gridArea: `item${index}` };
  };
  
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
              <div 
                className="grid gap-3 md:gap-4" 
                style={upcomingGridStyle}
              >
                {regularRaces.map((race, index) => (
                  <div key={race.id} style={getRaceCardStyle(index)}>
                    <RaceCard race={race} />
                  </div>
                ))}
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