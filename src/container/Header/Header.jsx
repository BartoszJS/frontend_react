import React from "react";
import "./Header.scss";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrapHome } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='app__header'
    >
      <div className='app__header_content'>
        <div className='app__header_content-img'>
          <div className='app__header_content-img-text'>
            <h1>Bartosz Płaza</h1>
            <p className='pflex'>
              <span className='white'>{"<"}</span>
              <span className='yellow'>Portfolio</span>
              <span className='slash'>{"/"}</span>
              <span className='white'>{">"}</span>
            </p>
            <button className='button'>MOJE PROJEKTY</button>
          </div>
          <div className='app__header_content-img-photo'>
            <img className='photo' src={images.profile} alt='profile' />
          </div>
        </div>
        <div className='app__header-experience'>
          <div className='app__header-experience-single'>
            <span className='yellow'>10 </span>
            <span className='white'> Certyfikatów</span>
          </div>
          <div className='app__header-experience-single'>
            <span className='yellow'>17 </span>
            <span className='white'>Kurs</span>
          </div>
          <div className='app__header-experience-single'>
            <span className='yellow'>10 </span>
            <span className='white'>Projektów</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
