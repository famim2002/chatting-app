import React from "react";
import Users from "../componenets/chatBox/Users";

const ChatBox = () => {
  return (
    <section className="py-5 rounded-r-2xl shadow-2xl">
      <div className="flex flex-col justify-center gap-5">
        <div className="px-3 pb-3">
          <input
            type="text"
            className="w-[300px] h-[50px] form_input border-2 text-2xl border-brand rounded-2xl focus:shadow-2xl focus:border-text"
            placeholder="search"
            aria-label="Search users"
          />
        </div>

       
        <div className="h-[820px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-1 gap-1 border-t border-brand pt-5">
            <Users
              image="/shimanto-image.jpg"
              name="shimanto"
              time="10.00 am"
              message="hi"
            />
            <Users
              image="/sample-image (1).jpg"
              name="john doe"
              time="1.30 pm"
              message="hi"
            />
            <Users
              image="/sample-image (6).jpg"
              name="kachi chima"
              time="1.39 pm"
              message="hi"
            />
            <Users
              image="/johnny-image.jpg"
              name="johnny da"
              time="8.10 am"
              message="hi"
            />
            <Users
              image="/sample-image (4).jpg"
              name="teacher"
              time="5.10 am"
              message="hi"
            />
            <Users
              image="/sample-image (7).jpg"
              name="teni dhachi"
              time="10.29 pm"
              message="hi"
            />
            <Users
              image="/sample-image (3).jpg"
              name="jessy mihan"
              time="9.37 am"
              message="hi"
            />
            <Users
              image="/sample-image (11).jpg"
              name="bou"
              time="6.11 pm"
              message="i love you"
            />
            <Users
              image="/sample-image (8).jpg"
              name="kareem"
              time="8.22 pm"
              message="hi"
            />
            <Users
              image="/sample-image (10).jpg"
              name="joverostki"
              time="10.00 pm"
              message="hi"
            />
            <Users
              image="/sample-image (5).jpg"
              name="unishama"
              time="9.30 am"
              message="hi"
            />

            {/* needs to be changed */}

            <Users
              image="/sample-image (12).jpg"
              name="teacher"
              time="5.10 am"
              message="hi"
            />
            <Users
              image="/sample-image (13).jpg"
              name="teni dhachi"
              time="10.29 pm"
              message="hi"
            />
            <Users
              image="/sample-image (14).jpg"
              name="jessy mihan"
              time="9.37 am"
              message="hi"
            />
            <Users
              image="/sample-image (15).jpg"
              name="bou"
              time="6.11 pm"
              message="i love you"
            />
            <Users
              image="/sample-image (16).jpg"
              name="kareem"
              time="8.22 pm"
              message="hi"
            />
            <Users
              image="/sample-image (17).jpg"
              name="joverostki"
              time="10.00 pm"
              message="hi"
            />
            <Users
              image="/sample-image (18).jpg"
              name="unishama"
              time="9.30 am"
              message="hi"
            />
           
            <Users
              image="/sample-image (2).jpg"
              name="unishama"
              time="9.30 am"
              message="hi"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
