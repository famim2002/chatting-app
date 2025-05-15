import React from "react";

const Button = ({ type,styling,title }) => {
  return (
    <>
      <div className={styling} >
        <button type={type} className=" w-[150px] text-[20px] focus cursor-pointer px-12 py-2 ">
          {title}
        </button>
      </div>
    </>
  );
};

export default Button;
