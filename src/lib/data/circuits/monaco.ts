import { Circuit } from '../circuits';
import { getCircuitMapUrl, getSeatViewImageUrl } from '../../imageUtils';

export const monacoCircuitData: Circuit = {
  id: 'monaco-gp',
  name: 'Monaco Grand Prix',
  mapImage: getCircuitMapUrl('monaco-map.png'),
  seatAreas: [
    {
      id: 'k-grandstand',
      name: 'Grandstand K',
      description: 'Popular grandstand with views of the Tabac corner and the harbour section.',
      coordinates: { path: 'M100,100 h100 v50 h-100 Z' },
      viewImages: [getSeatViewImageUrl('monaco', 'k-grandstand-view.jpg')],
      price: { currency: 'EUR', amount: 600 },
      advantages: ['Iconic views', 'Close to Tabac & pool'],
      disadvantages: ['Can be pricey', 'Access can be tight'],
      tips: ['Book well in advance'],
    },
    {
      id: 't-grandstand',
      name: 'Grandstand T',
      description: 'Offers views of the pit lane exit and the swimming pool complex.',
      coordinates: { path: 'M250,100 h100 v50 h-100 Z' },
      viewImages: [getSeatViewImageUrl('monaco', 't-grandstand-view.jpg')],
      price: { currency: 'EUR', amount: 550 },
      advantages: ['Pit exit view', 'Pool section atmosphere'],
      disadvantages: ['Slightly further from some key corners'],
      tips: ['Good for seeing strategy unfold'],
    },
  ],
}; 