
export const Page8 = () => (
  <div className="relative w-full h-screen snap-start bg-white overflow-hidden">


    {/* Small photo — top left */}
    <div className="absolute top-14 left-8 w-[16%] h-[32%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-birthday-dog-sunglasses.jpg"
        alt="Top"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* THE CONCEPT — top right */}
    <div className="absolute top-14 right-6 z-20">
      <h2 className="text-[11vw] font-black uppercase tracking-tighter leading-[0.82] text-right select-none">
        THE<br />CONCEPT
      </h2>
    </div>

    {/* 8. + text — bottom center-left */}
    <div className="absolute bottom-10 left-[28%] flex items-start gap-4 z-20">
      <span className="text-[5vw] font-light leading-none">8.</span>
      <div className="text-[12px] max-w-[180px] leading-5 mt-1">
        <span className="font-bold uppercase block">Ibe ritatia net amet, quis accab isint.</span>
        <span className="text-gray-500 mt-1 block">Mis a in qua qui pos enterimda uis dotem quis per ullam.</span>
      </div>
    </div>

    {/* Large portrait — bottom center-right */}
    <div className="absolute bottom-0 right-[14%] w-[30%] h-[62%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/05/gratisography-moon-robot-800x525.jpg"
        alt="Portrait"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
