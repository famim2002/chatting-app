import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router"


const ChatPage = () => {
  return (
    <>
      <section className="w-full px-4 py-3">
        <div
          className=" flex justify-between
                                           "
        >
          <div className="flex gap-3 items-end">
            <img
              src="/sample-image.jpg"
              alt=""
              className="w-[65px]  rounded-full"
            />
            <h2 className="text-[22px] text-base">johnny daze</h2>
          </div>
          <div className="flex  items-center gap-5
                          ">
            <Link to="/" className="p-2 ] text-base  hover:text-primary bg-secondary rounded-full border-4 border-primary outline outline-brand hover:bg-text  hover:outline-base " >
            <BsTelephone className=" text-[20px]"   />
            
            </Link>

            <Link to="/" className="p-2 ] text-base  hover:text-primary bg-secondary rounded-full border-4 border-primary outline outline-brand hover:bg-text  hover:outline-base " >
            <GoDeviceCameraVideo className=" text-[20px]"    />
            
            </Link>

            <Link to="/" className="p-2 ] text-base  hover:text-primary bg-secondary rounded-full border-4 border-primary outline outline-brand hover:bg-text  hover:outline-base " >
            <BsThreeDotsVertical className=" text-[20px]"   />
            
            </Link>

          </div>
        </div>
      </section>
    </>
  );
};

export default ChatPage;
