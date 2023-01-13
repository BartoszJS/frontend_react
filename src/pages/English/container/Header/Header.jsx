import React from "react";

import { motion } from "framer-motion";
import { MotionWrap } from "../../../../wrapper";
import { images } from "../../../../constants";

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
            <h1 className='sas1234'>Bartosz Płaza</h1>
            <p className='textaligincenter'>
              <span className='white'>{"<"}</span>
              <span className='yellow'>Portfolio</span>
              <span className='white'>{">"}</span>
            </p>
            <button className='button'>MY PROJECTS</button>
          </div>
          <div className='app__header_content-img-photo'>
            <img className='photo' src={images.me1} alt='profile' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
