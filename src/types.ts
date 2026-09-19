export interface FuelStation {
  id: string;
  name: string;
  brand: string;
  address: string;
  city: string;
  province: string;
  lat: number;
  lng: number;
  distance: number; // km
  prices: {
    benzina: number;
    diesel: number;
    gpl?: number;
    metano?: number;
  };
  lastUpdate: string;
  dataSource: string;
}

export interface UserPosition {
  lat: number;
  lng: number;
  accuracy: number;
  address?: string;
}

export interface DataSource {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  url: string;
}

export const DATA_SOURCES: DataSource[] = [
  {
    id: 'mise',
    name: 'MISE - Ministero Imprese',
    description: 'Dati ufficiali del Ministero delle Imprese e del Made in Italy - Listino carburanti nazionale',
    icon: 'fa-landmark',
    color: '#1e40af',
    url: 'https://www.mise.gov.it/it/prezzi-carburanti'
  },
  {
    id: 'prezzibenzina',
    name: 'PrezziBenzina.it',
    description: 'Portale di monitoraggio prezzi carburanti con dati aggiornati quotidianamente dalle stazioni di servizio',
    icon: 'fa-gas-pump',
    color: '#059669',
    url: 'https://www.prezzibenzina.it'
  },
  {
    id: 'osservatorio',
    name: 'Osservatorio Prezzi',
    description: 'Osservatorio nazionale prezzi carburanti - Dati aggregati e comparativi su base regionale',
    icon: 'fa-chart-line',
    color: '#7c3aed',
    url: 'https://www.prezzicarburanti.it'
  }
];
