
export const Page9 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* PROCESSUS — left center */}
    <div className="absolute top-[25%] left-[14%] z-20">
      <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        DU CROQUIS<br />À L'ESPACE
      </h2>
    </div>

    {/* 9 — right */}
    <div className="absolute top-[22%] right-10 text-[10vw] font-light leading-none select-none z-20">9</div>

    {/* Photo — bottom left */}
    <div className="absolute bottom-0 left-8 w-[22%] h-[46%] z-10">
      <img
        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&fit=crop"
        alt="Sketch"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* Icons + text + small round photo — bottom right */}
    <div className="absolute bottom-10 right-10 flex items-center gap-4 z-20">
      <div className="flex gap-1">
        {['esq', 'pc', 'exe', 'chnt'].map(s => (
          <span key={s} className="border border-gray-400 rounded-full px-1.5 h-5 flex items-center justify-center text-[9px] text-gray-500">{s}</span>
        ))}
      </div>
      <p className="text-[12px] max-w-[130px] text-right font-bold uppercase leading-4">
        De l'esquisse à la livraison clé en main.
      </p>
      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&fit=crop"
          alt="Model"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
);
