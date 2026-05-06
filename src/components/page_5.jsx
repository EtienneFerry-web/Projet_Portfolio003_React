export const Page5 = () => (
  <div className="relative w-full h-screen bg-[#111] text-white overflow-hidden flex flex-col items-center justify-center">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-600 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 05</span>
    </div>

    {/* Background portrait */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/03/gratisography-vintage-robot-800x525.jpg"
        alt=""
        className="w-full h-full object-cover grayscale opacity-30"
      />
    </div>

    {/* 05 MOOD */}
    <div className="relative z-10 text-center leading-none select-none">
      <p className="text-[7vw] font-black leading-none">05</p>
      <h2 className="text-[20vw] font-black uppercase tracking-tighter leading-[0.82]">MOOD</h2>
    </div>

    {/* Body text */}
    <p className="relative z-10 text-[12px] text-center max-w-[55%] mt-8 text-gray-400 leading-6">
      Fuia a tincidunt adipiscing elit ut id, consectet niquet falen delectus at am ut lacte tempo.
      In per at, no sea nivar minim desare tempor lobortis nec et ullam que ultriqes per ulus que per consequat amet.
    </p>

    {/* Arrow bottom right */}
    <div className="absolute bottom-8 right-10 text-2xl z-20">↓</div>
  </div>
);
