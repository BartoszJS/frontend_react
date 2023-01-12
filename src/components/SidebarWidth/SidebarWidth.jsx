import React, { useState, useEffect } from "react";
import "./SidebarWidth.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const SidebarWidth = () => {
  const [polish, setPolish] = useState(0);
  const [english, setEnglish] = useState(0);

  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='app__sidebar'
    >
      <div className='app__sidebar-me'>
        <div className='grid1fr'>
          <div className='app__sidebar-me-photoanddiv'>
            <img
              className='app__sidebar-me-photo'
              src={images.bartosz}
              alt='profile'
            ></img>
          </div>
          <div className='name'>Bartosz Płaza</div>
          <div className='description'>Frontend Developer</div>
        </div>
      </div>
      <div className='border1'></div>

      <div className='app__sidebar-languages'>
        <div className='app__sidebar-languages-polish'>
          <div className='circle-wrap'>
            <div className='circle'>
              <div className='mask full'>
                <div className='fill'></div>
              </div>
              <div className='mask half'>
                <div className='fill'></div>
              </div>
              <div className='inside-circle'>
                {" "}
                <CountUp duration={2} end={100} />
                {"%"}
              </div>
            </div>
          </div>
          <div>Polski</div>
        </div>
        <div className='app__sidebar-languages-english'>
          <div className='circle-wrap1'>
            <div className='circle1'>
              <div className='mask1 full1'>
                <div className='fill1'></div>
              </div>
              <div className='mask1 half1'>
                <div className='fill1'></div>
              </div>
              <div className='inside-circle1'>
                {" "}
                <CountUp duration={2} end={90} />
                {"%"}
              </div>
            </div>
          </div>
          <div>English</div>
        </div>
      </div>
      <div className='border1'></div>
      <div className='app__sidebar-programming'>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>React</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loading'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>HTML</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loading'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>CSS</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loading'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>NodeJS</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loading'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>PHP</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loading'></div>
        </div>
      </div>
    </motion.div>
  );
};

export default SidebarWidth;
