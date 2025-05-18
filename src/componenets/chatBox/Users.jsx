import React from "react";
import { Link } from "react-router";

const Users = ({ image, name, time, message }) => {
  return (
    <>
      <Link
        to="/"
        className="py-2 rounded-2xl border-x-2 border-primary hover:border-brand hover:bg-secondary"
      >
        <div className="px-5 flex items-center gap-2">
          <div className="overflow-hidden border-5 border-primary rounded-full outline-3 outline-brand">
            <img className="w-[50px]  rounded-full" src={image} alt="" />
          </div>
          <div className="w-full flex  justify-between ">
            <div className="flex flex-col gap-1">
              <h2 className="text-[18px] font-regularFont text-text">{name}</h2>
              <p className="text-[15px] font-regularFont text-base underline">
                {message}
              </p>
            </div>
            <div>
              <p className="text-[14px] font-regularFont text-text">{time}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Users;
