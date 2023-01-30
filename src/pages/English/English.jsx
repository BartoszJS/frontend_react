import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Footer,
  Header,
  Skills,
  Work,
  Works,
} from "./container";
import {
  Navbar,
  Sidebar,
  SocialMedia,
  NavigationDots,
  Timeline,
  SidebarWidth,
  SidebarNarrow,
  Language,
} from "./components";
import "./English.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import useWindowDimensions from "../../components/windowDimensions";
import { useRef } from "react";

const English = () => {
  const [toggle, setToggle] = useState(false);
  const { height, width } = useWindowDimensions();
  const resultRef = useRef(null);
  const resultRefProjects = useRef(null);

  useEffect(() => {
    if (width > 992) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, []);

  return (
    <div>
      <div className='app'>
        <div className={`${toggle ? "smallpx" : "bigpx"}`}>
          <motion.div
            whileTap={{ scale: 0 }}
            onClick={() => setToggle(!toggle)}
            transition={{ duration: 0.5 }}
            className={`${
              toggle ? "app__sidebar-small-toggle" : "app__sidebar-big-toggle"
            }`}
          >
            {toggle ? ">" : "<"}
          </motion.div>
          {toggle ? (
            <SidebarNarrow />
          ) : (
            <div>
              <SocialMedia />
              <SidebarWidth />
            </div>
          )}
          {/* <a href='/english'>
            <Language />
          </a> */}
          <Header resultRef={resultRef} resultRefProjects={resultRefProjects} />
          <Skills />
          <Works ref={resultRefProjects} />
          <About />
          <Contact ref={resultRef} />
          <Timeline />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default English;
