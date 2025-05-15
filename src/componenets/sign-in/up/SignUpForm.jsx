import React from "react";
import Button from "../../common-components/Button"

const SignUpForm = () => {
  return (
    <div>
      <div className="px-5 sm:px-10 md:px-25 py-20  bg-secondary rounded-2xl">
        <form className="grid grid-cols-1 gap-5">
          <div
            className="grid grid-cols-1 gap-2  
                          sm:grid-cols-2"
          >
            <input
              className="form_input  text-xl font-regularFont font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base "
              type="text"
              placeholder="first name"
            />
            <input
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="text"
              placeholder="last name"
            />
          </div>
          <div className="grid grid-cols-1 gap-5">
            <input
              className="form_input  text-xl font-regularFont  font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="email"
              placeholder="email address"
            />
            <input
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="number"
              placeholder="phone number"
            />
            <input
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password"
            />
            <input
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password confirm"
            />
          </div>

          <div
            className="grid grid-cols-1
                          sm:grid-cols-2 justify-items-center gap-5"
          >
            <Button
              title="submit"
              type="submit"
              styling="light_button_style cursor-pointer"
            />
            <Button
              title="reset"
              type="reset"
              styling="button_style cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
