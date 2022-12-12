import React from "react";
import "./Header.scss";

import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

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
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hej, jestem</p>
              <h1 className='head-text'>Bartosz</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer </p>
            <p className='p-text'> Coś tam jeszcze</p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt='profile_bg' />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        <div className='circle-cmp0 '>
          <div className='circle1'>
            <img src={images.sass} alt='circle' />
          </div>
          <div className='circle2'>
            <img src={images.tailwind} alt='circle' />
          </div>
        </div>
        <div className='circle-cmp1 app__flex'>
          <img src={images.html} alt='circle' />
        </div>

        <div className='circle-cmp2'>
          <div className='nextjs'>
            <img src={images.nextjs} alt='circle' />
          </div>
        </div>
        <div className='circle-cmp3 app__flex'>
          <img src={images.node} alt='circle' />
        </div>
        <div className='circle-cmp4 app__flex'>
          <img src={images.php} alt='circle' />
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
