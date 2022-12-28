import React, { useState } from "react";
import { About, Footer, Header, Skills, Work, Works } from "./container";
import {
  Navbar,
  Sidebar,
  SocialMedia,
  NavigationDots,
  Timeline,
  SidebarWidth,
  SidebarNarrow,
} from "./components";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
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

        <NavigationDots />
        <Header />
        <Skills />

        <Works />
        <About />
      </div>
      {/* <Work /> */}
      {/* <Navbar />*/}
      {/* <Timeline /> */}
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
