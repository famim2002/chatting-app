import React, { useState } from "react";
import Button from "../../common-components/Button";

const SignUpForm = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [cellNumber, setCellNumber] = useState("");
  let [password, setPassword] = useState("");
  let [passConfirm, setPassConfirm] = useState("");

  let [firstNameErr, setFirstNameErr] = useState("");
  let [lastNameErr, setLastNameErr] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [cellNumberErr, setCellNumberErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [passConfirmErr, setPassConfirmErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      setFirstNameErr("enter your first name...!");
    } else if (!lastName) {
      setLastNameErr("enter your last name...!");
    } else if (!email) {
      setEmailErr("enter your email...!");
    } else if (!cellNumber) {
      setCellNumberErr("enter your phone number...!");
    } else if (!password) {
      setPasswordErr("enter your name...!");
    } else if (!passConfirm) {
      setPassConfirmErr("enter your name...!");
    } else {
      console.log("submitted");
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setFirstNameErr("");
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    setLastNameErr("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handleNumber = (e) => {
    setCellNumber(e.target.value);
    setCellNumberErr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const handlePassConfirm = (e) => {
    setPassConfirm(e.target.value);
    setPassConfirmErr("");
  };

  return (
    <div>
      <div className="px-5 sm:px-10 md:px-25 py-20  bg-secondary rounded-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <div className="flex flex-col">
              <input
                onChange={handleFirstName}
                className={`form_input text-xl font-regularFont font-semibold rounded-full border-2 ${
                  firstNameErr
                    ? "border-red-500 placeholder-red-500"
                    : "border-brand placeholder-brand"
                } focus:border-base focus:placeholder-base`}
                type="text"
                placeholder={firstNameErr || "first name"}
              />
            </div>
            <div className="flex flex-col">
              <input
                onChange={handleLastName}
                className={`form_input text-xl font-regularFont font-semibold rounded-full border-2 ${
                  lastNameErr
                    ? "border-red-500 placeholder-red-500"
                    : "border-brand placeholder-brand"
                } focus:border-base focus:placeholder-base`}
                type="text"
                placeholder={lastNameErr || "last name"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <input
              onChange={handleEmail}
              className={`form_input text-xl font-regularFont font-semibold rounded-full border-2 ${
                emailErr
                  ? "border-red-500 placeholder-red-500"
                  : "border-brand placeholder-brand"
              } focus:border-base focus:placeholder-base`}
              type="email"
              placeholder={emailErr || "email address"}
            />

            <input
              onChange={handleNumber}
              className={`form_input text-xl font-regularFont font-semibold rounded-full border-2 ${
                cellNumberErr
                  ? "border-red-500 placeholder-red-500"
                  : "border-brand placeholder-brand"
              } focus:border-base focus:placeholder-base`}
              type="number"
              placeholder={cellNumberErr || "phone number"}
            />

            <input
              onChange={handlePassword}
              className={`form_input text-xl font-regularFont font-semibold rounded-full border-2 ${
                passwordErr
                  ? "border-red-500 placeholder-red-500"
                  : "border-brand placeholder-brand"
              } focus:border-base focus:placeholder-base`}
              type="password"
              placeholder={passwordErr || "password"}
            />

            <input
              onChange={handlePassConfirm}
              className={`form_input text-xl font-regularFont font-semibold rounded-full border-2 ${
                passConfirmErr
                  ? "border-red-500 placeholder-red-500"
                  : "border-brand placeholder-brand"
              } focus:border-base focus:placeholder-base`}
              type="password"
              placeholder={passConfirmErr || "password confirm"}
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
