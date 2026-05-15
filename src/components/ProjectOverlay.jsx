import { useState, useEffect } from 'react';

export const ProjectOverlay = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-white flex"
      style={{ animation: 'overlayIn 0.35s cubic-bezier(0.22,1,0.36,1)' }}
    >
      {/* Left — images */}
      <div className="w-[58%] h-full flex flex-col">
        {/* Main image */}
        <div className="flex-1 overflow-hidden">
          <img
            key={activeImage}
            src={project.images[activeImage]}
            alt={project.title}
            className="w-full h-full object-cover grayscale"
            style={{ animation: 'fadeImg 0.3s ease' }}
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 p-4 bg-white border-t border-gray-100">
          {project.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`w-[22%] aspect-video overflow-hidden border-2 transition-all ${
                i === activeImage ? 'border-black' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover grayscale" />
            </button>
          ))}
        </div>
      </div>

      {/* Right — info */}
      <div className="w-[42%] h-full flex flex-col justify-between px-14 py-16 border-l border-gray-100 overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="self-end text-[11px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors flex items-center gap-2"
        >
          <span className="text-lg leading-none">×</span> Fermer
        </button>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center gap-10 mt-12">
          {/* Header */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">
              {String(project.id).padStart(2, '0')} — {project.type}
            </p>
            <h2 className="text-[6vw] font-black uppercase tracking-tighter leading-[0.85]">
              {project.title}
            </h2>
          </div>

          {/* Meta */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-[11px] uppercase tracking-wider">
            {[
              ['Localisation', project.location],
              ['Année', project.year],
              ['Surface', project.surface],
              ['Statut', project.status],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-gray-400 mb-1">{label}</p>
                <p className="font-bold">{value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-[13px] leading-7 text-gray-600 max-w-[380px]">
            {project.description}
          </p>
        </div>

        {/* Bottom nav */}
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-300 pt-8 border-t border-gray-100">
          <span>Forma Studio — {project.year}</span>
          <span>{project.type}</span>
        </div>
      </div>

      <style>{`
        @keyframes overlayIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeImg {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
