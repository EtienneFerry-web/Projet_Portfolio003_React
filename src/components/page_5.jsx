
export const Page5 = () => (
  <div className="relative w-full h-screen snap-start bg-[#111] text-white overflow-hidden flex flex-col items-center justify-center">


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
      Every great project begins with a feeling — an atmosphere, a tension, an unsaid emotion.
      Our mood-driven process translates raw inspiration into cohesive visual languages that resonate beyond the screen.
    </p>
  </div>
);
