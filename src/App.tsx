import { useState, useEffect, useCallback } from 'react';
import { FuelStation, UserPosition, DATA_SOURCES } from './types';
import { getCurrentPosition, geocodeAddress, reverseGeocode } from './utils/geolocation';
import { generateStations } from './utils/stations';
import MapView from './components/MapView';
import StationList from './components/StationList';
import SearchPanel from './components/SearchPanel';
import RadiusSlider from './components/RadiusSlider';
import DataSourceSelector from './components/DataSourceSelector';
import Header from './components/Header';
import InfoPanel from './components/InfoPanel';

function App() {
  const [userPosition, setUserPosition] = useState<UserPosition | null>(null);
  const [stations, setStations] = useState<FuelStation[]>([]);
  const [radius, setRadius] = useState<number>(25);
  const [dataSource, setDataSource] = useState<string>('mise');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchAddress, setSearchAddress] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(false);
  const [selectedStation, setSelectedStation] = useState<FuelStation | null>(null);
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  // Get initial GPS position
  const getLocation = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const position = await getCurrentPosition();
      const address = await reverseGeocode(position.lat, position.lng);
      position.address = address;
      setUserPosition(position);
      setMapCenter({ lat: position.lat, lng: position.lng });
    } catch (err: any) {
      setError(err.message || 'Errore nel recupero della posizione');
    } finally {
      setLoading(false);
    }
  }, []);

  // Search by address
  const handleSearch = async () => {
    if (!searchAddress.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const result = await geocodeAddress(searchAddress);
      if (result) {
        const position: UserPosition = {
          lat: result.lat,
          lng: result.lng,
          accuracy: 0,
          address: result.displayName,
        };
        setUserPosition(position);
        setMapCenter({ lat: result.lat, lng: result.lng });
      } else {
        setError('Indirizzo non trovato. Prova con un comune italiano.');
      }
    } catch (err: any) {
      setError('Errore nella ricerca dell\'indirizzo');
    } finally {
      setLoading(false);
    }
  };

  // Generate stations when position, radius, or data source changes
  useEffect(() => {
    if (userPosition) {
      const generated = generateStations(
        userPosition.lat,
        userPosition.lng,
        radius,
        dataSource
      );
      setStations(generated);
    }
  }, [userPosition, radius, dataSource]);

  // Initial load
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  const handleStationClick = (station: FuelStation) => {
    setSelectedStation(station);
    setMapCenter({ lat: station.lat, lng: station.lng });
    setShowList(false);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Header */}
      <Header onInfoClick={() => setShowInfo(true)} />

      {/* Search Panel */}
      <SearchPanel
        searchAddress={searchAddress}
        setSearchAddress={setSearchAddress}
        onSearch={handleSearch}
        onGetLocation={getLocation}
        userPosition={userPosition}
        loading={loading}
      />

      {/* Data Source Selector */}
      <DataSourceSelector
        sources={DATA_SOURCES}
        selected={dataSource}
        onChange={setDataSource}
      />

      {/* Radius Slider */}
      <RadiusSlider
        radius={radius}
        onChange={setRadius}
      />

      {/* Error message */}
      {error && (
        <div className="mx-3 mb-2 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <i className="fas fa-exclamation-triangle text-red-500"></i>
          <span className="text-red-700 text-sm">{error}</span>
          <button onClick={() => setError(null)} className="ml-auto text-red-400">
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      {/* Map */}
      <div className="flex-1 relative">
        <MapView
          center={mapCenter || (userPosition ? { lat: userPosition.lat, lng: userPosition.lng } : null)}
          stations={stations}
          userPosition={userPosition}
          radius={radius}
          selectedStation={selectedStation}
          onStationClick={handleStationClick}
        />

        {/* Station List Toggle Button */}
        <button
          onClick={() => setShowList(!showList)}
          className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-[1000] active:scale-95 transition-transform"
        >
          <i className="fas fa-list"></i>
          <span className="font-semibold">{stations.length}</span>
        </button>

        {/* Station count badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md z-[1000]">
          <div className="text-xs text-gray-500">Stazioni trovate</div>
          <div className="text-lg font-bold text-blue-700">{stations.length}</div>
        </div>
      </div>

      {/* Station List Panel */}
      {showList && (
        <StationList
          stations={stations}
          onClose={() => setShowList(false)}
          onStationClick={handleStationClick}
          selectedStation={selectedStation}
        />
      )}

      {/* Info Panel */}
      {showInfo && (
        <InfoPanel onClose={() => setShowInfo(false)} />
      )}
    </div>
  );
}

export default App;
