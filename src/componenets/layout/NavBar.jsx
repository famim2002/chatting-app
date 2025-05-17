import React from "react";
import { Link } from "react-router";
import Button from "../common-components/Button";
import BrandLogo from "../common-components/BrandLogo";


const Navbar = () => {
  return (
    <>
      <nav
        className="w-[280px] px-2 py-3
                      lg:w-[350px]"
      >
        <div className="flex flex-row md:flex-col gap-5">
          <div>
            <BrandLogo  />
          </div>
          <div>
            <div className="px-2 flex flex-col gap-5 ">
              <Link
                to="/"
                className="px-4 py-1  text-[30px] text-base font-headerFont hover:bg-secondary focus:underline"
              >
                home
              </Link>
              <Link
                to="/"
                className="px-4 py-1  text-[30px] text-base font-headerFont hover:bg-secondary focus:underline"
              >
                chats
              </Link>
              <Link
                to="/"
                className="px-4 py-1  text-[30px] text-base font-headerFont hover:bg-secondary focus:underline"
              >
                groups
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
