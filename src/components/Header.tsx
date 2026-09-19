interface HeaderProps {
  onInfoClick: () => void;
}

export default function Header({ onInfoClick }: HeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 p-2 rounded-lg">
            <i className="fas fa-gas-pump text-lg"></i>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">BenzinaFinder</h1>
            <p className="text-blue-200 text-xs">Prezzi carburante in tempo reale</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onInfoClick}
            className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          >
            <i className="fas fa-question text-sm"></i>
          </button>
          <div className="bg-green-500/20 px-2 py-1 rounded-full flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-200">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
