import { Circuit, getCircuitById, getAllCircuits } from '@/lib/data/circuits';
import Header from '@/components/Header';
// import CircuitMap from '@/components/CircuitMap'; // POC for interactive map, not used for now
import SeatAreaCard from '@/components/SeatAreaCard'; // New card component
import { notFound } from 'next/navigation';

// Generate static params for all available circuits
export async function generateStaticParams() {
  const circuits = getAllCircuits();
  return circuits.map((circuit) => ({
    id: circuit.id,
  }));
}

interface Props {
  params: {
    id: string;
  };
}

export default function GPDetailPage({ params }: Props) {
  const circuitIdFromPath = params.id;
  
  // Get circuit data on server side
  const circuit = getCircuitById(circuitIdFromPath);
  
  // If circuit not found, show 404
  if (!circuit) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
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
      </div>
    </div>
  );
} 