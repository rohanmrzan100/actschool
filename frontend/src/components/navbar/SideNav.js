import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../images/logo.webp";
import { toggleSideNav } from "../../store/slice/NavSlice";
import { useDispatch } from "react-redux";

const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="  lg:hidden shadow-2xl z-20">
      <aside
        id="default-sidebar"
        className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center">
              <img src={Logo} className="h-14 mr-3" alt="Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={() => dispatch(toggleSideNav())}
              className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg border border-black text-black hover:bg-gray-200 focus:ring-gray-600 active:scale-110"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faXmark} className="scale-105" />
            </button>
          </div>
          <hr className="h-px my-4 b border-0 bg-black"></hr>
          <ul className="space-y-4 font-medium ">
            <li>
              <a
                href="#/"
                className="flex items-center p-2 rounded-lg text-black  hover:text-orange-700"
              >
                <span className="">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                className="flex items-center p-2 rounded-lg text-black  hover:text-orange-700"
              >
                <span className="">About Us</span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                className="flex items-center p-2 rounded-lg text-black  hover:text-orange-700"
              >
                <span className="">Academics</span>
              </a>
            </li>
            <li>
              <a
                href="#/"
                className="flex items-center p-2 rounded-lg text-black  hover:text-orange-700"
              >
                <span className="">Students</span>
              </a>
            </li>
       
            <li>
              <a
                href="#/"
                className="flex  items-center p-2 rounded-lg text-black  hover:text-orange-700"
              >
                <span className="">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className=" opacity-50 fixed inset-0 z-10 bg-black"></div>
    </div>
  );
};

export default SideNav;
