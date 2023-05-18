import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Dropdown = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="bg-whiite flex items-center justify-between  cursor-pointer"
      onClick={() => setShow(!show)}
    >
      <div className="flex justify-start items-center">
        <button className="flex items-center py-2 pl-4 pr-2 font-semibold rounded-lg text-black hover:text-orange-700">
          Forms
        </button>
        {!show ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="hover:text-orange-700"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="hover:text-orange-700"
          />
        )}
      </div>

      {show && (
        <ul className="visible transition  duration-300 opacity-100 bg-white border border-gray-800  shadow-2xl rounded mt-[150px] right-5 pb-1 w-48 absolute z-3">
          <ul className="font-semibold">
            <li
              className="cursor-pointer text-sm  dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal"
              onClick={() => navigate("/auth/login")}
            >
            Admission Form
            </li>

            <li
              className="cursor-pointer text-sm  dark:hover:text-white leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal"
              onClick={() => navigate("/auth/login")}
            >
              Entrance Form
            </li>

        
          </ul>
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
