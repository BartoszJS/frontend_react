import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { MdEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const About = () => {
  return (
    <>
      <h2 className='head-text3'>O mnie</h2>
      <div className='aboutme'>
        <div className='aboutme2'>
          <div className='aboutme-text'>
            <h3>Nazywam sie Bartosz Płaza</h3>
            <p></p>
            <p>
              Jestem inżynierem informatyki. Skończyłem studia na UTH w Radomiu.
              Przez cały tok studiów pobierałem stypendium naukowe za
              wyróniające wyniki w nauce
            </p>

            <p>
              Jestem pracowitym i chłonnym człowiekiem. Ucząc się wykonałem
              kilka kursów na Udemy, kurs Frontend Developera od strefy kursów i
              przeczytałem kilka książek o programowaniu stron internetowych.
            </p>
            <p>Gwarantuje 100% zaangażowania </p>
          </div>
        </div>
        <div className='aboutme1-about'>
          <h2 className='about-me-header'>Kontakt</h2>

          <div className='aboutme-cont'>
            <button className='aboutme-button-email'>
              <MdOutlineMarkEmailUnread />
            </button>
            <button className='aboutme-button-email-second'>
              bartosz290300@wp.pl
            </button>
          </div>
          <div className='aboutme-cont'>
            <button className='aboutme-button-email'>
              <HiOutlinePhone />
            </button>
            <button className='aboutme-button-email-second'>697-121-225</button>
          </div>
          <div className='aboutme-cont'>
            <button className='aboutme-button-cv'>POBIERZ CV</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
