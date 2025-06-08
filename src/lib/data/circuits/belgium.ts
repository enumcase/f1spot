import { Circuit } from '../circuits';
import { getCircuitMapUrl, getSeatViewImageUrl } from '../../imageUtils';

export const belgiumCircuitData: Circuit = {
  id: 'belgium-gp',
  name: 'Belgian Grand Prix',
  mapImage: getCircuitMapUrl('belgium-map.png'),
  seatAreas: [
    {
      id: 'gold-1-eau-rouge',
      name: 'Gold 1: Eau Rouge',
      description: 'Iconic view looking up towards Raidillon from La Source hairpin.',
      coordinates: { path: 'M120,150 h100 v80 h-100 Z' },
      viewImages: [getSeatViewImageUrl('belgium', 'gold1-view.jpg')],
      price: { currency: 'EUR', amount: 650 },
      advantages: ['Most iconic view in F1', 'Proximity to La Source'],
      disadvantages: ['Very expensive', 'Sells out instantly'],
      tips: ['Once in a lifetime ticket if you can get it'],
    },
    {
      id: 'silver-2-spa',
      name: 'Silver 2: Spa',
      description: 'Located along the Kemmel Straight, good for seeing cars at top speed.',
      coordinates: { path: 'M350,50 h150 v50 h-150 Z' },
      viewImages: [getSeatViewImageUrl('belgium', 'silver2-view.jpg')],
      price: { currency: 'EUR', amount: 400 },
      advantages: ['High speed action', 'Good overtaking spot into Les Combes'],
      disadvantages: ['Can be a long walk from entrances'],
      tips: ['Prepare for changeable Ardennes weather'],
    },
  ],
}; 