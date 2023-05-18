import React from "react";

import MyComponent from "react-full-page-scroller";
import Slider from "./Slider";
import About from "./About";
import Academics from "./Academics";
import Message from "./Message";
import Students from "./Students";
const Home = () => {
  return (
    <>
      <Slider />

      <div id="about" className="py-12  xl:h-full ">
        <About />
      </div>

      <div id="academics" className=" py-12 xl:h-full ">
        <Academics />
      </div>

      <div id="message" className="py-12 xl:h-full ">
        <Message />
      </div>
      <div id="student" className=" py-12 xl:h-full">
        <Students />
      </div>

      {/* <hr class="border-4 border-blue-500 cursor-pointer hover:border-red-500 duration-500" />/ */}
    </>
  );
};

export default Home;
