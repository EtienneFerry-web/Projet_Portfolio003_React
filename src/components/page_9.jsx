export const Page9 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 09</span>
    </div>

    {/* Arrow top left */}
    <div className="absolute top-16 left-8 text-2xl z-20">↓</div>

    {/* BRANDING DESIGN — left center */}
    <div className="absolute top-[25%] left-[14%] z-20">
      <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        BRANDING<br />DESIGN
      </h2>
    </div>

    {/* 9 — right */}
    <div className="absolute top-[22%] right-10 text-[10vw] font-light leading-none select-none z-20">9</div>

    {/* Photo — bottom left */}
    <div className="absolute bottom-0 left-8 w-[22%] h-[46%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-dino-party-800x525.jpg"
        alt="Brand"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Icons + text + small round photo — bottom right */}
    <div className="absolute bottom-10 right-10 flex items-center gap-4 z-20">
      <div className="flex gap-1">
        {['f', 'in', '©', 'web'].map(s => (
          <span key={s} className="border border-gray-400 rounded-full px-1.5 h-5 flex items-center justify-center text-[9px] text-gray-500">{s}</span>
        ))}
      </div>
      <p className="text-[12px] max-w-[130px] text-right font-bold uppercase leading-4">
        Ibe ritatia net amet, quis accab isint.
      </p>
      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-cut-the-cake-800x525.jpg"
          alt="Brand 2"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
);
