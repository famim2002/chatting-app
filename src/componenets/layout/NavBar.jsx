import React from "react";
import { Link } from "react-router";
import Button from "../common-components/Button";
import BrandLogo from "../common-components/BrandLogo";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <nav
        className="nav_shadow px-2 py-3 border-b-3  border-brand  rounded-2xl mb-10
                    lg:border-r-3 lg:w-[350px]  lg:mb-0  "
      >
        <div
          className="h-full flex flex-col md:flex-row lg:flex-col gap-5 justify-between items-center 
                      lg:items-start"
        >
          <div>
            <BrandLogo />
          </div>
          <div className="h-full flex flex-col justify-between py-5">
            <div
              className=" px-2 flex flex-col sm:flex-row lg:flex-col gap-2  items-center
            lg:items-start"
            >
              <Link
                to="/"
                className="px-4 py-1 text-[30px] md:text-[25px]  text-base font-headerFont border-x-2 border-primary rounded-xl hover:bg-secondary hover:border-x-2 hover:border-brand  focus:underline 
                lg:text-[30px]"
              >
                home
              </Link>
              <Link
                to="/"
                className="px-4 py-1 text-[30px] md:text-[25px]  text-base font-headerFont border-x-2 border-primary rounded-xl hover:bg-secondary hover:border-x-2 hover:border-brand  focus:underline 
                lg:text-[30px]"
              >
                chats
              </Link>
              <Link
                to="/"
                className="px-4 py-1 text-[30px] md:text-[25px]  text-base font-headerFont border-x-2 border-primary rounded-xl hover:bg-secondary hover:border-x-2 hover:border-brand  focus:underline 
                lg:text-[30px]"
              >
                groups
              </Link>
            </div>
            <div
              className="grid grid-cols- gap-3 pt-10 place-items-center
                          sm:grid-cols-2 sm:pt-5 
                          md:gap-2 
                           lg:grid-cols-1 lg:gap-5 "
            >
              <Link
                to="/signUp"
                className="button_style w-[160px]  bg-secondary h-[50px] text-[22px] text-center px-8 py-2
                           md:w-[140px] md:h-[50px] md:py-2             
                           lg:w-[200px] lg:h-[60px]  lg:py-3   "
              >
                sign-up
              </Link>
              <Link
                to="/login"
                className="button_style w-[160px]  bg-secondary h-[50px] text-[22px] text-center px-8 py-2
                           md:w-[140px] md:h-[50px] md:py-2             
                           lg:w-[200px] lg:h-[60px] lg:py-3   "
              >
                log-in
              </Link>
            </div>
          </div>
          <div
            className="flex items-center gap-2 pt-10 border-t 
                      md:border-l md:border-t-0 md:pl-2 border-brand md:flex-col  
                      lg:border-l-0 lg:flex-row lg:border-t  "
          >
            <div>
              <img
                src="/my-image.jpg"
                alt=""
                className="w-[55px] h-[55px] rounded-full"
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-[20px] px-2 font-regularFont text-base ">
                famim yash
              </h2>
              <Link to="/">
                <div className="flex items-center  hover:bg-secondary">
                  <small className="text-[15px] px-2 font-regularFont text-blue-100 underline ">
                    edit your profile
                  </small>
                  <CiSettings className="text-[18px] text-text" />
                </div>
              </Link>
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
