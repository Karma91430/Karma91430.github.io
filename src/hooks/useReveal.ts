import { useEffect, useRef, useState } from 'react';

export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible } as const;
}
