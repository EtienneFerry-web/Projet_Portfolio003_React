
export const Page7 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* ART OF STYLE — top left */}
    <div className="absolute top-14 left-4 z-20">
      <h2 className="text-[11vw] font-black uppercase tracking-tighter leading-none select-none">
        ART OF STYLE
      </h2>
    </div>

    {/* 7 — top right */}
    <div className="absolute top-10 right-10 text-[10vw] font-light leading-none select-none z-20">7</div>

    {/* Small text — bottom center-left */}
    <div className="absolute bottom-[12%] left-[30%] text-[12px] max-w-[160px] leading-5 z-20">
      <span className="font-bold uppercase block">Fashion is a language. We make it fluent.</span>
      <span className="text-gray-500 mt-1 block">
        Styling, direction, and editorial work for brands that dare to stand apart from the noise.
      </span>
    </div>

    {/* 2 photos — bottom right */}
    <div className="absolute bottom-0 right-6 flex items-end gap-3 z-10">
      <div className="w-[24vw] h-[55vh]">
        <img
          src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-cat-bath-800x525.jpg"
          alt="Style 1"
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="w-[18vw] h-[42vh]">
        <img
          src="https://gratisography.com/wp-content/uploads/2025/04/gratisograph-mars-robot-800x525.jpg"
          alt="Style 2"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    </div>
  </div>
);
