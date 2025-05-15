import React from "react";
import { Link } from "react-router";
import Button from "../common-components/Button";
import BrandLogo from "../common-components/BrandLogo"

const Navbar = () => {
  return (
    <aside className="h-screen absolute">
      <nav className="h-full flex-col w-fit py-20 bg-secondary border-r-4 border-r-brand rounded-r-2xl nav_shadow">
        <div>
          <BrandLogo/>
        </div>
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              className="text-[40px] w-[250px] font-semibold px-4  hover:bg-primary hover:text-stone-100 "
              to="/home"
            >
              home
            </Link>
          </li>

          <li>
            <Link
              className="text-[40px] w-[250px] font-semibold  px-4  hover:bg-primary hover:text-stone-100 border-b border-brand pb-5 "
              to="/chatbox"
            >
              chats
            </Link>
          </li>

          <li>
            <Link to="/signUp">
              <Button title="signUp" styling="button_style ml-3 mt-2 " />
            </Link>
          </li>

          <li>
            <Link to="/login">
              <Button title="logIn" styling="button_style ml-3 " />
            </Link>
          </li>
        </ul>
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
