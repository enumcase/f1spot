import { Circuit } from "@/lib/data/circuits";
import { getCircuitMapUrl } from "../../imageUtils";

export const singaporeCircuitData: Circuit = {
    id: "singapore-gp",
    name: "Singapore Grand Prix",
    mapImage: getCircuitMapUrl("singapore-map.png"),
    seatAreas: [
        {
            id: "premier-walkabout",
            name: "Premier Walkabout",
            description: "Provides general admission viewing with access to all zones (1, 2, 3, 4), allowing fans to roam and watch from various trackside viewing platforms. This ticket offers the flexibility to catch action at the first and final corners, see cars entering/exiting the pit lane, and move freely to find the best vantage points around the circuit. Premier Walkabout fans also enjoy access to all off-track entertainment across the circuit, including concerts on the Padang Stage in Zone 4 and the Wharf Stage in Zone 1.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2024/tickets/180-photos/premier-walkabout.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-premier-walkabout/premier-walkabout-02.jpg?v=3",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-premier-walkabout/premier-walkabout-03.jpg?v=4"
            ],
            price: { currency: "SGD", amount: 638 },
            advantages: [
                "TV screen available",
                "Most affordable full-access option – roam all around the track and experience different corners.",
                "Access to Zones 1–4 including all fan villages and concert stages (Padang & Wharf).",
                "Multiple trackside viewing platforms to choose from – catch action at Turn 1, final corners, pit entry/exit, Turn 5, etc.",
                "Opportunity to see the race from every possible angle by moving around throughout the weekend.",
                "Great for fans who enjoy exploring and soaking in different atmospheres across the circuit."
            ],
            disadvantages: [
                "No reserved seating – viewing is first-come, first-served and often standing-room only.",
                "Can get very crowded at popular spots; you’ll need to arrive early to secure prime views.",
                "Views can be obstructed by catch fencing or other fans, especially if you’re not at the front of a viewing platform.",
                "Only basic facilities (no grandstand cover or dedicated screen in some areas) – rely on public screens for race updates.",
                "Lots of walking and standing – it can be tiring to move between far-apart zones over the weekend."
            ],
            tips: [
                "Arrive early each day to claim a good spot, especially for the race start or at key corners.",
                "Take advantage of the freedom to change locations: watch the start near Turn 1, then explore other zones (e.g. a mid-track corner or the Padang area for the finish).",
                "Use the giant screens around the track to follow the race when you’re not near the main action.",
                "Bring essentials for comfort – comfortable shoes, water, and rain gear – as you’ll be outdoors and on your feet most of the time.",
                "Don’t miss the post-race concert at the Padang Stage in Zone 4 – with a Walkabout ticket you can head straight there after the race."
            ]
        },
        {
            id: "zone-4-walkabout",
            name: "Zone 4 Walkabout",
            description: "A budget-friendly general admission option that grants access only to Zone 4 of the circuit. Fans can watch from various points around Zone 4 (the Marina Bay waterfront area and Padang vicinity), enjoying views of cars in the final sector and the post-race fireworks. Like Premier Walkabout, it’s a free roaming ticket – but you’ll be limited to the Zone 4 areas, including the Padang main stage for concerts. It’s an economical way to experience the night race atmosphere, though you won’t have access to the pit straight or Turns 1–3 viewing areas.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-zone-4-walkabout/Zone-4-walkabout-01.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-zone-4-walkabout/Zone-4-walkabout-03.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-zone-4-walkabout/Zone-4-walkabout-04.jpg?v=2"

            ],
            price: { currency: "SGD", amount: 275 },
            advantages: [
                "TV screen available",
                "Cheapest F1 ticket option in Singapore – great for fans on a tight budget who still want to experience the event.",
                "Access to Zone 4 attractions: Padang Stage concerts, food stalls, and F1 Village activities in the zone.",
                "Freedom to move between different Zone 4 viewing platforms (e.g. along Stamford Straight or Esplanade Drive) to find your preferred spot.",
                "Close-up views of cars in the final part of the lap – watch them brake and blast past famous landmarks.",
                "Still provides the thrilling atmosphere of the night race and the spectacular fireworks at the finish."
            ],
            disadvantages: [
                "Restricted to Zone 4 only – you cannot access Turns 1–3, pit straight, or other zones of the track.",
                "Fewer prime viewing locations and most are along straights or gentle corners (overtaking is rare in Zone 4 sections).",
                "Popular standing areas can fill up quickly – expect to camp out early for a good spot, especially on race day.",
                "No shelter at viewing platforms – you’re exposed to weather (sun or rain) since there’s no covered grandstand in GA areas.",
                "Limited viewing angles – you might only see cars for a brief moment as they flash by, requiring reliance on trackside video screens."
            ],
            tips: [
                "Arrive as soon as gates open, particularly on Sunday, to claim a front-row spot at a Zone 4 viewing platform.",
                "Bring a portable seat pad or blanket if you plan to sit on the ground in uncrowded areas.",
                "Plan to spend time at the Padang Stage – since track views are limited, make the most of the off-track entertainment and concerts.",
                "Check out different vantage points during practice sessions to discover your favorite spot before qualifying and race.",
                "Pack rain protection – Singapore weather is unpredictable and GA areas offer no cover if it pours."
            ]
        },
        {
            id: "super-pit-grandstand",
            name: "Super Pit Grandstand",
            description: "Elevated seating above the main Pit Grandstand, guaranteeing higher rows for an unobstructed panoramic view over the pit lane and start/finish straight. Ideal for watching both pit-stop battles and the lights-out start, with team garages clearly visible below.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-super-pit/super-pit-01.jpg?v=4",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-super-pit/super-pit-02.jpg?v=4"
            ],
            price: { currency: "SGD", amount: 2188 },
            advantages: [
                "TV screen available",
                "Guaranteed high-row seats with clear sightlines over the pit lane and grid.",
                "Exceptional view of pit-stop action and team garage activity.",
                "Panoramic perspective of the start line and first-lap battles at Turn 1.",
                "Covered, reserved seating for all three days."
            ],
            disadvantages: [
                "Most expensive general grandstand option.",
                "Less intimate crowd atmosphere than lower PitGrandstand rows.",
                "Distance from off-track entertainment zones."
            ],
            tips: [
                "Sit as close to the center of the stand as possible for the best balanced view.",
                "Bring ear protection for the intensified sound from above the pit lane.",
                "Use your Zone 1 access during breaks to explore Turn 1 and 2 walkabout areas."
            ]
        },
        {
            id: "pit-grandstand",
            name: "Pit Grandstand",
            description: "The main straight grandstand situated directly opposite the team garages, offering one of the most exciting and immersive views at Marina Bay. From here, you can see the cars line up on the starting grid, watch the frantic pit stops with a view into the pit boxes across the track, and witness the cars thunder down the Pit Straight towards Turn 1. This grandstand also puts you in prime position for the chequered flag and podium ceremony celebrations, complete with a stunning fireworks display when the race finishes.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-pit/pit-grandstand-01.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-pit/pit-grandstand-02.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-pit/pit-grandstand-03.jpg?v=2"
            ],
            price: { currency: "SGD", amount: 1548 },
            advantages: [
                "TV screen available",
                "Fantastic view of the start/finish line – experience the build-up on the grid and the thrill of race starts firsthand.",
                "Overlooks the pit lane and garages – watch teams execute pit stops and see into the garages for a behind-the-scenes look.",
                "See the winner take the chequered flag and enjoy front-row access to podium celebrations and post-race fireworks.",
                "Large covered grandstand with reserved seating and video wall opposite, so you can follow the entire race comfortably.",
                "Access to all zones – you can explore the Padang entertainment and other areas when cars aren’t on track."
            ],
            disadvantages: [
                "Typically the most expensive grandstand at Singapore – high cost for the premium experience.",
                "Limited on-track overtaking in front of you – most racing action happens elsewhere except the start and pit strategies.",
                "If you’re in lower rows, the pit wall and catch fencing might partially obstruct your view of the cars on track and pit lane.",
                "Distance to Turn 1 and beyond – you’ll see cars accelerate towards Turn 1, but detailed action in Turns 1–3 is better viewed on the super screen.",
                "Noise levels are very high at the start and during pit stop wheel-gun action – be prepared with ear protection."
            ],
            tips: [
                "Try to sit higher up (upper rows) for a panoramic view over the pits – the top rows let you see pit stops more clearly and some of Turn 1 braking zone.",
                "Watch the grid preparations and soak in the pre-race atmosphere – the Pit Grandstand is perfect for seeing the national anthem, driver parade, and team mechanics on the grid.",
                "After the race, join the track invasion from Zone 1 to get close to the podium and celebrate with the crowd on the main straight.",
                "Use the giant screen across the track to follow battles on other parts of the circuit.",
                "Take advantage of Zone 1 access: explore support race viewing spots at Turns 1–3 during less busy sessions."
            ]
        },
        {
            id: "turn-1-grandstand",
            name: "Turn 1 Grandstand",
            description: "Located on the outside of the start/finish straight at Turn 1, this stand offers terrific views of the lights-out start and heavy braking into the first corner. You’ll see cars accelerate off the line and fight wheel-to-wheel for position under the track lights.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-turn-1/turn1-03.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/180-photos/turn-1-grandstand.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-turn-1/turn1-02.jpg?v=2"
            ],
            price: { currency: "SGD", amount: 1548 },
            advantages: [
                "TV screen available",
                "Prime vantage for the race start and first-corner overtakes.",
                "Good view of cars’ launch and initial battles.",
                "Covered seating with reserved spots."
            ],
            disadvantages: [
                "Cars are only in view briefly each lap.",
                "Can feel crowded during the start."
            ],
            tips: [
                "Arrive early to see grid preparations and driver parade.",
                "Higher rows give a clearer angle over the catch fencing."
            ]
        },
        {
            id: "turn-2-grandstand",
            name: "Turn 2 Grandstand",
            description: "Set just beyond Turn 1 on the outside line, this stand captures cars emerging from the first corner and charging into the short straight toward Turn 3. Ideal for seeing slipstream duels and the exit line of Turn 2.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-turn-2/turn2-01.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-turn-2/turn2-03.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-turn-2/turn2-04.jpg?v=2"
            ],
            price: { currency: "SGD", amount: 1548 },
            advantages: [
                "TV screen available",
                "Excellent view of first-corner exits and slipstream battles.",
                "Reserved, covered seating."
            ],
            disadvantages: [
                "Limited to a short straight and one corner.",
                "Less track length in view compared to Pit stands."
            ],
            tips: [
                "Aim for center seats to see both Turn 1 exit and Turn 2 apex clearly.",
                "Use the big screen opposite to track the action beyond Turn 2."
            ]
        },
        {
            id: "pit-exit-grandstand",
            name: "Pit Exit Grandstand",
            description: "Inside the track at the pit exit merge, watch cars as they rejoin the circuit from pit lane under racing speed. This unique vantage shows the strategic pit-exit battles.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/180-photos/pit-exit-grandstand.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-pit-exit-grandstand/pit-exit-gs-01.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 1498 },
            advantages: [
                "TV screen available",
                "Close-up view of cars merging from pit lane.",
                "See pit stop strategies play out live."
            ],
            disadvantages: [
                "Brief car appearance each lap.",
                "Less corner action compared to Turn 1 stands."
            ],
            tips: [
                "Sit on the inside edge for the clearest pit-exit line.",
                "Combine with walkabout to see action at Turn 1."
            ]
        },
        {
            id: "chicane-turn1-grandstand",
            name: "Chicane @ Turn 1 Grandstand",
            description: "A grandstand on the inside of Turn 1, offering a thrilling view of the first chicane complex. From here, you’ll watch F1 cars brake from high speed on the Pit Straight and battle for overtaking into Turn 1, then immediately switch through Turns 2 and 3. This vantage point is perfect for observing the critical exit of Turn 1 and seeing where the cars rejoin from the pit lane at racing speed. It’s an insider’s view of one of Singapore’s prime action zones.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-chicane-at-turn-1/chicane-turn1-01.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-chicane-at-turn-1/chicane-turn1-02.jpg?v=2"

            ],
            price: { currency: "SGD", amount: 1498 },
            advantages: [
                "TV screen available",
                "Multi-corner view – you can follow the cars through Turn 1 and see them snake through Turns 2 and 3 from one vantage point.",
                "Excellent perspective of drivers jostling for position in the opening corners.",
                "Unique view of the pit exit merge: watch cars coming out of the pits and blending into traffic.",
                "Zone 1 access with a big TV screen visible, so you won’t miss action elsewhere.",
                "Covered, numbered seating – comfort from the elements and an assigned spot."
            ],
            disadvantages: [
                "No direct view of the main straight start line – you’ll see the cars approach Turn 1 but not the grid itself.",
                "The initial braking into Turn 1 happens slightly out of sight.",
                "High price tier – expensive, often comparable to other Turn 1 stands.",
                "Smaller stand atmosphere – you’re in a smaller crowd separated by the track.",
                "Sells out fast – popular stand and one of the first to fully book."
            ],
            tips: [
                "If sold out, consider the Chicane @ Turn 2 Grandstand as a Plan B – similar inside-track perspective.",
                "Capture the action at Turn 1 exit – have your camera ready for dramatic photos.",
                "Keep an eye on the pit exit light and cars exiting the pits.",
                "Seats toward the left side give a better angle into Turn 1 entry; seats on the right see more of Turn 3.",
                "Use Zone 1 privileges to explore Padang or Esplanade during breaks."
            ]
        },
        {
            id: "chicane-turn2-grandstand",
            name: "Chicane @ Turn 2 Grandstand",
            description: "Located just down the inside of the track, this stand offers a sweeping view of the Turns 1–3 complex. You’ll see cars charge out of Turn 1, snake through Turn 2, then accelerate toward Turn 3. This section often sees drivers fighting to out-drag each other after the initial corner and provides one of the busiest panoramas of the circuit.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-chicane-at-turn-2/chicane-turn2-01.jpg?v=2"
            ],
            price: { currency: "SGD", amount: 1498 },
            advantages: [
                "TV screen available",
                "Wide field of vision across Turns 1, 2, and 3 – witness multiple corners in one glance.",
                "Plenty of action: from late-braking duels into Turn 1 to switchbacks through Turn 2.",
                "Slightly easier to get tickets than Turn 1 Chicane, but same thrill.",
                "Full Zone 1 privileges and a clear view of a trackside video wall.",
                "Covered seating and reserved spot – protection from weather."
            ],
            disadvantages: [
                "No view of the starting grid or pit lane – you experience the aftermath of the start.",
                "Perspective changes as cars go past, so you must turn to follow them.",
                "Less head-on perspective of Turn 1 compared to outside stands.",
                "Some infrastructure (fencing, bridges) can clip the edges of your view.",
                "High demand and cost – still a premium grandstand."
            ],
            tips: [
                "Choose this if Turn 1 Chicane is full – a very similar experience.",
                "Aim for seats in the middle for the best balanced view.",
                "Observe the Turn 1 apex and drivers’ lines through Turn 1 exit.",
                "Use the big screen opposite to keep tabs on other parts of the track.",
                "Enjoy Zone 1 amenities between sessions: stroll to Padang or Wharf Stage."
            ]
        },
        {
            id: "marina-bay-grandstand",
            name: "Marina Bay Grandstand",
            description: "A prime spot covering the final two corners (Turns 15 and 16) with the iconic Marina Bay and Singapore Flyer as a backdrop. Watch cars brake hard for the penultimate turn, then re-accelerate toward the finish line under the city lights.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/marina-bay-grandstand/marina-bay-grandstand-day.jpg?v=1"
            ],
            price: { currency: "SGD", amount: 1498 },
            advantages: [
                "TV screen available",
                "Spectacular city and Marina Bay waterfront backdrop.",
                "See high-speed braking and race finish fireworks."
            ],
            disadvantages: [
                "Limited on-track duration each lap (final sector only).",
                "Often sold out early."
            ],
            tips: [
                "Choose seats near the center for the best skyline alignment.",
                "Stay after the race for the fireworks display over the bay."
            ]
        },
        {
            id: "skyline-grandstand",
            name: "Skyline Grandstand",
            description: "Perched overlooking the stretch between Turns 13 and 14, this stand frames the Singapore skyline beautifully and captures cars at medium speed under the track lights.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/skyline-grandstand/skyline-gs-02.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/skyline-grandstand/skyline-gs-03.jpg"
            ],
            price: { currency: "SGD", amount: 1388 },
            advantages: [
                "TV screen available",
                "Unique elevated city skyline views.",
                "Great picture opportunities at night."
            ],
            disadvantages: [
                "Cars zip past quickly – short viewing window.",
                "No multi-corner view."
            ],
            tips: [
                "Bring a wide-angle camera lens for skyline shots.",
                "Combine with walkabout to see other sectors."
            ]
        },
        {
            id: "promenade-grandstand",
            name: "Promenade Grandstand",
            description: "Located along the waterfront promenade after Turn 10, this grandstand offers a broad straight-line view before cars dive into the complex at Turns 11–12. Ideal for speed enthusiasts.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/180-photos/promenade-grandstand.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-promenade/promenade-01.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 1288 },
            advantages: [
                "TV screen available",
                "Long straight-line viewing section.",
                "Close to fan zone amenities."
            ],
            disadvantages: [
                "No corner action – pure straight-line speed.",
                "Often used by casual spectators and can be crowded."
            ],
            tips: [
                "Sit central for the longest sightline down the straight.",
                "Explore nearby food stalls during breaks."
            ]
        },
        {
            id: "bayfront-grandstand",
            name: "Bayfront Grandstand",
            description: "Sitting under the Benjamin Sheares Bridge at Turns 16–17, this brand-new stand showcases cars braking from a high-speed straight into the penultimate corner, with the Singapore Flyer looming above.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-bayfront/bayfront-02.jpg?v=4",
                "https://storage.singaporegp.sg/web/2025/tickets/180-photos/bayfront-grandstand.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-bayfront/bayfront-01.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 1288 },
            advantages: [
                "TV screen available",
                "Fantastic view of heavy-braking zone into Turn 16–17.",
                "Iconic Flyer skyline overhead."
            ],
            disadvantages: [
                "Limited corner sequence (only one brake zone).",
                "Under-construction surroundings may affect ambiance."
            ],
            tips: [
                "Aim for seats under the bridge for rain cover.",
                "Bring ear protection for loud braking noises."
            ]
        },
        {
            id: "raffles-grandstand",
            name: "Raffles Grandstand",
            description: "A smaller grandstand positioned at the apex of Turn 5, offering an expansive view of cars navigating a medium-speed right-hander and then roaring down one of Marina Bay’s longest straights. You can see the cars approach through the kink at Turn 4, sweep through Turn 5, and accelerate toward the Memorial straight which leads into the first DRS zone. With the Singapore Flyer and city skyline as a backdrop, it offers a balanced view of speed and cornering.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-raffles/raffles-01.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 1193 },
            advantages: [
                "TV screen available",
                "Excellent panoramic view of Turn 5 – see the cars approach, turn, and speed away.",
                "Broad perspective – you catch the cars for longer compared to zip-by stands.",
                "Observe cars setting up overtakes: Turn 5 leads into a DRS zone.",
                "Shares a large TV screen with Republic Grandstand for full-race coverage.",
                "Mid-tier Zone 1 pricing with full zone access."
            ],
            disadvantages: [
                "Giant screen angle favors the opposite stand, so you may look sideways to follow it.",
                "No major overtaking occurs at Turn 5 itself – mostly setup corner.",
                "Smaller crowd atmosphere than Pit or Padang.",
                "Incidents at Turn 5 are relatively rare.",
                "A bit farther from main concert stage (Padang), though still accessible."
            ],
            tips: [
                "If choosing between Republic and Raffles, pick Raffles for the wider view.",
                "Sit front-to-middle for best angle under the catch fence.",
                "Watch drivers’ lines through Turn 5 – see how they clip the apex.",
                "Note support race activity in the nearby pit lane during breaks.",
                "After on-track action, walk to Padang Stage for nightly concerts."
            ]
        },
        {
            id: "republic-grandstand",
            name: "Republic Grandstand",
            description: "Tucked on the inside of Turn 5, this stand brings you extremely close to the track as cars blast past just meters away. You’ll feel the rush of air and sound as drivers sweep through Turn 5 at high speed. While the view is brief, the intensity is unmatched. It’s one of the most affordable grandstand seats and grants full Zone 1–4 access, plus a head-on angle towards the city skyline for post-race fireworks.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-republic/republic-02.jpg?v=3",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-republic/republic-03.jpg?v=3",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-republic/republic-04.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 888 },
            advantages: [
                "TV screen available",
                "Lowest-priced Zone 1 grandstand – great for a budget seat with zone access.",
                "Incredibly close to the track – feel the engines roaring right at you.",
                "Good angle for fireworks and city skyline after the race.",
                "Covered, numbered seating and visible large screen.",
                "Convenient access near Gate 2 and Promenade MRT station."
            ],
            disadvantages: [
                "Very brief view of the cars - only the turn-in and part of exit of Turn 5.",
                "Least action-packed – mostly a high-speed procession.",
                "Limited view range – just the Turn 5 kink.",
                "Lower rows may have partial fencing obstructions.",
                "Underwhelming if you stay here all weekend without exploring."
            ],
            tips: [
                "Consider Republic for single-day tickets to save money, then upgrade for Sunday.",
                "Sit in higher rows for better sightlines over the fence.",
                "Use Zone 1 access to explore other grandstand areas during breaks.",
                "Wear ear protection – sound can be intense at Turn 5.",
                "After sessions, it’s a short walk to Promenade MRT and nearby amenities."
            ]
        },
        {
            id: "connaught-grandstand",
            name: "Connaught Grandstand",
            description: "Positioned just before the braking zone of Turn 14, the Connaught Grandstand offers a close-up view of cars decelerating from high speed into the tight right-hander. You’ll see the rear-end step out as drivers scrub off speed, then watch them power away toward the City Hall Straight. As a Zone 4 stand, you also have direct access to the Padang concert stage and F1 Village amenities.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/180-photos/connaught-grandstand.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-connaught/connaught-02.jpg?v=3",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-connaught/connaught-04.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 668 }, 
            advantages: [
                "TV screen available",
                "Very close to the heavy-braking zone at Turn 14 for dramatic late-braking action.",
                "Zone 4 pass grants entry to Padang Stage concerts and off-track fan villages.",
                "Covered, reserved seating with good sightlines under floodlights.",
                "Preferred gates (3A, 4, 5, 6) for quicker entry/exit.",
                "Direct view of cars’ suspension movement and rear-tyre smoke under trail-braking."
            ],
            disadvantages: [
                "Only sees one corner—no multi-corner panorama.",
                "Cars are only in front of you briefly each lap.",
                "Zone 4 restriction means no pit-straight or Turn 1 access.",
                "Smaller stand atmosphere compared to Padang or Pit Grandstands."
            ],
            tips: [
                "Sit in the middle section to balance views of entry and exit of the corner.",
                "Bring ear protection—braking noises are extremely loud at Turn 14.",
                "Arrive early to explore the Padang concert area before sessions start.",
                "Use your Zone 4 access on off-days to wander and find a second viewing spot."
            ]
        },
        {
            id: "padang-grandstand",
            name: "Padang Grandstand",
            description: "A Zone 4 grandstand alongside the historic Padang field with National Gallery and City Hall as a backdrop. It’s set at the end of St. Andrew’s Road where cars sprint out of Turn 9 before braking hard into the Turn 10 chicane. While overtaking is rare here, you get a broad view of cars at top speed and direct access to Padang Stage concerts and off-track entertainment.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-padang/padang-01.jpg?v=3",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-padang/padang-02.jpg?v=3",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-padang/padang-04.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 668 },
            advantages: [
                "TV screen available",
                "Affordable grandstand with scenic city backdrop.",
                "Views of cars at top speed on St. Andrew’s Road.",
                "Multiple giant screens keep you informed.",
                "Proximity to Padang Stage for concerts.",
                "Covered seating and numbered spots."
            ],
            disadvantages: [
                "Least exciting on-track viewing – straight-line section only.",
                "Cars decelerate for the chicane immediately after passing.",
                "Zone 4 only – no access to other track areas.",
                "Underwhelming for on-track action; mainly bought for concerts.",
                "Split into A/B sections with slightly different vantage points."
            ],
            tips: [
                "Choose seats on the left side closest to Turn 10 for better braking views.",
                "Plan to enjoy concerts and off-track festivities with your ticket.",
                "Arrive early to catch pre-race shows or flyovers.",
                "Leverage nearby food and drink stalls in Zone 4 during breaks.",
                "After the race, join GA fans for a track walk toward the podium if permitted."
            ]
        },
        {
            id: "empress-grandstand",
            name: "Empress Grandstand",
            description: "Located at the exit of the infamous “Singapore Sling” (Turn 10), the Empress Grandstand sits on the outside of the tight chicane where cars swing left-right-left. It’s one of the few places to see multiple direction changes up close, with the National Gallery skyline as your backdrop. Zone 4 access also includes entry to nearby fan villages and the Padang music stage.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-orange-at-empress/empress-02.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-orange-at-empress/empress-03.jpg?v=2",
                "https://storage.singaporegp.sg/web/2025/tickets/180-photos/empress-grandstand.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-orange-at-empress/empress-04.jpg?v=2"
            ],
            price: { currency: "SGD", amount: 668 },
            advantages: [
                "TV screen available",
                "Outstanding close-in view of the Turn 10 chicane’s quick direction changes.",
                "Watch cars’ suspension dive and yaw as they navigate the tight “Sling.”",
                "Zone 4 pass gives easy access to concerts and F1 Village activities.",
                "Covered, reserved seating keeps you sheltered from rain or spray."
            ],
            disadvantages: [
                "Only one corner in sight—no straight-line views or multi-corner action.",
                "Cars slow to crawl through here—less high-speed drama compared to straights.",
                "Zone 4 limitation excludes pit-lane and Turn 1 areas.",
                "Smaller crowd can feel less atmospheric than larger stands."
            ],
            tips: [
                "Grab a mid-height seat so you can see under the catch fence at the apex.",
                "Best time for photos is Qualifying, when cars are fighting for the perfect chicane line.",
                "Combine with walkabout tickets to explore Turn 9 and Turn 11 for contrast views."
            ]
        },
        {
            id: "stamford-grandstand",
            name: "Stamford Grandstand",
            description: "Set along Stamford Road between Turn 9 and Turn 10, the Stamford Grandstand offers a long-straight view of cars cresting a small rise before hard braking into the Empress chicane. You’ll catch them at full speed under the floodlights, then follow their mid-corner slip through the next sequence. As with other Zone 4 stands, you get easy access to the Padang Stage and fan villages.",
            coordinates: { path: "M[coordinates to be mapped]" },
            viewImages: [
                "https://storage.singaporegp.sg/web/2025/tickets/gs-stamford/stamford-01.jpg?v=3",
                "https://storage.singaporegp.sg/web/2025/tickets/180-photos/stamford-grandstand.jpg",
                "https://storage.singaporegp.sg/web/2025/tickets/gs-stamford/stamford-02.jpg?v=3"
            ],
            price: { currency: "SGD", amount: 548 },
            advantages: [
                "TV screen available",
                "Long sightline down the rise into Turn 9—excellent for speed shots under lights.",
                "Good vantage for seeing which cars carry the most speed into the chicane.",
                "Zone 4 pass includes off-track entertainment and concert access.",
                "Covered seating and numbered seats for comfort and assured spots."
            ],
            disadvantages: [
                "Limited to one straight-into-corner sequence—no multiple-corner coverage.",
                "Cars are at moderate speed here—less wheel-to-wheel overtaking action.",
                "Zone 4 restriction excludes premium zones (1–3).",
                "Slightly removed from the most iconic corners—some may find it less thrilling."
            ],
            tips: [
                "Sit higher up for the best view over the rise and into the braking zone.",
                "Use the opposite-facing big screen to track on-track battles elsewhere.",
                "Combine with a walkaround in Zone 4 during support races for variety."
            ]
        }
    ]
};
