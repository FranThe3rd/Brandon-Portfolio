'use client'

import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar';
import { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { CursorContext } from '../../components/cursor/CursorContext'
import shape1 from '../../assets/shape1.svg'
import shape2 from '../../assets/shape2.svg'
import shape3 from '../../assets/shape3.svg'
import shape4 from '../../assets/shape4.png'
import Index from '../../components/ZoomParallax';
import aboutImage from '../../assets/brandon-about.jpg'
import aboutQuote from '../../assets/about-quote.svg'


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

const AnimatedPic = styled.img`
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

  /* Picture Animation Start-------------------------------------------------------- */

  const pictureOne = ['https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg', 'https://www.photographytalk.com/images/articles/2018/05/07/articles/2017_8/how_to_take_vertical_landscape_photos.jpg']
  const [picOne, setPicOne] = useState('https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPicOne((prevPic) => {
        const currentIndex = pictureOne.indexOf(prevPic);
        const nextIndex = (currentIndex + 1) % pictureOne.length;
        return pictureOne[nextIndex];
      });
    }, 6000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const pictureTwo = ['https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg', 'https://www.photographytalk.com/images/articles/2018/05/07/articles/2017_8/how_to_take_vertical_landscape_photos.jpg']
  const [picTwo, setPicTwo] = useState('https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPicTwo((prevPic) => {
        const currentIndex = pictureTwo.indexOf(prevPic);
        const nextIndex = (currentIndex + 1) % pictureTwo.length;
        return pictureTwo[nextIndex];
      });
    }, 6300); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const pictureThree = ['https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg', 'https://www.photographytalk.com/images/articles/2018/05/07/articles/2017_8/how_to_take_vertical_landscape_photos.jpg']
  const [picThree, setPicThree] = useState('https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPicThree((prevPic) => {
        const currentIndex = pictureThree.indexOf(prevPic);
        const nextIndex = (currentIndex + 1) % pictureThree.length;
        return pictureThree[nextIndex];
      });
    }, 6100);

    return () => clearInterval(intervalId);
  }, []);

  const pictureFour = ['https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg', 'https://www.photographytalk.com/images/articles/2018/05/07/articles/2017_8/how_to_take_vertical_landscape_photos.jpg']
  const [picFour, setPicFour] = useState('https://amateurphotographer.com/wp-content/uploads/sites/7/2023/04/Paulina-Stopka-vertical-landscapesTatra-Mountains.jpg')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPicFour((prevPic) => {
        const currentIndex = pictureFour.indexOf(prevPic);
        const nextIndex = (currentIndex + 1) % pictureFour.length;
        return pictureFour[nextIndex];
      });
    }, 6400);

    return () => clearInterval(intervalId);
  }, []);

  /* Picture Animation End-------------------------------------------------------- */




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
      <img className='shape1' src={shape1} alt="" />
      <img className='shape2' src={shape2} alt="" />


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

      <div className='card-container'>
        <div className='card'>
          <AnimatedPic src={picOne} key={picOne} alt="" />
          <h3 className='card-text'>Lorem, ipsum dolor.</h3>
          <h4 className='card-subtitle'>Lorem, ipsum.</h4>

        </div>

        <div className='card2'>
          <AnimatedPic src={picTwo} key={picTwo} alt="" />
          <h3 className='card-text'>Lorem, ipsum dolor.</h3>
          <h4 className='card-subtitle'>Lorem, ipsum.</h4>

        </div>

        <div className='card'>
        <AnimatedPic src={picThree} key={picThree} alt="" />
        <h3 className='card-text'>Lorem, ipsum dolor.</h3>
          <h4 className='card-subtitle'>Lorem, ipsum.</h4>

        </div>

        <div className='card2'>
        <AnimatedPic src={picFour} key={picFour} alt="" />
          <h3 className='card-text'>Lorem, ipsum dolor.</h3>
          <h4 className='card-subtitle'>Lorem, ipsum.</h4>
        </div>
      </div>
      <img className='shape3' src={shape3} alt="" />
      <div className='border-line1'></div>
      
      <div className='zoom-container'>
        <Index />

      </div>
      <div className='about-container'>

      <div className='about-me'>
        <div className="about-me-image">
        <img src={aboutImage} alt="" />
        </div>
        <div className='about-me-text'>
          <h1>Hi. I'm</h1>
          <h1>Brandon Guaman</h1>
          <img src={aboutQuote} className='about-quote' alt="" />
          <p>A passionate photographer that's currently doing Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      </div>
      <div className='shape4-container'>
      <img className='shape4' src={shape4} alt="" />

      </div>

    </div>

  )
}

export default Home;