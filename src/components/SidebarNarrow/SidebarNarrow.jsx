import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import "./SidebarNarrow.scss";

import CountUp from "react-countup";

const SidebarNarrow = () => {
  const [polish, setPolish] = useState(0);
  const [english, setEnglish] = useState(0);

  return <nav className='app__sidebar-narrow'></nav>;
};

export default SidebarNarrow;
