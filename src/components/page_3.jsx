
export const Page3 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* 1. + small text — top center */}
    <div className="absolute top-16 left-[38%] flex items-start gap-4 z-20">
      <span className="text-[6vw] font-light leading-none">1.</span>
      <p className="text-[12px] uppercase font-bold leading-5 mt-2 max-w-[130px]">
        Agence d'architecture<br />&amp; design urbain<br />basée à Paris.
      </p>
    </div>

    {/* À PROPOS — bottom left */}
    <div className="absolute bottom-4 left-4 z-20">
      <h2 className="text-[16vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        À<br />PROPOS
      </h2>
    </div>

    {/* Building photo — right */}
    <div className="absolute right-[6%] top-[12%] w-[30%] h-[76%] z-10">
      <img
        src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&fit=crop"
        alt="Architecture"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
