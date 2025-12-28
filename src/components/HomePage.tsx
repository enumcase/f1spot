'use client';

import { useEffect, useState, useCallback } from 'react';
import Header from '@/components/Header';
import RaceGrid from '@/components/RaceGrid';
import ComingSoonSection from '@/components/ComingSoonSection';
import { Race, getUpcomingRaces, getPastRaces } from '@/lib/data/races';

export default function HomePage() {
  // State to store race data with proper typing
  const [upcomingRaces, setUpcomingRaces] = useState<Race[]>([]);
  const [pastRaces, setPastRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load race data on component mount using useCallback to avoid recreating the function
  const loadRaceData = useCallback(() => {
    try {
      const upcoming = getUpcomingRaces().sort((a, b) => a.timestamp - b.timestamp);
      const past = getPastRaces().sort((a, b) => b.timestamp - a.timestamp); // Most recent past races first

      setUpcomingRaces(upcoming);
      setPastRaces(past);
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
        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-300 dark:border-slate-600 border-t-rose-500"></div>
          </div>
        ) : (
          <>
            {upcomingRaces.length > 0 && (
              <RaceGrid
                title="Upcoming races of 2025"
                races={upcomingRaces}
                showFeatured={true}
              />
            )}

            {pastRaces.length > 0 && (
              <RaceGrid
                title="Past races"
                races={pastRaces}
              />
            )}

            {/* Coming Soon Section */}
            <ComingSoonSection />
          </>
        )}
      </div>
    </main>
  );
}
