import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { SiJavascript, SiReact, SiTypescript } from "react-icons/si";
import { images } from "../../../../constants";
import { Spinneryellow, Dotsloading } from "..";

const Timeline = () => {
  return (
    <div className='timeline-page-bg'>
      <div className='border-container'>
        <div className='border-timeline'></div>
        <p className='header-courses'>Courses</p>
      </div>
      <VerticalTimeline
        className='vertical-timeline-custom-line'
        layout='1-column'
      >
        <VerticalTimelineElement
          // onTimelineElementClick={() => {
          //   // eslint-disable-next-line no-alert
          //   alert("onTimelineElementClick event fired");
          // }}
          className='vertical-timeline-element--work'
          contentStyle={{
            border: "1px solid grey",
            background: "#282832",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "5px solid white" }}
          iconStyle={{ background: "white", color: "#000" }}
          icon={<SiJavascript />}
        >
          <div className='vertical-timeline-element--work-flex'>
            <div className='vertical-timeline-element--work-flex-texxt'>
              <h3 className='vertical-timeline-element-title'>
                JavaScript course
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Front-end Developer
              </h4>
              <p>Course length: 62h</p>
              <p>06.2022-09.2022</p>
            </div>
            <div className='vertical-timeline-element--work-flex-button'>
              <img
                className='vertical-timeline-element--work-flex-button-img'
                src={images.strefa}
                alt='strefa'
              />
            </div>
          </div>
        </VerticalTimelineElement>
        ,
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            border: "1px solid grey",
            background: "#282832",
            color: "#fff",
          }}
          iconStyle={{ background: "white", color: "#000" }}
          icon={<SiReact />}
        >
          <div className='vertical-timeline-element--work-flex'>
            <div>
              <h3 className='vertical-timeline-element-title'>Kurs MERN</h3>
              <h5 className='vertical-timeline-element-subtitle'>
                React, NodeJS, MongoDB
              </h5>
              <p>Course length: 18,5h</p>
              <p>09.2022-10.2022</p>
            </div>
            <div className='vertical-timeline-element--work-flex-button'>
              <img
                className='vertical-timeline-element--work-flex-button-img'
                src={images.mern}
                alt='mern'
              />
            </div>
          </div>
        </VerticalTimelineElement>
        ,
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            border: "1px solid grey",
            background: "#282832",
            color: "#fff",
          }}
          iconStyle={{
            background: "white",
            color: "#000",
            width: "40px",
            height: "40px ",
            fontSize: "40px",
          }}
          icon={<SiReact />}
        >
          <div className='vertical-timeline-element--work-flex'>
            <div>
              <h3 className='vertical-timeline-element-title'>Kurs React</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                React, Firebase
              </h4>
              <p>Course length: 18h</p>
              <p>10.2022-11.2022</p>
            </div>
            <div className='vertical-timeline-element--work-flex-button'>
              <img
                className='vertical-timeline-element--work-flex-button-img'
                src={images.reactfirebase}
                alt='mern'
              />
            </div>
          </div>
        </VerticalTimelineElement>
        ,
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            border: "1px solid grey",
            background: "#282832",
            color: "#fff",
          }}
          iconStyle={{
            background: "white",
            color: "#000",
            width: "40px",
            height: "40px ",
            fontSize: "40px",
          }}
          icon={<SiTypescript />}
        >
          <div className='vertical-timeline-element--work-flex'>
            <div>
              <h3 className='vertical-timeline-element-title'>
                Kurs Typescript
              </h3>
              <p>Course length: 10,5h</p>
              <p>01.2023</p>
            </div>
            <div className='vertical-timeline-element--work-flex-button'>
              <img
                className='vertical-timeline-element--work-flex-button-img'
                src={images.typescriptcourse}
                alt='mern'
              />
            </div>
          </div>
        </VerticalTimelineElement>
        ,
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            border: "1px solid grey",
            background: "#282832",
            color: "#fff",
          }}
          iconStyle={{ background: "white", color: "#000" }}
          icon={<Spinneryellow />}
        >
          <h4 className='vertical-timeline-element-title'>
            <Dotsloading />
          </h4>

          <p>Developing programming skills...</p>
          <p>2020 - now</p>
        </VerticalTimelineElement>
        ,
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
