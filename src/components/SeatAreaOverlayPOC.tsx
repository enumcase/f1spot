// Note for Johnny Open Mindeu and Margul Kdrama:
// This is a POC for the seat area overlay. Let's use it in the future when
// we implement the interactive map.

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// // Assuming you'll use an icon library like Heroicons
// // import { XMarkIcon } from '@heroicons/react/24/outline'; 

// import { SeatArea } from '@/lib/data/circuits';

// interface SeatAreaOverlayProps {
//   seatArea: SeatArea;
//   onClose: () => void;
// }

// export default function SeatAreaOverlay({ seatArea, onClose }: SeatAreaOverlayProps) {
//   const [activeImageIndex, setActiveImageIndex] = useState(0);

//   // Basic X icon as a placeholder if Heroicons is not set up
//   const XMarkIcon = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//     </svg>
//   );

//   return (
//     <div 
//       className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
//       onClick={onClose} // Close on backdrop click
//     >
//       <div 
//         className="bg-white dark:bg-slate-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-modal-appear"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
//       >
//         {/* Header with close button */}
//         <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 sticky top-0 bg-white dark:bg-slate-800 z-10">
//           <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">{seatArea.name}</h3>
//           <button 
//             onClick={onClose}
//             className="p-1 text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400 transition-colors rounded-full focus-ring"
//             aria-label="Close seating area details"
//           >
//             <XMarkIcon />
//           </button>
//         </div>
        
//         {/* Content */}
//         <div className="p-4 sm:p-6 space-y-6">
//           {/* View images with carousel */}
//           {seatArea.viewImages && seatArea.viewImages.length > 0 && (
//             <div className="mb-2">
//               <div className="relative aspect-video mb-2 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
//                 <Image 
//                   src={seatArea.viewImages[activeImageIndex]}
//                   alt={`View from ${seatArea.name}`}
//                   fill
//                   className="object-cover"
//                   onError={(e) => { e.currentTarget.style.display = 'none'; }} // Hide if image fails to load
//                 />
//                  {/* Placeholder if image fails or is missing */}
//                 <div className="absolute inset-0 flex items-center justify-center text-slate-500">
//                   No view image available
//                 </div>
//               </div>
//               {seatArea.viewImages.length > 1 && (
//                 <div className="flex gap-2 justify-center mt-2">
//                   {seatArea.viewImages.map((_, index) => (
//                     <button 
//                       key={index}
//                       className={`w-2.5 h-2.5 rounded-full transition-colors ${ 
//                         index === activeImageIndex ? 'bg-rose-500' : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
//                       }`}
//                       onClick={() => setActiveImageIndex(index)}
//                       aria-label={`View image ${index + 1}`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
          
//           {/* Description */}
//           <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">{seatArea.description}</p>
          
//           {/* Price */}
//           <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
//             <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-1 text-md sm:text-lg">Price</h4>
//             <p className="text-rose-600 dark:text-rose-400 font-medium text-lg sm:text-xl">
//               {seatArea.price.range 
//                 ? `${seatArea.price.currency} ${seatArea.price.range[0]} - ${seatArea.price.range[1]}`
//                 : seatArea.price.amount
//                 ? `${seatArea.price.currency} ${seatArea.price.amount}`
//                 : 'Price not available'
//               }
//             </p>
//           </div>
          
//           {/* Pros and Cons */}
//           {(seatArea.advantages.length > 0 || seatArea.disadvantages.length > 0) && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 border-t border-slate-200 dark:border-slate-700 pt-4">
//               {seatArea.advantages.length > 0 && (
//                 <div>
//                   <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 mb-2 text-md sm:text-lg">Advantages</h4>
//                   <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
//                     {seatArea.advantages.map((adv, i) => (
//                       <li key={i}>{adv}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//               {seatArea.disadvantages.length > 0 && (
//                 <div>
//                   <h4 className="font-semibold text-rose-600 dark:text-rose-400 mb-2 text-md sm:text-lg">Disadvantages</h4>
//                   <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
//                     {seatArea.disadvantages.map((disadv, i) => (
//                       <li key={i}>{disadv}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           )}
          
//           {/* Tips */}
//           {seatArea.tips.length > 0 && (
//             <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
//               <h4 className="font-semibold text-sky-600 dark:text-sky-400 mb-2 text-md sm:text-lg">Tips</h4>
//               <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
//                 {seatArea.tips.map((tip, i) => (
//                   <li key={i}>{tip}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//       <style jsx global>{`
//         @keyframes modal-appear {
//           from {
//             opacity: 0;
//             transform: scale(0.95) translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }
//         .animate-modal-appear {
//           animation: modal-appear 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// } 