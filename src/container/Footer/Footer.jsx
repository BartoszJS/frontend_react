import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer-div'>
      <span className='footer-text'>© 2023 BartoszJS</span>
    </div>
  );
};

export default Footer;
