import React from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import { images } from "../../../../constants";

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='app__social'
    >
      <a href='/'>
        <div className='engdiv'>
          <div className='pltext'></div>
        </div>
      </a>
      <div className='app__social-icon'>
        <BsFacebook />
      </div>
      <div className='app__social-icon'>
        <BsGithub />
      </div>
    </motion.div>
  );
};

export default SocialMedia;
