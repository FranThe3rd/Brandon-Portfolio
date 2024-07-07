import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './index.module.css';
import Picture1 from '../../assets/zoom/1.jpg';
import Picture2 from '../../assets/zoom/2.jpg';
import Picture3 from '../../assets/zoom/3.jpg';
import Picture4 from '../../assets/zoom/4.jpg';
import Picture5 from '../../assets/zoom/5.jpg';
import Picture6 from '../../assets/zoom/6.jpg';
import Picture7 from '../../assets/zoom/7.jpg';


const Index = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture7, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture3, scale: scale9 },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div key={index} style={{ scale }} className={styles.el}>
            <div className={styles.imageContainer}>
              <img
                src={src}
                alt={`image ${index + 1}`}
                className={styles.image}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;