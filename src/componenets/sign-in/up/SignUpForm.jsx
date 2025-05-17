import React, { useState } from "react";
import Button from "../../common-components/Button"

const SignUpForm = () => {
  let [firstName, setFirstName] = useState()
  let [lastName, setLastName] = useState()
  let [emailName, setEmail] = useState()
  let [cellNumber, setCellNumber] = useState()
  let [password, setPassword] = useState()
  let [passConfirm, setPassConfirm] = useState()

  let [firstNameErr, setFirstNameErr] = useState()
  let [lastNameErr, setLastNameErr] = useState()
  let [emailNameErr, setEmailErr] = useState()
  let [cellNumberErr, setCellNumberErr] = useState()
  let [passwordErr, setPasswordErr] = useState()
  let [passConfirmErr, setPassConfirmErr] = useState()


  return (
    <div>
      <div className="px-5 sm:px-10 md:px-25 py-20  bg-secondary rounded-2xl">
        <form className="grid grid-cols-1 gap-5">
          <div
            className="grid grid-cols-1 gap-2  
                          sm:grid-cols-2"
          >
            <input  onChange={handle}
              className="form_input  text-xl font-regularFont font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base "
              type="text"
              placeholder="first name"
            />
            <p>{}</p>
            <input  onChange={handle}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="text"
              placeholder="last name"
            />
            <p>{}</p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <input  onChange={handle}
              className="form_input  text-xl font-regularFont  font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="email"
              placeholder="email address"
            /> 
            <p>{}</p>
            <input onChange={handle}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="number"
              placeholder="phone number"
            />
            <p>{}</p>
            <input  onChange={handle}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password"
            />
            <p>{}</p>
            <input  onChange={handle}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password confirm"
            />
            <p>{}</p>
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
