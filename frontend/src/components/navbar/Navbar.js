import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo.webp";
// import { useNavigate } from "react-router-dom";
import { toggleSideNav } from "../../store/slice/NavSlice";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "./Dropdown";

import FormDropdown from "./FromDropDown"
const Navbar = () => {
;
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <>
      <nav className=" bg-white sticky inset-0 z-10  w-full top-0 border border-b-2">
        <div className="w-full flex h-[10vh] min-h-[80px]: items-center justify-between  mx-auto  px-8">
          <a href="/" className="flex items-center">
            <img src={Logo} className="h-16 m-0 py-1" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={() => dispatch(toggleSideNav())}
            className="inline-flex border border-black items-center p-2 ml-3 text-md text-black rounded-lg lg:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 active:scale-105"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars} className="scale-105" />
          </button>
          <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex justify-center items-center space-x-2">
              <li>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="flex items-center py-2 px-4   font-semibold rounded-lg text-black hover:text-orange-700  "
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "#about")}
                  className="flex items-center py-2 px-4 font-semibold rounded-lg text-black hover:text-orange-700  "
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "#academics")}
                  className="flex items-center py-2 px-4 font-semibold rounded-lg text-black hover:text-orange-700  "
                >
                  Academics
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "#message")}
                  className="flex items-center py-2 px-4 font-semibold  rounded-lg text-black hover:text-orange-700  "
                >
                  Message
                </button>
              </li>
              <li>
                <button
                  onClick={() => (window.location.href = "#student")}
                  className="flex items-center py-2 px-4 font-semibold  rounded-lg text-black hover:text-orange-700  "
                >
                  Students
                </button>
              </li>

              <li>
                <button
                  //   onClick={() => navigate("/auth/login")}
                  className="flex items-center py-2 px-4 font-semibold rounded-lg text-black hover:text-orange-700  "
                >
                  Contact Us
                </button>
              </li>
              <li>
                <FormDropdown />
              </li>
              <li>
                <Dropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
