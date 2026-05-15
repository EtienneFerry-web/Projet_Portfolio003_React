
export const Page2 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* Numbered list — top right */}
    <div className="absolute top-16 right-10 text-[13px] font-semibold uppercase leading-8 text-right z-20">
      <p>1 &nbsp;À Propos</p>
      <p>2 &nbsp;Projets</p>
      <p>3 &nbsp;Philosophie</p>
      <p>4 &nbsp;Processus</p>
      <p>5 &nbsp;Contact</p>
    </div>

    {/* Small photo — right, below list */}
    <div className="absolute top-[40%] right-10 w-[22%] h-[35%] z-10">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&fit=crop"
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
