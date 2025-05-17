import React, { useState } from "react";
import Button from "../../common-components/Button";
import { Link } from "react-router"

const SignInForm = () => {
   
let [userName, setUserName] = useState("")
  let [password, setPassword] = useState("")
  
  let [userNameErr, setUserNameErr] = useState("")
  let [passwordErr, setPasswordErr] = useState("")
  
  let handleUserName = (e) => {
    setUserName(e.target.value)
    setUserNameErr("")
  }

  let handlePassword = (e) => {
    setPassword(e.target.value)
    setPasswordErr("")
  }

  let handleSubmit = (e) => {
    e.preventDefault()
    if (!userName) {
      setUserNameErr("enter your user name..!")
    } else if (!password) {
      setPasswordErr("please enter your password..!")
    }
    else {
     console.log("wow");
     
    }
}
  return (
    <div>
      <div className="px-5 sm:px-10 md:px-25 py-20  bg-secondary rounded-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-10">
          <div className="grid grid-cols-1 gap-5">
            <input
              onChange={handleUserName}
              className="form_input  text-xl font-regularFont font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base "
              type="text"
              placeholder="user name"
            />
            <p className="text-[18px] text-red-700">{userNameErr}</p>
            <input
              onChange={handlePassword}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password"
            />
            <p className="text-[18px] text-red-700">{passwordErr}</p>
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
