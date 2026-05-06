export const Page7 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 07</span>
    </div>

    {/* ART OF STYLE — top left */}
    <div className="absolute top-14 left-4 z-20">
      <h2 className="text-[11vw] font-black uppercase tracking-tighter leading-none select-none">
        ART OF STYLE
      </h2>
    </div>

    {/* 7 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">7</div>

    {/* Arrow bottom left */}
    <div className="absolute bottom-8 left-8 text-2xl z-20">↓</div>

    {/* Small text — bottom center-left */}
    <div className="absolute bottom-[12%] left-[30%] text-[12px] max-w-[160px] leading-5 z-20">
      <span className="font-bold uppercase block">Ibe ritatia net amet, quis accab isint.</span>
      <span className="text-gray-500 mt-1 block">
        Vis a in eum qua que ultriqes mo a in qua qui pos unterimda.
      </span>
    </div>

    {/* 2 photos — bottom right */}
    <div className="absolute bottom-0 right-6 flex items-end gap-3 z-10">
      <div className="w-[24vw] h-[55vh]">
        <img
          src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-cat-bath-800x525.jpg"
          alt="Style 1"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="w-[18vw] h-[42vh]">
        <img
          src="https://gratisography.com/wp-content/uploads/2025/04/gratisograph-mars-robot-800x525.jpg"
          alt="Style 2"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
);
