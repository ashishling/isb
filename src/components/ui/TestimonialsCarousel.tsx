import React, { useEffect, useState } from "react";

type Props = {
  verbatims: string[];
};

const AUTO_ROTATE_INTERVAL = 3000;

const TestimonialsCarousel: React.FC<Props> = ({ verbatims }) => {
  const [index, setIndex] = useState(0);
  const total = verbatims.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-white rounded-lg p-8 shadow-sm text-center min-h-[120px] flex items-center justify-center transition-all duration-500">
          <p className="text-gray-700 text-lg italic">“{verbatims[index]}”</p>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <span>&larr;</span>
        </button>
        <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <span>&rarr;</span>
        </button>
      </div>
      <div className="flex justify-center mt-2 space-x-1">
        {verbatims.map((_, i) => (
          <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel; 