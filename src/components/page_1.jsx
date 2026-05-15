
export const Page1 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">

    {/* Social icons */}
    <div className="absolute top-24 left-8 flex gap-1.5 z-20">
      {['ig', 'li', 'ar', 'web'].map(s => (
        <span key={s} className="border border-gray-400 rounded-full px-1.5 h-5 flex items-center justify-center text-[9px] text-gray-500">{s}</span>
      ))}
    </div>

    {/* Building photo — top center */}
    <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[28%] h-[65%] z-10">
      <img
        src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&fit=crop"
        alt="Architecture"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* FORMA — bottom right, overlapping */}
    <div className="absolute bottom-0 right-0 z-20 leading-none">
      <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-[0.82] text-right pr-6 pb-4 select-none">
        FORMA<br />STUDIO
      </h1>
    </div>
  </div>
);
