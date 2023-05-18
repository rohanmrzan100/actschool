import React from "react";
import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/navbar/SideNav";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpperNav from "./components/navbar/UpperNav";
import Home from "./components/pages/home/Home";
const App = () => {
  const show = useSelector((state) => state.nav.toggle);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {show && <SideNav />}
        <div className="relative">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
