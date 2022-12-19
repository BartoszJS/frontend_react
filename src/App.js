import React from "react";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar, Sidebar, SocialMedia, NavigationDots } from "./components";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      {/* <Navbar />*/}
      {/* <NavigationDots />
      <SocialMedia /> */}
      <Header />

      <Skills />
      <Work />
      <About />

      <Skills />
      <Footer />
    </div>
  );
};

export default App;
