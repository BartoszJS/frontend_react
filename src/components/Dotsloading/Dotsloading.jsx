import React from "react";
import { images } from "../../constants";
import "./Dotsloading.scss";

const Dotsloading = () => {
  return (
    <div className='loadingdots'>
      <img src={images.dotsblack} alt='spinnerr' className='loadingdots-img' />
    </div>
  );
};

export default Dotsloading;
