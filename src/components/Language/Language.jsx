import React from "react";
import { images } from "../../constants";
import "./Language.scss";

const Language = () => {
  return (
    <div>
      <div className='eng1'>ENG</div>
      <img className='eng2' src={images.eng} alt='eng' />
    </div>
  );
};

export default Language;
