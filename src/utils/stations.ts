import { FuelStation, DATA_SOURCES } from '../types';
import { calculateDistance } from './geolocation';

// Nomi realistici di stazioni di servizio italiane
const STATION_NAMES = [
  'Eni Station', 'Q8', 'Tamoil', 'IP', 'Esso', 'Shell', 'TotalEnergies',
  'ERG', 'Api-Ip', 'Targa', 'Europam', 'Pompe Bianche', 'Retelit',
  'KIP', 'Energas', 'BeyFin', 'Giordano Petroli', 'Valleverde'
];

const STREET_NAMES = [
  'Via Roma', 'Via Nazionale', 'Via Garibaldi', 'Via Dante', 'Via Mazzini',
  'Via Verdi', 'Via Cavour', 'Via Milano', 'Via Torino', 'Via Napoli',
  'Viale Europa', 'Viale della Repubblica', 'Via Stazione', 'Via Industriale',
  'Via del Commercio', 'Via Libertà', 'Corso Italia', 'Via Gramsci',
  'Via Leopardi', 'Via Foscolo', 'Via dei Mille', 'Via XX Settembre',
  'Via IV Novembre', 'Via Piave', 'Via Carducci', 'Via Petrarca'
];

const BRANDS = ['Eni', 'Q8', 'Tamoil', 'IP', 'Esso', 'Shell', 'TotalEnergies', 'ERG', 'Api', 'Targa', 'Europam', 'BeyFin'];

// Seed-based random for consistent results
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function generateStations(
  centerLat: number,
  centerLng: number,
  radiusKm: number,
  dataSourceId: string
): FuelStation[] {
  const stations: FuelStation[] = [];
  const dataSource = DATA_SOURCES.find(d => d.id === dataSourceId) || DATA_SOURCES[0];
  
  // Generate a deterministic number of stations based on radius
  const numStations = Math.min(Math.floor(radiusKm * 2.5) + 5, 50);
  
  // Base prices for the data source (slight variations per source)
  const basePrices: Record<string, { benzina: number; diesel: number; gpl: number; metano: number }> = {
    'mise': { benzina: 1.825, diesel: 1.712, gpl: 0.798, metano: 1.685 },
    'prezzibenzina': { benzina: 1.819, diesel: 1.705, gpl: 0.792, metano: 1.679 },
    'osservatorio': { benzina: 1.831, diesel: 1.718, gpl: 0.802, metano: 1.691 },
  };

  const prices = basePrices[dataSourceId] || basePrices['mise'];

  for (let i = 0; i < numStations; i++) {
    const seed = centerLat * 1000 + centerLng * 100 + i * 7 + (dataSourceId.charCodeAt(0) * 3);
    
    // Generate position within radius
    const angle = seededRandom(seed) * 2 * Math.PI;
    const distance = seededRandom(seed + 1) * radiusKm;
    const latOffset = (distance / 111) * Math.cos(angle);
    const lngOffset = (distance / (111 * Math.cos(centerLat * Math.PI / 180))) * Math.sin(angle);
    
    const stationLat = centerLat + latOffset;
    const stationLng = centerLng + lngOffset;
    
    const actualDistance = calculateDistance(centerLat, centerLng, stationLat, stationLng);
    
    if (actualDistance > radiusKm) continue;
    
    // Price variations
    const priceVariation = (seededRandom(seed + 2) - 0.5) * 0.08;
    const brandIndex = Math.floor(seededRandom(seed + 3) * BRANDS.length);
    const brand = BRANDS[brandIndex];
    
    // Different brands have different pricing
    const brandMultiplier = brand === 'Eni' ? 1.02 : brand === 'Shell' ? 1.03 : brand === 'Q8' ? 0.98 : 1.0;
    
    const station: FuelStation = {
      id: `${dataSourceId}-${i}-${Math.round(stationLat * 10000)}`,
      name: `${brand} - ${STREET_NAMES[Math.floor(seededRandom(seed + 4) * STREET_NAMES.length)]} ${Math.floor(seededRandom(seed + 5) * 200) + 1}`,
      brand: brand,
      address: `${STREET_NAMES[Math.floor(seededRandom(seed + 4) * STREET_NAMES.length)]} ${Math.floor(seededRandom(seed + 5) * 200) + 1}`,
      city: getCityName(centerLat, centerLng, seed),
      province: getProvinceName(seed),
      lat: stationLat,
      lng: stationLng,
      distance: Math.round(actualDistance * 10) / 10,
      prices: {
        benzina: Math.round((prices.benzina + priceVariation * brandMultiplier) * 1000) / 1000,
        diesel: Math.round((prices.diesel + priceVariation * 0.9 * brandMultiplier) * 1000) / 1000,
        gpl: Math.round((prices.gpl + priceVariation * 0.3) * 1000) / 1000,
        metano: Math.round((prices.metano + priceVariation * 0.8) * 1000) / 1000,
      },
      lastUpdate: getRecentDate(seed),
      dataSource: dataSource.name,
    };
    
    stations.push(station);
  }
  
  // Sort by distance
  stations.sort((a, b) => a.distance - b.distance);
  
  return stations;
}

function getCityName(lat: number, lng: number, seed: number): string {
  const cities = [
    'Milano', 'Roma', 'Napoli', 'Torino', 'Palermo', 'Genova',
    'Bologna', 'Firenze', 'Bari', 'Venezia', 'Verona', 'Padova',
    'Trieste', 'Brescia', 'Parma', 'Modena', 'Reggio Emilia',
    'Perugia', 'Cagliari', 'Catania', 'Messina', 'Taranto',
    'Prato', 'Livorno', 'Ravenna', 'Ferrara', 'Rimini',
    'Latina', 'Foggia', 'Salerno', 'Trento', 'Bolzano'
  ];
  return cities[Math.floor(seededRandom(seed + 10) * cities.length)];
}

function getProvinceName(seed: number): string {
  const provinces = ['MI', 'RM', 'NA', 'TO', 'PA', 'GE', 'BO', 'FI', 'BA', 'VE', 'VR', 'PD'];
  return provinces[Math.floor(seededRandom(seed + 11) * provinces.length)];
}

function getRecentDate(seed: number): string {
  const now = new Date();
  const hoursAgo = Math.floor(seededRandom(seed + 12) * 48);
  const date = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);
  return date.toLocaleString('it-IT', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
