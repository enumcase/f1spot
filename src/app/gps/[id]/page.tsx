'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Circuit, getCircuitById } from '@/lib/data/circuits';
import Header from '@/components/Header';
// import CircuitMap from '@/components/CircuitMap'; // POC for interactive map, not used for now
import SeatAreaCard from '@/components/SeatAreaCard'; // New card component

export default function GPDetailPage() {
  const params = useParams();
  const circuitIdFromPath = params.id as string; // This will now be the base ID, e.g., "monaco-gp"
  
  const [circuit, setCircuit] = useState<Circuit | null | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (circuitIdFromPath) { 
      setLoading(true);
      // No need to extract base ID, pathId is already the base ID
      const foundCircuit = getCircuitById(circuitIdFromPath); 
      setCircuit(foundCircuit); 
      setLoading(false);
    }
  }, [circuitIdFromPath]); // Re-run if circuitIdFromPath changes

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        {loading && (
          <div className="flex flex-col justify-center items-center h-[70vh]">
            <div className="animate-spin rounded-full h-10 w-10 border-2 border-slate-300 dark:border-slate-600 border-t-rose-500"></div>
            <p className="ml-4 mt-4 text-slate-600 dark:text-slate-400">Loading circuit details...</p>
          </div>
        )}

        {!loading && circuit && (
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 md:mb-4 text-center">
              {circuit.name}
            </h1>
            <p className="text-md sm:text-lg text-slate-600 dark:text-slate-400 mb-6 md:mb-10 text-center">
              Available Seating Areas & Grandstands
            </p>
            
            {/* Grid for SeatAreaCards */}
            {circuit.seatAreas && circuit.seatAreas.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {circuit.seatAreas.map((seatArea) => (
                  <SeatAreaCard key={seatArea.id} seatArea={seatArea} />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-500 dark:text-slate-400 py-8">No specific seating area information available for this circuit yet.</p>
            )}
          </div>
        )}

        {!loading && !circuit && (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Circuit Details Not Found</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We couldn&apos;t find the details for the circuit ID from the URL: &quot;{circuitIdFromPath}&quot;.
              Please check the URL or ensure data exists for this circuit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 