import {azerbaijanCircuitData} from "@/lib/data/circuits/azerbaijan";

export interface SeatArea {
  id: string;
  name: string;
  description: string;
  coordinates: {
    path: string; // SVG path data for interactive map (POC)
  };
  viewImages: string[];
  price: {
    currency: string;
    amount?: number;
    range?: [number, number];
  };
  advantages: string[];
  disadvantages: string[];
  tips: string[];
}

export interface Circuit {
  id: string; // Base ID, e.g., 'singapore-gp'
  name: string;
  mapImage: string; // For the interactive map POC
  seatAreas: SeatArea[];
  // You could add more circuit-specific general info here if needed in the future
  // e.g., country, length, number of turns, first GP year etc.
}

// Import data from individual circuit files
// import { singaporeCircuitData } from './circuits/singapore'; // Removed
import { monacoCircuitData } from './circuits/monaco';
import { spainCircuitData } from './circuits/spain';
import { canadaCircuitData } from './circuits/canada';
import { austriaCircuitData } from './circuits/austria';
import { britainCircuitData } from './circuits/britain';
import { belgiumCircuitData } from './circuits/belgium';

// --- Data Management ---

// A map to hold all circuit data, keyed by their base ID
const allCircuitsData: Map<string, Circuit> = new Map();

// Function to register circuit data
// This makes it easy to add new circuits without modifying getCircuitById directly
function registerCircuit(circuitData?: Circuit) { // Make circuitData optional to handle potential undefined imports gracefully
  if (circuitData && circuitData.id) { // Check if circuitData and its id are defined
    allCircuitsData.set(circuitData.id, circuitData);
  }
}

// Register imported circuit data
// registerCircuit(singaporeCircuitData); // Removed
registerCircuit(monacoCircuitData);
registerCircuit(spainCircuitData);
registerCircuit(canadaCircuitData);
registerCircuit(austriaCircuitData);
registerCircuit(britainCircuitData);
registerCircuit(belgiumCircuitData);
registerCircuit(azerbaijanCircuitData);

// --- Data Access Functions ---

/**
 * Retrieves circuit data by its base ID (e.g., 'singapore-gp').
 * @param baseId The base ID of the circuit (without year or other suffixes).
 * @returns The circuit data object or undefined if not found.
 */
export const getCircuitById = (baseId: string): Circuit | undefined => {
  return allCircuitsData.get(baseId);
};

/**
 * Retrieves all registered circuit data.
 * @returns An array of all circuit data objects.
 */
export const getAllCircuits = (): Circuit[] => {
  return Array.from(allCircuitsData.values());
}; 