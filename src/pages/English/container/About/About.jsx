import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionWrap } from "../../../../wrapper";
import { images } from "../../../../constants";
import { MdEmail } from "react-icons/md";
import { HiOutlinePhone, HiArrowCircleDown } from "react-icons/hi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { CgPushChevronDownO } from "react-icons/cg";

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='border-container-contact'>
          <div className='border-timeline'></div>
          <p className='header-contact'>About me</p>
        </div>
        <div className='aboutme'>
          <div className='aboutme2'>
            <div className='aboutme-text'>
              <h4>My name is Bartosz Płaza.</h4>
              <p></p>
              <p>
                Ukończyłem studia o kierunku
                <span className='yellow'> informatyka</span> na UTH w Radomiu.
                Przez cały tok studiów pobierałem
                <span className='yellow'> stypendium naukowe</span> za
                wyróżniające wyniki w nauce
              </p>
              <p>
                Ukończyłem studia o kierunku
                <span className='yellow'> informatyka</span> na UTH w Radomiu.
                Przez cały tok studiów pobierałem
                <span className='yellow'> stypendium naukowe</span> za
                wyróżniające wyniki w nauce
              </p>
              <p>
                Ukończyłem studia o kierunku
                <span className='yellow'> informatyka</span> na UTH w Radomiu.
                Przez cały tok studiów pobierałem
                <span className='yellow'> stypendium naukowe</span> za
                wyróżniające wyniki w nauce
              </p>

              {/* <p>
                Jestem pracowitym i chłonnym człowiekiem. Ucząc się wykonałem
                kilka kursów na Udemy, kurs Frontend Developera od strefy kursów
                i przeczytałem kilka książek o programowaniu stron
                internetowych.
              </p> */}
              <p>Gwarantuje 100% zaangażowania </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
