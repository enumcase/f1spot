import { Circuit } from '../circuits';

export const spainCircuitData: Circuit = {
  id: 'spain-gp',
  name: 'Spanish Grand Prix',
  mapImage: '/images/circuits/maps/spain-map-placeholder.png',
  seatAreas: [
    {
      id: 'main-grandstand',
      name: 'Main Grandstand',
      description: 'Views of the start/finish line, pit stops, and podium ceremony.',
      coordinates: { path: 'M50,200 h200 v80 h-200 Z' },
      viewImages: ['/images/seats/spain/main-grandstand-view.jpg'],
      price: { currency: 'EUR', amount: 450 },
      advantages: ['Start/finish action', 'Pit stops', 'Podium view'],
      disadvantages: ['Can be very sunny/hot'],
      tips: ['Bring sun protection'],
    },
    {
      id: 'g-grandstand',
      name: 'Grandstand G',
      description: 'Located at the stadium section, offering views of multiple corners.',
      coordinates: { path: 'M300,250 h150 v100 h-150 Z' },
      viewImages: ['/images/seats/spain/g-grandstand-view.jpg'],
      price: { currency: 'EUR', range: [200, 350] },
      advantages: ['See cars for longer duration', 'Good value'],
      disadvantages: ['Further from main fan village'],
      tips: ['Explore different vantage points within the stand'],
    },
  ],
}; 