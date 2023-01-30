import React from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./SocialMedia.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='app__social'
    >
      <a href='/english'>
        <div className='engdiv'>
          <div className='engtext'></div>
        </div>
      </a>
      <a
        href='https://www.facebook.com/profile.php?id=100003097261536'
        target='_blank'
        rel='noreferrer'
      >
        <div className='app__social-icon'>
          <BsFacebook />
        </div>
      </a>
      <a href='https://github.com/BartoszJS' target='_blank' rel='noreferrer'>
        <div className='app__social-icon'>
          <BsGithub />
        </div>
      </a>
    </motion.div>
  );
};

export default SocialMedia;
