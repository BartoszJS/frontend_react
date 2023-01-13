import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MotionWrap } from "../../../../wrapper";
import { images } from "../../../../constants";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='contact-page-bg'>
      <h2 className='head-text3'>Kontakt</h2>
      <div className='contact-page'>
        <div className='contact-page-email'>
          <div className='contact-page-email-name'>
            <MdEmail />
            <div>E-mail</div>
          </div>
          <button className='contact-page-email-button'>
            bartosz290300@wp.pl
          </button>
        </div>
        <div className='contact-page-phone'>
          <div className='contact-page-phone-name'>
            <BsTelephoneFill />
            <div>Nr telefonu</div>
          </div>
          <button className='contact-page-phone-button'>697-121-225</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
