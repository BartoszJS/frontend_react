import React from "react";
import "./NavigationDots.scss";
import { useEffect, useState } from "react";

const NavigationDots = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <div className='app__navigation'>
      <a
        href={"#home"}
        className='app__navigation-dot'
        style={
          scrollY < window.screen.height * 0.8
            ? { backgroundColor: "rgb(255, 190, 0)" }
            : {}
        }
      >
        {}
      </a>
      <a
        href={"#about"}
        className='app__navigation-dot'
        style={
          scrollY > window.screen.height * 0.8 &&
          scrollY < window.screen.height * 1.5
            ? { backgroundColor: "rgb(255, 190, 0)" }
            : {}
        }
      >
        {}
      </a>
      <a
        href={"#work"}
        className='app__navigation-dot'
        style={
          scrollY > window.screen.height * 1.5 &&
          scrollY < window.screen.height * 2.5
            ? { backgroundColor: "rgb(255, 190, 0)" }
            : {}
        }
      >
        {}
      </a>
      <a
        href={"#skills"}
        className='app__navigation-dot'
        style={
          scrollY > window.screen.height * 2.5 &&
          scrollY < window.screen.height * 3.2
            ? { backgroundColor: "rgb(255, 190, 0)" }
            : {}
        }
      >
        {}
      </a>
      <a
        href={"#contact"}
        className='app__navigation-dot'
        style={
          scrollY > window.screen.height * 3.2 &&
          scrollY < window.screen.height * 5
            ? { backgroundColor: "rgb(255, 190, 0)" }
            : {}
        }
      >
        {}
      </a>
    </div>
  );
};

export default NavigationDots;
