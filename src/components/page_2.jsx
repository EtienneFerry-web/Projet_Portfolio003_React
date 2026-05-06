export const Page2 = () => (
  <div className="relative w-full h-screen bg-white overflow-hidden">
    {/* Header meta */}
    <div className="absolute top-5 left-8 right-8 flex items-start justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-20">
      <span>blond.art</span>
      <span>print</span>
      <span className="text-center">creative studio guide<br />and brand</span>
      <span>Page 02</span>
    </div>

    {/* Numbered list — top right */}
    <div className="absolute top-16 right-10 text-[13px] font-semibold uppercase leading-8 text-right z-20">
      <p>1 &nbsp;About</p>
      <p>2 &nbsp;Project</p>
      <p>3 &nbsp;Work/Concept</p>
      <p>4 &nbsp;Mockup</p>
      <p>5 &nbsp;Contact</p>
    </div>

    {/* Small photo — right, below list */}
    <div className="absolute top-[40%] right-10 w-[22%] h-[35%] z-10">
      <img
        src="https://gratisography.com/wp-content/uploads/2025/03/gratisography-cruising-cat-800x525.jpg"
        alt="Fashion"
        className="w-full h-full object-cover grayscale"
      />
    </div>

    {/* CONTENTS — bottom left */}
    <div className="absolute bottom-0 left-4 z-20">
      <h2 className="text-[17vw] font-black uppercase tracking-tighter leading-[0.85] select-none">
        CONTENTS
      </h2>
    </div>
  </div>
);
