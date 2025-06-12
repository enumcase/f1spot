import { Circuit } from '../circuits';

export const usCota: Circuit = {
    id: 'us-cota-gp',
    name: 'United States Grand Prix',
    mapImage: '/images/circuits/maps/belgium-map-placeholder.png',
    seatAreas: [
        {
            id: 'main-grandstand-lower',
            name: 'Main Grandstand - Lower',
            description: 'Prime trackside seats offering the closest possible view to the starting grid and pit lane action at COTA.',
            coordinates: { path: 'M200,100 h150 v120 h-150 Z' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4125/media/1/image_group_2-1.jpg'
            ],
            price: { currency: 'USD', amount: 1750 },
            advantages: [
                'Closest seats to the grid at COTA',
                'Great for post-qualifying interviews with top 3 qualifiers',
                'Cars sitting on track seem close enough to touch',
                'Shaded from sun during Grand Prix',
                'TV screens available'
            ],
            disadvantages: [
                'Can be a bit of a blur once sessions get underway',
                'Might end up watching giant screens instead of track',
                'Only rain shower possibility to dampen spirits'
            ],
            tips: [
                'Arrive early for qualifying to see the top 3 up close',
                'Bring binoculars for better car detail viewing',
                'Reserved seating ensures your spot for the weekend'
            ],
        }
    ],
};