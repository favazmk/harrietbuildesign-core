import { useState, useEffect, useRef, useCallback } from "react";

interface UseScrollCenterOptions {
  threshold?: number; // How close to center to activate (in pixels)
}

export function useScrollCenter<T extends HTMLElement>(
  options: UseScrollCenterOptions = {}
) {
  const { threshold = 100 } = options;
  const [isCentered, setIsCentered] = useState(false);
  const elementRef = useRef<T>(null);

  const checkCenter = useCallback(() => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const distance = Math.abs(elementCenter - viewportCenter);

    setIsCentered(distance < threshold);
  }, [threshold]);

  useEffect(() => {
    // Only activate on mobile/touch devices
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
    };
  }, [checkCenter]);

  return { ref: elementRef, isCentered };
}

// Hook for managing multiple items - finds the one closest to center
export function useScrollCenterGroup(itemCount: number) {
  const [centeredIndex, setCenteredIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  const setRef = useCallback((index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  }, []);

  const checkCenter = useCallback(() => {
    const viewportCenter = window.innerHeight / 2;
    let closestIndex: number | null = null;
    let closestDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const distance = Math.abs(elementCenter - viewportCenter);

      // Only consider elements that are visible in viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      }
    });

    // Only set as centered if it's reasonably close to center
    if (closestDistance < 200) {
      setCenteredIndex(closestIndex);
    } else {
      setCenteredIndex(null);
    }
  }, []);

  useEffect(() => {
    // Only activate on mobile/touch devices
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
    };
  }, [checkCenter]);

  return { setRef, centeredIndex };
}
