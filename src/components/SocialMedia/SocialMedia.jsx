import React from "react";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./SocialMedia.scss";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className='app__social'
    >
      <div>
        <BsFacebook />
      </div>
      <div>
        <BsGithub />
      </div>
    </motion.div>
  );
};

export default SocialMedia;
