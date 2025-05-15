import React from "react";
import SignUpForm from "../componenets/sign-in/up/SignUpForm"

const SignUp = () => {
  return (
    <section className="px-3 py-28">
      <div className="container">
        <div className="flex flex-col gap-6 items-center">
          <div className=" w-[310px] sm:w-[600px]  bg-secondary rounded-2xl">
            <div className=" px-15 py-5 ">
              <h1 className=" text-6xl mx-auto max-w-sm text-center font-headerFont text-base tracking-tight  ">
                <span className="border-b-2 ">sign-up</span> <br />{" "}
                <span className="text-3xl tracking-normal
                                sm:text-[4xl]">your account</span>
              </h1>
            </div>
          </div>
          <div className="w-[310px] sm:w-[600px] ">
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
