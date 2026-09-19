import { DataSource } from '../types';

interface DataSourceSelectorProps {
  sources: DataSource[];
  selected: string;
  onChange: (id: string) => void;
}

export default function DataSourceSelector({ sources, selected, onChange }: DataSourceSelectorProps) {
  return (
    <div className="bg-white px-3 py-2 border-b border-gray-100">
      <div className="flex items-center gap-1 mb-1.5">
        <i className="fas fa-database text-gray-400 text-xs"></i>
        <span className="text-xs font-medium text-gray-500">Fonte dati:</span>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {sources.map((source) => (
          <button
            key={source.id}
            onClick={() => onChange(source.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all active:scale-95 ${
              selected === source.id
                ? 'text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            style={selected === source.id ? { backgroundColor: source.color } : {}}
            title={source.description}
          >
            <i className={`fas ${source.icon} text-xs`}></i>
            <span>{source.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
