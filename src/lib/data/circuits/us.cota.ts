import { Circuit } from '../circuits';

export const usCotaCircuitData: Circuit = {
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
        },
        {
            id: 'turn-1-grandstand',
            name: 'Turn 1 Grandstand',
            description: 'Elevated grandstand offering dramatic views of the first corner action and the start/finish straight. Features a steep 133-foot run up the hill providing an excellent vantage point for race starts.',
            coordinates: { path: 'M200,50 h100 v80 h-100 Z' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4135/media/1/image_group_2-1.jpg',
            ],
            price: { currency: 'USD', amount: 1500 },
            advantages: [
                'Dramatic elevated view of Turn 1 corner action',
                'Excellent vantage point for watching race starts',
                'View stretches from final turn to Turn 2',
                'Includes views of start/finish straight and pit stops',
                'Distant glimpses of track action around the entire lap',
                'Digital leaderboard at pitlane exit for easy position tracking',
                'Abundant people-watching opportunities in pitlane and grid areas'
            ],
            disadvantages: [
                'Not-so-giant screen opposite the grandstand limits replay viewing',
                'Steep uphill climb to reach seating areas',
                'COTA\'s tight, uphill left-hander can create carbon-fiber-strewn chaos'
            ],
            tips: [
                'Bring a pair of binoculars to look at the screen and for people-watching opportunities',
                'Prepare for the steep 133-foot climb up the hill to reach your seat'
            ],
        },
        {
            id: 'turn-15-grandstand',
            name: 'Turn 15 Grandstand',
            description: 'Multi-level grandstand offering excellent views of the technical Turn 15 corner complex and the preceding back straight. Top rows provide panoramic circuit views while lower rows focus on Turn 15 action.',
            coordinates: { path: 'M350,200 h100 v80 h-100 Z' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4145/media/1/image_group_2-1.jpg'
            ],
            price: { currency: 'USD', amount: 1690 },
            advantages: [
                'Top level offers crowd-pleasing COTA view of many corners',
                'Worth every cent from elevated seating positions',
                'Can follow racing action from back straight where cars brake hard into Turn 12',
                'Overtaking opportunities common at Turn 12',
                'Excellent view of 3-corner sequence before Turn 16',
                'Reminiscent of Hockenheim stadium section - one of motorsport\'s all-time great spectating areas',
                'TV screen available for replays and timing information'
            ],
            disadvantages: [
                'Lower rows offer pretty average experience',
                'Little more than underwhelming view of Turn 15 from bottom seats',
                'Cars dart off and out of sight around Turn 16',
                'Limited action visibility from lower seating positions'
            ],
            tips: [
                'Aim for top level seating to maximize the viewing experience',
                'Avoid lower rows if possible for better sightlines',
                'Bring binoculars to follow cars through the distant corner sequences'
            ],
        },
        {
            id: 'turn-12-bleachers',
            name: 'Turn 12 Bleachers',
            description: 'Bleacher seating offering one of the broadest circuit views at COTA, with panoramic sightlines covering 15 corners across the 20-corner track layout. Perfect for following race action across multiple sections.',
            coordinates: { path: 'M300,150 h100 v80 h-100 Z' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4155/media/1/image_group_2-1.jpg'
            ],
            price: { currency: 'USD', amount: 1085 },
            advantages: [
                'Some of the best broad circuit views at COTA',
                'Views of track from Turn 1 through the esses to final Turn 20',
                'Staggering 15 corners visible on the 20-corner race track',
                'Sense of being able to follow racing for best part of a lap',
                'Turn 12 directly in front - end of long back straight',
                'Tight left-hand turn is common overtaking spot under DRS',
                'Turns 13, 14, and 15 at reasonable viewing distance',
                'TV screen available for replays and timing'
            ],
            disadvantages: [
                'Many parts of track are distant with cars popping in and out of view',
                'Lower rows have limited view of distant corners',
                'Some sections of track completely out of sight',
                'Bleacher seating may lack comfort compared to grandstands'
            ],
            tips: [
                'Pay extra for upper rows to maximize the incredible panoramic view',
                'Bring binoculars to follow distant track action',
                'Lower rows still offer good view of nearby corners if budget is a concern'
            ],
        },
        {
            id: 'turn-4-grandstand',
            name: 'Turn 4 Grandstand',
            description: 'Grandstand offering side-on views of the Turn 4 corner sequence with iconic COTA landmarks in the background. Features the stars and stripes run-off area and observation tower creating a memorable and photogenic setting.',
            coordinates: { path: 'M150,120 h100 v80 h-100 Z' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4175/media/1/image_group_2-1.jpg'
            ],
            price: { currency: 'USD', amount: 160 },
            advantages: [
                'Memorable view with stars and stripes run-off area in foreground',
                'Observation tower in background creates distinctive look',
                'Classic local landmarks make photos scream COTA',
                'Side-on view lets you watch cars approach and roar away',
                'Phenomenal grandstand for appreciating F1 car downforce',
                'Upper rows provide biggest possible view of the action',
                'TV screen available for replays and timing',
                'Excellent photographic opportunities'
            ],
            disadvantages: [
                'Limited to viewing one corner sequence',
                'Cars quickly disappear from view after Turn 4',
                'May feel isolated from main circuit action',
                'Less variety in racing action compared to multi-corner viewpoints'
            ],
            tips: [
                'Spring for upper rows to get the biggest possible view',
                'Bring a camera - this grandstand offers some of the most iconic COTA photo opportunities',
                'Focus on appreciating the technical aspects of F1 cars through the corner sequence'
            ],
        },
        {
            id: 'turn-9-bleachers',
            name: 'Turn 9 Bleachers',
            description: 'Elevated bleacher seating positioned on the crest of a hill overlooking the outer section of track near Turn 9. Offers panoramic views of multiple corner sequences and the long back straight.',
            coordinates: { path: 'M250,100 h100 v80 h-100 Z' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4165/media/1/image_group_2-1.jpg'
            ],
            price: { currency: 'USD', amount: 865 },
            advantages: [
                'Perfectly placed on crest of hill for elevated viewing',
                'Cars appear down the hill from Turn 7 exit',
                'Watch cars wind through corner sequence up to your level',
                'See cars dart off downhill towards Turn 11 hairpin',
                'Long back straight carries cars towards Turn 12 - entire straight in sight',
                'Can appreciate how much distance F1 cars cover in few short seconds',
                'Sheer expanse of view with track variation and elevation changes',
                'Engaging place to watch with multiple viewing angles',
                'Solid low-priced option compared to premium grandstands',
                'TV screen available for timing and replays'
            ],
            disadvantages: [
                'Lack of wheel-to-wheel action at this part of the track',
                'Limited overtaking opportunities in this section',
                'Would be hands-down favorite at many circuits, but COTA\'s high grandstand standards make this merely solid',
                'Bleacher seating may lack comfort of grandstand options'
            ],
            tips: [
                'Bring cushions for bleacher comfort during long sessions',
                'Use binoculars to follow cars along the distant back straight',
                'Great value option for those wanting elevation and views on a budget'
            ],
        }

    ],
};