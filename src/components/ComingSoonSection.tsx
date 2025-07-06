'use client';

import { useMemo } from 'react';
import { allRaces, CIRCUITS_WITH_FULL_DATA } from '@/lib/data/races';

// Map race IDs to flag emojis
const RACE_FLAGS: Record<string, string> = {
  'australia-gp': '🇦🇺',
  'china-gp': '🇨🇳',
  'japan-gp': '🇯🇵',
  'bahrain-gp': '🇧🇭',
  'saudi-arabia-gp': '🇸🇦',
  'miami-gp': '🇺🇸',
  'emilia-romagna-gp': '🇮🇹',
  'monaco-gp': '🇲🇨',
  'spain-gp': '🇪🇸',
  'canadian-gp': '🇨🇦',
  'austria-gp': '🇦🇹',
  'british-gp': '🇬🇧',
  'belgian-gp': '🇧🇪',
  'hungarian-gp': '🇭🇺',
  'dutch-gp': '🇳🇱',
  'italian-gp': '🇮🇹',
  'mexico-gp': '🇲🇽',
  'brazil-gp': '🇧🇷',
  'las-vegas-gp': '🇺🇸',
  'qatar-gp': '🇶🇦',
  'abu-dhabi-gp': '🇦🇪',
};

export default function ComingSoonSection() {
  // Get races that don't have full data yet, in original order
  const comingSoonRaces = useMemo(() => {
    return allRaces.filter(race => !CIRCUITS_WITH_FULL_DATA.includes(race.id));
  }, []);

  return (
    <section className="mb-8 md:mb-12">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">
          More circuits coming soon
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          We're working hard to bring you detailed seating guides for all F1 circuits
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {comingSoonRaces.map((race, index) => (
          <div 
            key={race.id}
            className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 md:p-4 text-center border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="text-2xl md:text-3xl mb-2">{RACE_FLAGS[race.id] || '🏁'}</div>
            <h3 className="font-medium text-slate-900 dark:text-white text-xs sm:text-sm mb-1">
              {race.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs">
              {race.location}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-8 text-center">
        <div className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
          <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
          <span>New circuits added regularly</span>
        </div>
      </div>
    </section>
  );
} 