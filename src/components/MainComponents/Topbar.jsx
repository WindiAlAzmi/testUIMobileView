import React from "react";
import { VscBell } from "react-icons/vsc";
import { Link } from "react-router-dom";


const BellComponent = () => {
    return (
      <div className=" flex flex-row relative">
        <div className="rounded-full bg-[#ff4218] w-2 h-2 absolute left-3 "></div>
        <Link to="/notification"><VscBell size="20" /></Link>
      </div>
    );
}


const TitleComponent = () => {
    return (
      <div className=" p-2">
        <h1 className="text-[#ff4218] font-extrabold text-base tracking-wide">
          KerjaYuk!
        </h1>
      </div>
    );
}


const Topbar = () => {
    return (
        <div className="flex flex-row justify-between items-center p-2">
        <TitleComponent/>
         <BellComponent/>
       </div>
    )
}

export default Topbar;