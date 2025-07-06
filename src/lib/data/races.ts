import { getCircuitImageUrl } from '../imageUtils';

// Define the Race type
export interface Race {
  id: string;
  title: string;
  location: string;
  timestamp: number; // Unix timestamp in milliseconds
  imageUrl: string;
  isPast?: boolean; // Optional, will be computed based on timestamp
}

// Get current date for determining past vs upcoming races
const currentDate = new Date();
const currentTimestamp = currentDate.getTime();

// Helper function to create a timestamp
function createRaceTimestamp(year: number, month: number, day: number, hour: number, minute: number): number {
  return new Date(year, month - 1, day, hour, minute).getTime();
}

// Format functions for display
export function formatRaceDay(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-US', { weekday: 'short' });
}

export function formatRaceDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function formatRaceTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
}

// Circuits with full data that should be shown
export const CIRCUITS_WITH_FULL_DATA = [
  'singapore-gp',
  'azerbaijan-gp', 
  'us-cota-gp'
];

// Official 2025 F1 race calendar data
export const allRaces: Race[] = [
  {
    id: 'australia-gp',
    title: 'Australian GP',
    location: 'Melbourne',
    timestamp: createRaceTimestamp(2025, 3, 16, 15, 0), // ROUND 1: Mar 14-16
    imageUrl: getCircuitImageUrl('melbourne.jpg'),
  },
  {
    id: 'china-gp',
    title: 'Chinese GP',
    location: 'Shanghai',
    timestamp: createRaceTimestamp(2025, 3, 23, 15, 0), // ROUND 2: Mar 21-23
    imageUrl: getCircuitImageUrl('shanghai.jpg'),
  },
  {
    id: 'japan-gp',
    title: 'Japanese GP',
    location: 'Suzuka',
    timestamp: createRaceTimestamp(2025, 4, 6, 14, 0), // ROUND 3: Apr 4-6
    imageUrl: getCircuitImageUrl('suzuka.jpg'),
  },
  {
    id: 'bahrain-gp',
    title: 'Bahrain GP',
    location: 'Sakhir',
    timestamp: createRaceTimestamp(2025, 4, 13, 18, 0), // ROUND 4: Apr 11-13
    imageUrl: getCircuitImageUrl('bahrain.jpg'),
  },
  {
    id: 'saudi-arabia-gp',
    title: 'Saudi Arabian GP',
    location: 'Jeddah',
    timestamp: createRaceTimestamp(2025, 4, 20, 20, 0), // ROUND 5: Apr 18-20
    imageUrl: getCircuitImageUrl('jeddah.jpg'),
  },
  {
    id: 'miami-gp',
    title: 'Miami GP',
    location: 'Miami',
    timestamp: createRaceTimestamp(2025, 5, 4, 16, 0), // ROUND 6: May 2-4
    imageUrl: getCircuitImageUrl('miami.jpg'),
  },
  {
    id: 'emilia-romagna-gp',
    title: 'Emilia Romagna GP',
    location: 'Imola',
    timestamp: createRaceTimestamp(2025, 5, 18, 15, 0), // ROUND 7: May 16-18
    imageUrl: getCircuitImageUrl('imola.jpg'),
  },
  {
    id: 'monaco-gp',
    title: 'Monaco GP',
    location: 'Monte Carlo',
    timestamp: createRaceTimestamp(2025, 5, 25, 15, 0), // ROUND 8: May 23-25
    imageUrl: getCircuitImageUrl('monaco.jpg'),
  },
  {
    id: 'spain-gp',
    title: 'Spanish GP',
    location: 'Barcelona',
    timestamp: createRaceTimestamp(2025, 6, 1, 15, 0), // ROUND 9: May 30-Jun 1
    imageUrl: getCircuitImageUrl('barcelona.jpg'),
  },
  {
    id: 'canadian-gp',
    title: 'Canadian GP',
    location: 'Montreal',
    timestamp: createRaceTimestamp(2025, 6, 15, 14, 0), // ROUND 10: Jun 13-15
    imageUrl: getCircuitImageUrl('montreal.jpg'),
  },
  {
    id: 'austria-gp',
    title: 'Austrian GP',
    location: 'Spielberg',
    timestamp: createRaceTimestamp(2025, 6, 29, 15, 0), // ROUND 11: Jun 27-29
    imageUrl: getCircuitImageUrl('spielberg.jpg'),
  },
  {
    id: 'british-gp',
    title: 'British GP',
    location: 'Silverstone',
    timestamp: createRaceTimestamp(2025, 7, 6, 15, 0), // ROUND 12: Jul 4-6
    imageUrl: getCircuitImageUrl('silverstone.jpg'),
  },
  {
    id: 'belgian-gp',
    title: 'Belgian GP',
    location: 'Spa-Francorchamps',
    timestamp: createRaceTimestamp(2025, 7, 27, 15, 0), // ROUND 13: Jul 25-27
    imageUrl: getCircuitImageUrl('spa.jpg'),
  },
  {
    id: 'hungarian-gp',
    title: 'Hungarian GP',
    location: 'Budapest',
    timestamp: createRaceTimestamp(2025, 8, 3, 15, 0), // ROUND 14: Aug 1-3
    imageUrl: getCircuitImageUrl('budapest.jpg'),
  },
  {
    id: 'dutch-gp',
    title: 'Dutch GP',
    location: 'Zandvoort',
    timestamp: createRaceTimestamp(2025, 8, 31, 15, 0), // ROUND 15: Aug 29-31
    imageUrl: getCircuitImageUrl('zandvoort.jpg'),
  },
  {
    id: 'italian-gp',
    title: 'Italian GP',
    location: 'Monza',
    timestamp: createRaceTimestamp(2025, 9, 7, 15, 0), // ROUND 16: Sep 5-7
    imageUrl: getCircuitImageUrl('monza.jpg'),
  },
  {
    id: 'azerbaijan-gp',
    title: 'Azerbaijan GP',
    location: 'Baku',
    timestamp: createRaceTimestamp(2025, 9, 21, 15, 0), // ROUND 17: Sep 19-21
    imageUrl: getCircuitImageUrl('baku.jpg'),
  },
  {
    id: 'singapore-gp',
    title: 'Singapore GP',
    location: 'Singapore',
    timestamp: createRaceTimestamp(2025, 10, 5, 20, 0), // ROUND 18: Oct 3-5
    imageUrl: getCircuitImageUrl('singapore.jpg'),
  },
  {
    id: 'us-cota-gp',
    title: 'United States GP',
    location: 'Austin',
    timestamp: createRaceTimestamp(2025, 10, 19, 14, 0), // ROUND 19: Oct 17-19
    imageUrl: getCircuitImageUrl('austin.jpg'),
  },
  {
    id: 'mexico-gp',
    title: 'Mexico City GP',
    location: 'Mexico City',
    timestamp: createRaceTimestamp(2025, 10, 26, 14, 0), // ROUND 20: Oct 24-26
    imageUrl: getCircuitImageUrl('mexico.jpg'),
  },
  {
    id: 'brazil-gp',
    title: 'São Paulo GP',
    location: 'São Paulo',
    timestamp: createRaceTimestamp(2025, 11, 9, 14, 0), // ROUND 21: Nov 7-9
    imageUrl: getCircuitImageUrl('sao_paulo.jpg'),
  },
  {
    id: 'las-vegas-gp',
    title: 'Las Vegas GP',
    location: 'Las Vegas',
    timestamp: createRaceTimestamp(2025, 11, 22, 20, 0), // ROUND 22: Nov 20-22
    imageUrl: getCircuitImageUrl('las_vegas.jpg'),
  },
  {
    id: 'qatar-gp',
    title: 'Qatar GP',
    location: 'Lusail',
    timestamp: createRaceTimestamp(2025, 11, 30, 19, 0), // ROUND 23: Nov 28-30
    imageUrl: getCircuitImageUrl('qatar.jpg'),
  },
  {
    id: 'abu-dhabi-gp',
    title: 'Abu Dhabi GP',
    location: 'Yas Marina',
    timestamp: createRaceTimestamp(2025, 12, 7, 17, 0), // ROUND 24: Dec 5-7
    imageUrl: getCircuitImageUrl('abu_dhabi.jpg'),
  },
];

// Filter races to only show those with full circuit data
export const races: Race[] = allRaces.filter(race => 
  CIRCUITS_WITH_FULL_DATA.includes(race.id)
);

// Set isPast property based on timestamp comparison
races.forEach(race => {
  race.isPast = race.timestamp < currentTimestamp;
});

// Memoize filtered race arrays to avoid recomputing on every call
const upcomingRaces = races.filter(race => !race.isPast);
const pastRaces = races.filter(race => race.isPast);

// Helper functions to get races data
export const getUpcomingRaces = (): Race[] => [...upcomingRaces];
export const getPastRaces = (): Race[] => [...pastRaces];