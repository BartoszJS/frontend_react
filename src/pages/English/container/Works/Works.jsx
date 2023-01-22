import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { urlFor, client } from "../../../../client";
import { AppWrap, MotionWrap } from "../../../../wrapper";
import { images } from "../../../../constants";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Works = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div className='app__works_container'>
      <h2 className='head-text2'>My projects</h2>
      <div className='app__singlework-left'>
        <div className='app__singlework-text-smalldevices'>
          <div className='app__singlework-text-title'>
            <h2>01. Znajdź zwierzaka (Find an animal)</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <span className='single-lang'>React</span>
            <span className='single-lang'>MongoDB</span>
            <span className='single-lang'>NodeJS</span>
            <span className='single-lang'>React</span>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basic10'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basic10' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillGithub />
                  </div>
                </motion.div>
              </a>
            </div>

            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basichomelyeye'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basichomelyeye' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillEye />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1] }}
          transition={{ duration: 0.2 }}
          className='app__singlework-img'
        >
          <a
            href='https://homely-bartoszjs.vercel.app/'
            target='_blank'
            rel='noreferrer'
            id='props-basicznajdz'
            data-tooltip-content='Przejdź na stronę!'
            data-tooltip-place={`${window.innerWidth > 992 ? "right" : "top"}`}
          >
            <Tooltip anchorId='props-basicznajdz' />

            <div className='app__singlework-img-dots'>
              <div className='app__singlework-img-dots-red'></div>
              <div className='app__singlework-img-dots-yellow'></div>
              <div className='app__singlework-img-dots-green'></div>
            </div>
            <img
              className='app__singlework-img-img'
              src={images.znajdz}
              alt='znajdz'
            ></img>
          </a>
        </motion.div>

        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>01. Znajdź zwierzaka</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <span className='single-lang'>React</span>
            <span className='single-lang'>MongoDB</span>
            <span className='single-lang'>NodeJS</span>
            <span className='single-lang'>React</span>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basic1222'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basic1222' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillGithub />
                  </div>
                </motion.div>
              </a>
            </div>

            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basic1libeye'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basic1libeye' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillEye />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        <div className='app__singlework-desc'>
          <div>
            <img
              className='app__singlework-desc-icon'
              src={images.react}
              alt='react'
            />
          </div>
          <div className='app__singlework-desc-text'>
            Projekt strony internetowej pomagającej w znajdowaniu zaginionych
            zwierząt.
          </div>
        </div>
      </div>
      <div className='app__singlework-right'>
        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>02. HOMELY</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <span className='single-lang'>React</span>
            <span className='single-lang'>MongoDB</span>
            <span className='single-lang'>NodeJS</span>
            <span className='single-lang'>React</span>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basic111'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basic111' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillGithub />
                  </div>
                </motion.div>
              </a>
            </div>

            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basicsad'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basicsad' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillEye />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1] }}
          transition={{ duration: 0.2 }}
          className='app__singlework-img'
        >
          <a
            href='https://homely-bartoszjs.vercel.app/'
            target='_blank'
            rel='noreferrer'
            id='props-basichomely'
            data-tooltip-content='Przejdź na stronę!'
            data-tooltip-place={`${window.innerWidth > 992 ? "left" : "top"}`}
          >
            <Tooltip anchorId='props-basichomely' />

            <div className='app__singlework-img-dots'>
              <div className='app__singlework-img-dots-red'></div>
              <div className='app__singlework-img-dots-yellow'></div>
              <div className='app__singlework-img-dots-green'></div>
            </div>
            <img
              className='app__singlework-img-img'
              src={images.homely}
              alt='znajdz'
            ></img>
          </a>
        </motion.div>
        <div className='app__singlework-desc'>
          <div>
            <img
              className='app__singlework-desc-icon'
              src={images.react}
              alt='react'
            />
          </div>
          <div className='app__singlework-desc-text'>
            Projekt portalu ogłoszeniowego z nieruchomościami.
          </div>
        </div>
      </div>
      <div className='app__singlework-left'>
        <div className='app__singlework-text-smalldevices'>
          <div className='app__singlework-text-title'>
            <h2>03. Biblioteka</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <span className='single-lang'>PHP</span>
            <span className='single-lang'>MySQL</span>
            <span className='single-lang'>HTML</span>
            <span className='single-lang'>CSS</span>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basic122'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basic122' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillGithub />
                  </div>
                </motion.div>
              </a>
            </div>

            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basiclibeye'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basiclibeye' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillEye />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1] }}
          transition={{ duration: 0.2 }}
          className='app__singlework-img'
        >
          <a
            href='https://homely-bartoszjs.vercel.app/'
            target='_blank'
            rel='noreferrer'
            id='props-basiclibrary'
            data-tooltip-content='Przejdź na stronę!'
            data-tooltip-place={`${window.innerWidth > 992 ? "right" : "top"}`}
          >
            <Tooltip anchorId='props-basiclibrary' />

            <div className='app__singlework-img-dots'>
              <div className='app__singlework-img-dots-red'></div>
              <div className='app__singlework-img-dots-yellow'></div>
              <div className='app__singlework-img-dots-green'></div>
            </div>
            <img
              className='app__singlework-img-img'
              src={images.library}
              alt='znajdz'
            ></img>
          </a>
        </motion.div>

        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>03. Biblioteka</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <span className='single-lang'>PHP</span>
            <span className='single-lang'>MySQL</span>
            <span className='single-lang'>HTML</span>
            <span className='single-lang'>CSS</span>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basic1232'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basic1232' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillGithub />
                  </div>
                </motion.div>
              </a>
            </div>

            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basiclibeye1'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basiclibeye1' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillEye />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        <div className='app__singlework-desc'>
          <div>
            <img
              className='app__singlework-desc-icon'
              src={images.php}
              alt='react'
            />
          </div>
          <div className='app__singlework-desc-text'>
            {" "}
            Projekt strony internetowej biblioteki.
          </div>
        </div>
      </div>
      <div className='app__singlework-right'>
        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>04. Hol-car-części</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <span className='single-lang'>Wordpress</span>
            <span className='single-lang'>PHP</span>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basic13'
                data-tooltip-content='Zobacz kod!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basic13' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillGithub />
                  </div>
                </motion.div>
              </a>
            </div>

            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://homely-bartoszjs.vercel.app/'
                target='_blank'
                rel='noreferrer'
                id='props-basicholeye'
                data-tooltip-content='Przejdź do strony!'
                data-tooltip-place='bottom'
              >
                <Tooltip anchorId='props-basicholeye' />
                <motion.div
                  whileInView={{ scale: [1, 1] }}
                  whileHover={{ scale: [1, 1.1] }}
                  transition={{ duration: 0.1 }}
                  className='anchors app__flex'
                >
                  <div className='icons-icon-inside'>
                    {" "}
                    <AiFillEye />
                  </div>
                </motion.div>
              </a>
            </div>
          </div>
        </div>
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1] }}
          transition={{ duration: 0.2 }}
          className='app__singlework-img'
        >
          <a
            href='https://homely-bartoszjs.vercel.app/'
            target='_blank'
            rel='noreferrer'
            id='props-basicholcarczesci'
            data-tooltip-content='Przejdź na stronę!'
            data-tooltip-place={`${window.innerWidth > 992 ? "left" : "top"}`}
          >
            <Tooltip anchorId='props-basicholcarczesci' />

            <div className='app__singlework-img-dots'>
              <div className='app__singlework-img-dots-red'></div>
              <div className='app__singlework-img-dots-yellow'></div>
              <div className='app__singlework-img-dots-green'></div>
            </div>
            <img
              className='app__singlework-img-img'
              src={images.holcarczesci}
              alt='znajdz'
            ></img>
          </a>
        </motion.div>
        <div className='app__singlework-desc'>
          <div>
            <img
              className='app__singlework-desc-icon'
              src={images.wordpress}
              alt='react'
            />
          </div>
          <div className='app__singlework-desc-text'>
            Prawdziwa wizytówka firmy Hol-car-części.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
