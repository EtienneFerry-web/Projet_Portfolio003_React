
export const Page8 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* Small photo — top left */}
    <div className="absolute top-14 left-8 w-[16%] h-[32%] z-10">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&fit=crop"
        alt="Interior"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* LE PROJET — top right */}
    <div className="absolute top-14 right-6 z-20">
      <h2 className="text-[11vw] font-black uppercase tracking-tighter leading-[0.82] text-right select-none">
        LE<br />PROJET
      </h2>
    </div>

    {/* 8. + text — bottom center-left */}
    <div className="absolute bottom-10 left-[28%] flex items-start gap-4 z-20">
      <span className="text-[5vw] font-light leading-none">8.</span>
      <div className="text-[12px] max-w-[180px] leading-5 mt-1">
        <span className="font-bold uppercase block">Des équipements qui marquent leur territoire.</span>
        <span className="text-gray-500 mt-1 block">Culturel, sportif, éducatif — nous donnons forme aux ambitions collectives.</span>
      </div>
    </div>

    {/* Large building — bottom center-right */}
    <div className="absolute bottom-0 right-[14%] w-[30%] h-[62%] z-10">
      <img
        src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=600&fit=crop"
        alt="Public building"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
