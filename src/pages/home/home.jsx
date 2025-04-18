'use client'


import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar';
import { useNavigate } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { CursorContext } from '../../components/cursor/CursorContext'
import shape1 from '../../assets/shape1.svg'
import shape2 from '../../assets/shape2.png'
import shape3 from '../../assets/shape3.svg'
import shape4 from '../../assets/shape4.png'
import Index from '../../components/ZoomParallax';
import aboutImage from '../../assets/brandon-about.jpg'
import aboutQuote from '../../assets/about-quote.svg'
import useHidden from '../../animations/transitions/useHidden';
import useSlideToLeft from '../../animations/transitions/useSlideToLeft';
import useSlideToRight from '../../animations/transitions/useSlideToRight';
import { ArrowRight, Envelope, InstagramLogo, YoutubeLogo, TiktokLogo } from 'phosphor-react';


import { Link as LinkScroll } from 'react-scroll';
import Lenis from 'lenis'














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


 useHidden();
 useSlideToLeft();
 useSlideToRight();


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


 const pictureOne = ['https://i.imgur.com/bqZVBQG.jpeg', 'https://i.imgur.com/mBuCwi8.jpeg', 'https://i.imgur.com/0bg1Yk4.jpg']


 const [picOne, setPicOne] = useState('https://i.imgur.com/bqZVBQG.jpeg')
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


 const pictureTwo = ['https://i.imgur.com/E6zMnzg.jpg', 'https://i.imgur.com/kyk1Zn1.jpg']
 const [picTwo, setPicTwo] = useState('https://i.imgur.com/E6zMnzg.jpg')


 useEffect(() => {
   const intervalId = setInterval(() => {
     setPicTwo((prevPic) => {
       const currentIndex = pictureTwo.indexOf(prevPic);
       const nextIndex = (currentIndex + 1) % pictureTwo.length;
       return pictureTwo[nextIndex];
     });
   }, 5000); // Change text every 2 seconds


   return () => clearInterval(intervalId); // Clean up interval on component unmount
 }, []);


 const pictureThree = ['https://i.imgur.com/pFz4bFF.jpg', 'https://i.imgur.com/4q0UF1B.jpeg']


 const [picThree, setPicThree] = useState('https://i.imgur.com/pFz4bFF.jpg')
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


 const pictureFour = ['https://i.imgur.com/L5EaD2u.jpg', 'https://i.imgur.com/1DAaQHG.jpg']
 const [picFour, setPicFour] = useState('https://i.imgur.com/L5EaD2u.jpg')


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


 const { cursorVariant, x, y, textEnter, textLeave, navTextEnter } = useContext(CursorContext);


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
     mixBlendMode: ' difference',
     zIndex: 1,


   },


   navText: {
     height: 100,
     width: 100,
     x: x - 50,
     y: y - 50,
     mixBlendMode: 'difference',
     zIndex: 1,


   }
 }


 /* Cursor Animation End-------------------------------------------------------- */


 /* Lenis Scroll-------------------------------------------------------- */


 useEffect(() => {
   const lenis = new Lenis()


   function raf(time) {
     lenis.raf(time)
     requestAnimationFrame(raf)
   }


   requestAnimationFrame(raf)


 }, [])


 const navigate = useNavigate();








 return (
   <div className='home'>
     <div className='title-div hidden'>
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


     <div className='card-container '>
       <div className='card'>
         <AnimatedPic loading='lazy'  src={picOne} key={picOne} alt="" />
         <button onClick={() => navigate('/photography')} className='card-btn'><ArrowRight /></button>
         <h3 className='card-text'>Photography</h3>
         <h4 className='card-subtitle'>Capturing real moments</h4>
       </div>


       <div className='card2'>
         <AnimatedPic loading='lazy'  src={picTwo} key={picTwo} alt="" />
         <button className='card-btn'><ArrowRight /></button>
         <h3 className='card-text2'>Videography</h3>
         <h4 className='card-subtitle2'>Capturing stunning visuals</h4>


       </div>


       <div className='card'>
         <AnimatedPic loading='lazy'  src={picThree} key={picThree} alt="" />
         <button className='card-btn'><ArrowRight /></button>


         <h3 className='card-text'>Film Editing</h3>
         <h4 className='card-subtitle'>Polished, pro-level edits</h4>


       </div>


   
     </div>
     <img className='shape3' src={shape3} alt="" />
     <div className='border-line1'></div>


     <div className='zoom-container hidden'>
       <Index />


     </div>


     <div className='about-container'>


       <div className='about-me'>
         <div className="about-me-image right">
           <img src={aboutImage} alt="" />
         </div>
         <div className='about-me-text left'>
           <h1 onMouseEnter={navTextEnter} onMouseLeave={textLeave}>Hi. I'm</h1>
           <h1 onMouseEnter={navTextEnter} onMouseLeave={textLeave}>Brandon Guaman</h1>
           <img src={aboutQuote} className='about-quote' alt="" />
           <p onMouseEnter={navTextEnter} onMouseLeave={textLeave}>I am a passionate photographer that's currently studying at Northampton Community College for media productions.
           </p>
         </div>
       </div>
     </div>
     <div className='shape4-container'>
       <img className='shape4' src={shape4} alt="" /></div>


     <div className='services'>
       <h4 className='services-title'>MY SERVICES</h4>


       <div className='service'>
         <div className='service-text'>
           <h1 className='hidden'>Photography</h1>
           <p className='hidden'>Personalized Photography For You.</p>
         </div>
         <LinkScroll to='contact' smooth={true} duration={2000}>
           <button onMouseEnter={navTextEnter} onMouseLeave={textLeave} className='service-button'><ArrowRight /></button>
         </LinkScroll>
       </div>


       <div className='service'>
         <div className='service-text'>
           <h1 className='hidden'>Videography</h1>
           <p className='hidden'>Professional Video Services For You.</p>
         </div>
         <LinkScroll to='contact' smooth={true} duration={2000}>
           <button onMouseEnter={navTextEnter} onMouseLeave={textLeave} className='service-button'><ArrowRight /></button>
         </LinkScroll>
       </div>


       <div className='service'>
         <div className='service-text'>
           <h1 className='hidden'>Film Editing</h1>
           <p className='hidden'>Creative Film Editing Services.</p>
         </div>
         <LinkScroll to='contact' smooth={true} duration={2000}>
           <button onMouseEnter={navTextEnter} onMouseLeave={textLeave} className='service-button'><ArrowRight /></button>
         </LinkScroll>
       </div>
     </div>


     <div className='recent'>
       <h1 className='hidden'>My Recent Work</h1>
       <div className='recent-grid'>
         <h1>n/a</h1>
       </div>
     </div>


     <div className='border-line2'></div>
     <div className='contact'>
       <h2>Contact Me</h2>
       <h4>Please email me to discuss your requirements for the services.</h4>


     </div>
     <div className='social-icons'>
       <a onMouseEnter={navTextEnter} onMouseLeave={textLeave} href="mailto:Brandonguaman18@gmail.com">
         <Envelope color='white' />
       </a>
       <a onMouseEnter={navTextEnter} onMouseLeave={textLeave} target='_blank' href="https://www.instagram.com/filmic.brandon/">
         <InstagramLogo color='white' />
       </a>
       <a onMouseEnter={navTextEnter} onMouseLeave={textLeave} href="https://www.youtube.com/@BrandonGuaman" target='_blank'>
         <YoutubeLogo color='white' />
       </a>
       <a onMouseEnter={navTextEnter} onMouseLeave={textLeave} href="https://tiktok.com/@filmic.brandon?_t=8fntslVFApH&_r=1" target='_blank'>
         <TiktokLogo color='white' />
       </a>


     </div>






   </div>


 )
}


export default Home;



