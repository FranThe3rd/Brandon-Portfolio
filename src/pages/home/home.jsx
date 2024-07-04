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
import useHidden from '../../animations/transitions/useHidden';
import useSlideToLeft from '../../animations/transitions/useSlideToLeft';
import useSlideToRight from '../../animations/transitions/useSlideToRight';
import { ArrowRight } from 'phosphor-react';




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

  const pictureOne = ['https://previews.dropbox.com/p/thumb/ACV0CTF6R88QuE-cIIdfYYmDUll_k5QLDaVHS7XETST6XXxYXqcK71aslI_lTmMab8A2OI5RwYxgMV1ThylfEoOZonQQoPZgQjtbBHWbinMQEYX79W4SjZAGZS-P6ZVgsoIp5e6xR_VBrxwpnik9J2MrM94Y_H95k_n_Leke54oAhHFYNeT_ALaE6U5FoUP7PH6u4cAZl-5wh7JPPLWxDAIjXRB8Yg23dXBpygUfEAKD3Ii0OwEQuEpu_DNqR53Phu0dapLOwkQIj_4ja43rwPAWvVEtJLWUzE76vXFIoeYvnmea8AAl3EZC45v7Y8Samc5kOtr5cItnOz44fVNlSG_Mw81s4eaucFeaFzYhIq0i8UjkDOqv36qqMRL3OyFLiQN2xQAw97vXGIaVXfKTsAqxlRolD-Nx7Uh4nUDopemnCTgqHcKdBMgLRco8dProIc8xQJcCbNAxahQ5pTLa92otLdMKSvraNEP9wP6euMc8DasP41Wt69ftJwMwGKW3i3ZWBybvA9RadCGsOd8wOr7SwbUqzga-tV4_DQYyiAASh8YWHFyb0kkLDKJBiXQXPaE/p.jpeg','https://previews.dropbox.com/p/thumb/ACV2Dwezh0CD29W5rH4YhEukwvo51yOhSjOYGBmPxfo_kzZYwSwJD_BkSrVdlcciIpuz6nsEq8ccyUdhrdGHDKD146erNSkmI0n2v2MPzGeuZJb015dmZ8PfGleYGvpN6J-BT8h3lG1yJAjYFs6ekPBXh21Hn81hVuSC1dDkSgF9VnzEmWMHfLOmX7NR61GNHILSlDItSMXJsIuzg6DltWgI0hw_tu-3RlPpifvkiNR-ezDnlHtXa2EMB4Gn0KmWBcvgLW7bO8fVz9cObZT9eoCuifHry91fjzMTG0l6ax-XMM44n-zoAQ-tlpLjE7xZBi04VfPd5aUGrpUTQ9vdgLifjuEn3NMLu10hQ1J2lXUQZBz2dHN9gV8YebAKrbVd5gYthne9Yx3DdZ-olGpjEN2ul2nkHZjchqymLa5H8_uOspgNc4SIC8_9OXQUSHyjs-Sg8rgqOpt59Mqk7DQPSmPhVrhS8yMNPEf5WnlvRC3rGoYRwhkNox_H58GZ_Sk1SZs/p.jpeg']
  const [picOne, setPicOne] = useState('https://previews.dropbox.com/p/thumb/ACV0CTF6R88QuE-cIIdfYYmDUll_k5QLDaVHS7XETST6XXxYXqcK71aslI_lTmMab8A2OI5RwYxgMV1ThylfEoOZonQQoPZgQjtbBHWbinMQEYX79W4SjZAGZS-P6ZVgsoIp5e6xR_VBrxwpnik9J2MrM94Y_H95k_n_Leke54oAhHFYNeT_ALaE6U5FoUP7PH6u4cAZl-5wh7JPPLWxDAIjXRB8Yg23dXBpygUfEAKD3Ii0OwEQuEpu_DNqR53Phu0dapLOwkQIj_4ja43rwPAWvVEtJLWUzE76vXFIoeYvnmea8AAl3EZC45v7Y8Samc5kOtr5cItnOz44fVNlSG_Mw81s4eaucFeaFzYhIq0i8UjkDOqv36qqMRL3OyFLiQN2xQAw97vXGIaVXfKTsAqxlRolD-Nx7Uh4nUDopemnCTgqHcKdBMgLRco8dProIc8xQJcCbNAxahQ5pTLa92otLdMKSvraNEP9wP6euMc8DasP41Wt69ftJwMwGKW3i3ZWBybvA9RadCGsOd8wOr7SwbUqzga-tV4_DQYyiAASh8YWHFyb0kkLDKJBiXQXPaE/p.jpeg')

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

  const pictureTwo = ['https://previews.dropbox.com/p/thumb/ACW-0_te9rkfhCoDR73pmO1f5zIORQJW4vtAYU-pA7WX7zYHG-L9uJuRShVkaVHhhbNVYNQenA2OquOIcNyWT-k34SXRFiRfUdWOaHWSL8RJpxaAGkqHK0iZI5PwsHCAEPO5BOy6VGtWsmFhffnTgHSvFhl_kGH8ZRe8rce_NaVOrzE2D7iqAzBM7XVaeCKQGV2XOpaKTNO2IrUu_8U2P7ca5oSAvi9Am9puFGNb_qkUIjWnJRGBXgLv0ZcdYY1kVsUIfVQZP1w7UCWwJy9XfK2HAkA-MdTBCBEp_uzFbE-yaxrgEJCSJsaU2d6QYKyxTt0BhsxS9ApwInlyp84l-vxr22uBnwbj25ImSogd_hyk0J4BUo1J2XgKIdkYFv3lmpCtKfVZmg0I2S7n4CrZUYsYH0D59cHSXn_2mWrVNrLpVmZGBcDMXn_J4qZhl4tiUEwAX2GdtWrmkAnF_LSQ4tjrd1_KwDpQiLBqUKKtQ0SCrC4jAqzGkWEEnXnX0guaLMHivynJYgdICTnqON1QfHTbawck3xRxehWMhUtZcL06yygPaDRfHbANd5sG_h7Djr5A2a6Ss-AsWBHBlT5fj1-6iXcQy2nQFh8JLjYxKp1JcQ/p.jpeg','https://previews.dropbox.com/p/thumb/ACV1SSXYOpIBlsTBV0l_KVSAIDIbBXjQrVBcGol1c7NKcQvaDrbB_UeXqX5tHG7pxFh9MjAK1Sa22tRTRG4lsU3DrZ-7Y_FROYXrIBtzpIUWNNITluotwgqjYkX497p9ETA3fg-d_2ok2qEPHpnHHQYgu9I8KVfLy5V73OLGyaRvy4DIbPhPSJ4vOZWYsLPxbRfn9IUbFGdvcy7qgRW_P9_g9gduTuNNCEHhmxr8N5IXvdIrjtOB8vhdv3NcVcaOX8mwo4Tr319HSlHqKiXc0DLvx-qVbOpzTQxUI_SJ2XZ3kmJgxYlKsHia-VViBDSu0GUxGQKdO22s2u2jg9xLzt5APCvxu_T74sYDNHUaj25cd0XrBGxwSlzbXJrucOnPWJnM0iiJI5g69mpK1cgjRYAGV4BxismlQciMKbZtYiEYg6trbkRI46OHDxAis_T2o1e-y_Yy7XwV503fDxRz7gkLPPU4qltl-vZMdTajLenfNRhAsvgUteYBF89CGDbtz26yrrrrz5xPBFBJYZKf-uvTnIgv2Sn2IaRMqOvYdOOsmdzEhWQTTMsIglaFiwRevWN-KZPHzBj-zYMrTzYwDqd7jmzhgsy19p0c-7qTvcUYXUbkorvsyvcAJLGe0eToJPlgYq1iBOCmWn2gRIKeAFvZ7a2ZbxlhbE7UKDTCMZOlA9mYsiUSmNKky3TSSYN8okZy0ICMHZNo7qBKMP6YCCJ6KCCo9nfNCq-siBDwFnJXYg/p.jpeg']
  const [picTwo, setPicTwo] = useState('https://previews.dropbox.com/p/thumb/ACW-0_te9rkfhCoDR73pmO1f5zIORQJW4vtAYU-pA7WX7zYHG-L9uJuRShVkaVHhhbNVYNQenA2OquOIcNyWT-k34SXRFiRfUdWOaHWSL8RJpxaAGkqHK0iZI5PwsHCAEPO5BOy6VGtWsmFhffnTgHSvFhl_kGH8ZRe8rce_NaVOrzE2D7iqAzBM7XVaeCKQGV2XOpaKTNO2IrUu_8U2P7ca5oSAvi9Am9puFGNb_qkUIjWnJRGBXgLv0ZcdYY1kVsUIfVQZP1w7UCWwJy9XfK2HAkA-MdTBCBEp_uzFbE-yaxrgEJCSJsaU2d6QYKyxTt0BhsxS9ApwInlyp84l-vxr22uBnwbj25ImSogd_hyk0J4BUo1J2XgKIdkYFv3lmpCtKfVZmg0I2S7n4CrZUYsYH0D59cHSXn_2mWrVNrLpVmZGBcDMXn_J4qZhl4tiUEwAX2GdtWrmkAnF_LSQ4tjrd1_KwDpQiLBqUKKtQ0SCrC4jAqzGkWEEnXnX0guaLMHivynJYgdICTnqON1QfHTbawck3xRxehWMhUtZcL06yygPaDRfHbANd5sG_h7Djr5A2a6Ss-AsWBHBlT5fj1-6iXcQy2nQFh8JLjYxKp1JcQ/p.jpeg ')

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

  const pictureThree = ['https://previews.dropbox.com/p/thumb/ACUldUmLZmr8m4-BwjUs0qMicHFYCZa66Z9T_5PigJBo_pXrxXrbeVCFF-6LVazLbyi-9k4QmkXQfO5K3ZQhAo1mOqENh_EUb7fdZYmWspYMAqi1CAjVdodKje50TdEwiMw0-MKXAPegX37Vxd0DcdoBJUmK953w526ArB9WXm-hYh1b5qtpzYkstqMYewmaPmbgj3RDahFy6vasm3uGbU_zPE055qDJ3B-7dmvOU_CT3wDPQybXmSQhmh_hfvyn68d2h-okkmNaQGsjPQkxBbck2yg3pz7FUriMDuk0eIQyalykQfaKqVnbsenKmyg4VseW4gbWXpMPuHPN_J7AtU6IO5ivanI1rlNUk4Wi1pe2l48Twz-s4YyaJaAF2yuyaXTkSl_1x1mWzdIqdMEPnbkWimn11egWsNA8-RWQgmF2yUmnTkG5tJ2jQw9N9cfLnJgsplafZmGcLF7ExpZLCXIUgjzLb6uby4pS9Bw9nhJdHcnNF0FGHJwR5O_UtXxDJIs/p.jpeg','https://previews.dropbox.com/p/thumb/ACU4_0mf4PKntAy_Uu3LPjJLbGQ44vT2O9i6t9N1u4xRD_6rY_UhYnoVKpdbq3kGZUxyzaJGffbcdu3JmnQdraQ1mco_LJTKTuLLvSLalU0BRQD8vOFQxaoNrEftHnA2fULO7dsY54VJg-xRAKqU5IaDTD60mlASjvsI8LXOJQf0TXBu_Udop2f3hZsFKL281Bz6ksRFnwRwGGghYjQChM0AB4oKylaE7aEvA9YowhYXF_oVIIDMGpE3byPVi1TJOVFButNZ37RWJ2p1J7KA87k-PlPH2C4JN7WCgYn0t1NLkrHF7YSpCJUe4sKKx6iNlCD-kFQ4cxLMev2MT8NXUKI4bg7gyDdK9tiSqnm-E7kXswgblWweWYQxZUGO26G7PNIk1wfwZv0LeSjGILPXxNDtPVf03LSOMdw2EovdmpfDRGM3ncL00SDrGdtp6tVby4g/p.jpeg']
  const [picThree, setPicThree] = useState('https://previews.dropbox.com/p/thumb/ACUldUmLZmr8m4-BwjUs0qMicHFYCZa66Z9T_5PigJBo_pXrxXrbeVCFF-6LVazLbyi-9k4QmkXQfO5K3ZQhAo1mOqENh_EUb7fdZYmWspYMAqi1CAjVdodKje50TdEwiMw0-MKXAPegX37Vxd0DcdoBJUmK953w526ArB9WXm-hYh1b5qtpzYkstqMYewmaPmbgj3RDahFy6vasm3uGbU_zPE055qDJ3B-7dmvOU_CT3wDPQybXmSQhmh_hfvyn68d2h-okkmNaQGsjPQkxBbck2yg3pz7FUriMDuk0eIQyalykQfaKqVnbsenKmyg4VseW4gbWXpMPuHPN_J7AtU6IO5ivanI1rlNUk4Wi1pe2l48Twz-s4YyaJaAF2yuyaXTkSl_1x1mWzdIqdMEPnbkWimn11egWsNA8-RWQgmF2yUmnTkG5tJ2jQw9N9cfLnJgsplafZmGcLF7ExpZLCXIUgjzLb6uby4pS9Bw9nhJdHcnNF0FGHJwR5O_UtXxDJIs/p.jpeg')

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

  const pictureFour = ['https://previews.dropbox.com/p/thumb/ACUxuJ6J4HU1peJ-RTAO2jlYCids0wphBP3bhsSTmE-0BiVSlVYytOoUz6SOj7sOR9N62VtapCMRcKsu896oOfIgdxyM_tAYElWvxpyzQB-FmMpYsh-1n8_ceb2AAeO6R5CKp_RwzwPx2hCGDqKZEqXpU_c_UtqvQVoVeGpDZ9e5vOt0m3DlwuBv6Or9SIcpxt8QG3E1tCQ8Vwk2jQbkk9x1VVSnsOkdTpMP6JFNcxXfJUDJ4sfls2z6U5SHUvybpA4fjN7OvvUaNuxHQQZxf8HxY3pjMPWlqSrEuMykqaXpKUeNxyNsobMB854vLo9YrC082ZLXhIk8Pqhh8Nb5PPB-dls4Aa9xaNNWnCDV0OCormTcjqNJPeuox1HcHH29EC4U_S6JSG81gtZK79cKv17UCWYrEOp8LHsYey0XvrFLFFfmyDimIgv2WEBWkbPLAwhrB36kPs7IhABdBJoa-0p0fFFS1O8smmaXfGzbgD3bwgZz1TaXtFMvf5Vtppbe8UPKI-roRQg4ICTHl9Buztr5DE5pjf-LB3hc0YSisA7AiI0F58scz7ynmAsYgovUsPjS2j3PpJ_p8rFy55eNrUMu9W1y8JH9wI7LG1Zu4oSywA/p.jpeg','https://previews.dropbox.com/p/thumb/ACUhXGcGZ-_d-nKghIVNtzIUFNbNcbOdkIT1yilpA3fGDIDTYXBUUUzwsY0qpolDIJOXt_cWhDNnLGJ4sPXpxR5dEy3LSrB2Wivri4dKPuMl4IXY-1M7qSU2SLk5KNPNHi3wHYPjPT3L0rkTi2M7qEGLwsYxu5wUFs-lV-_neuIzL0vKQfPs3GezrGS_JRJ5dhr40wYnHfhMG9_frjCvQnQnc8h6x__NfPvM-QLPf_EDvK_dVPgsDz3gzWftfkCVwH3zuhWzybni3KF1JZ0grBMPFUR6SiLp30CgkcdNvXI41LPpsn8DVzNahLqhiY9qtjc0NgmsAYogFEog3wyEPUob98hL0ruL6VMw6ctPQ4PfX3oCuBWnIIbg1eCDkkIFoBD0MPXzcMDmxBaZgHERRrFrvVKQY_SJame-ODFOdPpy3A/p.jpeg']
  const [picFour, setPicFour] = useState('https://previews.dropbox.com/p/thumb/ACUxuJ6J4HU1peJ-RTAO2jlYCids0wphBP3bhsSTmE-0BiVSlVYytOoUz6SOj7sOR9N62VtapCMRcKsu896oOfIgdxyM_tAYElWvxpyzQB-FmMpYsh-1n8_ceb2AAeO6R5CKp_RwzwPx2hCGDqKZEqXpU_c_UtqvQVoVeGpDZ9e5vOt0m3DlwuBv6Or9SIcpxt8QG3E1tCQ8Vwk2jQbkk9x1VVSnsOkdTpMP6JFNcxXfJUDJ4sfls2z6U5SHUvybpA4fjN7OvvUaNuxHQQZxf8HxY3pjMPWlqSrEuMykqaXpKUeNxyNsobMB854vLo9YrC082ZLXhIk8Pqhh8Nb5PPB-dls4Aa9xaNNWnCDV0OCormTcjqNJPeuox1HcHH29EC4U_S6JSG81gtZK79cKv17UCWYrEOp8LHsYey0XvrFLFFfmyDimIgv2WEBWkbPLAwhrB36kPs7IhABdBJoa-0p0fFFS1O8smmaXfGzbgD3bwgZz1TaXtFMvf5Vtppbe8UPKI-roRQg4ICTHl9Buztr5DE5pjf-LB3hc0YSisA7AiI0F58scz7ynmAsYgovUsPjS2j3PpJ_p8rFy55eNrUMu9W1y8JH9wI7LG1Zu4oSywA/p.jpeg')

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


  return (
    <div className='home'>
      <Navbar />
      <div className='title-div hidden'>
        <h1  onMouseEnter={textEnter} onMouseLeave={textLeave} className='firstName'>Brandon</h1>
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

      <div className='card-container hidden'>
        <div className='card'>
          <AnimatedPic src={picOne} key={picOne} alt="" />
          <h3 className='card-text'>Urban Tapestry</h3>
          <h4 className='card-subtitle'>Street Photography</h4>

        </div>

        <div className='card2'>
          <AnimatedPic src={picTwo} key={picTwo} alt="" />
          <h3 className='card-text'>Beauty in Decay</h3>
          <h4 className='card-subtitle'>Architectural Photography</h4>

        </div>

        <div className='card'>
        <AnimatedPic src={picThree} key={picThree} alt="" />
        <h3 className='card-text'>Face to Face</h3>
          <h4 className='card-subtitle'>Potrait Photography</h4>

        </div>

        <div className='card2'>
        <AnimatedPic src={picFour} key={picFour} alt="" />
          <h3 className='card-text'>The Golden Hour
          </h3>
          <h4 className='card-subtitle'>Sunset Photography</h4>
        </div>
      </div>
      <img className='shape3' src={shape3} alt="" />
      <div className='border-line1'></div>
      
      <div className='zoom-container'>
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
          <p onMouseEnter={navTextEnter} onMouseLeave={textLeave}>A passionate photographer that's currently doing Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
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
          <p className='hidden'>Lorem ipsum dolor sit.</p>
          </div>
          <button onMouseEnter={navTextEnter} onMouseLeave={textLeave} className='service-button'><ArrowRight /></button>
        </div>

        <div className='service'>
          <div className='service-text'>
          <h1 className='hidden'>Videography</h1>
          <p className='hidden'>Lorem ipsum dolor sit.</p>
          </div>
          <button onMouseEnter={navTextEnter} onMouseLeave={textLeave} className='service-button'><ArrowRight/></button>

        </div>

        <div className='service'>
          <div className='service-text'>
          <h1 className='hidden'>Film Editing</h1>
          <p className='hidden'>Lorem ipsum dolor sit.</p>
          </div>
          <button onMouseEnter={navTextEnter} onMouseLeave={textLeave} className='service-button'><ArrowRight /></button>

        </div>

        

      </div>

    </div>

  )
}

export default Home;