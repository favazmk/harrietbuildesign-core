import { useState, useEffect, useRef, useCallback } from "react";

interface UseScrollCenterOptions {
  threshold?: number;
}

export function useScrollCenter<T extends HTMLElement>(
  options: UseScrollCenterOptions = {}
) {
  const { threshold = 100 } = options;
  const [isCentered, setIsCentered] = useState(false);
  const elementRef = useRef<T>(null);
  const rafRef = useRef<number | null>(null);
  const lastValueRef = useRef(false);

  const checkCenter = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = Math.abs(elementCenter - viewportCenter);
      const newValue = distance < threshold;

      if (newValue !== lastValueRef.current) {
        lastValueRef.current = newValue;
        setIsCentered(newValue);
      }
    });
  }, [threshold]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     window.matchMedia("(hover: none)").matches;
    
    if (!isMobile) {
      setIsCentered(false);
      return;
    }

    checkCenter();
    
    window.addEventListener("scroll", checkCenter, { passive: true });
    window.addEventListener("resize", checkCenter, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkCenter);
      window.removeEventListener("resize", checkCenter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [checkCenter]);

  return { ref: elementRef, isCentered };
}

export function useScrollCenterGroup(itemCount: number) {
  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastIndexRef = useRef<number | null>(null);

  const setRef = useCallback((index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  }, []);

  const checkCenter = useCallback(() => {
    if (rafRef.current) return;
    
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const viewportCenter = window.innerHeight / 2;
      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elementCenter - viewportCenter);

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      const newIndex = closestDistance < 200 ? closestIndex : null;
      
      if (newIndex !== lastIndexRef.current) {
        lastIndexRef.current = newIndex;
        setCenteredIndex(newIndex);
      }
    });
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 
                     window.matchMedia("(hover: none)").matches;
    
    if (!isMobile) {
      setCenteredIndex(null);
      return;
    }

    checkCenter();
    
    window.addEventListener("scroll", checkCenter, { passive: true });
    window.addEventListener("resize", checkCenter, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkCenter);
      window.removeEventListener("resize", checkCenter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [checkCenter]);

  return { setRef, centeredIndex };
}
