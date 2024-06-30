import { useEffect } from 'react';

function useSlideToRight() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slideRight');
        } else {
          entry.target.classList.remove('slideRight');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.right');
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




export default useSlideToRight; 