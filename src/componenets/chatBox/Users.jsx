import React from "react";
import { Link } from "react-router"

const Users = ({ image, name, time, massage }) => {
  return (
    <>
      <Link to="/" className="py-1 rounded-2xl border-x-2 border-primary hover:border-brand hover:bg-secondary">
        <div className="px-5 flex items-center gap-2">
          <div className="overflow-hidden border-5 border-primary rounded-full outline-2 outline-brand">
            <img
              className="w-[50px] h-[50px] rounded-full"
              src={image}
              alt=""
            />
          </div>
          <div className="flex justify-between w-[420px]">
            <div className="flex flex-col gap-1">
              <h2 className="text-[18px] font-regularFont text-text">{name}</h2>
              <p className="text-[15px] font-regularFont text-base underline">
                {massage}
              </p>
            </div>
            <p className="text-[18px] font-regularFont text-text">{time}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Users;
