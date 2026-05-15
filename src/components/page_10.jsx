
export const Page10 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* RÉFÉRENCES — top left */}
    <div className="absolute top-14 left-4 z-20">
      <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        NOS<br />RÉFÉRENCES
      </h2>
    </div>

    {/* 10 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">10</div>

    {/* 10. + text — bottom left */}
    <div className="absolute bottom-10 left-6 flex items-start gap-3 z-20">
      <span className="text-[5vw] font-light leading-none">10.</span>
      <div className="text-[12px] max-w-[160px] leading-4 mt-1">
        <span className="font-bold uppercase block">Une sélection de réalisations primées en France et à l'étranger.</span>
      </div>
    </div>

    {/* 3 photos grid — bottom right */}
    <div className="absolute bottom-6 right-8 flex flex-col gap-2 z-10">
      <div className="flex gap-2">
        <div className="w-[16vw] h-[26vh]">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&fit=crop"
            alt="Ref 1"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="w-[16vw] h-[26vh]">
          <img
            src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&fit=crop"
            alt="Ref 2"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>
      <div className="w-[33vw] h-[22vh]">
        <img
          src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&fit=crop"
          alt="Ref 3"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
);
