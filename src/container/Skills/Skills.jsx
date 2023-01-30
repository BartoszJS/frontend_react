import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";
import { MotionWrap, AppWrap } from "../../wrapper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

const Skills = () => {
  const [experience, setExperience] = useState([]);

  return (
    <motion.div
      initial={{ y: 500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='skills_cont'
    >
      <h2 className='head-text2'>Umiejętności</h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          300: {
            slidesPerView: 1.5,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          grabCursor: true,
          centeredSlides: true,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        loop={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0 }}
            className='app__skills-item-slider'
          >
            <p className='p-text'>React</p>
            <div
              className='react-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img src={images.react} alt='imag1e' />
            </div>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{ y: 50, x: -40, opacity: 1 }}
              transition={{ duration: 0 }}
              className='nextjs-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img
                className='nextphoto-slider'
                src={images.nextjs}
                alt='imag1e'
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0 }}
            className='app__skills-item-slider'
          >
            <p className='p-text'>JavaScript</p>
            <div
              className='js-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img src={images.js} alt='imag1e' />
            </div>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{ y: 50, x: -25, opacity: 1 }}
              transition={{ duration: 0 }}
              className='nextjs-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img
                className='jsphoto-slider'
                src={images.nodejs}
                alt='imag1e'
              />
              <img
                className='reactphoto-slider'
                src={images.react}
                alt='imag1e'
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0 }}
            className='app__skills-item-slider'
          >
            <p className='p-text'>GIT</p>
            <div
              className='html-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img src={images.git} alt='imag1e' />
            </div>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{ y: 70, x: -40, opacity: 1 }}
              transition={{ duration: 0 }}
              className='nextjs-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img className='htmlphoto-slider' src={images.css} alt='imag1e' />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0 }}
            className='app__skills-item-slider'
          >
            <p className='p-text'>HTML</p>
            <div
              className='html-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img src={images.html} alt='imag1e' />
            </div>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{ y: 70, x: -40, opacity: 1 }}
              transition={{ duration: 0 }}
              className='nextjs-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img className='htmlphoto-slider' src={images.css} alt='imag1e' />
            </motion.div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide>
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0 }}
            className='app__skills-item-slider'
          >
            <p className='p-text'>PHP</p>
            <div
              className='react-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img src={images.php} alt='imag1e' />
            </div>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{ y: 40, x: 40, opacity: 1 }}
              transition={{ duration: 0 }}
              className='nextjs-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img
                className='wordpressphoto-slider'
                src={images.wordpress}
                alt='imag1e'
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0 }}
            className='app__skills-item-slider'
          >
            <p className='p-text'>Typescript</p>
            <div
              className='html-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img src={images.typescript} alt='imag1e' />
            </div>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{ y: 70, x: -40, opacity: 1 }}
              transition={{ duration: 0 }}
              className='nextjs-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img className='htmlphoto-slider' src={images.css} alt='imag1e' />
            </motion.div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            whileInView={{ opacity: [1, 1] }}
            transition={{ duration: 0 }}
            className='app__skills-item-slider'
          >
            <p className='p-text'>CSS</p>
            <div
              className='react-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img src={images.css} alt='imag1e' />
            </div>
            <motion.div
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{ y: 60, x: 0, opacity: 1 }}
              transition={{ duration: 0 }}
              className='nextjs-slider app__flex'
              style={{ backgroundColor: "rgba(45, 45, 60,0)" }}
            >
              <img
                className='cssphoto-slider'
                src={images.tailwind}
                alt='imag1e'
                style={{ transform: ` translateY(-15px)` }}
              />

              <img
                className='cssphoto-slider'
                src={images.styledcomponents}
                alt='imag1e'
                style={{ transform: ` translateY(0px)` }}
              />
              <img
                className='cssphoto-slider'
                src={images.sass}
                alt='imag1e'
                style={{ transform: ` translateY(-15px)` }}
              />
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Skills;
