import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";
import { MotionWrap, AppWrap } from "../../wrapper";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isShownReact, setIsShownReact] = useState(false);
  const [isShownJS, setIsShownJS] = useState(false);
  const [isShownHTML, setIsShownHTML] = useState(false);
  const [isShownCSS, setIsShownCSS] = useState(false);
  const [isShownPHP, setIsShownPHP] = useState(false);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text2'>Umiejętności</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item'
          >
            <p className='p-text'>React</p>
            <div
              className='react app__flex'
              style={{ backgroundColor: "rgb(45, 45, 60)" }}
              onMouseEnter={() => setIsShownReact(true)}
              onMouseLeave={() => setIsShownReact(false)}
            >
              <img src={images.react} alt='imag1e' />
            </div>
            {isShownReact && (
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 120, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='nextjs app__flex'
                style={{ backgroundColor: "rgb(45, 45, 60)" }}
              >
                <img src={images.nextjs} alt='imag1e' />
              </motion.div>
            )}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item'
          >
            <p className='p-text'>JavaScript</p>
            <div
              className='react app__flex'
              style={{ backgroundColor: "rgb(45, 45, 60)" }}
              onMouseEnter={() => setIsShownJS(true)}
              onMouseLeave={() => setIsShownJS(false)}
            >
              <img src={images.js} alt='imag1e' />
            </div>
            {isShownJS && (
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 120, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='nextjs app__flex'
                style={{ backgroundColor: "rgb(45, 45, 60)" }}
              >
                <img src={images.nodejs} alt='imag1e' />
              </motion.div>
            )}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item'
          >
            <p className='p-text'>HTML</p>
            <div
              className='react app__flex'
              style={{ backgroundColor: "rgb(45, 45, 60)" }}
              onMouseEnter={() => setIsShownHTML(true)}
              onMouseLeave={() => setIsShownHTML(false)}
            >
              <img src={images.html} alt='imag1e' />
            </div>
            {isShownHTML && (
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 120, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='nextjs app__flex'
                style={{ backgroundColor: "rgb(45, 45, 60)" }}
              >
                <img src='' alt='imag1e' />
              </motion.div>
            )}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item'
          >
            <p className='p-text'>CSS</p>
            <div
              className='react app__flex'
              style={{ backgroundColor: "rgb(45, 45, 60)" }}
              onMouseEnter={() => setIsShownCSS(true)}
              onMouseLeave={() => setIsShownCSS(false)}
            >
              <img src={images.css} alt='imag1e' />
            </div>
            {isShownCSS && (
              <div className='csshover app__flex'>
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 90, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className='cssdiv app__flex'
                  style={{ backgroundColor: "rgb(45, 45, 60)" }}
                >
                  <img src={images.tailwind} alt='imag1e' />
                </motion.div>
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: 90, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='cssdiv app__flex'
                  style={{ backgroundColor: "rgb(45, 45, 60)" }}
                >
                  <img src={images.sass} alt='imag1e' />
                </motion.div>
              </div>
            )}
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item'
          >
            <p className='p-text'>PHP</p>
            <div
              className='react app__flex'
              style={{ backgroundColor: "rgb(45, 45, 60)" }}
              onMouseEnter={() => setIsShownPHP(true)}
              onMouseLeave={() => setIsShownPHP(false)}
            >
              <img src={images.php} alt='imag1e' />
            </div>
            {isShownPHP && (
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 120, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='nextjs app__flex'
                style={{ backgroundColor: "rgb(45, 45, 60)" }}
              >
                <img src={images.wordpress} alt='imag1e' />
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        <div className='app__skills-exp'>
          {experience.map((experience) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MotionWrap(Skills, "app__skills");
