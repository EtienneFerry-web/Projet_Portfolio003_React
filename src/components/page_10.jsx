export const Page10 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 10</span>
    </div>

    {/* BEST PORTFOLIO — top left */}
    <div className="absolute top-14 left-4 z-20">
      <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        BEST<br />PORTFOLIO
      </h2>
    </div>

    {/* 10 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">10</div>

    {/* Arrow + 10. + text — bottom left */}
    <div className="absolute bottom-10 left-6 flex items-start gap-3 z-20">
      <span className="text-2xl">↓</span>
      <span className="text-[5vw] font-light leading-none">10.</span>
      <div className="text-[12px] max-w-[160px] leading-4 mt-1">
        <span className="font-bold uppercase block">Ibe ritatia net amet, quis accab isint.</span>
      </div>
    </div>

    {/* 3 photos grid — bottom right */}
    <div className="absolute bottom-6 right-8 flex flex-col gap-2 z-10">
      <div className="flex gap-2">
        <div className="w-[16vw] h-[26vh]">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-birthday-dog-sunglasses.jpg"
            alt="Port 1"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="w-[16vw] h-[26vh]">
          <img
            src="https://gratisography.com/wp-content/uploads/2025/03/gratisography-funny-dog-800x525.jpg"
            alt="Port 2"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="w-[33vw] h-[22vh]">
        <img
          src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-cat-bath-800x525.jpg"
          alt="Port 3"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
);
