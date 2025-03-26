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

// Official 2025 F1 race calendar data
export const races: Race[] = [
  {
    id: 'australia-gp-2025',
    title: 'Australian GP',
    location: 'Melbourne',
    timestamp: createRaceTimestamp(2025, 3, 16, 15, 0), // ROUND 1: Mar 14-16
    imageUrl: '/images/circuits/melbourne.jpg',
  },
  {
    id: 'china-gp-2025',
    title: 'Chinese GP',
    location: 'Shanghai',
    timestamp: createRaceTimestamp(2025, 3, 23, 15, 0), // ROUND 2: Mar 21-23
    imageUrl: '/images/circuits/shanghai.jpg',
  },
  {
    id: 'japan-gp-2025',
    title: 'Japanese GP',
    location: 'Suzuka',
    timestamp: createRaceTimestamp(2025, 4, 6, 14, 0), // ROUND 3: Apr 4-6
    imageUrl: '/images/circuits/suzuka.jpg',
  },
  {
    id: 'bahrain-gp-2025',
    title: 'Bahrain GP',
    location: 'Sakhir',
    timestamp: createRaceTimestamp(2025, 4, 13, 18, 0), // ROUND 4: Apr 11-13
    imageUrl: '/images/circuits/bahrain.jpg',
  },
  {
    id: 'saudi-arabia-gp-2025',
    title: 'Saudi Arabian GP',
    location: 'Jeddah',
    timestamp: createRaceTimestamp(2025, 4, 20, 20, 0), // ROUND 5: Apr 18-20
    imageUrl: '/images/circuits/jeddah.jpg',
  },
  {
    id: 'miami-gp-2025',
    title: 'Miami GP',
    location: 'Miami',
    timestamp: createRaceTimestamp(2025, 5, 4, 16, 0), // ROUND 6: May 2-4
    imageUrl: '/images/circuits/miami.jpg',
  },
  {
    id: 'emilia-romagna-gp-2025',
    title: 'Emilia Romagna GP',
    location: 'Imola',
    timestamp: createRaceTimestamp(2025, 5, 18, 15, 0), // ROUND 7: May 16-18
    imageUrl: '/images/circuits/imola.jpg',
  },
  {
    id: 'monaco-gp-2025',
    title: 'Monaco GP',
    location: 'Monte Carlo',
    timestamp: createRaceTimestamp(2025, 5, 25, 15, 0), // ROUND 8: May 23-25
    imageUrl: '/images/circuits/monaco.jpg',
  },
  {
    id: 'spain-gp-2025',
    title: 'Spanish GP',
    location: 'Barcelona',
    timestamp: createRaceTimestamp(2025, 6, 1, 15, 0), // ROUND 9: May 30-Jun 1
    imageUrl: '/images/circuits/barcelona.jpg',
  },
  {
    id: 'canadian-gp-2025',
    title: 'Canadian GP',
    location: 'Montreal',
    timestamp: createRaceTimestamp(2025, 6, 15, 14, 0), // ROUND 10: Jun 13-15
    imageUrl: '/images/circuits/montreal.jpg',
  },
  {
    id: 'austria-gp-2025',
    title: 'Austrian GP',
    location: 'Spielberg',
    timestamp: createRaceTimestamp(2025, 6, 29, 15, 0), // ROUND 11: Jun 27-29
    imageUrl: '/images/circuits/spielberg.jpg',
  },
  {
    id: 'british-gp-2025',
    title: 'British GP',
    location: 'Silverstone',
    timestamp: createRaceTimestamp(2025, 7, 6, 15, 0), // ROUND 12: Jul 4-6
    imageUrl: '/images/circuits/silverstone.jpg',
  },
  {
    id: 'belgian-gp-2025',
    title: 'Belgian GP',
    location: 'Spa-Francorchamps',
    timestamp: createRaceTimestamp(2025, 7, 27, 15, 0), // ROUND 13: Jul 25-27
    imageUrl: '/images/circuits/spa.jpg',
  },
  {
    id: 'hungarian-gp-2025',
    title: 'Hungarian GP',
    location: 'Budapest',
    timestamp: createRaceTimestamp(2025, 8, 3, 15, 0), // ROUND 14: Aug 1-3
    imageUrl: '/images/circuits/budapest.jpg',
  },
  {
    id: 'dutch-gp-2025',
    title: 'Dutch GP',
    location: 'Zandvoort',
    timestamp: createRaceTimestamp(2025, 8, 31, 15, 0), // ROUND 15: Aug 29-31
    imageUrl: '/images/circuits/zandvoort.jpg',
  },
  {
    id: 'italian-gp-2025',
    title: 'Italian GP',
    location: 'Monza',
    timestamp: createRaceTimestamp(2025, 9, 7, 15, 0), // ROUND 16: Sep 5-7
    imageUrl: '/images/circuits/monza.jpg',
  },
  {
    id: 'azerbaijan-gp-2025',
    title: 'Azerbaijan GP',
    location: 'Baku',
    timestamp: createRaceTimestamp(2025, 9, 21, 15, 0), // ROUND 17: Sep 19-21
    imageUrl: '/images/circuits/baku.jpg',
  },
  {
    id: 'singapore-gp-2025',
    title: 'Singapore GP',
    location: 'Singapore',
    timestamp: createRaceTimestamp(2025, 10, 5, 20, 0), // ROUND 18: Oct 3-5
    imageUrl: '/images/circuits/singapore.jpg',
  },
  {
    id: 'us-gp-2025',
    title: 'United States GP',
    location: 'Austin',
    timestamp: createRaceTimestamp(2025, 10, 19, 14, 0), // ROUND 19: Oct 17-19
    imageUrl: '/images/circuits/austin.jpg',
  },
  {
    id: 'mexico-gp-2025',
    title: 'Mexico City GP',
    location: 'Mexico City',
    timestamp: createRaceTimestamp(2025, 10, 26, 14, 0), // ROUND 20: Oct 24-26
    imageUrl: '/images/circuits/mexico.jpg',
  },
  {
    id: 'brazil-gp-2025',
    title: 'São Paulo GP',
    location: 'São Paulo',
    timestamp: createRaceTimestamp(2025, 11, 9, 14, 0), // ROUND 21: Nov 7-9
    imageUrl: '/images/circuits/sao_paulo.jpg',
  },
  {
    id: 'las-vegas-gp-2025',
    title: 'Las Vegas GP',
    location: 'Las Vegas',
    timestamp: createRaceTimestamp(2025, 11, 22, 20, 0), // ROUND 22: Nov 20-22
    imageUrl: '/images/circuits/las_vegas.jpg',
  },
  {
    id: 'qatar-gp-2025',
    title: 'Qatar GP',
    location: 'Lusail',
    timestamp: createRaceTimestamp(2025, 11, 30, 19, 0), // ROUND 23: Nov 28-30
    imageUrl: '/images/circuits/qatar.jpg',
  },
  {
    id: 'abu-dhabi-gp-2025',
    title: 'Abu Dhabi GP',
    location: 'Yas Marina',
    timestamp: createRaceTimestamp(2025, 12, 7, 17, 0), // ROUND 24: Dec 5-7
    imageUrl: '/images/circuits/abu_dhabi.jpg',
  }
];

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