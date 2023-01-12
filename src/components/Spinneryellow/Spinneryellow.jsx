import React from "react";
import { images } from "../../constants";
import "./Spinneryellow.scss";

const Spinneryellow = () => {
  return (
    <div className='spinner'>
      <img src={images.spinneryellow} alt='spinner' className='spinner-img' />
    </div>
  );
};

export default Spinneryellow;
