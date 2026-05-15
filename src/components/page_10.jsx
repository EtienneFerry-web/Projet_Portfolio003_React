const stats = [
  { value: '20', label: 'Ans de pratique' },
  { value: '52', label: 'Projets livrés' },
  { value: '5', label: 'Prix nationaux' },
  { value: '12', label: 'Architectes' },
];

const awards = [
  { year: '2022', title: "Prix National de l'Architecture", project: 'Médiathèque du Marais' },
  { year: '2021', title: 'Nominé Grand Prix AFEX', project: 'Les Terrasses, Lyon' },
  { year: '2021', title: 'Label E+C-', project: 'Les Terrasses, Lyon' },
  { year: '2020', title: 'Trophée Architecture Contemporaine', project: 'Pavillon K, Nantes' },
  { year: '2019', title: "Mention Spéciale Équerre d'Argent", project: 'École des Arts, Toulouse' },
];

export const Page10 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden flex flex-col px-10 pt-20 pb-10">

    {/* Header */}
    <div className="flex items-baseline justify-between mb-10">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">10 — Reconnaissance</p>
        <h2 className="text-[5vw] font-black uppercase tracking-tighter leading-none select-none">
          Distinctions
        </h2>
      </div>
      <span className="text-[10vw] font-light text-gray-100 leading-none select-none">10</span>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-4 gap-6 mb-12 border-t border-b border-gray-100 py-8">
      {stats.map(({ value, label }) => (
        <div key={label}>
          <p className="text-[6vw] font-black leading-none tracking-tighter">{value}</p>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">{label}</p>
        </div>
      ))}
    </div>

    {/* Awards list */}
    <div className="flex-1 flex flex-col justify-evenly">
      {awards.map(({ year, title, project }) => (
        <div key={title} className="flex items-baseline justify-between border-b border-gray-100 pb-4">
          <span className="text-[10px] text-gray-300 font-mono w-10">{year}</span>
          <span className="flex-1 mx-6 text-[12px] font-bold uppercase tracking-wide">{title}</span>
          <span className="text-[11px] text-gray-400 uppercase tracking-wider">{project}</span>
        </div>
      ))}
    </div>
  </div>
);
