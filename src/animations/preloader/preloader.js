import React, { useEffect } from "react";
import { preLoaderAnim } from "./animation";
import "./preloader.css";
import { InfinitySpin } from 'react-loader-spinner'



const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span></span>
        <span><InfinitySpin
  visible={true}
  width="200"
  color="white"
  ariaLabel="infinity-spin-loading"></InfinitySpin></span>
        <span></span>
      </div>
    </div>
  );
};

export default PreLoader;