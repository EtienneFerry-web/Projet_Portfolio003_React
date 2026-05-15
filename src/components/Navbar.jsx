import { useState, useEffect } from 'react';

export const Navbar = ({ totalPages, scrollRef }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const container = scrollRef?.current;
    if (!container) return;

    const sections = container.querySelectorAll('[data-page]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentPage(Number(entry.target.dataset.page));
          }
        });
      },
      { root: container, threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [scrollRef]);

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between text-[11px] text-gray-400 uppercase tracking-widest leading-tight z-50 px-8 py-4 backdrop-blur-md bg-white/10">
      <span>forma.arch</span>
      <span>Paris, France</span>
      <span className="text-center">agence d'architecture<br />&amp; design urbain</span>
      <span>Page {String(currentPage).padStart(2, '0')}</span>
    </div>
  );
};
