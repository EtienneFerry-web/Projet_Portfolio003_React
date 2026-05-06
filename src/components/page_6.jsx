export const Page6 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 06</span>
    </div>

    {/* Arrow top left */}
    <div className="absolute top-16 left-8 text-2xl z-20">↓</div>

    {/* 6 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">6</div>

    {/* Small bold text — top center */}
    <div className="absolute top-16 left-[36%] text-[12px] max-w-[170px] leading-5 z-20">
      <span className="font-bold uppercase block">Ibe ritatia net amet, quis accab isint.</span>
      <span className="text-gray-500 mt-1 block">
        Mis a in quat pro metendis qua nis domus, aut fugit uis ab ulitibus discidi at amet
      </span>
    </div>

    {/* DESIGN HISTORY — bottom left */}
    <div className="absolute bottom-4 left-4 z-20">
      <h2 className="text-[14vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        DESIGN<br />HISTORY
      </h2>
    </div>

    {/* Portrait photo — right, bottom-aligned */}
    <div className="absolute right-0 bottom-0 w-[40%] h-[82%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/03/gratisography-funny-dog-800x525.jpg"
        alt="Detail"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
