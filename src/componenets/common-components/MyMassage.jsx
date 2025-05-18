import React from "react";

const MyMassage = ({ myMassage }) => {
  return (
    <div className="ml-auto ">
      <h2 className="text-[18px] max-w-2xs text-primary bg-base py-1.5 pr-3 pl-5 rounded-bl-2xl rounded-sm shadow-2xl font-regularFont  ">{myMassage}</h2>
    </div>
  );
};

export default MyMassage;
