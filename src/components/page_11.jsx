
export const Page11 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* NOS OUTILS — left */}
    <div className="absolute top-[30%] left-4 z-20">
      <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        NOS<br />OUTILS
      </h2>
    </div>

    {/* Render mockup frame — center */}
    <div className="absolute top-[12%] left-[46%] w-[12%] h-[76%] border-[3px] border-black rounded-[0.5vw] overflow-hidden bg-white z-0">
      <img
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&fit=crop"
        alt="BIM render"
        className="w-full h-full object-cover grayscale relative -z-10"
      />
    </div>

    {/* Architecture photo — right */}
    <div className="absolute right-0 top-[10%] w-[32%] h-[82%] z-10">
      <img
        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&fit=crop"
        alt="Architecture"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Small text — bottom center */}
    <div className="absolute bottom-8 left-[36%] text-[12px] max-w-[170px] font-bold uppercase leading-4 z-20">
      BIM, maquettes 3D & rendus photoréalistes.
    </div>
  </div>
);
