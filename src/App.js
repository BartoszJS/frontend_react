import React, { useState } from "react";
import { About, Footer, Header, Skills, Work } from "./container";
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

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className='app'>
      {toggle ? (
        <div className='smallpx'>
          <div
            onClick={() => setToggle(false)}
            className='app__sidebar-small-toggle'
          >
            {">"}
          </div>
          <SidebarNarrow />
          <NavigationDots />
          <Header />
          <Skills />
          <Work />
          <About />
        </div>
      ) : (
        <div className='bigpx'>
          <div
            onClick={() => setToggle(true)}
            className='app__sidebar-big-toggle'
          >
            {"<"}
          </div>
          <SidebarWidth />
          <NavigationDots />
          <SocialMedia />
          <Header />
          <Skills />
          <Work />
          <About />
        </div>
      )}

      {/* <Navbar />*/}
      {/* <Timeline /> */}
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
