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

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='border-container-contact'>
          <div className='border-timeline'></div>
          <p className='header-contact'>O mnie</p>
        </div>
        <div className='aboutme'>
          <div className='aboutme2'>
            <div className='aboutme-text'>
              <h4>Nazywam się Bartosz Płaza.</h4>
              <p></p>
              <p>
                Ukończyłem studia o kierunku
                <span className='yellow'> informatyka</span> na UTH w Radomiu.
                Przez cały przebieg studiów pobierałem
                <span className='yellow'> stypendium naukowe</span> za
                wyróżniające wyniki w nauce. Studiując rozwinąłem wszechstronną
                wiedzę informatyczną.
              </p>
              <p>
                Umiejętność programowania stron internetowych rozwijam od 2020,
                tworząc różne <span className='yellow'> projekty</span>. Podczas
                nauki wykonałem wiele kursów na Udemy i YT oraz korzystałem z
                różnych źródeł, takich jak, dokumentacje, książki o
                programowaniu lub stackoverflow {":)"}.
              </p>
              <p>
                Odbyłem praktyki zawodowe w firmie MRSolutions, która zajmuje
                się tworzeniem stron internetowych. Samodzielnie stworzyłem
                landing page{" "}
                <span>
                  <a
                    href='https://szamborambo.pl/szamba-z-wykopem/'
                    target='_blank'
                    rel='noreferrer'
                    className='yellow-link'
                  >
                    szamborambo.pl/szamba-z-wykopem
                  </a>
                </span>
                , oraz pomogłem przy stworzeniu strony{" "}
                <span>
                  <a
                    href='https://betonpref.pl/'
                    target='_blank'
                    rel='noreferrer'
                    className='yellow-link'
                  >
                    betonpref.pl
                  </a>
                </span>
                .
              </p>
              <p className='programming-methods'>
                Poznane metodyki: <span className='yellow-method'>React</span>{" "}
                <span className='yellow-method'>JavaScript</span>{" "}
                <span className='yellow-method'>HTML</span>{" "}
                <span className='yellow-method'>CSS</span>{" "}
                <span className='yellow-method'>TypeScript</span>{" "}
                <span className='yellow-method'>Git</span>{" "}
                <span className='yellow-method'>NodeJS</span>{" "}
                <span className='yellow-method'>PHP</span>
              </p>
              <p>Gwarantuje 100% zaangażowania. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
