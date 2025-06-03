import {Circuit} from "@/lib/data/circuits";


// https://www.koobit.com/azerbaijan-grand-prix-e13868/tickets/filarmoniya-grandstand-75927
// https://www.thef1spectator.com/azerbaijan-grand-prix/where-to-watch/
// https://tickets.formula1.com/en/f1-10851-azerbaijan/
export const azerbaijanCircuitData: Circuit = {
    id: 'azerbaijan-gp',
    name: 'Azerbaijan Grand Prix',
    mapImage: '/images/circuits/maps/belgium-map-placeholder.png',
    seatAreas: [
        {
            id: 'absheron-grandstand',
            name: 'Absheron Grandstand',
            description: 'A fairly standard main grandstand affair but with the added appeal that Baku\'s long, 2.2km main straight is often the scene of much action during races. With an epic slipstream and DRS it\'s not unusual to see passes for position happen here, sometimes even seeing 3 or 4 cars abreast.',
            coordinates: { path: 'M120,150 h100 v80 h-100 Z' }, // Would need actual coordinates
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4865/media/1/grandstand_gallery-3.jpg',
                'https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/12112-F1-Experiences-Azerbaijan-Absheron-Grandstand-View-1-47445649c21fb87cee54ed5d82ef651e.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],
            price: { currency: 'EUR', amount: 1205 },
            advantages: [
                'TV screen available',
                'Reserved seats',
                'View into the pitlane',
                'Watch the start and post race interviews',
                'Podium celebration viewing',
                'Closest to main off-track entertainment and refreshments area',
                'Epic slipstream and DRS action with multiple car overtakes',
                'One of the better tracks to choose a main grandstand seat'
            ],
            disadvantages: [
                'High budget required',
                'Not covered',
                'Fairly standard main grandstand experience'
            ],
            tips: [
                'Expect to see exciting overtaking action with 3-4 cars abreast',
                'Great for watching race starts and finishes',
                'Easy access to entertainment and facilities',
                'Baku is particularly good for main straight viewing'
            ],
        },

        {
            id: 'azneft-grandstand',
            name: 'AzNeft Grandstand',
            description: 'Located on the exterior of the track at one of the many 90 degree corners of the Baku Street Circuit, with a glorious backdrop of Baku\'s finest classic and modern architecture.',
            coordinates: { path: 'M120,150 h100 v80 h-100 Z' }, // Would need actual coordinates
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4945/media/1/grandstand_gallery-1.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4945/media/1/grandstand_gallery-2.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4945/media/1/grandstand_gallery-3.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4945/media/1/grandstand_gallery-4.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4945/media/1/grandstand_gallery-1.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],

            price: { currency: 'EUR', amount: 665 },
            advantages: [
                'TV screen available',
                'Reserved seats',
                'Best in price range',
                'Clear view over catch fencing from higher seats',
                'Screen positioned to reduce neck strain'
            ],
            disadvantages: [
                'High budget required',
                'Not covered',
                'Right side offers only brief view of cars before they turn away',
                'Cars show their backs as they accelerate toward Maiden Tower'
            ],
            tips: [
                'Best seats are in the left portion for optimal view of approach on short preceding straight',
                'Get higher seats for clear view over catch fencing',
                'Avoid seats too far right for better car visibility'
            ],
        },

        // {
        //     id: 'filarmonia-grandstand',
        //     name: 'Filarmonia Grandstand',
        //     description: 'A good choice of grandstand for the budget conscious, Filarmonia grandstand is located on the interior of the track at turn 16. This is an excellent vantage point to see the incredible braking ability of a modern Formula 1 car and overtaking is possible here.',
        //     coordinates: { path: 'M120,150 h100 v80 h-100 Z' },
        //     viewImages: [
        //         'https://media.koobit.com/filarmoniya-grandstand-32071.jpg',
        //         'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
        //     ],
        //
        //     price: { currency: 'USD', amount: 0 },
        //     advantages: [
        //         'Best in price range',
        //         'Low budget option',
        //         'Reserved seats',
        //         'Excellent vantage point for F1 braking ability',
        //         'Overtaking opportunities visible',
        //         'Located at turn 16 for good racing action'
        //     ],
        //     disadvantages: [
        //         'Catch fencing can obstruct view from lower rows',
        //         'TV screen not available',
        //         'Not covered',
        //     ],
        //     tips: [
        //         'Try to get a seat at least mid way up the grandstand for better view',
        //         'Avoid lower rows due to catch fencing obstruction',
        //         'Great value for money option',
        //         'Perfect spot to witness incredible F1 braking performance'
        //     ],
        // },
        {
            id: 'bulvar-grandstand',
            name: 'Bulvar Grandstand',
            description: 'Directly opposite the Khazar grandstand, the Bulvar grandstand has the momentous atmosphere that comes from having a sea of F1 fans either side of the track.',
            coordinates: { path: 'M[coordinates would need to be mapped]' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4915/media/1/grandstand_gallery-3.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4915/media/1/grandstand_gallery-1.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],

            price: { currency: 'EUR', amount: 424 },
            advantages: [
                'Low budget option',
                'TV screen available',
                'Reserved seats',
                'Great atmosphere with fans on both sides'
            ],
            disadvantages: [
                'One of the weakest views at the circuit',
                'Cars flash past very quickly',
                'Not covered (exposed to weather)',
                'Poor value for money according to review'
            ],
            tips: [
                'Avoid this grandstand according to the review',
                'Consider other options even if offered for free',
                'View quality makes the experience difficult'
            ],
        },


        {
            id: 'giz-galasi-grandstand',
            name: 'Giz Galasi Grandstand',
            description: 'Situated opposite Baku\'s famous Maiden Tower, not an exceptional vantage point by any means but better than some, the view here is of a high speed, flat-out kink that feeds onto the main straight. Unfortunately the view of the straight is partially blocked by trees. Helpfully a large TV screen faces the grandstand.',
            coordinates: { path: 'M[coordinates would need to be mapped]' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4935/media/1/grandstand_gallery-1.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4935/media/1/grandstand_gallery-2.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],

            price: { currency: 'EUR', amount: 385 },
            advantages: [
                'Low budget option',
                'TV screen available for better viewing',
                'Reserved seating',
                'Better than some other grandstands',
                'View of high-speed section and main straight',
                'Historic location opposite Maiden Tower'
            ],
            disadvantages: [
                'Not an exceptional vantage point',
                'View of straight partially blocked by trees',
                'Not covered (exposed to weather)',
                'Limited action compared to other sections'
            ],
            tips: [
                'Good budget choice if other options are too expensive',
                'Use the TV screen to follow race action',
                'Bring sun protection as it\'s uncovered',
                'Consider if the historic setting adds value for you'
            ],
        },

        {
            id: 'icheri-sheher-grandstand',
            name: 'Icheri Sheher Grandstand',
            description: 'This popular grandstand sells out fast and for good reason. Its a spectacular view of the cars as the drivers drift right, towards the stand in a bid to make the upcoming turn 10 as straight as possible. Then marvel at how close the drivers get to clipping the inside barrier at the corner\'s apex before stepping on the loud peddle and roaring away around the Old City. The iconic backdrop of the fortress walls is the cherry on top and sure makes those Instagram pics look pretty.',
            coordinates: { path: 'M[coordinates would need to be mapped]' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4965/media/1/grandstand_gallery-1.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],

            price: { currency: 'EUR', amount: 580 },
            advantages: [
                'Mid budget option - best value in price range',
                'TV screen available',
                'Reserved seats',
                'Spectacular view of cars drifting and cornering',
                'Close-up action at turn 10 apex',
                'Iconic fortress walls backdrop for photos',
                'Our recommendation',
                'Popular for good reason - sells out fast'
            ],
            disadvantages: [
                'Not covered seating',
                'Sells out quickly due to popularity',
                'May be harder to get tickets',
                'Mid-range pricing (not the cheapest option)'
            ],
            tips: [
                'Book early as this grandstand sells out fast',
                'Great for photography with fortress backdrop',
                'Perfect view of drivers\' precision at corner apex',
                'Excellent value for money in its price range',
            ],
        },

        {
            id: 'khazar-grandstand',
            name: 'Khazar Grandstand',
            description: 'An unusual vantage point for any F1 grandstand, the Khazar is positioned at a point on the track near turn 6 where only a thin barrier and fencing separates cars beginning the lap going in one direction and cars going in the other direction towards the end of the lap. Unfortunately the grandstand isn\'t orientated well enough to have a clear view of both directions of traffic. Its great if you\'re sat in the right hand side of the grandstand but most fans will be stuck with a rather uninteresting view of cars blasting down the main straight.',
            coordinates: { path: 'M[coordinates would need to be mapped]' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4905/media/1/grandstand_gallery-3.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4905/media/1/grandstand_gallery-2.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],

            price: { currency: 'EUR', amount: 385 },
            advantages: [
                'Low budget option',
                'TV screen available',
                'Reserved seats',
                'Unique vantage point with cars going both directions',
                'Great view if seated on right side of grandstand',
                'Close proximity to track action'
            ],
            disadvantages: [
                'Poor orientation - can\'t see both directions clearly',
                'Most seats have uninteresting view of main straight',
                'Location-dependent experience (right side better)',
                'Rather limited action for most spectators',
                'Unusual setup may be confusing for first-time visitors'
            ],
            tips: [
                'Try to get seats on the right-hand side for better views',
                'Unique experience but not ideal for race following',
                'Good budget option if other grandstands are full',
                'Use TV screen to follow overall race progress',
                'Consider if the novelty of the setup appeals to you'
            ],
        },

        {
            id: 'mugham-grandstand',
            name: 'Mugham Grandstand',
            description: 'This is another grandstand at the point where the Formula One cars pass each other in opposite directions at what is ordinarily a dual carriageway. Immediately in front of the grandstand is the main straight and beyond that, though not far away is the short burst of a straight between turns 6 and 7 and you\'ll be able to make out the cars exiting and entering these corners. There is some fencing in your view but nothing too distracting and for everything you can\'t see there is a TV large screen opposite.',
            coordinates: { path: 'M[coordinates would need to be mapped]' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/5015/media/1/grandstand_gallery-2.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/5015/media/1/grandstand_gallery-4.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],
            price: { currency: 'EUR', amount: 560 },
            advantages: [
                'Mid budget option',
                'TV screen available - large screen opposite',
                'Reserved seats',
                'View of main straight directly in front',
                'Can see cars in both directions on dual carriageway',
                'View of turns 6-7 section and corner entry/exit',
                'Minimal fencing obstruction',
                'Good supplementary TV coverage for missed action'
            ],
            disadvantages: [
                'Some fencing in view (though not too distracting)',
                'Distance from corner action',
                'Reliance on TV screen for complete race coverage',
                'Similar concept to other grandstands at this location'
            ],
            tips: [
                'Use the large TV screen to follow race action you can\'t see',
                'Good middle-ground option between budget and premium',
                'Covered seating provides weather protection',
                'Focus on the unique dual-direction car viewing experience',
                'Better positioned than some other grandstands at similar location'
            ],
        },

        {
            id: 'sahil-grandstand',
            name: 'Sahil Grandstand',
            description: 'Right beside Bulvar grandstand but worlds away in terms of view, the Sahil grandstand lies along the long main straight just opposite the turn 5 and 6 chicane. Though on the \'other side\' of the track, the view is quite clear and because the main straight is inches away from you, quite close as well. The giant screen makes keeping up with whats going on even easier.',
            coordinates: { path: 'M[coordinates would need to be mapped]' },
            viewImages: [
                'https://static.tickets-platform.com/img/pages/39/2131/4925/media/1/grandstand_gallery-2.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4925/media/1/grandstand_gallery-3.jpg',
                'https://static.tickets-platform.com/img/pages/39/2131/4925/media/1/grandstand_gallery-4.jpg',
                'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'
            ],
            price: { currency: 'EUR', amount: 560 },
            advantages: [
                'Mid budget option',
                'TV screen available - giant screen for easy following',
                'Covered seating',
                'Reserved seats',
                'Clear view of track action',
                'Very close to main straight (inches away)',
                'Good view of turn 5 and 6 chicane',
                'Much better than nearby Bulvar grandstand',
                'Easy to follow race progress with large screen'
            ],
            disadvantages: [
                'Located on \'other side\' of track from main action',
                'Primarily straight-line viewing',
                'Less exciting than corner-focused grandstands',
                'May miss some trackside atmosphere'
            ],
            tips: [
                'Much superior choice compared to Bulvar grandstand',
                'Great for seeing high-speed straight action up close',
                'Use the giant screen to follow chicane and corner action',
                'Good value option with clear sightlines',
            ],
        },

        // {
        //     id: 'general-admission-baku',
        //     name: 'General Admission in Baku',
        //     description: 'Though most of the general admission areas are along the straight, you do feel very close to the track in places. Arrive early and have a walk around to find a spot you like before it gets too crowded. Some of the best are just after the exit of the sweeping left-hander, between the Giz Galasi and Mugham grandstands.',
        //     coordinates: { path: 'M[coordinates would need to be mapped]' },
        //     viewImages: ['', 'https://gpticketstore.vshcdn.net/uploads/images/13452/f1-baku-map-of-grandstands-2025.jpg'],
        //     price: { currency: 'USD', amount: 0 },
        //     advantages: [
        //         'Lowest budget option',
        //         'Flexibility to move around and find best spots',
        //         'Very close to track in some areas',
        //         'Can explore different vantage points throughout weekend',
        //         'Best spots available between Giz Galasi and Mugham grandstands',
        //         'Good value for money',
        //         'Freedom to change viewing location'
        //     ],
        //     disadvantages: [
        //         'No reserved seating - first come, first served',
        //         'No guaranteed TV screen access',
        //         'Not covered - exposed to weather',
        //         'Gets crowded quickly',
        //         'Most areas along straights with limited corner action',
        //         'Need to arrive very early for best spots',
        //         'May have obstructed views in some areas'
        //     ],
        //     tips: [
        //         'Arrive early to secure the best viewing spots',
        //         'Walk around to scout locations before settling',
        //         'Focus on areas between Giz Galasi and Mugham grandstands',
        //         'Bring sun protection as areas are uncovered',
        //         'Consider mobility throughout the race weekend',
        //         'Perfect for budget-conscious fans who don\'t mind the effort'
        //     ],
        // }


    ],
};