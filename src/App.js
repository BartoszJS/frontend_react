import React, { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Polish from "./pages/Polish/Polish";
import English from "./pages/English/English";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Polish />} />
          <Route path='/english' element={<English />} />
          <Route path='*' element={<Polish />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
