import React from "react";
import Users from "../componenets/chatBox/Users"

const ChatBox = () => {
  return (
    <section className="py-5 rounded-r-2xl shadow-2xl ">
      <div className="flex flex-col justify-center gap-5">
        <div className="px-3 pb-3">
          <input
            type="text"
            className="w-[300px] h-[50px] form_input border-2 text-2xl  border-brand rounded-2xl focus:shadow-2xl  focus:border-text "
            placeholder="search"
          />
        </div>
        <div className="grid grid-cols-1 gap-1 border-t border-brand pt-5">
       
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
