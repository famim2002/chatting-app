import React from "react";
import { Link } from "react-router";
import Button from "../common-components/Button";
import BrandLogo from "../common-components/BrandLogo";

const Navbar = () => {
  return (
    <aside className="h-screen ">
      <nav className="h-dvh  w-fit  bg-secondary border-r-4 border-r-brand rounded-r-2xl nav_shadow">
        <div className=" h-dvh flex flex-col justify-between">
          <div>
            <BrandLogo />
          </div>

          <div className=" flex flex-col gap-5 border-b border-brand pb-5 ">
            <Link
              className="text-[30px] w-[250px]  px-4 font-headerFont text-base hover:bg-primary hover:text-text  focus:underline"
              to="/"
            >
              home
            </Link>

            <Link
              className="text-[30px] w-[250px]  px-4 font-headerFont text-base hover:bg-primary hover:text-stone-100  focus:underline"
              to="/"
            >
              chats
            </Link>
            <Link
              className="text-[30px] w-[250px]  px-4 font-headerFont text-base hover:bg-primary hover:text-stone-100  focus:underline"
              to="/"
            >
              groups
            </Link>
            <Link
              className="text-[30px] w-[250px]  px-4 font-headerFont text-base hover:bg-primary hover:text-stone-100  focus:underline"
              to="/"
            >
              spam
            </Link>
          </div>

          <div className="py-5 flex flex-col gap-5">
            <Link to="/signUp">
              <Button title="signUp" styling="button_style ml-3 mt-2 " />
            </Link>

            <Link to="/login">
              <Button title="logIn" styling="button_style ml-3 " />
            </Link>
          </div>
          <div className="flex items-center gap-2 px-2 py-4 border-brand border-t">
            <img
              className="w-[50px] rounded-full "
              src="/my-image.jpg"
              alt=""
            />
            <div>
              <h3 className="text-[20px] text-base font-regularFont">
                Famim Yash
              </h3>
              <small className="underline text-stone-300 font-regularFont active:bg-brand">
                <Link to="/">edit profile</Link>
              </small>
            </div>
          </div>
        </div>
      </nav>
    </aside>

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
