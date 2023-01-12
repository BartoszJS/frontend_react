import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { SiJavascript, SiReact } from "react-icons/si";
import "./Timeline.scss";
import { images } from "../../constants";
import { Spinneryellow, Dotsloading } from "../../components";

const Timeline = () => {
  return (
    <div className='timeline-page-bg'>
      <h2 className='head-text3'>Kursy</h2>
      <VerticalTimeline
        className='vertical-timeline-custom-line'
        layout='1-column'
      >
        <VerticalTimelineElement
          onTimelineElementClick={() => {
            // eslint-disable-next-line no-alert
            alert("onTimelineElementClick event fired");
          }}
          className='vertical-timeline-element--work'
          contentStyle={{
            border: "1px solid grey",
            background: "#2d2d3c",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  white" }}
          iconStyle={{ background: "white", color: "#000" }}
          icon={<SiJavascript />}
        >
          <div className='vertical-timeline-element--work-flex'>
            <div>
              <h3 className='vertical-timeline-element-title'>
                Kurs JavaScript
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Front-end Developer
              </h4>
              <p>Długość kursu: 62h</p>
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
            background: "#2d2d3c",
            color: "#fff",
          }}
          iconStyle={{ background: "white", color: "#000" }}
          icon={<AiFillEye />}
        >
          <div className='vertical-timeline-element--work-flex'>
            <div>
              <h3 className='vertical-timeline-element-title'>Kurs MERN</h3>
              <h5 className='vertical-timeline-element-subtitle'>
                React, NodeJS, MongoDB
              </h5>
              <p>Długość kursu: 18,5h</p>
              <p>09.2022-10.2022222</p>
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
            background: "#2d2d3c",
            color: "#fff",
          }}
          iconStyle={{ background: "white", color: "#000" }}
          icon={<SiReact />}
        >
          <div className='vertical-timeline-element--work-flex'>
            <div>
              <h3 className='vertical-timeline-element-title'>Kurs React</h3>
              <h4 className='vertical-timeline-element-subtitle'>
                React, Firebase
              </h4>
              <p>Długość kursu: 18h</p>
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
            background: "#2d2d3c",
            color: "#fff",
          }}
          iconStyle={{ background: "white", color: "#000" }}
          icon={<Spinneryellow />}
        >
          <h4 className='vertical-timeline-element-title'>
            <Dotsloading />
          </h4>

          <p>Rozwijanie umiejętności programistycznych</p>
          <p>2020 - teraz</p>
        </VerticalTimelineElement>
        ,
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
