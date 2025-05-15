import { Circuit } from '../circuits';

export const britainCircuitData: Circuit = {
  id: 'britain-gp',
  name: 'British Grand Prix',
  mapImage: '/images/circuits/maps/britain-map-placeholder.png',
  seatAreas: [
    {
      id: 'woodcote-grandstand',
      name: 'Woodcote Grandstand',
      description: 'Views of the cars exiting Luffield and accelerating onto the National Pits Straight.',
      coordinates: { path: 'M80,80 h150 v70 h-150 Z' },
      viewImages: ['/images/seats/britain/woodcote-view.jpg'],
      price: { currency: 'GBP', amount: 400 },
      advantages: ['See cars accelerating', 'Historic part of the track'],
      disadvantages: ['Can be a bit far from some action zones'],
      tips: ['Popular with long-time fans'],
    },
    {
      id: 'club-corner',
      name: 'Club Corner Grandstand',
      description: 'Excellent views of the final sequence of corners before the main straight.',
      coordinates: { path: 'M300,100 h130 v60 h-130 Z' },
      viewImages: ['/images/seats/britain/club-corner-view.jpg'],
      price: { currency: 'GBP', range: [350, 550] },
      advantages: ['See technical skill', 'Final corners excitement'],
      disadvantages: ['Can be crowded'],
      tips: ['Look for overtakes into the final corner'],
    },
  ],
}; 