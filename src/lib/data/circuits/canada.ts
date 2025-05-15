import { Circuit } from '../circuits';

export const canadaCircuitData: Circuit = {
  id: 'canadian-gp',
  name: 'Canadian Grand Prix',
  mapImage: '/images/circuits/maps/canada-map-placeholder.png',
  seatAreas: [
    {
      id: 'grandstand-11',
      name: 'Grandstand 11',
      description: 'Located at the Senna S corner, great for first lap action and overtaking.',
      coordinates: { path: 'M100,300 h120 v60 h-120 Z' },
      viewImages: ['/images/seats/canada/gs11-view.jpg'],
      price: { currency: 'CAD', amount: 500 },
      advantages: ['Turn 1 & 2 views', 'Overtaking hotspot'],
      disadvantages: ['Popular, sells out fast'],
      tips: ['Get there early for a good spot if GA within stand'],
    },
    {
      id: 'lance-stroll-grandstand',
      name: 'Lance Stroll Grandstand',
      description: 'Offers views of the hairpin, a key overtaking point.',
      coordinates: { path: 'M400,150 h100 v70 h-100 Z' },
      viewImages: ['/images/seats/canada/ls-grandstand-view.jpg'],
      price: { currency: 'CAD', amount: 480 },
      advantages: ['Hairpin action', 'Good for photos'],
      disadvantages: ['Can be a bit of a walk to other areas'],
      tips: ['Bring binoculars for distant views'],
    },
  ],
}; 