interface RadiusSliderProps {
  radius: number;
  onChange: (value: number) => void;
}

export default function RadiusSlider({ radius, onChange }: RadiusSliderProps) {
  const getColor = () => {
    if (radius <= 10) return '#16a34a';
    if (radius <= 30) return '#ca8a04';
    if (radius <= 60) return '#ea580c';
    return '#dc2626';
  };

  const getLabel = () => {
    if (radius <= 10) return 'Vicinanza';
    if (radius <= 30) return 'Locale';
    if (radius <= 60) return 'Provinciale';
    return 'Regionale';
  };

  const getLabelColor = () => {
    if (radius <= 10) return 'text-green-600 bg-green-50';
    if (radius <= 30) return 'text-yellow-600 bg-yellow-50';
    if (radius <= 60) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white px-3 py-2 border-b border-gray-100">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <i className="fas fa-bullseye text-gray-400 text-xs"></i>
          <span className="text-xs font-medium text-gray-500">Raggio di ricerca</span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getLabelColor()}`}>
            {getLabel()}
          </span>
        </div>
        <div className="flex items-center gap-1" style={{ color: getColor() }}>
          <i className="fas fa-location-dot text-xs"></i>
          <span className="text-sm font-bold">{radius} km</span>
        </div>
      </div>
      <div className="relative">
        <input
          type="range"
          min="1"
          max="100"
          value={radius}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${getColor()} 0%, ${getColor()} ${radius}%, #e5e7eb ${radius}%, #e5e7eb 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>1 km</span>
          <span>25 km</span>
          <span>50 km</span>
          <span>75 km</span>
          <span>100 km</span>
        </div>
      </div>
    </div>
  );
}
