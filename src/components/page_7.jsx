
export const Page7 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* LOGEMENT — top left */}
    <div className="absolute top-14 left-4 z-20">
      <h2 className="text-[11vw] font-black uppercase tracking-tighter leading-none select-none">
        RÉSIDENTIEL
      </h2>
    </div>

    {/* 7 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">7</div>

    {/* Small text — bottom center-left */}
    <div className="absolute bottom-[12%] left-[30%] text-[12px] max-w-[160px] leading-5 z-20">
      <span className="font-bold uppercase block">Des espaces de vie pensés pour durer.</span>
      <span className="text-gray-500 mt-1 block">
        Maisons individuelles, collectifs et réhabilitations — chaque logement est une réponse singulière.
      </span>
    </div>

    {/* 2 building photos — bottom right */}
    <div className="absolute bottom-0 right-6 flex items-end gap-3 z-10">
      <div className="w-[24vw] h-[55vh]">
        <img
          src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&fit=crop"
          alt="Residential 1"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="w-[18vw] h-[42vh]">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&fit=crop"
          alt="Residential 2"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
);
