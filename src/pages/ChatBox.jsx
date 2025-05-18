import React from "react";
import Users from "../componenets/chatBox/Users";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";
import { GoPlus } from "react-icons/go";

<IoIosSearch />;

const ChatBox = () => {
  return (
    <section className="py-5 rounded-r-2xl shadow-2xl">
      <div className="flex flex-col justify-center gap-5">
        <div
          className="flex flex-col gap-5 justify-between items-center px-3 pb-3 border-b border-brand shadow-2xl
        sm:flex-row md:flex-col xl:flex-row "
        >
          <div className="flex items-center gap-2">
            <div className="">
              <input
                type="text"
                className=" inline-block w-[250px] form_input border-2 text-2xl border-brand rounded-2xl focus:shadow-2xl focus:border-text
                            md:w-[350px] lg:w-[300px]"
                placeholder="search"
                aria-label="Search users"
              />
            </div>
            <Link className="text-3xl text-brand border-5 p-1 bg-secondary  border-primary outline-2 outline-brand rounded-4xl transition-all hover:bg-text hover:outline-text hover:text-primary ">
              <IoIosSearch />
            </Link>
          </div>

          <Link
            className="flex text-[25px] border-brand border  px-4 font-headerFont text-base hover:bg-base  hover:text-primary  
                      xl:ml-20
                      xl:text-[30px]"
            to="/"
          >
            <p className="flex items-center gap-2">
              add <GoPlus />
            </p>
          </Link>
        </div>

        <div
          className="h-[250px] overflow-y-auto pr-2 custom-scrollbar
                        md:h-[820px]"
        >
          <div className="grid grid-cols-1 gap-1  pt-5  ">
            <Users
              image="/shimanto-image.jpg"
              name="shimanto"
              time="10.00 am"
              message="hi"
            />
            <Users
              image="/sample-image (1).jpg"
              name="john doe"
              time="1.30 pm"
              message="hi"
            />
            <Users
              image="/sample-image (6).jpg"
              name="kachi chima"
              time="1.39 pm"
              message="hi"
            />
            <Users
              image="/sample-image.jpg"
              name="johnny daze"
              time="8.10 am"
              message="hi"
            />
            <Users
              image="/sample-image (4).jpg"
              name="teacher"
              time="5.10 am"
              message="hi"
            />
            <Users
              image="/sample-image (7).jpg"
              name="teni dhachi"
              time="10.29 pm"
              message="hi"
            />
            <Users
              image="/sample-image (3).jpg"
              name="jessy mihan"
              time="9.37 am"
              message="hi"
            />
            <Users
              image="/sample-image (11).jpg"
              name="wife 1"
              time="6.11 pm"
              message="i love you"
            />
            <Users
              image="/sample-image (15).jpg"
              name="wife 2"
              time="6.09 pm"
              message="i love you"
            />
            <Users
              image="/sample-image (8).jpg"
              name="kareem"
              time="8.22 pm"
              message="hi"
            />
            <Users
              image="/sample-image (10).jpg"
              name="joverostki"
              time="10.00 pm"
              message="hi"
            />
            <Users
              image="/sample-image (5).jpg"
              name="unishama"
              time="9.30 am"
              message="hi"
            />

            <Users
              image="/sample-image (12).jpg"
              name="micky"
              time="5.10 am"
              message="hi"
            />
            <Users
              image="/sample-image (13).jpg"
              name="matt mali"
              time="10.29 pm"
              message="hi"
            />
            <Users
              image="/sample-image (14).jpg"
              name="jenny"
              time="9.37 am"
              message="hi"
            />
            <Users
              image="/sample-image (16).jpg"
              name="dani"
              time="8.22 pm"
              message="hi"
            />
            <Users
              image="/sample-image (17).jpg"
              name="pattaya"
              time="10.00 pm"
              message="hi"
            />
            <Users
              image="/sample-image (18).jpg"
              name="otina mana"
              time="9.30 am"
              message="hi"
            />

            <Users
              image="/sample-image (2).jpg"
              name="kachi chiwa"
              time="9.30 am"
              message="hi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
