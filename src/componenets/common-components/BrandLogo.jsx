import React from "react";
import { LiaCrownSolid } from "react-icons/lia";

const BrandLogo = () => {
  return (
    <>
      <div className="flex px-3 py-5 items-center ">
        <LiaCrownSolid className="text-4xl text-brand  " />
        <h2 className="text-4xl font-headerFont font-bold text-base underline ">
          Royal Chat
        </h2>
      </div>
    </>
  );
};

export default BrandLogo;
