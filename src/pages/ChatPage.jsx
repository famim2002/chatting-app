import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import {  TbArrowBigRightFilled } from "react-icons/tb";

import { Link } from "react-router";
import OtherMassage from "../componenets/common-components/OtherMassage";
import MyMassage from "../componenets/common-components/MyMassage";

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
          <div className="message flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-150px)] px-4 py-5">
            <OtherMassage otherMassage="hi" />
            <OtherMassage otherMassage="famim" />
            <MyMassage myMassage="oh hlw, johnny" />
            <OtherMassage otherMassage="how are u..?" />
            <MyMassage myMassage="fine,, what about you..?" />
            <OtherMassage otherMassage="yeah i'm good" />
            <MyMassage myMassage="you busy on something..?" />
            <OtherMassage otherMassage="nope" />
            <MyMassage myMassage="let's have some tea" />
            <OtherMassage otherMassage="sure," />
            <MyMassage myMassage="so, how's your education going" />
            <OtherMassage otherMassage="excellent,, what about you..?" />
            <MyMassage myMassage="well" />
            <MyMassage myMassage="actually i'm drop out of university" />
            <OtherMassage otherMassage="why" />
            <MyMassage myMassage="i'm thiking on doing something of my own" />
            <OtherMassage otherMassage="oh that's really impressive" />
            <OtherMassage otherMassage="tell me more.." />
            <MyMassage myMassage="sure.." />
            <MyMassage
              myMassage="acutally i'm planning to grow my skills,
                                  kind of technical skill"
            />
            <OtherMassage otherMassage="any particular..?" />
            <MyMassage myMassage="i'm looking into web-development" />
            <OtherMassage otherMassage="that's so cool dude.." />
            <MyMassage myMassage="thanks" />
            <OtherMassage otherMassage="okay then , I think that's enough for today" />
            <OtherMassage otherMassage="we will talk on this someday later.." />
            <MyMassage myMassage="sure, if you want" />
            <MyMassage myMassage="goodbye, take care of yourself" />
            <OtherMassage otherMassage="you too" />
            <OtherMassage otherMassage="goodbye" />
          </div>
          <div
            className="mt-auto shadow-2xl flex flex-col items-start justify-between pt-5 gap-2
                          lg:flex-col xl:flex-row"
          >
            <div className="w-full flex bg-base items-center gap-2 pr-1">
              <input
                type="text"
                placeholder="type your massage..."
                className="px-2  w-full h-[50px] text-xl text-primary bg-base font-headerFont tracking-wider outline-0 border-brand border-2 "
              />

              <Link className="p-1 bg-secondary border-2 border-primary rounded-full hover:bg-base  group active:bg-base">
                <BsEmojiSmile
                  className="text-[20px] text-text  group-hover:text-primary
                            xl:text-[25px]"
                />
              </Link>

              <Link className="p-1 bg-secondary border-2 border-primary rounded-full hover:bg-base group active:bg-base">
                <AiOutlinePicture
                  className="text-[20px] text-text  group-hover:text-primary 
                          xl:text-[25px]"
                />
              </Link>
              <Link className=" bg-secondary border-2 border-brand rounded-full hover:bg-base ml-3 hover:border-primary group active:bg-base">
                <TbArrowBigRightFilled
                  className="text-[20px] text-base ml-3 group-hover:text-primary 
                         lg:text-[25px]  xl:text-[25px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
