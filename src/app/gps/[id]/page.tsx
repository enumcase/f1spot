'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Race, races, formatRaceDay, formatRaceDate, formatRaceTime } from '@/lib/data/races';
import Header from '@/components/Header';

export default function GPDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [race, setRace] = useState<Race | null>(null);

  useEffect(() => {
    // Find the race by matching the ID without the year part
    const foundRace = races.find(r => r.id.replace(/-\d{4}$/, '') === id);
    setRace(foundRace || null);
  }, [id]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        {/* Empty placeholder - just showing race title for testing */}
        {race && (
          <div>
            <h1 className="text-2xl font-medium mb-2">
              {race.title} - {race.location}
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              {formatRaceDay(race.timestamp)}, {formatRaceDate(race.timestamp)} at {formatRaceTime(race.timestamp)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 