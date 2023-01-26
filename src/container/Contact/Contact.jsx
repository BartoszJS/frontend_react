import React, { useState, useEffect } from "react";
import "./Contact.scss";
import { MdEmail } from "react-icons/md";
import { HiOutlinePhone, HiArrowCircleDown } from "react-icons/hi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { CgPushChevronDownO } from "react-icons/cg";
import { forwardRef } from "react";
import { AiFillGithub } from "react-icons/ai";

const Contact = forwardRef((props, ref) => {
  return (
    <div className='aboutme1-about' ref={ref}>
      <div className='contact-container'>
        <div className='contact-container-1'>
          <p className='text-on-border'>Kontakt</p>
          <div className='aboutme-cont'>
            <div className='aboutme-button-phone'>
              <div className='phone-icon'>
                {" "}
                <HiOutlinePhone />
              </div>

              <div className='phone-text'>
                <a className='link-phone' href='tel:697121225'>
                  697-121-225
                </a>
              </div>
            </div>
          </div>
          <div className='aboutme-cont'>
            <div className='aboutme-button-phone'>
              <div className='phone-icon'>
                {" "}
                <MdOutlineMarkEmailUnread />
              </div>
              <div className='phone-text'>bartosz290300@wp.pl</div>
            </div>
          </div>
        </div>
        <div className='contact-container-2'>
          <div className='aboutme-cont'>
            <div className='aboutme-button-phone'>
              <div className='phone-icon'>
                {" "}
                <AiFillGithub />
              </div>
              <div className='phone-text'>Github</div>
            </div>
          </div>
          <div className='aboutme-cont'>
            <div className='aboutme-button-phone'>
              <div className='phone-icon'>
                {" "}
                <CgPushChevronDownO />
              </div>
              <div className='phone-text'> Pobierz CV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
