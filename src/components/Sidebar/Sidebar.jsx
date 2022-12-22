import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import SidebarNarrow from "../SidebarNarrow/SidebarNarrow.jsx";
import SidebarWidth from "../SidebarWidth/SidebarWidth.jsx";

import CountUp from "react-countup";

const Sidebar = () => {
  const [polish, setPolish] = useState(0);
  const [english, setEnglish] = useState(0);

  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className='app__sidebar-toggle'>{">"}</div>
    </div>
  );
};

export default Sidebar;
