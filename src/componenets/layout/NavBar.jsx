import React from "react";
import { Link } from "react-router";
import Button from "../common-components/Button";
import BrandLogo from "../common-components/BrandLogo";


const Navbar = () => {
  return (
    <>
      <nav
        className=" px-2 py-3
                    border-b-3  border-brand rounded-2xl
                    lg:border-r-3 lg:w-[350px]    "
      >
        <div
          className="h-full flex flex-col md:flex-row lg:flex-col gap-5 justify-between items-center 
                      lg:items-start"
        >
          <div>
            <BrandLogo />
          </div>
          <div className="h-full flex flex-col justify-between">
            <div
              className=" px-2 flex flex-col sm:flex-row lg:flex-col gap-5  items-center
            lg:items-start"
            >
              <Link
                to="/"
                className="px-4 py-1  text-[30px] text-base font-headerFont border-x-2 border-primary rounded-xl hover:bg-secondary hover:border-x-2 hover:border-brand  focus:underline "
              >
                home
              </Link>
              <Link
                to="/"
                className="px-4 py-1  text-[30px] text-base font-headerFont border-x-2 border-primary rounded-xl hover:bg-secondary hover:border-x-2 hover:border-brand  focus:underline "
              >
                chats
              </Link>
              <Link
                to="/"
                className="px-4 py-1  text-[30px] text-base font-headerFont border-x-2 border-primary rounded-xl hover:bg-secondary hover:border-x-2 hover:border-brand  focus:underline "
              >
                groups
              </Link>
            </div>
            <div
              className="grid grid-cols- gap-2
                          sm:grid-cols-2 sm:gap-2
                           lg:grid-cols-1 lg:gap-5 "
            >
              <Link
                to="/"
                className="button_style w-[200px] bg-secondary h-[60px] text-[22px] text-center  px-8 py-3"
              >
                sign-up
              </Link>
              <Link
                to="/"
                className="button_style w-[200px] bg-secondary h-[60px] text-[22px] text-center  px-8 py-3"
              >
                log-in
              </Link>
            </div>
            <div>
              us
            </div>
          </div>
        </div>
      </nav>
    </>

    // <div>
    //   <ul className="flex justify-center gap-20 py-10">
    //     <li>
    //       <Link  className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 " to="/home">home</Link>
    //     </li>
    //     <li>
    //       <Link className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 "  to="/chatbox">chats</Link>
    //     </li>
    //     <li>
    //       <Link className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 "  to="/signUp">sign-up</Link>
    //     </li>
    //     <li>
    //       <Link className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 "  to="/Login">login</Link>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Navbar;
