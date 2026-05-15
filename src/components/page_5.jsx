
export const Page5 = () => (
  <div className="relative w-full h-screen snap-start bg-[#111] text-white overflow-hidden flex flex-col items-center justify-center">


    {/* Background building */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?w=1200&fit=crop"
        alt=""
        className="w-full h-full object-cover grayscale opacity-30"
      />
    </div>

    {/* 05 FORME */}
    <div className="relative z-10 text-center leading-none select-none">
      <p className="text-[7vw] font-black leading-none">05</p>
      <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-[0.82]">FORME</h2>
    </div>

    {/* Body text */}
    <p className="relative z-10 text-[12px] text-center max-w-[55%] mt-8 text-gray-400 leading-6">
      Chaque grand projet commence par une intuition — une lumière, une tension dans l'espace, une présence silencieuse.
      Notre démarche traduit ces sensations en architectures durables qui transforment leur environnement.
    </p>
  </div>
);
