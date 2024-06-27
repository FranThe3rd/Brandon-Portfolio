'use client'

import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar';
import { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { CursorContext } from '../../components/cursor/CursorContext'

/* Keyframes Start-------------------------------------------------------- */

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedText = styled.h1`
  animation: ${fadeIn} 1s ease-in-out;
`;

/* Keyframes End-------------------------------------------------------- */
const Home = () => {

  /* Text Animation Start-------------------------------------------------------- */
  const texts = ['Photographer', 'Videographer', 'Film Editor']
  const [text, setText] = useState('Guaman')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 5300); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  /* Text Animation End-------------------------------------------------------- */

  /* Cursor Animation Start-------------------------------------------------------- */

  const { cursorVariant, x, y, textEnter, textLeave } = useContext(CursorContext);

  const variants = {
    default: {
      x: x - 14,
      y: y - 14,
      backgroundColor: 'white',
    },
    text: {
      height: 150,
      width: 150,
      x: x - 70,
      y: y - 70,
      mixBlendMode: 'difference',
    },

    navText: {
      height: 100,
      width: 100,
      x: x - 50,
      y: y - 50,
      mixBlendMode: 'difference',
    }
  }

  /* Cursor Animation End-------------------------------------------------------- */







  return (
    <div className='home'>
      <Navbar />
      <div className='title-div'>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='firstName'>Brandon</h1>
        <AnimatedText onMouseEnter={textEnter} onMouseLeave={textLeave} className='lastName' key={text}>{text}</AnimatedText>
      </div>

      < motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.3
        }}
      />


    </div>
  )
}

export default Home;