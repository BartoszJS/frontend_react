import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import "./SidebarNarrow.scss";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiPhp, SiCss3 } from "react-icons/si";
import { motion } from "framer-motion";

import CountUp from "react-countup";

const SidebarNarrow = () => {
  const [polish, setPolish] = useState(0);
  const [english, setEnglish] = useState(0);

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='app__sidebar-narrow'
    >
      <div className='app__sidebar-narrow-img'>
        <img
          src={images.profileclose}
          className='app__sidebar-narrow-img-img'
          alt='profile'
        ></img>
        <div className='text-language'>Bartosz</div>
        <div className='text-language'>Płaza</div>
      </div>
      <div className='border1'></div>
      <div className='app__sidebar-narrow-languages'>
        <div className='app__sidebar-languages-narrow-polish'>
          <div className='circle-wrap-narrow'>
            <div className='circle-narrow'>
              <div className='mask-narrow full-narrow'>
                <div className='fill-narrow'></div>
              </div>
              <div className='mask-narrow half-narrow'>
                <div className='fill-narrow'></div>
              </div>
              <div className='inside-circle-narrow'>
                {" "}
                <CountUp duration={2} end={100} />
                {"%"}
              </div>
            </div>
          </div>
          <div className='text-language'>Polski</div>
        </div>
        <div className='app__sidebar-narrow-languages-english'>
          <div className='circle-wrap1-narrow'>
            <div className='circle1-narrow'>
              <div className='mask1-narrow full1-narrow'>
                <div className='fill1-narrow'></div>
              </div>
              <div className='mask1-narrow half1-narrow'>
                <div className='fill1-narrow'></div>
              </div>
              <div className='inside-circle1-narrow'>
                {" "}
                <CountUp duration={2} end={90} />
                {"%"}
              </div>
            </div>
          </div>
          <div className='text-language'>Angielski</div>
        </div>
      </div>
      <div className='border1'></div>
      <div className='app__sidebar-narrow-icons'>
        <div className='app__sidebar-narrow-single-icon'>
          <FaReact />
        </div>
        <div className='app__sidebar-narrow-single-icon'>
          <AiFillHtml5 />
        </div>
        <div className='app__sidebar-narrow-single-icon'>
          <SiJavascript />
        </div>
        <div className='app__sidebar-narrow-single-icon'>
          <SiPhp />
        </div>
        <div className='app__sidebar-narrow-single-icon'>
          <SiCss3 />
        </div>
      </div>
    </motion.div>
  );
};

export default SidebarNarrow;
