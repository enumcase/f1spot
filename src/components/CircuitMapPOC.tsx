// Note for Johnny Open Mindeu and Margul Kdrama:
// This is a POC for the seat area overlay. Let's use it in the future when
// we implement the interactive map.

// 'use client';

// import { useState, useMemo } from 'react';
// import Image from 'next/image';
// import { Circuit, SeatArea } from '@/lib/data/circuits';
// import SeatAreaOverlay from './SeatAreaOverlay';

// interface CircuitMapProps {
//   circuit: Circuit;
// }

// export default function CircuitMap({ circuit }: CircuitMapProps) {
//   const [selectedSeatArea, setSelectedSeatArea] = useState<SeatArea | null>(null);
//   const [hoveredSeatAreaId, setHoveredSeatAreaId] = useState<string | null>(null);

//   // Default viewBox for SVGs if not specified, assuming a common aspect ratio for maps
//   // This should ideally come from the circuit data or be calculated based on image dimensions
//   const viewBox = "0 0 1200 800"; // Example: common 3:2 aspect ratio map

//   const handleSeatAreaClick = (seatArea: SeatArea) => {
//     setSelectedSeatArea(seatArea);
//   };

//   const handleCloseOverlay = () => {
//     setSelectedSeatArea(null);
//   };

//   return (
//     <div className="relative w-full max-w-5xl mx-auto aspect-[3/2]"> {/* Adjust aspect ratio as needed */}
//       {/* Base circuit image */}
//       <div className="absolute inset-0 w-full h-full bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
//         {circuit.mapImage ? (
//           <Image 
//             src={circuit.mapImage}
//             alt={`${circuit.name} circuit map`}
//             fill
//             className="object-contain" // Use 'object-contain' or 'object-cover' based on your map images
//             priority // Prioritize loading the map image
//             onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if image fails
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center text-slate-500">
//             Map image not available
//           </div>
//         )}
//       </div>
      
//       {/* Interactive SVG overlay for seat areas */}
//       <svg 
//         viewBox={viewBox} 
//         className="absolute inset-0 w-full h-full z-10"
//         preserveAspectRatio="xMidYMid meet"
//       >
//         {circuit.seatAreas.map((area) => (
//           <path
//             key={area.id}
//             d={area.coordinates.path}
//             className={`cursor-pointer transition-all duration-150 ease-in-out 
//               ${hoveredSeatAreaId === area.id 
//                 ? 'fill-rose-500/70 stroke-rose-700 dark:stroke-rose-300' 
//                 : 'fill-rose-500/40 stroke-rose-600 dark:stroke-rose-400'
//               }
//               hover:fill-rose-500/70 hover:stroke-rose-700 dark:hover:stroke-rose-300
//             `}
//             strokeWidth="2" // Adjust for visibility
//             onClick={() => handleSeatAreaClick(area)}
//             onMouseEnter={() => setHoveredSeatAreaId(area.id)}
//             onMouseLeave={() => setHoveredSeatAreaId(null)}
//             aria-label={`Select ${area.name}`}
//           />
//         ))}
//       </svg>

//       {/* Seat information overlay (modal) */}
//       {selectedSeatArea && (
//         <SeatAreaOverlay 
//           seatArea={selectedSeatArea}
//           onClose={handleCloseOverlay}
//         />
//       )}
//     </div>
//   );
// } 