import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-center gap-20 py-10">
        <li>
          <Link  className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 " to="/home">home</Link>
        </li>
        <li>
          <Link className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 "  to="/chatbox">chats</Link>
        </li>
        <li>
          <Link className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 "  to="/signUp">sign-up</Link>
        </li>
        <li>
          <Link className="text-[40px] font-semibold px-4 py-1 hover:bg-stone-600 hover:text-stone-100 "  to="/Login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
