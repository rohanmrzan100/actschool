import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import fbIcon from "../../images/fb.svg";
const UpperNav = () => {
  const mail = "rohanmrzan100@gmail.com";
  const number = "+977 9869835550";
  const handleMail = () => {
    window.location = `mailto:${mail}`;
  };
  const handleNumber = () => {
    window.open(`tel:${number}`);
  };
  return (
    <div className=" hidden md:block ">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto text-sm text-gray-600 bg-white border border-b-2 px-8 py-2 ">
        <div className="flex  justify-start items-center space-x-4">
          <div className="flex justify-center items-center space-x-1">
            <FontAwesomeIcon icon={faPhone} />
            <p onClick={handleNumber} className="underline cursor-pointer">
              {number}
            </p>
          </div>

          <div className="flex justify-center items-center space-x-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <p onClick={handleMail} className="underline cursor-pointer">
              {mail}
            </p>
          </div>
        </div>

        <a
          href="/www.facebook.com"
          className="font-semibold   underline flex justify-center flex-col items-baseline  "
        >
          <img src={fbIcon} alt="fb" className="h-6 mx-2" />
          Join us on Facebook
        </a>
      </div>
    </div>
  );
};

export default UpperNav;
