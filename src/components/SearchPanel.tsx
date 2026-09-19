import { UserPosition } from '../types';

interface SearchPanelProps {
  searchAddress: string;
  setSearchAddress: (value: string) => void;
  onSearch: () => void;
  onGetLocation: () => void;
  userPosition: UserPosition | null;
  loading: boolean;
}

export default function SearchPanel({
  searchAddress,
  setSearchAddress,
  onSearch,
  onGetLocation,
  userPosition,
  loading,
}: SearchPanelProps) {
  return (
    <div className="bg-white px-3 py-2 shadow-sm border-b border-gray-100">
      {/* Address search */}
      <div className="flex gap-2 mb-2">
        <div className="flex-1 relative">
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
          <input
            type="text"
            value={searchAddress}
            onChange={(e) => setSearchAddress(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Cerca comune o indirizzo..."
            className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={onSearch}
          disabled={loading || !searchAddress.trim()}
          className="bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium active:scale-95 transition-transform disabled:opacity-50"
        >
          <i className="fas fa-search"></i>
        </button>
        <button
          onClick={onGetLocation}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium active:scale-95 transition-transform disabled:opacity-50"
          title="Usa la mia posizione GPS"
        >
          <i className="fas fa-crosshairs"></i>
        </button>
      </div>

      {/* Current position info */}
      {userPosition?.address && (
        <div className="flex items-center gap-2 text-xs text-gray-600 bg-blue-50 px-3 py-1.5 rounded-lg">
          <i className="fas fa-map-marker-alt text-blue-500"></i>
          <span className="truncate flex-1">{userPosition.address}</span>
          {userPosition.accuracy > 0 && (
            <span className="text-gray-400 shrink-0">±{Math.round(userPosition.accuracy)}m</span>
          )}
        </div>
      )}
    </div>
  );
}
