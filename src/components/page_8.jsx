import { projects } from '../data/projects';

export const Page8 = ({ onProjectClick }) => {
  const featured = projects[1];
  return (
    <div className="relative w-full h-screen snap-start bg-[#0f0f0f] text-white overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={featured.cover}
          alt={featured.title}
          className="w-full h-full object-cover grayscale opacity-40"
        />
      </div>

      {/* 08 — top right */}
      <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20 text-white/20">08</div>

      {/* Label top left */}
      <div className="absolute top-20 left-10 z-20">
        <p className="text-[10px] uppercase tracking-widest text-white/40">Projet mis en avant</p>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 z-10">
        <p className="text-[10px] uppercase tracking-widest text-white/50 mb-4">
          {featured.type} — {featured.location} — {featured.year}
        </p>
        <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.82] mb-8">
          {featured.title}
        </h2>
        <p className="text-[13px] text-white/60 max-w-[480px] leading-7 mb-10">
          {featured.description.slice(0, 180)}…
        </p>
        <button
          onClick={() => onProjectClick(featured)}
          className="self-start border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all text-[11px] uppercase tracking-widest px-6 py-3"
        >
          Voir le projet →
        </button>
      </div>
    </div>
  );
};
