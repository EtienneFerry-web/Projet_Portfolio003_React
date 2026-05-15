
export const Page6 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* 6 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">06</div>

    {/* Small bold text — top center */}
    <div className="absolute top-16 left-[36%] text-[12px] max-w-[170px] leading-5 z-20">
      <span className="font-bold uppercase block">Vingt ans de pratique architecturale.</span>
      <span className="text-gray-500 mt-1 block">
        Du logement social à la villa contemporaine — notre écriture s'est forgée dans la diversité des programmes.
      </span>
    </div>

    {/* HISTOIRE — bottom left */}
    <div className="absolute bottom-4 left-4 z-20">
      <h2 className="text-[14vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        NOTRE<br />HISTOIRE
      </h2>
    </div>

    {/* Building photo — right, bottom-aligned */}
    <div className="absolute right-0 bottom-0 w-[40%] h-[82%] z-10">
      <img
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&fit=crop"
        alt="Building"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
