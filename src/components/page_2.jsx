
export const Page2 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* Numbered list — top right */}
    <div className="absolute top-16 right-10 text-[13px] font-semibold uppercase leading-8 text-right z-20">
      <p className="text-gray-300">03 &nbsp;À Propos</p>
      <p className="text-gray-300">04 &nbsp;Services</p>
      <p className="text-gray-300">05 &nbsp;Philosophie</p>
      <p className="text-gray-300">06 &nbsp;Histoire</p>
      <p>07 &nbsp;Projets</p>
      <p className="text-gray-300">09 &nbsp;Processus</p>
      <p className="text-gray-300">10 &nbsp;Distinctions</p>
      <p className="text-gray-300">12 &nbsp;Contact</p>
    </div>

    {/* Small photo — right, below list */}
    <div className="absolute top-[42%] right-10 w-[22%] h-[28%] z-10">
      <img
        src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&fit=crop"
        alt="Architecture interior"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* SOMMAIRE — bottom left */}
    <div className="absolute bottom-0 left-4 z-20">
      <h2 className="text-[17vw] font-black uppercase tracking-tighter leading-[0.85] select-none">
        SOMMAIRE
      </h2>
    </div>
  </div>
);
