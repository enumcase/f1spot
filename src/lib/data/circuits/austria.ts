import { Circuit } from '../circuits';
import { getCircuitMapUrl, getSeatViewImageUrl } from '../../imageUtils';

export const austriaCircuitData: Circuit = {
  id: 'austria-gp',
  name: 'Austrian Grand Prix',
  mapImage: getCircuitMapUrl('austria-map.png'),
  seatAreas: [
    {
      id: 'red-bull-grandstand',
      name: 'Red Bull Grandstand',
      description: 'Overlooks the start/finish straight and Turn 1, often with a lively atmosphere.',
      coordinates: { path: 'M150,50 h180 v90 h-180 Z' },
      viewImages: [getSeatViewImageUrl('austria', 'rb-grandstand-view.jpg')],
      price: { currency: 'EUR', amount: 480 },
      advantages: ['Start/finish action', 'Turn 1 view', 'Great atmosphere'],
      disadvantages: ['Can be exposed to elements'],
      tips: ['Wear team colors!'],
    },
    {
      id: 'steiermark-grandstand',
      name: 'Steiermark Grandstand',
      description: 'Positioned with views towards Turn 3 and the run up to Turn 4.',
      coordinates: { path: 'M450,150 h120 v70 h-120 Z' },
      viewImages: [getSeatViewImageUrl('austria', 'steiermark-view.jpg')],
      price: { currency: 'EUR', amount: 350 },
      advantages: ['Good view of elevation changes', 'Mid-priced option'],
      disadvantages: ['A bit distant from main fan zone'],
      tips: ['Consider higher rows for better overview'],
    },
  ],
}; 