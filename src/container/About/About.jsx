import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { MotionWrap } from "../../wrapper";
import { images } from "../../constants";

const About = () => {
  return (
    <>
      <h2 className='head-text3'>O mnie</h2>
      <div className='aboutme'>
        <div className='aboutme1'>
          <div className='aboutme-img'>
            <img src={images.profile2} alt='aboutmePhoto' />
          </div>
        </div>
        <div className='aboutme2'>
          <div className='aboutme-text'>
            <h3>Nazywam sie Bartosz Płaza</h3>
            <p>Jestem inżynierem informatyki</p>
            <p>
              Przez cały tok studiów pobierałem stypendium naukowe za
              wyróniające wyniki w nauce
            </p>
            <div className='aboutme-text-table'>
              <div className='aboutme-text-table-left'>
                <div className='aboutme-text-table-left-bold'>Wiek</div>
                <div className='aboutme-text-table-left-normal'>22</div>
                <div className='aboutme-text-table-left-bold'>Wiek</div>
                <div className='aboutme-text-table-left-normal'>22</div>
                <div className='aboutme-text-table-left-bold'>Wiek</div>
                <div className='aboutme-text-table-left-normal'>22</div>
              </div>
              <div className='aboutme-text-table-right'>
                <div className='aboutme-text-table-left-bold'>Wiek</div>
                <div className='aboutme-text-table-left-normal'>22</div>
                <div className='aboutme-text-table-left-bold'>Wiek</div>
                <div className='aboutme-text-table-left-normal'>22</div>
                <div className='aboutme-text-table-left-bold'>Wiek</div>
                <div className='aboutme-text-table-left-normal'>22</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotionWrap(About, "app__about");
