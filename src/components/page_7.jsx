import { projects } from '../data/projects';

export const Page7 = ({ onProjectClick }) => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden flex flex-col">

    {/* Header */}
    <div className="flex items-baseline justify-between px-8 pt-20 pb-6 border-b border-gray-200">
      <h2 className="text-[3.5vw] font-black uppercase tracking-tighter leading-none select-none">
        Projets
      </h2>
      <span className="text-[10px] uppercase tracking-widest text-gray-400">
        {projects.length} réalisations
      </span>
    </div>

    {/* Project list */}
    <div className="flex-1 overflow-hidden flex flex-col justify-evenly px-8">
      {projects.map((p, i) => (
        <button
          key={p.id}
          onClick={() => onProjectClick(p)}
          className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-black transition-colors text-left w-full"
        >
          {/* Left: number + title */}
          <div className="flex items-baseline gap-6">
            <span className="text-[10px] text-gray-300 w-5 font-mono">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <p className="text-[1.8vw] font-black uppercase tracking-tight leading-none group-hover:translate-x-2 transition-transform">
                {p.title}
              </p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{p.type}</p>
            </div>
          </div>

          {/* Center: thumbnail */}
          <div className="w-[7vw] h-[5vw] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
            <img src={p.cover} alt={p.title} className="w-full h-full object-cover grayscale" />
          </div>

          {/* Right: location + year + arrow */}
          <div className="flex items-center gap-8 text-right">
            <div>
              <p className="text-[11px] uppercase tracking-wider font-medium">{p.location}</p>
              <p className="text-[10px] text-gray-400">{p.year} — {p.surface}</p>
            </div>
            <span className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all text-lg">→</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);
