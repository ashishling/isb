import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "intent", label: "Goals" },
  { id: "structure", label: "Structure" },
  { id: "why-us", label: "Why Us" },
  { id: "participants", label: "Testimonials" },
  { id: "hosts", label: "Hosts" },
];

const ScrollStepIndicator: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionEls = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (sectionEls.length === 0) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const idx = sectionEls.findIndex(el => el === visible[0].target);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // triggers when section is mostly in view
        threshold: [0.3, 0.5, 0.7],
      }
    );
    sectionEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed z-50 flex flex-col items-center space-y-2 top-1/2 -translate-y-1/2 right-2 md:right-4">
      {SECTIONS.map((section, i) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          aria-label={section.label}
          className={`w-2 h-2 rounded-full border transition-all duration-200 focus:outline-none
            ${i === activeIndex ? 'bg-blue-500 border-blue-500 scale-110 shadow' : 'bg-gray-200 border-gray-300'}
            ${i < activeIndex ? 'opacity-70' : ''}
            ${i > activeIndex ? 'opacity-70' : ''}
          `}
        />
      ))}
    </div>
  );
};

export default ScrollStepIndicator; 