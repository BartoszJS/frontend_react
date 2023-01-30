import React, { useState, useEffect } from "react";
import "./SidebarWidth.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiPhp,
  SiCss3,
  SiTypescript,
  SiHtml5,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

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
          <div className='description'>Frontend Developerr</div>
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
          <div>Angielski</div>
        </div>
      </div>
      <div className='border1'></div>
      <div className='app__sidebar-programming'>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>React</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loadingreact'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>JavaScript</div>
            <div className='app__sidebar-data-info-right'>85%</div>
          </div>
          <div className='Loadinghtml'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>HTML</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loadingcss'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>CSS</div>
            <div className='app__sidebar-data-info-right'>90%</div>
          </div>
          <div className='Loadingjavascript'></div>
        </div>
        <div className='container'>
          <div className='app__sidebar-data-info'>
            <div className='app__sidebar-data-info-left'>Typescript</div>
            <div className='app__sidebar-data-info-right'>70%</div>
          </div>
          <div className='Loadinggit'></div>
        </div>
        {/* <div className='app__sidebar-width-icons'>
          <div className='app__sidebar-width-single-icon-top'>
            <FaReact />
          </div>
          <div className='app__sidebar-width-single-icon-second'>
            <div className='icon-css'>
              <SiCss3 />
            </div>
            <div className='icon-js'>
              {" "}
              <SiJavascript />
            </div>
            <div className='icon-html'>
              {" "}
              <SiHtml5 />
            </div>
          </div>
          <div className='app__sidebar-width-single-icon-third'>
            <div className='icon-php'>
              {" "}
              <SiPhp />
            </div>
            <div className='icon-git'>
              {" "}
              <DiGit />
            </div>
            <div className='app__sidebar-width-single-icon-third-ts'>
              {" "}
              <SiTypescript />
            </div>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default SidebarWidth;
