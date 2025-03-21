'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import { Race, races } from '@/lib/data/races';
import RaceCard from '@/components/RaceCard';

export default function GPsPage() {
  const [allRaces, setAllRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState(true);

  // Use useCallback to avoid recreating this function on every render
  const loadRaceData = useCallback(() => {
    try {
      // Sort races by timestamp (past to future)
      const sortedRaces = [...races].sort((a, b) => a.timestamp - b.timestamp);
      setAllRaces(sortedRaces);
    } catch (error) {
      console.error('Error loading race data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRaceData();
  }, [loadRaceData]);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 md:mb-8">
          All Grand Prix
        </h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-300 dark:border-slate-600 border-t-rose-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {allRaces.map((race) => (
              <div key={race.id}>
                <RaceCard 
                  race={race} 
                  showUpcomingTag={!race.isPast} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 