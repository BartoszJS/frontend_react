import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionWrap } from "../../../../wrapper";
import { images } from "../../../../constants";

const About = () => {
  return (
    <>
      <h2 className='head-text3'>About me</h2>
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
      </div>
    </>
  );
};

export default About;
