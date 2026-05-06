export const Page11 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 11</span>
    </div>

    {/* Arrow top left */}
    <div className="absolute top-16 left-8 text-2xl z-20">↓</div>

    {/* OUR DEVICES — left */}
    <div className="absolute top-[30%] left-4 z-20">
      <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        OUR<br />DEVICES
      </h2>
    </div>

    {/* Phone mockup — center */}
    <div className="absolute top-[12%] left-[46%] w-[12%] h-[76%] border-[3px] border-black rounded-[3vw] overflow-hidden bg-white z-20">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/03/gratisography-robot-portrait-800x525.jpg"
        alt="Phone"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Portrait photo — right */}
    <div className="absolute right-0 top-[10%] w-[32%] h-[82%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-dino-party-800x525.jpg"
        alt="Model"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Small text — bottom center */}
    <div className="absolute bottom-8 left-[36%] text-[12px] max-w-[170px] font-bold uppercase leading-4 z-20">
      Ibe ritatia net amet, quis accab isint.
    </div>
  </div>
);
