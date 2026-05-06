
export const Page6 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* 6 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">6</div>

    {/* Small bold text — top center */}
    <div className="absolute top-16 left-[36%] text-[12px] max-w-[170px] leading-5 z-20">
      <span className="font-bold uppercase block">Rooted in over a decade of visual culture.</span>
      <span className="text-gray-500 mt-1 block">
        From punk zines to luxury campaigns — our aesthetic has always lived at the edge of what's expected.
      </span>
    </div>

    {/* DESIGN HISTORY — bottom left */}
    <div className="absolute bottom-4 left-4 z-20">
      <h2 className="text-[14vw] font-black uppercase tracking-tighter leading-[0.82] select-none">
        DESIGN<br />HISTORY
      </h2>
    </div>

    {/* Portrait photo — right, bottom-aligned */}
    <div className="absolute right-0 bottom-0 w-[40%] h-[82%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/03/gratisography-funny-dog-800x525.jpg"
        alt="Detail"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
