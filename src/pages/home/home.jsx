import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

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

    const texts = ['Photographer','Videographer','Film Editor']


    const [text,setText] = useState('Guaman')

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


    return (
        <div className='home'>
            <Navbar />
            <div className='title-div'>
                <h1 className='firstName'>Brandon</h1>
                <AnimatedText className='lastName' key={text}>{text}</AnimatedText>
                </div>
        </div>
    )
}

export default Home;