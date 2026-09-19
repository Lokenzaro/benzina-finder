import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { FuelStation, UserPosition } from '../types';

interface MapViewProps {
  center: { lat: number; lng: number } | null;
  stations: FuelStation[];
  userPosition: UserPosition | null;
  radius: number;
  selectedStation: FuelStation | null;
  onStationClick: (station: FuelStation) => void;
}

export default function MapView({ center, stations, userPosition, radius, selectedStation, onStationClick }: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const circleRef = useRef<L.Circle | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: center ? [center.lat, center.lng] : [41.9028, 12.4964],
      zoom: 12,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: 'bottomleft' }).addTo(map);

    markersRef.current = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update center
  useEffect(() => {
    if (!mapInstanceRef.current || !center) return;
    mapInstanceRef.current.setView([center.lat, center.lng], 13);
  }, [center]);

  // Update user marker
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
    }

    if (userPosition) {
      const userIcon = L.divIcon({
        html: `<div style="background: #2563eb; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
        className: 'user-marker',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      userMarkerRef.current = L.marker([userPosition.lat, userPosition.lng], { icon: userIcon })
        .addTo(mapInstanceRef.current)
        .bindPopup('<b>📍 La tua posizione</b>');
    }
  }, [userPosition]);

  // Update radius circle
  useEffect(() => {
    if (!mapInstanceRef.current || !center) return;

    if (circleRef.current) {
      circleRef.current.remove();
    }

    circleRef.current = L.circle([center.lat, center.lng], {
      radius: radius * 1000,
      color: '#3b82f6',
      fillColor: '#3b82f6',
      fillOpacity: 0.05,
      weight: 2,
      dashArray: '5, 10',
    }).addTo(mapInstanceRef.current);
  }, [center, radius]);

  // Update station markers
  useEffect(() => {
    if (!mapInstanceRef.current || !markersRef.current) return;

    markersRef.current.clearLayers();

    stations.forEach((station) => {
      const isSelected = selectedStation?.id === station.id;
      const priceColor = station.prices.benzina < 1.80 ? '#16a34a' : station.prices.benzina < 1.85 ? '#ca8a04' : '#dc2626';

      const icon = L.divIcon({
        html: `<div style="
          background: ${isSelected ? '#1d4ed8' : priceColor};
          color: white;
          padding: 3px 6px;
          border-radius: 6px;
          font-size: 10px;
          font-weight: bold;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          border: ${isSelected ? '2px solid #fbbf24' : '1px solid rgba(255,255,255,0.5)'};
          transform: ${isSelected ? 'scale(1.2)' : 'scale(1)'};
          transition: transform 0.2s;
        ">€${station.prices.benzina.toFixed(3)}</div>`,
        className: 'station-marker',
        iconSize: [60, 24],
        iconAnchor: [30, 12],
      });

      const marker = L.marker([station.lat, station.lng], { icon })
        .bindPopup(`
          <div style="min-width: 200px; font-family: system-ui;">
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 4px;">${station.brand}</div>
            <div style="font-size: 12px; color: #666; margin-bottom: 8px;">${station.address}, ${station.city}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; font-size: 12px;">
              <div>⛽ Benzina: <b>€${station.prices.benzina.toFixed(3)}</b></div>
              <div>🛢️ Diesel: <b>€${station.prices.diesel.toFixed(3)}</b></div>
              <div>🔵 GPL: <b>€${station.prices.gpl?.toFixed(3) || 'N/D'}</b></div>
              <div>🟢 Metano: <b>€${station.prices.metano?.toFixed(3) || 'N/D'}</b></div>
            </div>
            <div style="margin-top: 8px; font-size: 11px; color: #888;">
              📏 ${station.distance} km • 🕐 ${station.lastUpdate}
            </div>
          </div>
        `);

      marker.on('click', () => {
        onStationClick(station);
      });

      markersRef.current?.addLayer(marker);
    });
  }, [stations, selectedStation, onStationClick]);

  return <div ref={mapRef} className="w-full h-full" />;
}
