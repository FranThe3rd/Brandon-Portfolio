'use client'

import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import useMousePosition from '../../animations/cursor/useMousePosition';

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

  const [cursorVariant, setCursorVariant] = useState('default');

  const { x, y } = useMousePosition();

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


    }

  }

  const textEnter = () => {
    setCursorVariant('text');
  }

  const textLeave = () => {
    setCursorVariant('default');
   
  }
    





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