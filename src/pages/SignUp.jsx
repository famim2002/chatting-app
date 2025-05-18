import React from "react";
import SignUpForm from "../componenets/sign-in/up/SignUpForm"

import BackButton from "../componenets/common-components/BackButton"
import { LiaCrownSolid } from "react-icons/lia";


const SignUp = () => {

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
                <div className="flex  justify-center pr-6">
                  <LiaCrownSolid className="text-4xl text-brand rotate-320 " />
                  <h1 className=" text-6xl max-w-sm text-center font-headerFont text-base tracking-tight  ">
                    <span className="border-b-2 ">sign-up</span> <br />
                    <span
                      className="text-3xl tracking-normal
                                sm:text-[4xl]"
                    >
                      your account
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-[310px] sm:w-[600px] ">
              <SignUpForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
