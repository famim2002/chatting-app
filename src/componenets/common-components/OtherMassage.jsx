import React from 'react'

const OtherMassage = ({otherMassage}) => {
  return (
    <div className="mr-auto">
      <h2 className="text-[18px] max-w-2xs text-primary bg-base py-1.5 pr-5 pl-3 rounded-br-2xl rounded-sm shadow-2xl font-regularFont  ">
        {otherMassage}
      </h2>
    </div>
  );
}

export default OtherMassage
