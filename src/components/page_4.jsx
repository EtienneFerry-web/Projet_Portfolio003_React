export const Page4 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 04</span>
    </div>

    {/* Arrow top left */}
    <div className="absolute top-16 left-8 text-2xl z-20">↓</div>

    {/* 4 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">4</div>

    {/* Photo — left half */}
    <div className="absolute left-0 top-[14%] w-[55%] h-[78%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/04/gratisography-cool-car-cat-800x525.jpg"
        alt="Model"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* WHAT WE DO — right, overlapping */}
    <div className="absolute right-4 top-[28%] z-20">
      <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.82] text-right select-none">
        WHAT WE<br />DO
      </h2>
    </div>

    {/* Small text bottom right */}
    <div className="absolute bottom-12 right-10 text-[12px] max-w-[220px] text-right leading-5 z-20">
      <p className="font-bold uppercase mb-1">Ibe ritatia net amet, quis accab isint.</p>
      <p className="text-gray-500">Vis cust eum que doluptatque mo a in qua qui pos unterimda.</p>
    </div>
  </div>
);
