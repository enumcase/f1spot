import { Circuit } from '../circuits';
import { getCircuitMapUrl } from '../../imageUtils';



// https://www.ticketsgpbarcelona.com/3-days-tickets-f-1-barcelona,99.html#forMobile
// https://oversteer48.com/
// todo add expensiveness bar (like 4 out of 5)
// TV yes or no
// food yes or no
// add video link or view
export const spainCircuitData: Circuit = {
  id: 'spain-gp',
  name: 'Spanish Grand Prix',
  mapImage: getCircuitMapUrl('spain-map.png'),
  seatAreas: [
    // {
    //   id: 'main-grandstand',
    //   name: 'Main Grandstand',
    //   description: 'VPositioned along the pit straight, offering views of the start/finish line, pit stops, pre-race build-up, and podium ceremony.',
    //   coordinates: { path: 'M50,200 h200 v80 h-200 Z' },
    //   viewImages: ['/images/seats/spain/main-grandstand-view.jpg'],
    //   price: { currency: 'EUR', amount: 0 },
    //   advantages: ['Excellent for race start and finish', 'Direct view of pit lane activities', 'Podium view', 'Covered seating provides shade'],
    //   disadvantages: ['Limited view of track corners', 'Sells out quickly due to popularity'],
    //   tips: ['Opt for higher rows for a better panoramic view of the straight and pits', 'Book early to secure seats, as this is one of the first to sell out'],
    // },
    // {
    //   id: 'grandstand-a',
    //   name: 'Grandstand A',
    //   description: 'Located near Turn 1, providing views of the first corner, a prime overtaking spot, and cars accelerating through Turns 2 and 3.',
    //   coordinates: { path: 'M50,200 h200 v80 h-200 Z' },
    //   viewImages: ['/images/seats/spain/main-grandstand-view.jpg'],
    //   price: { currency: 'EUR', amount: 0 },
    //   advantages: ['Excellent for first-lap chaos and overtaking action at Turn 1.', 'Views extend to Turns 2 and 3, offering multiple action points', 'Good value for money compared to Main Grandstand', 'TV screens nearby to follow race action'],
    //   disadvantages: ['Limited view of the rest of the circuit', 'Uncovered, so bring sunscreen and hats'],
    //   tips: ['Choose higher rows for a broader view of Turn 1 and beyond', 'Arrive early to enjoy the atmosphere during pre-race preparations'],
    // },
    //
    // {
    //   name: "Grandstand Main, High",
    //   id: "grandstand-main-high",
    //   description: 'Positioned along the pit straight, offering views of the start/finish line, pit stops, pre-race build-up, and podium ceremony.',
    //   coordinates: { path: 'M50,200 h200 v80 h-200 Z' },
    //   viewImages: ['/images/seats/spain/main-grandstand-view.jpg'],
    //   price: { currency: 'EUR', amount: 0 },
    //   advantages: ['Excellent for race start and finish', 'Direct view of pit lane activities', 'Podium view', 'Covered seating provides shade'],
    //   disadvantages: ['Limited view of track corners', 'Sells out quickly due to popularity'],
    //   tips: ['Opt for higher rows for a better panoramic view of the straight and pits', 'Book early to secure seats, as this is one of the first to sell out'],
    // },
    // {
    //   name: "Grandstand Main, Down",
    //   id: "grandstand-main-down",
    // },
    // {
    //   name: "Grandstand G",
    //   id: "grandstand-g",
    // },
    // {
    //   name: "Grandstand G",
    //   id: "grandstand-g",
    // },
    // {
    //   name: "Grandstand M",
    //   id: "grandstand-m",
    // },
    // {
    //   name: "Grandstand N",
    //   id: "grandstand-n",
    // },
    // {
    //   name: "Grandstand J",
    //   id: "grandstand-j",
    // },
    // {
    //   name: "Grandstand A",
    //   id: "grandstand-a",
    // },
    // {
    //   name: "Grandstand C",
    //   id: "grandstand-c",
    // },
    // {
    //   name: "Grandstand E",
    //   id: "grandstand-e",
    // },
    // {
    //   name: "Grandstand F",
    //   id: "grandstand-f",
    // },
    // {
    //   name: "Grandstand H",
    //   id: "grandstand-h",
    // },
    // {
    //   name: "Grandstand K",
    //   id: "grandstand-k",
    // },
    // {
    //   name: "Grandstand L",
    //   id: "grandstand-l",
    //   description: "Located along the main straight opposite the pit lane, Grandstand L offers excellent views of the start/finish line action, pit lane activity, and high-speed straight-line racing. One of the most popular locations for casual fans wanting to see multiple aspects of F1 action including starts, finishes, and pit stops.",
    //   advantages: [
    //     "Perfect view of race starts, finishes, and podium celebrations",
    //     "Can watch pit stops and pit lane activity throughout the weekend",
    //     "Multiple large TV screens providing coverage of the entire circuit",
    //     "Premium facilities with restaurants, bars, and extensive merchandise areas",
    //     "High-speed action as cars reach top speeds on the main straight",
    //     "Great atmosphere during key race moments with engaged crowd"
    //   ],
    //   disadvantages: [
    //     "Premium pricing due to prime location and facilities",
    //     "Can be very crowded, especially during race weekend",
    //     "Limited cornering action compared to turn-based grandstands",
    //     "Sun exposure can be intense during midday sessions",
    //     "May feel distant from the technical racing action in corners"
    //   ],
    //   tips: [
    //     "Book early as this is one of the most sought-after grandstands",
    //     "Bring sun protection - hat, sunscreen, and sunglasses are essential",
    //     "Arrive early to find good spots and explore the premium facilities",
    //     "Take advantage of nearby restaurants and bars for meals and breaks",
    //     "Use the TV screens to follow technical battles happening in other sectors",
    //     "Stay for post-race activities as you'll have the best view of celebrations",
    //     "Consider bringing binoculars to see pit crew details during stops"
    //   ],
    //
    //   price: { currency: 'EUR', amount: 0 },
    //   coordinates: { path: 'M50,200 h200 v80 h-200 Z' },
    //   viewImages: ['/images/seats/spain/main-grandstand-view.jpg'],
    // },
    //
    //   // kiwkene pizdej
    // {
    //   name: "Grandstand T1",
    //   id: "grandstand-t1",
    //   description: "Premium grandstand positioned at Turn 1, offering front-row seats to the most exciting part of any F1 race - the start and first corner action. Perfect for casual fans who want maximum drama and the best chance to see overtaking, wheel-to-wheel racing, and potential incidents.",
    //   advantages: [
    //     "Best overtaking action on the entire circuit, especially at race start",
    //     "Multiple large TV screens showing race action from around the circuit",
    //     "Premium facilities with better food options, bars, and merchandise stands nearby",
    //     "Excellent photo opportunities with cars at close range during braking",
    //     "High energy atmosphere with engaged crowd during key moments",
    //     "Great view of pit lane entry and can sometimes see pit stops"
    //   ],
    //   disadvantages: [
    //     "Most expensive grandstand tickets at the circuit",
    //     "Can get very crowded, especially during race day",
    //     "Limited view of the rest of the circuit compared to some elevated positions",
    //     "High sun exposure during certain times of day",
    //     "May sell out quickly due to popularity"
    //   ],
    //   tips: [
    //     "Book tickets well in advance as this grandstand sells out first",
    //     "Bring sunscreen and a hat as there's significant sun exposure",
    //     "Arrive extra early on race day to secure the best spots and avoid crowds",
    //     "Take advantage of nearby premium facilities for food and drinks",
    //     "Stay alert during practice and qualifying for different racing lines and braking points",
    //     "Use the large screens to follow action when cars are on other parts of the circuit",
    //     "Consider bringing earplugs if you're sensitive to noise - it gets very loud here"
    //   ],
    //
    //
    //   price: { currency: 'EUR', amount: 0 },
    //   coordinates: { path: 'M50,200 h200 v80 h-200 Z' },
    //   viewImages: ['/images/seats/spain/main-grandstand-view.jpg'],
    // },
    // // kiwkene pizdej
    // {
    //   name: "Grandstand T10",
    //   id: "grandstand-t10",
    //   description: "A mid-tier grandstand at Turn 10 offering a decent view of racing action in the technical middle sector. Good for casual fans who want to see overtaking and close racing without paying premium prices for main straight seats.",
    //   advantages: [
    //     "More affordable than premium grandstands while still offering good racing views",
    //     "Usually has decent overtaking action as cars come off the back straight",
    //     "Less crowded than main grandstands, easier to move around and find facilities",
    //     "Can see cars at different speeds - braking, cornering, and accelerating",
    //     "Good atmosphere without being overwhelming for casual viewers"
    //   ],
    //   disadvantages: [
    //     "May not have big screens or TV monitors like premium grandstands",
    //     "Food and drink options might be limited compared to main grandstand areas",
    //     "Longer walk to paddock, fan zone, and main merchandise areas",
    //     "Less comfortable seating compared to premium locations",
    //     "May miss some of the most exciting moments happening elsewhere on track"
    //   ],
    //   tips: [
    //     "Bring a portable phone charger and use F1 app for live timing and commentary",
    //     "Pack your own snacks and drinks as nearby concessions may be limited",
    //     "Bring a cushion or seat pad for comfort during long sessions",
    //     "Download offline maps of the circuit to easily find restrooms and food",
    //     "Arrive early to scout the area and find the best viewing spots within your section",
    //     "Consider renting or bringing a small radio for official commentary"
    //   ],
    //
    //
    //   price: { currency: 'EUR', amount: 0 },
    //   coordinates: { path: 'M50,200 h200 v80 h-200 Z' },
    //   viewImages: ['/images/seats/spain/main-grandstand-view.jpg'],
    // }
  ],
}; 