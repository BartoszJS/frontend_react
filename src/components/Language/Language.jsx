import React from "react";
import { images } from "../../constants";
import "./Language.scss";

const Language = () => {
  return (
    <div>
      <img className='eng' src={images.eng} alt='eng' />
    </div>
  );
};

export default Language;
