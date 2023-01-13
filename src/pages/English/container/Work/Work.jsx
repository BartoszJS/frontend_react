import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../../../client";
import { AppWrap, MotionWrap } from "../../../../wrapper";
import { images } from "../../../../constants";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div className='app__work_container'>
      <h2 className='head-text2'>Moje projekty</h2>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{ duration: 0.1 }}
          className='app__work-item app__flex'
        >
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
                id='attributes-basic'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='left'
              >
                <Tooltip
                  className='tooltipHomely'
                  anchorId='attributes-basic'
                />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='attributes-basic1'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='left'
              >
                <Tooltip
                  className='tooltipHomely'
                  anchorId='attributes-basic1'
                />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <p className='bold-text' style={{ marginTop: 10 }}>
              Homely <br />{" "}
              <span className='normal-text'>
                Projekt portalu z nieruchomościami
              </span>
            </p>
            <p className='p-text' style={{ marginTop: 5 }}>
              React Tailwind Firebase
            </p>
            <div className='app__work-tag app__flex'>
              <img className='icon' src={images.react} alt='sd'></img>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{ duration: 0.1 }}
          className='app__work-item app__flex'
        >
          <div className='app__work-img app__flex'>
            <img src={images.znajdz} alt='work.name'></img>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className='app__work-hover-znajdz'
            >
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='attributes-basic2'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='left'
              >
                <Tooltip
                  className='tooltipHomely'
                  anchorId='attributes-basic2'
                />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors-znajdz app__flex'
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='attributes-basic3'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='left'
              >
                <Tooltip
                  className='tooltipHomely'
                  anchorId='attributes-basic3'
                />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors-znajdz app__flex'
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <p className='bold-text' style={{ marginTop: 10 }}>
              Znajdź zwierzaka <br />{" "}
              <span className='normal-text'>
                Projekt strony internetowej pomagającej <br />w znalezieniu
                zwierząt
              </span>
            </p>
            <p className='p-text' style={{ marginTop: 5 }}>
              React NodeJS MongoDB
            </p>
            <div className='app__work-tag app__flex'>
              <img className='icon' src={images.react} alt='sd'></img>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{ duration: 0.1 }}
          className='app__work-item app__flex'
        >
          <div className='app__work-img app__flex'>
            <img src={images.holcarczesci} alt='work.name'></img>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className='app__work-hover-hol'
            >
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='attributes-basic4'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='left'
              >
                <Tooltip
                  className='tooltipHomely'
                  anchorId='attributes-basic4'
                />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors-hol app__flex'
                >
                  <AiFillEye />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <p className='bold-text' style={{ marginTop: 10 }}>
              Hol-car-części <br />{" "}
              <span className='normal-text'>Wizytówka firmy</span>
            </p>
            <p className='p-text' style={{ marginTop: 5 }}>
              PHP Wordpress
            </p>
            <div className='app__work-tag app__flex'>
              <img className='icon' src={images.wordpress} alt='sd'></img>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1.1] }}
          transition={{ duration: 0.1 }}
          className='app__work-item app__flex'
        >
          <div className='app__work-img app__flex'>
            <img src={images.library} alt='work.name'></img>

            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className='app__work-hover-library'
            >
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='attributes-basic5'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='left'
              >
                <Tooltip
                  className='tooltipHomely'
                  anchorId='attributes-basic5'
                />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors-library app__flex'
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='attributes-basic6'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='left'
              >
                <Tooltip
                  className='tooltipHomely'
                  anchorId='attributes-basic6'
                />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors-library app__flex'
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <p className='bold-text' style={{ marginTop: 10 }}>
              Biblioteka <br />{" "}
              <span className='normal-text'>
                Projekt internetowej biblioteki
              </span>
            </p>
            <p className='p-text' style={{ marginTop: 5 }}>
              PHP MySQL
            </p>

            <div className='app__work-tag app__flex'>
              <img className='icon' src={images.php} alt='sd'></img>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MotionWrap(Work, "app__works");
