import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { AppWrap, MotionWrap } from "../../wrapper";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("Wszystkie");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Wszystkie") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div>
      <h2 className='head-text'>Moje portfolio</h2>
      <div className='app__work-filter'>
        {["React", "MongoDB", "Firebase", "Tailwind", "Wszystkie"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt='work.name'></img>

              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className='app__work-hover'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0.9, 0.9] }}
                    whileHover={{ scale: [0.9, 1] }}
                    transition={{ duration: 0.1 }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
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
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
                {console.log(work.tags)}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);





\\\









import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("Wsz");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState(["React", "Tailwind", "Firebase"]);
  const [filterWork, setFilterWork] = useState([
    "React",
    "Tailwind",
    "Firebase",
  ]);

  // useEffect(() => {
  //   const query = '*[_type == "works"]';

  //   client.fetch(query).then((data) => {
  //     setWorks(data);
  //     setFilterWork(data);
  //   });
  // }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    console.log(item);

    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "Wszystkie") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div>
      <h2 className='head-text'>Moje portfolio</h2>
      <div className='app__work-filter'>
        {["React", "MongoDB", "Firebase", "Tailwind", "Wszystkie"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
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
                <p className='p-text'>{works[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);












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
  const [isShownReact, setIsShownReact] = useState(true);
  const [isShownJS, setIsShownJS] = useState(true);
  const [isShownHTML, setIsShownHTML] = useState(true);
  const [isShownCSS, setIsShownCSS] = useState(true);
  const [isShownPHP, setIsShownPHP] = useState(true);

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
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
              onMouseEnter={() => setIsShownReact(true)}
              onMouseLeave={() => setIsShownReact(true)}
            >
              <img src={images.react} alt='imag1e' />
            </div>
            {isShownReact && (
              <motion.div
                initial={{ y: 0, x: 0, opacity: 1 }}
                animate={{ y: 110, x: -40, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='nextjs app__flex'
                style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
              >
                <img className='nextphoto' src={images.nextjs} alt='imag1e' />
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
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
              onMouseEnter={() => setIsShownJS(true)}
              onMouseLeave={() => setIsShownJS(true)}
            >
              <img src={images.js} alt='imag1e' />
            </div>
            {isShownJS && (
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 110, x: 30, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='nextjs app__flex'
                style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
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
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
              onMouseEnter={() => setIsShownHTML(true)}
              onMouseLeave={() => setIsShownHTML(true)}
            >
              <img src={images.html} alt='imag1e' />
            </div>
            {isShownHTML && (
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -60, x: 70, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className='nextjs app__flex'
                style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
              >
                <img src={images.php} alt='imag1e' />
              </motion.div>
            )}
          </motion.div>
          {/* <motion.div
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
          </motion.div> */}
          {/* <motion.div
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
          </motion.div> */}
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





.head-text2 {
  color: #fff;
  text-align: left;
  width: 100%;
  padding-left: 3%;
  padding-top: 2rem;
  font-weight: 600;
}

.app__skills {
  flex: 1;
  width: 100%;
  flex-direction: column;
  height: 600px;
}

.app__skills-container {
  width: 100%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
  }
}

.app__skills-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 95%;
  opacity: 50%;
}
.app__skills-list:hover {
  opacity: 100%;
}

.app__skills-item {
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  transition: all 0.3s ease-in-out;

  div {
    width: 120px;
    height: 120px;
    background-color: rgb(45, 45, 60);

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      box-shadow: 0 0 25px #fef4f5;
    }
  }

  p {
    font-weight: 500;
    margin-top: 0.5rem;
  }
  .react {
    z-index: 100;
    position: absolute;
  }
  .nextjs {
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 99;
  }
  .nextphoto {
    filter: invert(100%);
    -webkit-filter: invert(100%);
    -moz-filter: invert(100%);
  }

  .csshover {
    width: 120px;
    height: 120px;
    position: absolute;
    z-index: 99;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .cssdiv {
      width: 60px;
      height: 60px;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }

  // .nextjs {
  //   display: none;
  // }

  // .react:hover + .nextjs {
  //   transition: 0.2s;

  //   display: block;
  // }
}

.app__skills-exp {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
  }
}

.app__skills-exp-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 1rem 0;
}

.app__skills-exp-works {
  flex: 1;

  .app__skills-exp-work {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;
    cursor: pointer;

    h4 {
      font-weight: 500;
    }

    p {
      font-weight: 400;
      color: var(--gray-color);
      margin-top: 5px;
    }
  }
}

.app__skills-exp-year {
  margin-right: 3rem;

  p {
    font-weight: 800;
    color: var(--secondary-color);
  }

  @media screen and(max-width: 450px) {
    margin-right: 1rem;
  }
}

.skills-tooltip {
  max-width: 300px !important;
  background-color: var(--white-color) !important;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1) !important;
  border-radius: 5px !important;
  padding: 1rem !important;
  color: var(--gray-color) !important;
  text-align: center !important;
  line-height: 1.5 !important;
  opacity: 1 !important;

  @media screen and (min-width: 2000px) {
    font-size: 1.75rem !important;
    max-width: 500px !important;
    line-height: 2 !important;
  }
}



