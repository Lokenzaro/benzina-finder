import { UserPosition } from '../types';

export function getCurrentPosition(): Promise<UserPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalizzazione non supportata dal browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error('Permesso negato. Abilita la geolocalizzazione nelle impostazioni.'));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error('Posizione non disponibile'));
            break;
          case error.TIMEOUT:
            reject(new Error('Timeout nella richiesta posizione'));
            break;
          default:
            reject(new Error('Errore sconosciuto nella geolocalizzazione'));
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  });
}

export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371; // Raggio della Terra in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}

export async function geocodeAddress(address: string): Promise<{ lat: number; lng: number; displayName: string } | null> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&countrycodes=it&limit=1`,
      {
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    const data = await response.json();
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        displayName: data[0].display_name,
      };
    }
    return null;
  } catch (error) {
    console.error('Errore geocoding:', error);
    return null;
  }
}

export async function reverseGeocode(lat: number, lng: number): Promise<string> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14`,
      {
        headers: {
          'Accept': 'application/json',
        }
      }
    );
    const data = await response.json();
    return data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
  } catch (error) {
    console.error('Errore reverse geocoding:', error);
    return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
  }
}
