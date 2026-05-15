
export const Page12 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* INFO — top left */}
    <div className="absolute top-14 left-4 z-20">
      <h2 className="text-[16vw] font-black uppercase tracking-tighter leading-none select-none">INFO</h2>
    </div>

    {/* 3 columns — bottom left */}
    <div className="absolute bottom-10 left-8 flex gap-16 text-[12px] uppercase leading-6 z-20">
      <div>
        <p className="font-bold">01</p>
        <p className="font-bold">Adresse</p>
        <p className="text-gray-500 text-[10px] normal-case leading-4 mt-1">Forma Studio<br />12 rue de la Paix, Paris 75002</p>
      </div>
      <div>
        <p className="font-bold">02</p>
        <p className="font-bold">Téléphone</p>
        <p className="text-gray-500 text-[10px] normal-case mt-1">+33 1 42 68 00 00</p>
      </div>
      <div>
        <p className="font-bold">03</p>
        <p className="font-bold">Contact</p>
        <p className="text-gray-500 text-[10px] normal-case mt-1">contact@forma.studio</p>
      </div>
    </div>

    {/* Architecture photo — bottom right */}
    <div className="absolute bottom-0 right-0 w-[36%] h-[65%] z-10">
      <img
        src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=600&fit=crop"
        alt="Architecture"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
