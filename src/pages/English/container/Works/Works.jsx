import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { images } from "../../../../constants";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { forwardRef } from "react";

const Works = forwardRef((props, ref) => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div className='app__works_container' ref={ref}>
      <div className='border-container'>
        <div className='border-timeline'></div>
        <p className='header-courses'>My projects</p>
      </div>
      <div className='app__singlework-left'>
        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>01. Become a programmer</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <div className='single-lang'>React</div>
            <div className='single-lang'>NextJS</div>
            <div className='single-lang'>Typescript</div>
            <div className='single-lang'>Firebase</div>
            <div className='single-lang'>Sanity</div>
            <div className='single-lang'>Stripe</div>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://github.com/BartoszJS/become-a-programmer'
                target='_blank'
                rel='noreferrer'
                id='props-basicbapp'
                data-tooltip-content='Source code!'
                data-tooltip-place='right'
              >
                <Tooltip anchorId='props-basicbapp' />
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
                href='https://become-a-programmer.vercel.app'
                target='_blank'
                rel='noreferrer'
                id='props-basic1bap'
                data-tooltip-content='Go to website!'
                data-tooltip-place='right'
              >
                <Tooltip anchorId='props-basic1bap' />
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
            href='https://become-a-programmer.vercel.app'
            target='_blank'
            rel='noreferrer'
            id='props-basicbap'
            data-tooltip-content='Go to website!'
            data-tooltip-place={`${window.innerWidth > 992 ? "right" : "top"}`}
          >
            <Tooltip anchorId='props-basicbap' />

            <div className='app__singlework-img-dots'>
              <div className='app__singlework-img-dots-red'></div>
              <div className='app__singlework-img-dots-yellow'></div>
              <div className='app__singlework-img-dots-green'></div>
            </div>
            <img
              className='app__singlework-img-img'
              src={images.becomeaprogrammer}
              alt='znajdz'
            ></img>
          </a>
        </motion.div>

        <div className='app__singlework-desc'>
          <div className='app__singlework-desc-cont'>
            <div>
              <img
                className='app__singlework-desc-icon'
                src={images.react}
                alt='react'
              />
            </div>
            <div className='app__singlework-desc-text'>
              Project of a website containing video courses.
            </div>
          </div>
        </div>
      </div>
      <div className='border-works'></div>
      <div className='app__singlework-left'>
        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>02. HOMELY</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <div className='single-lang'>React</div>
            <div className='single-lang'>NextJS</div>
            <div className='single-lang'>Firebase</div>
            <div className='single-lang'>Tailwind</div>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://github.com/BartoszJS/booking_2.0'
                target='_blank'
                rel='noreferrer'
                id='props-basichoomely'
                data-tooltip-content='Source code!'
                data-tooltip-place='right'
              >
                <Tooltip anchorId='props-basichoomely' />
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
                data-tooltip-content='Go to website!'
                data-tooltip-place='right'
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
            id='props-basichomely'
            data-tooltip-content='Go to website!'
            data-tooltip-place={`${window.innerWidth > 992 ? "right" : "top"}`}
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
              alt='homely'
            ></img>
          </a>
        </motion.div>
        <div className='app__singlework-desc'>
          <div className='app__singlework-desc-cont'>
            <div>
              <img
                className='app__singlework-desc-icon'
                src={images.react}
                alt='react'
              />
            </div>
            <div className='app__singlework-desc-text'>
              Project of a real estate advertising website.
            </div>
          </div>
        </div>
      </div>
      <div className='border-works'></div>

      <div className='app__singlework-left'>
        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>03. Find your animal</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <div className='single-lang'>React</div>
            <div className='single-lang'>MongoDB</div>
            <div className='single-lang'>NodeJS</div>
            <div className='single-lang'>React</div>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://github.com/BartoszJS/znajdz-zwierzaka-mern'
                target='_blank'
                rel='noreferrer'
                id='props-basic1222'
                data-tooltip-content='Source code!'
                data-tooltip-place='right'
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
                href='https://znajdz-zwierzaka.onrender.com/'
                target='_blank'
                rel='noreferrer'
                id='props-basic1libeye'
                data-tooltip-content='Go to website!'
                data-tooltip-place='right'
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
        <motion.div
          whileInView={{ scale: [1, 1] }}
          whileHover={{ scale: [1, 1] }}
          transition={{ duration: 0.2 }}
          className='app__singlework-img'
        >
          <a
            href='https://znajdz-zwierzaka.onrender.com/'
            target='_blank'
            rel='noreferrer'
            id='props-basicznajdz'
            data-tooltip-content='Go to website!'
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

        <div className='app__singlework-desc'>
          <div className='app__singlework-desc-cont'>
            <div>
              <img
                className='app__singlework-desc-icon'
                src={images.react}
                alt='react'
              />
            </div>
            <div className='app__singlework-desc-text'>
              Project of a website that helps find missing animals. (Activation
              can take more than 30 sec.)
            </div>
          </div>
        </div>
      </div>
      <div className='border-works'></div>
      <div className='app__singlework-left'>
        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>04. Library</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <div className='single-lang'>PHP</div>
            <div className='single-lang'>MySQL</div>
            <div className='single-lang'>HTML</div>
            <div className='single-lang'>CSS</div>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://github.com/BartoszJS/biblioteka'
                target='_blank'
                rel='noreferrer'
                id='props-basiclibrary'
                data-tooltip-content='Source code!'
                data-tooltip-place='right'
              >
                <Tooltip anchorId='props-basiclibrary' />
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
                href='https://biblioteka-php.000webhostapp.com/'
                target='_blank'
                rel='noreferrer'
                id='props-basiclibrarybeye'
                data-tooltip-content='Go to website!'
                data-tooltip-place='right'
              >
                <Tooltip anchorId='props-basiclibrarybeye' />
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
            href='https://biblioteka-php.000webhostapp.com/'
            target='_blank'
            rel='noreferrer'
            id='props-basicbiblie'
            data-tooltip-content='Go to website!'
            data-tooltip-place={`${window.innerWidth > 992 ? "right" : "top"}`}
          >
            <Tooltip anchorId='props-basicbiblie' />

            <div className='app__singlework-img-dots'>
              <div className='app__singlework-img-dots-red'></div>
              <div className='app__singlework-img-dots-yellow'></div>
              <div className='app__singlework-img-dots-green'></div>
            </div>
            <img
              className='app__singlework-img-img'
              src={images.library}
              alt='library'
            ></img>
          </a>
        </motion.div>
        <div className='app__singlework-desc'>
          <div className='app__singlework-desc-cont'>
            <div>
              <img
                className='app__singlework-desc-icon'
                src={images.php}
                alt='react'
              />
            </div>
            <div className='app__singlework-desc-text'>
              Project of a library website.
            </div>
          </div>
        </div>
      </div>
      <div className='border-works'></div>
      <div className='app__singlework-left'>
        <div className='app__singlework-text'>
          <div className='app__singlework-text-title'>
            <h2>05. Hol-car-części</h2>
          </div>

          <div className='app__singlework-text-lang'>
            <div className='single-lang'>PHP</div>
            <div className='single-lang'>Wordpresss</div>
          </div>
          <div className='app__singlework-text-icons'>
            <div className='app__singlework-text-icons-icon'>
              <a
                href='https://hol-car-czesci.pl/'
                target='_blank'
                rel='noreferrer'
                id='props-basicholcareye'
                data-tooltip-content='Go to website!'
                data-tooltip-place='right'
              >
                <Tooltip anchorId='props-basicholcareye' />
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
            href='https://hol-car-czesci.pl/'
            target='_blank'
            rel='noreferrer'
            id='props-basicholcarcz'
            data-tooltip-content='Go to website!'
            data-tooltip-place={`${window.innerWidth > 992 ? "right" : "top"}`}
          >
            <Tooltip anchorId='props-basicholcarcz' />

            <div className='app__singlework-img-dots'>
              <div className='app__singlework-img-dots-red'></div>
              <div className='app__singlework-img-dots-yellow'></div>
              <div className='app__singlework-img-dots-green'></div>
            </div>
            <img
              className='app__singlework-img-img'
              src={images.holcarczesci}
              alt='holcarczesci'
            ></img>
          </a>
        </motion.div>
        <div className='app__singlework-desc'>
          <div className='app__singlework-desc-cont'>
            <div>
              <img
                className='app__singlework-desc-icon'
                src={images.wordpress}
                alt='wordpress'
              />
            </div>
            <div className='app__singlework-desc-text'>
              Real business card website of "Hol-car-części".
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Works;
