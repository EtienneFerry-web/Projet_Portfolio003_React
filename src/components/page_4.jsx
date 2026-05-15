
export const Page4 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* 4 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">04</div>

    {/* Photo — left half */}
    <div className="absolute left-0 top-[14%] w-[55%] h-[78%] z-10">
      <img
        src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=800&fit=crop"
        alt="Architecture"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* NOS SERVICES — right, overlapping */}
    <div className="absolute right-4 top-[28%] z-20">
      <h2 className="text-[13vw] font-black uppercase tracking-tighter leading-[0.82] text-right select-none">
        NOS<br />SERVICES
      </h2>
    </div>

    {/* Small text bottom right */}
    <div className="absolute bottom-12 right-10 text-[12px] max-w-[220px] text-right leading-5 z-20">
      <p className="font-bold uppercase mb-1">Architecture, intérieur & urbanisme.</p>
      <p className="text-gray-500">Nous concevons des espaces qui façonnent le quotidien, du logement privé aux équipements publics.</p>
    </div>
  </div>
);
