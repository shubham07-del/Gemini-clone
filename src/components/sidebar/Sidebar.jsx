import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { ContextData } from "../../context/ContextProvider";

const Sidebar = () => {
  // Automatically open on desktop, but closed by default on mobile
  const [extended, setExtended] = useState(window.innerWidth >= 640);
  const { onSent, prevPrompt, newChat} = useContext(ContextData);


  const loadPropmt = async (prompt)=>{
    await onSent(prompt)
  }
  return (
    <div
      className={`sidebar flex absolute sm:relative z-50 min-h-screen py-6 flex-col justify-between transition-all duration-300 ease-in-out ${extended ? "w-[280px] sm:w-[350px] px-4 shadow-lg sm:shadow-none bg-[#f0f4f9]" : "w-[65px] sm:w-[90px] px-3 sm:px-4 bg-transparent sm:bg-[#f0f4f9]"}`}
    >
      <div>
        {/* Menu Icon */}
        <img
          onClick={() => {
            setExtended((prev) => !prev);
          }}
          className="block cursor-pointer ml-5 shrink-0"
          src={assets.menu_icon}
          alt=""
        />

        {/* New Chat Button */}
        <div
        onClick={()=>{
            newChat()
        }}
          className={`mt-6 items-center px-4 py-2 text-gray-700 font-medium cursor-pointer bg-[#e6eaf1] text-xl rounded-4xl w-fit transition-all duration-300 ${extended ? "flex gap-3" : "hidden sm:flex gap-0"}`}
        >
          <img src={assets.plus_icon} alt="" className="shrink-0" />
          <p
            className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${extended ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"}`}
          >
            New chat
          </p>
        </div>

        {/* Recent Chats Section */}
        <div
          className={`flex flex-col overflow-hidden transition-all duration-300 ${extended ? "max-h-[400px] opacity-100 mt-10" : "max-h-0 opacity-0 mt-0"}`}
        >
          <p className="mb-5 text-xl font-medium pl-2 text-gray-600">Chats</p>
          {prevPrompt.map((elem, idx) => {
            return (
              <div onClick={() => loadPropmt(elem)} key={idx} className="flex items-center text-[#282828] px-6 py-3 gap-3 text-xl hover:bg-[#e2e6eb] rounded-4xl cursor-pointer w-fit overflow-hidden">
                <img src={assets.message_icon} alt="" className="shrink-0" />
                <p className="whitespace-nowrap">{elem.slice(0,28)}...</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Options */}
      <div className={`flex-col ${extended ? "flex" : "hidden sm:flex"}`}>
        <div
          className={`flex items-center text-[#282828] px-6 py-3 text-xl hover:bg-[#e2e6eb] rounded-4xl cursor-pointer w-fit transition-all duration-300 ${extended ? "gap-3" : "gap-0"}`}
        >
          <img src={assets.question_icon} alt="" className="shrink-0" />
          <p
            className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${extended ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"}`}
          >
            Help
          </p>
        </div>
        <div
          className={`flex items-center text-[#282828] px-6 py-3 text-xl hover:bg-[#e2e6eb] rounded-4xl cursor-pointer w-fit transition-all duration-300 ${extended ? "gap-3" : "gap-0"}`}
        >
          <img src={assets.history_icon} alt="" className="shrink-0" />
          <p
            className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${extended ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"}`}
          >
            Activity
          </p>
        </div>
        <div
          className={`flex items-center text-[#282828] px-6 py-3 text-xl hover:bg-[#e2e6eb] rounded-4xl cursor-pointer w-fit transition-all duration-300 ${extended ? "gap-3" : "gap-0"}`}
        >
          <img src={assets.setting_icon} alt="" className="shrink-0" />
          <p
            className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${extended ? "max-w-[150px] opacity-100" : "max-w-0 opacity-0"}`}
          >
            Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
