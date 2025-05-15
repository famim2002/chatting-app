import React from "react";
import Button from "../../common-components/Button";
import { Link } from "react-router"

const SignInForm = () => {
  return (
    <div>
      <div className="px-5 sm:px-10 md:px-25 py-20  bg-secondary rounded-2xl">
        <form className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 gap-5">
           
            <input
              className="form_input  text-xl font-regularFont font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base "
              type="text"
              placeholder="first name"
            />
            <input
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password"
            />
          </div>

          <div className="grid grid-cols-1 gap-10">
            <Button
              title="submit"
              type="submit"
              styling="light_button_style cursor-pointer mx-auto"
            />
            <Link
              className="mx-auto text-[16px] text-text underline px-2 py-1 hover:bg-primary  active:bg-brand"
              to="/"
            >
              forget your password..?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
