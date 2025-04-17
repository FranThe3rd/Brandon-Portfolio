import React, { useRef } from 'react'
import './photography.css'

import PhotoAlbum from "react-photo-album"; 



import photo1 from '../../assets/everything/DJI_0040.jpg'
import photo2 from '../../assets/everything/DJI_0051 copy.jpg'
import photo3 from '../../assets/everything/DJI_0087 copy.jpg'
import photo4 from '../../assets/everything/DSC00655 copy.jpg'
import photo5 from '../../assets/everything/DSC01153 copy.jpg'
import photo6 from '../../assets/everything/DSC01187 copy.jpg'
import photo7 from '../../assets/everything/DSC01204-2.jpg'
import photo8 from '../../assets/everything/DSC01213 copy.jpg'
import photo9 from '../../assets/everything/DSC01541.jpg'
import photo10 from '../../assets/everything/DSC01554.jpg'
import photo11 from '../../assets/everything/DSC01565.jpg'
import photo12 from '../../assets/everything/DSC01831-2.jpg'
import photo13 from '../../assets/everything/DSC01923.jpg'
import photo14 from '../../assets/everything/DSC02044.jpg'
import photo15 from '../../assets/everything/DSC02203-2.jpg'
import photo16 from '../../assets/everything/IMG_8178-3.jpg'
import photo17 from '../../assets/everything/IMG_9992 copy.jpg'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CursorContext } from '../../components/cursor/CursorContext';








const Phorography = () => {


   const photos = [
       { src: photo2, width: 3024, height: 4032 },
       { src: photo3, width: 4032, height: 3024 },
       { src: photo4, width: 3376, height: 6000 },
       { src: photo5, width: 6000, height: 3376 },
       { src: photo6, width: 3376, height: 6000 },
       { src: photo7, width: 3376, height: 6000 },
       { src: photo8, width: 3812, height: 5718 },
       { src: photo9, width: 4000, height: 6000 },
       { src: photo10, width: 4000, height: 6000 },
       { src: photo1, width: 4032, height: 3024 },


       { src: photo6, width: 3376, height: 6000 },
       { src: photo11, width: 4000, height: 6000 },
       { src: photo12, width: 4000, height: 6000 },
       { src: photo13, width: 4000, height: 6000 },
       { src: photo14, width: 1365, height: 2048 },
       { src: photo15, width: 3024, height: 4032 },
       { src: photo16, width: 1365, height: 2048 },
       { src: photo17, width: 900, height: 1600 }
   ];


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
  






   return (
       <div className='photography-page'>




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
           <motion.div
               initial={{ opacity: 0, y: -50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="photography-title">
               <h1>Photography</h1>
           </motion.div>
           <motion.div
               className='photo-gallery'
               initial={{ opacity: 0, }}
               animate={{ opacity: 1, }}
               transition={{ duration: 2, ease: "easeOut", delay: 1 }}>

        <PhotoAlbum layout="columns" photos={photos} />





           </motion.div>


       </div>
   )
}


export default Phorography
