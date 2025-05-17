import React, { useState } from "react";
import Button from "../../common-components/Button"

const SignUpForm = () => {
  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")
  let [email, setEmail] = useState("")
  let [cellNumber, setCellNumber] = useState("")
  let [password, setPassword] = useState("")
  let [passConfirm, setPassConfirm] = useState("")

  let [firstNameErr, setFirstNameErr] = useState("")
  let [lastNameErr, setLastNameErr] = useState("")
  let [emailErr, setEmailErr] = useState("")
  let [cellNumberErr, setCellNumberErr] = useState("")
  let [passwordErr, setPasswordErr] = useState("")
  let [passConfirmErr, setPassConfirmErr] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName) {
      setFirstNameErr("enter your first name...!")
    } else if (!lastName) {
      setLastNameErr("enter your last name...!")
    } else if (!email) {
      setEmailErr("enter your email...!")
    } else if (!cellNumber) {
      setCellNumberErr("enter your phone number...!")
    } else if (!password) {
     setPasswordErr("enter your name...!")
    } else if (!passConfirm) {
      setPassConfirmErr("enter your name...!")
    } else {
      console.log("submitted");
      
    }
  }


  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    setFirstNameErr('')
  }
  const handleLastName = (e) => {
       setLastName(e.target.value)
       setLastNameErr("");
  }
  const handleEmail = (e) => {
       setEmail(e.target.value)
       setEmailErr("");
  }
  const handleNumber = (e) => {
       setCellNumber(e.target.value)
       setCellNumberErr("");
  }
  const handlePassword = (e) => {
       setPassword(e.target.value)
       setPasswordErr("");
  }
  const handlePassConfirm = (e) => {
       setPassConfirm(e.target.value)
       setPassConfirmErr("");
  }

  
  
  return (
    <div>
      <div className="px-5 sm:px-10 md:px-25 py-20  bg-secondary rounded-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <div
            className="grid grid-cols-1 gap-2  
            sm:grid-cols-2"
          >
            <input
              onChange={handleFirstName}
              className="form_input  text-xl font-regularFont font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base "
              type="text"
              placeholder="first name"
            />
            <p>{firstNameErr}</p>
            <input
              onChange={handleLastName}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="text"
              placeholder="last name"
            />
            <p>{lastNameErr}</p>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <input
              onChange={handleEmail}
              className="form_input  text-xl font-regularFont  font-semibold rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base"
              type="email"
              placeholder="email address"
            />
            <p>{emailErr}</p>
            <input
              onChange={handleNumber}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base "
              type="number"
              placeholder="phone number"
            />
            <p>{cellNumberErr}</p>
            <input
              onChange={handlePassword}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password"
            />

            <p>{passwordErr}</p>
            <input
              onChange={handlePassConfirm}
              className="form_input  text-xl font-regularFont font-semibold  rounded-full border-2 border-brand placeholder-brand  focus:border-base focus:placeholder-base  "
              type="password"
              placeholder="password confirm"
            />
            <p>{passConfirmErr}</p>
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
