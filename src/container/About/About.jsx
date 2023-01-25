import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { MdEmail } from "react-icons/md";
import { HiOutlinePhone, HiArrowCircleDown } from "react-icons/hi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { CgPushChevronDownO } from "react-icons/cg";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <>
      <div className='about'>
        <div className='aboutme'>
          <div className='aboutme2'>
            <div className='aboutme-text'>
              <div className='head-text5'>O mnie</div>
              <h4>Nazywam się Bartosz Płaza.</h4>
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
          <div className='aboutme1-about' ref={ref}>
            <div className='head-text5'>Kontakt</div>

            <div className='aboutme-cont'>
              <div className='aboutme-button-phone'>
                <div className='phone-icon'>
                  {" "}
                  <MdOutlineMarkEmailUnread />
                </div>
                bartosz290300@wp.pl
              </div>
            </div>
            <div className='aboutme-cont'>
              <div className='aboutme-button-phone'>
                <div className='phone-icon'>
                  {" "}
                  <HiOutlinePhone />
                </div>
                697-121-225
              </div>
            </div>
            <div className='aboutme-cont'>
              <div className='aboutme-button-phone'>
                <div className='phone-icon'>
                  {" "}
                  <CgPushChevronDownO />
                </div>
                Pobierz CV
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
