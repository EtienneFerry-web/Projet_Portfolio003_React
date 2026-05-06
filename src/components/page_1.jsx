export const Page1 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 01</span>
    </div>

    {/* Arrow */}
    <div className="absolute top-16 left-8 text-2xl z-20">↓</div>

    {/* Social icons */}
    <div className="absolute top-24 left-8 flex gap-1.5 z-20">
      {['f', 'in', '©', 'web'].map(s => (
        <span key={s} className="border border-gray-400 rounded-full px-1.5 h-5 flex items-center justify-center text-[9px] text-gray-500">{s}</span>
      ))}
    </div>

    {/* Model photo — top center */}
    <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[28%] h-[65%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/03/gratisography-robot-portrait-800x525.jpg"
        alt="Model"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* JOHN SMITH — bottom right, overlapping */}
    <div className="absolute bottom-0 right-0 z-20 leading-none">
      <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-[0.82] text-right pr-6 pb-4 select-none">
        JOHN<br />SMITH
      </h1>
    </div>
  </div>
);
