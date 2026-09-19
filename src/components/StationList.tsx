import { FuelStation } from '../types';

interface StationListProps {
  stations: FuelStation[];
  onClose: () => void;
  onStationClick: (station: FuelStation) => void;
  selectedStation: FuelStation | null;
}

export default function StationList({ stations, onClose, onStationClick, selectedStation }: StationListProps) {
  const getCheapest = () => {
    if (stations.length === 0) return null;
    return stations.reduce((min, s) => s.prices.benzina < min.prices.benzina ? s : min, stations[0]);
  };

  const cheapest = getCheapest();

  return (
    <div className="absolute inset-0 bg-white z-[1001] flex flex-col animate-slide-up">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-lg">Stazioni di Servizio</h2>
          <p className="text-blue-200 text-xs">{stations.length} risultati trovati</p>
        </div>
        <button
          onClick={onClose}
          className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center active:scale-90"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Summary */}
      {cheapest && (
        <div className="bg-green-50 px-4 py-2 border-b border-green-100 flex items-center gap-2">
          <i className="fas fa-trophy text-yellow-500"></i>
          <span className="text-sm text-green-800">
            Più economica: <b>{cheapest.brand}</b> a <b>€{cheapest.prices.benzina.toFixed(3)}</b>/l
          </span>
        </div>
      )}

      {/* Station list */}
      <div className="flex-1 overflow-y-auto">
        {stations.map((station, index) => (
          <button
            key={station.id}
            onClick={() => onStationClick(station)}
            className={`w-full text-left px-4 py-3 border-b border-gray-100 active:bg-blue-50 transition-colors ${
              selectedStation?.id === station.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-mono">#{index + 1}</span>
                  <span className="font-semibold text-sm text-gray-800">{station.brand}</span>
                  {station.id === cheapest?.id && (
                    <span className="bg-green-100 text-green-700 text-xs px-1.5 py-0.5 rounded-full">
                      💰 Miglior prezzo
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 truncate">
                  {station.address}, {station.city}
                </div>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    ⛽ €{station.prices.benzina.toFixed(3)}
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    🛢️ €{station.prices.diesel.toFixed(3)}
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0 ml-2">
                <div className="text-sm font-bold text-blue-600">{station.distance} km</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  <i className="fas fa-clock text-xs"></i> {station.lastUpdate.split(',')[0]}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          <i className="fas fa-info-circle"></i> Tocca una stazione per vederla sulla mappa
        </div>
      </div>
    </div>
  );
}
