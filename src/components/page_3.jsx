export const Page3 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 03</span>
    </div>

    {/* 1. + small text — top center */}
    <div className="absolute top-16 left-[38%] flex items-start gap-4 z-20">
      <span className="text-[6vw] font-light leading-none">1.</span>
      <p className="text-[12px] uppercase font-bold leading-5 mt-2 max-w-[130px]">
        Ibe ritatia net<br />amet, quis accab<br />isint.
      </p>
    </div>

    {/* ABOUT ME — bottom left */}
    <div className="absolute bottom-4 left-4 z-20">
      <h2 className="text-[16vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        ABOUT<br />ME
      </h2>
    </div>

    {/* Portrait photo — right */}
    <div className="absolute right-[6%] top-[12%] w-[30%] h-[76%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/02/gratisography-when-pigs-fly-800x525.jpg"
        alt="Portrait"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Arrow bottom right */}
    <div className="absolute bottom-10 right-[32%] text-2xl z-20">↓</div>
  </div>
);
