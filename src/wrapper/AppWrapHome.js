import React from "react";

const AppWrapHome = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <div className='app__wrapper'>
          <Component />

          <div className='copyright'>
            <p className='p-text'>@2022 Bartosz</p>
          </div>
        </div>
      </div>
    );
  };

export default AppWrapHome;
