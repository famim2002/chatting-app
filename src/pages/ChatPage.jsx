import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { TbArrowBigRight } from "react-icons/tb";

import { Link } from "react-router";

const ChatPage = () => {
  return (
    <>
      <section className=" w-full h-dvh md:h-auto  pt-3 border-2 border-brand rounded-lg">
        <div className="h-full flex flex-col justify-between">
          <div className="px-4 flex  justify-between pb-3 border-b-2 border-brand  rounded-xl shadow-2xl">
            <div
              className=" flex flex-col  gap-1 
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
            <div className="flex  items-center gap-5  ">
              <Link
                to="tel:+0154644646"
                className="p-2 ] text-base  hover:text-primary bg-secondary rounded-full border-4 border-primary outline outline-brand hover:bg-text  hover:outline-base "
              >
                <BsTelephone
                  className=" text-[216x]
                           xl:text-[20px]"
                />
              </Link>

              <Link
                to="tel:+0154644646"
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
          <div className="mt-auto shadow-2xl flex items-center">
            <input
              type="text"
              className="px-2  w-full h-[50px] text-xl text-primary bg-base font-headerFont tracking-wider outline-0 border-brand border-2 "
            />
            <div className="px-2 flex gap-2">
              <div className="p-3 bg-secondary border-2 border-primary rounded-full hover:bg-base  group">
                <BsEmojiSmile
                  className="text-[20px] text-base  group-hover:text-primary
                            lg:text-[25px]"
                />
              </div>

              <div className="p-3 bg-secondary border-2 border-primary rounded-full hover:bg-base group">
                <AiOutlinePicture
                  className="text-[20px] text-base  group-hover:text-primary
                           lg:text-[25px]"
                />
              </div>

              <div className="p-3 bg-secondary border-2 border-primary rounded-full hover:bg-base group">
                <TbArrowBigRight
                  className="text-[20px] text-base  ml-5  group-hover:text-primary
                           lg:text-[25px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
