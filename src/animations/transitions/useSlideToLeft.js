import { useEffect } from 'react';

function useSlideToLeft() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideLeft');
        } else {
          entry.target.classList.remove('slideLeft');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.left');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
}




export default useSlideToLeft; 