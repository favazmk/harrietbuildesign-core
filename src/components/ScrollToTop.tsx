import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  // We include 'key' so that clicking a link to the CURRENT page (same pathname)
  // still triggers the effect (because the key changes on every push).
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // 1. Handle "Back" button (POP)
    // We strictly do NOT scroll. We let the browser restore the previous position.
    if (navigationType === "POP") {
      return;
    }

    // 2. Handle Hash Links (e.g., /services#construction)
    // If there is a hash, we scroll to that element instead of the top.
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timer);
    } 
    
    // 3. Handle Standard Navigation (PUSH/REPLACE)
    // This runs when clicking "Home", "About", etc.
    // It scrolls to the top of the page immediately.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });

  }, [pathname, hash, key, navigationType]);

  return null;
};

export default ScrollToTop;