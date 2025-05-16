import React from "react";
import { Link } from "react-router"

const Users = ({ image, name, time }) => {
  return (
    <>
      <Link to="/" className="py-2 hover:bg-secondary ">
        <div className="px-5 flex items-center gap-2">
          <div className="overflow-hidden">
            <img className="w-[50px] rounded-full" src={image} alt="" />
          </div>
          <div className="flex justify-between w-[420px]">
            <h2 className="text-[18px] font-regularFont text-text">{name}</h2>
            <p className="text-[18px] font-regularFont text-text">{time}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Users;
