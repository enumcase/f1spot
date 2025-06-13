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
                'https://static.tickets-platform.com/img/pages/39/2131/4125/media/1/image_group_2-1.jpg',
                'https://oversteer48.com/wp-content/uploads/2023/04/COTA-main-grandstand-sections.jpg'
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
        },
        {
            id: 'main-grandstand-mezzanine',
            name: 'Main Grandstand - Mezzanine',
            description: 'Elevated seating in the middle tier of the main grandstand, offering excellent views of the start/finish straight and Turn 1 action.',
            coordinates: { path: 'M200,60 h150 v80 h-150 Z' },
            viewImages: [
                'https://media.koobit.com/main-grandstand-mezzanine-v2-26388.jpg',
                'https://oversteer48.com/wp-content/uploads/2023/04/COTA-main-grandstand-sections.jpg'
            ],
            price: { currency: 'USD', amount: 0 },
            advantages: [
                'Nicely elevated mid-way up the main grandstand',
                'View lets you see further than the lower rows',
                'Perfect for experiencing all the action on the start/finish straight',
                'Turn 1 clearly visible thanks to steep uphill nature of circuit',
                'Roof over your head',
                'Some of the best seats on the main straight'
            ],
            disadvantages: [
                'Higher budget required',
                'Turn 1 though distant'
            ],
            tips: [
                'Covered seating protects from weather',
                'Best value for money in the main grandstand',
                'Reserve early as these are popular seats'
            ],
        },
        {
            id: 'main-grandstand-club',
            name: 'Main Grandstand - Club',
            description: 'Top-tier seating at the highest level of the main grandstand with panoramic views and exclusive club lounge access.',
            coordinates: { path: 'M200,20 h150 v60 h-150 Z' },
            viewImages: [
                'https://motorsporttickets.com/blog/wp-content/uploads/2021/04/dne1318no224.jpg',
                'https://media.koobit.com/main-grandstand-club-v2-26389.jpg',
                'https://oversteer48.com/wp-content/uploads/2023/04/COTA-main-grandstand-sections.jpg',
            ],
            price: { currency: 'USD', amount: 2735 },
            advantages: [
                'Broad panorama over the start/finish straight, pit complex and last and first corners',
                'More exclusive experience with access to nearby lounge offering food and drinks',
                'Most seats in Club level are covered',
                'Row 6 upwards is under the roof'
            ],
            disadvantages: [
                'No such thing as a free lunch and these premium nibbles are no exception, coming with an equally premium price tag',
                'Poor organization in past years has meant some guests have had to wait in line for a long time to access a packed lounge',
                'Some aren\'t covered',
                'Lower rows may still have to suffer Austin\'s changeable weather'
            ],
            tips: [
                'Get to the Club lounge early to avoid crowds',
                'Consider using other seats for Sunday and enjoy Club Lounge on Friday or Saturday when more relaxed',
                'Check if your specific row is covered before booking'
            ],
        },
        {
            id: 'main-grandstand-trackside',
            name: 'Main Grandstand - Trackside',
            description: 'Budget-friendly bleacher seating flanking both sides of the main grandstand, with east side offering superior grid and Turn 1 views.',
            coordinates: { path: 'M50,100 h120 v100 h-120 Z' },
            viewImages: [
                'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/20528-F1-Experiences-United-States-Main-Grandstand-E-W-View-1-6f61cc27239054339b0380049ec4fa39.jpg',
                'https://oversteer48.com/wp-content/uploads/2023/04/COTA-main-grandstand-sections.jpg',
            ],
            price: { currency: 'USD', amount: 180 },
            advantages: [
                'Seats on the right of the stand offer more desirable views',
                'Line the first few rows of the grid and are closer to turn one',
                'Better seats than the west side bleachers and more expensive Lower section of main grandstand',
                'Left side opposite parc fermé where post-race interviews take place and podium',
                'Can sit comfortably in your seat as you doff your Stetson to the top three finishers',
                'Ample space left and right'
            ],
            disadvantages: [
                'Not highly rated for their comfort, being flat and hard and hot under the Texan sun',
                'Fans here don\'t have a close-up view of the grid or the pit garages',
                'Stands can feel a little cramped when full',
                'Space is minimal at front and rear',
                'Lack any kind of cover, leaving you exposed to sun, rain, and perhaps the odd hurricane'
            ],
            tips: [
                'Bring foam cushions or buy at circuit for $10',
                'Consider bringing your own seating cushion',
                'East side bleachers are worth the extra cost over west side'
            ],
        }
    ],
};