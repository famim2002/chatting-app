import React from "react";

import { TbArrowBackUp } from "react-icons/tb"
import { Link } from "react-router"


const BackButton = () => {
  return (
    <>
      <div className="p-5">
        <Link to="/" className="">
          <div className="back_button flex justify-center items-center">
            <TbArrowBackUp />
          </div>
        </Link>
      </div>
    </>
  );
};

export default BackButton;
