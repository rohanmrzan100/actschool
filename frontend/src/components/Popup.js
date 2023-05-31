import React, { useState } from "react";

const Popup = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
  };
  return (
    <>
      {show && (
        <div className="bg-green-600  h-[80%] w-[80%] my-8 fixed inset-0  center top-50 z-50">
          <p>Admission Open</p>
          <button onClick={handleClick}>click</button>
        </div>
      )}
    </>
  );
};

export default Popup;
