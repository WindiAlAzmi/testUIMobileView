import React from "react";
import { AiOutlineHome, AiOutlineSetting  } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { ImExit  } from "react-icons/im";




const DataNavbar = () => {
    return (
      <div className="border border-gray-300 relative drop-shadow-xl flex flex-row justify-between">
        <div className=" flex flex-row gap-2">
          <div className="  p-2 gap-1 flex flex-col items-center">
            <AiOutlineHome size="18" color="#ff4218" />
            <h3 className="text-[10px] text-[#ff4218]">Home</h3>
          </div>
          <div className="p-2 gap-1 flex flex-col items-center">
            <BsCalendarCheck size="18" color="gray" />
            <h3 className="text-[10px] text-gray-600">Attandance</h3>
          </div>
        </div>

        <div className=" absolute left-32 -top-6 flex flex-col items-center">
          <div className="rounded-full  flex flex-row items-center justify-center bg-[#ff4218] h-14 w-14">
            <ImExit size="30" color="white" />
          </div>
          <h3 className="text-[10px] font-bold text-[#ff4218]">Check Out</h3>
        </div>
        <div className=" flex flex-row gap-2">
          <div className=" p-2 gap-1 flex flex-col items-center">
            <CgNotes size="18" color="gray" />
            <h3 className="text-[10px] text-gray-600">Form</h3>
          </div>
          <div className=" p-2 gap-1 flex flex-col items-center">
            <AiOutlineSetting size="18" color="gray" />
            <h3 className="text-[10px] text-gray-600">Settings</h3>
          </div>
        </div>
      </div>
    );
}



const Navbar = () => {
    return (
      <div className="flex flex-col justify-between mt-6 ">
       <DataNavbar/>
      </div>
    );
}

export default Navbar;