import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router";

const ChatPage = () => {
  return (
    <>
      <section className="w-full h-[90dvh] px-4 py-3">
        <div
          className=" flex  justify-between "
        >
          <div
            className="flex flex-col  gap-1 
                       xl:gap-3 xl:flex-row xl:items-end "
          >
            <img
              src="/sample-image.jpg"
              alt=""
              className="w-[55px]  rounded-full "
            />
            <h2
              className="text-[18px] text-base  underline
                          sm:text-[22px]"
            >
              johnny daze
            </h2>
          </div>
          <div
            className="flex  items-center gap-5  "
          >
            <Link
              to="/"
              className="p-2 ] text-base  hover:text-primary bg-secondary rounded-full border-4 border-primary outline outline-brand hover:bg-text  hover:outline-base "
            >
              <BsTelephone
                className=" text-[216x]
                           xl:text-[20px]"
              />
            </Link>

            <Link
              to="/"
              className="p-2 ] text-base  hover:text-primary bg-secondary rounded-full border-4 border-primary outline outline-brand hover:bg-text  hover:outline-base "
            >
              <GoDeviceCameraVideo
                className=" text-[16px]
                           xl:text-[20px]"
              />
            </Link>

            <Link
              to="/"
              className="p-2 ] text-base  hover:text-primary bg-secondary rounded-full border-4 border-primary outline outline-brand hover:bg-text  hover:outline-base "
            >
              <BsThreeDotsVertical
                className=" text-[16px]
                           xl:text-[20px]"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
