import React from "react";

import BackButton from "../componenets/common-components/BackButton";
import SignInForm from "../componenets/sign-in/up/SignInForm";

const Login = () => {
  return (
    <>
      <div>
        <BackButton />
      </div>
      <section className="px-3 py-5">
        <div className="container">
          <div className="flex flex-col gap-6 items-center">
            <div className=" w-[310px] sm:w-[600px]  bg-secondary rounded-2xl">
              <div className=" px-15 py-5 ">
                <h1 className=" text-6xl mx-auto max-w-sm text-center font-headerFont text-base tracking-tight  ">
                  <span className="border-b-2 ">Log-In</span> <br />
                  <span
                    className="text-3xl tracking-normal
                              sm:text-[4xl]"
                  >
                    to <br /> your account
                  </span>
                </h1>
              </div>
            </div>
            <div className="w-[310px] sm:w-[600px] ">
              <SignInForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
