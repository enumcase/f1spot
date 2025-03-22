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

// Mock data for F1 races
export const races: Race[] = [
  {
    id: 'chinese-gp-2025',
    title: 'Chinese GP',
    location: 'Shanghai',
    timestamp: createRaceTimestamp(2025, 3, 23, 15, 0),
    imageUrl: '/images/circuits/shanghai.jpg',
  },
  {
    id: 'japan-gp-2025',
    title: 'Japan GP',
    location: 'Suzuka',
    timestamp: createRaceTimestamp(2025, 4, 6, 14, 0),
    imageUrl: '/images/circuits/suzuka.jpg',
  },
  {
    id: 'saudi-arabia-gp-2025',
    title: 'Saudi Arabia GP',
    location: 'Jeddah',
    timestamp: createRaceTimestamp(2025, 4, 20, 18, 0),
    imageUrl: '/images/circuits/jeddah.jpg',
  },
  {
    id: 'imola-gp-2025',
    title: 'Imola GP',
    location: 'Imola',
    timestamp: createRaceTimestamp(2025, 5, 18, 15, 0),
    imageUrl: '/images/circuits/imola.jpg',
  },
  {
    id: 'bahrain-gp-2025',
    title: 'Bahrain GP',
    location: 'Sakhir',
    timestamp: createRaceTimestamp(2025, 4, 12, 18, 0),
    imageUrl: '/images/circuits/bahrain.jpg',
  },
  {
    id: 'miami-gp-2025',
    title: 'Miami GP',
    location: 'Miami',
    timestamp: createRaceTimestamp(2025, 5, 4, 15, 30),
    imageUrl: '/images/circuits/miami.jpg',
  },
  {
    id: 'monaco-gp-2025',
    title: 'Monaco GP',
    location: 'Monte Carlo',
    timestamp: createRaceTimestamp(2025, 5, 25, 15, 0),
    imageUrl: '/images/circuits/monaco.jpg',
  },
  {
    id: 'australia-gp-2024',
    title: 'Australian GP',
    location: 'Melbourne',
    timestamp: createRaceTimestamp(2024, 3, 2, 6, 0),
    imageUrl: '/images/circuits/melbourne.jpg',
  },
  {
    id: 'brazil-gp-2024',
    title: 'Brazilian GP',
    location: 'Sao Paulo',
    timestamp: createRaceTimestamp(2024, 11, 3, 18, 0),
    imageUrl: '/images/circuits/sao_paulo.jpg',
  },
  {
    id: 'mexico-gp-2024',
    title: 'Mexico GP',
    location: 'Mexico City',
    timestamp: createRaceTimestamp(2024, 10, 27, 20, 0),
    imageUrl: '/images/circuits/mexico.jpg',
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