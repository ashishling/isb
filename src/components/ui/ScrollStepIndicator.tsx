import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "situation-today", label: "Situation Today" },
  { id: "building-with-ai", label: "Building with AI" },
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
        // Find all visible sections
        const visibleEntries = entries.filter(e => e.isIntersecting);
        
        if (visibleEntries.length === 0) return;

        // If multiple sections are visible, choose the one with the largest intersection ratio
        const mostVisible = visibleEntries.reduce((prev, current) => {
          return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
        });

        const idx = sectionEls.findIndex(el => el === mostVisible.target);
        if (idx !== -1) {
          // Only update if the section has changed
          setActiveIndex(prev => prev !== idx ? idx : prev);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Slightly more forgiving margins
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5], // More granular thresholds at the start
      }
    );

    sectionEls.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ 
        behavior: "smooth",
        block: "center" // Center the section in the viewport
      });
    }
  };

  return (
    <div className="fixed z-50 flex flex-col items-center space-y-3 top-1/2 -translate-y-1/2 right-2 md:right-6">
      {SECTIONS.map((section, i) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          aria-label={section.label}
          className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border transition-all duration-300 focus:outline-none
            ${i === activeIndex ? 'bg-blue-500 border-blue-500 scale-125 shadow-lg' : 'bg-gray-200 border-gray-300 hover:scale-110'}
            ${i < activeIndex ? 'opacity-50' : ''}
            ${i > activeIndex ? 'opacity-50' : ''}
          `}
        />
      ))}
    </div>
  );
};

export default ScrollStepIndicator; 