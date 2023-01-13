import React, { useState } from "react";
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

const English = () => {
  const [toggle, setToggle] = useState(false);
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
          <a href='/'>
            <Language />
          </a>

          <NavigationDots />
          <Header />
          <Skills />
          <Works />
          <Work />
          <About />
          <Contact />
          <Timeline />
        </div>
        {/* <Work />
      <Navbar />

      <Skills />
      <Footer /> */}
      </div>
    </div>
  );
};

export default English;
