export const Page12 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 12</span>
    </div>

    {/* INFO — top left */}
    <div className="absolute top-14 left-4 z-20">
      <h2 className="text-[16vw] font-black uppercase tracking-tighter leading-none select-none">INFO</h2>
    </div>

    {/* 3 columns — bottom left */}
    <div className="absolute bottom-10 left-8 flex gap-16 text-[12px] uppercase leading-6 z-20">
      <div>
        <p className="font-bold">01</p>
        <p className="font-bold">About</p>
        <p className="text-gray-500 text-[10px] normal-case leading-4 mt-1">Portfolio Presentation<br />Template</p>
      </div>
      <div>
        <p className="font-bold">02</p>
        <p className="font-bold">Phone</p>
        <p className="text-gray-500 text-[10px] normal-case mt-1">+000 000 000</p>
      </div>
      <div>
        <p className="font-bold">03</p>
        <p className="font-bold">Online</p>
        <p className="text-gray-500 text-[10px] normal-case mt-1">hello@email.com</p>
      </div>
    </div>

    {/* Arrow bottom center */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl z-20">↓</div>

    {/* Portrait photo — bottom right */}
    <div className="absolute bottom-0 right-0 w-[36%] h-[65%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/04/gratisograph-mars-robot-800x525.jpg"
        alt="Info"
        className="w-full h-full object-cover grayscale"
      />
    </div>
  </div>
);
