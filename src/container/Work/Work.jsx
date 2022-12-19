import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div>
      <h2 className='head-text'>Moje portfolio</h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        <div className='app__work-item app__flex'>
          <div className='app__work-img app__flex'>
            <img src={images.homely} alt='work.name'></img>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className='app__work-hover'
            >
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
              >
                <motion.div
                  whileInView={{ scale: [0.9, 0.9] }}
                  whileHover={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.1 }}
                  className='app__flex'
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a
                href='https://github.com/BartoszJS/booking_2.0'
                target='_blank'
                rel='noreferrer'
              >
                <motion.div
                  whileInView={{ scale: [0.9, 0.9] }}
                  whileHover={{ scale: [0.9, 1] }}
                  transition={{ duration: 0.1 }}
                  className='app__flex'
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>Homely</h4>
            <p className='p-text' style={{ marginTop: 10 }}>
              Opis opis opis
            </p>
            <div className='app__work-tag app__flex'>
              <img className='icon' src={images.react} alt='sd'></img>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
