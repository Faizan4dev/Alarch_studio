import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {

    // 🔥 SCROLL TO SPECIFIC SECTION
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {

        // FIRST GO TO TOP
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });

        // THEN SMOOTHLY SCROLL DOWN
        setTimeout(() => {
          const y =
            element.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top: y - 10,
            behavior: "smooth",
          });
        }, 150);

        return;
      }
    }

    // 🔥 NORMAL PAGE CHANGE → TOP
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;