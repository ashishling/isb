import { animate, stagger, inView } from 'motion';
import { useEffect, useRef } from 'react';

const words = [
  'Hello Turno',
  'Bonjour Turno',
  'Hola Turno',
  'Ciao Turno',
  'こんにちは Turno',
  '안녕하세요 Turno'
];

export default function AppleHelloEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const spans = containerRef.current.querySelectorAll('span');
    
    // Hide all spans initially except the first one
    spans.forEach((span, i) => {
      if (i !== 0) {
        span.style.opacity = '0';
        span.style.visibility = 'hidden';
      }
    });

    inView(containerRef.current, () => {
      animate(
        spans[0],
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.4,
          easing: [0.25, 0.46, 0.45, 0.94]
        }
      );
    });

    let currentIndex = 0;
    const interval = setInterval(() => {
      const prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % words.length;

      // Hide previous span
      const prevSpan = spans[prevIndex];
      animate(
        prevSpan,
        { opacity: [1, 0] },
        { 
          duration: 0.4,
          easing: 'ease-out',
          onComplete: () => {
            prevSpan.style.visibility = 'hidden';
          }
        }
      );

      // Show next span
      const nextSpan = spans[currentIndex];
      nextSpan.style.visibility = 'visible';
      animate(
        nextSpan,
        { opacity: [0, 1] },
        { duration: 0.4, easing: 'ease-in' }
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-20 w-full overflow-hidden text-4xl font-bold md:text-6xl"
    >
      {words.map((word, i) => (
        <span
          key={word}
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: i === 0 ? 1 : 0,
            visibility: i === 0 ? 'visible' : 'hidden'
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
} 