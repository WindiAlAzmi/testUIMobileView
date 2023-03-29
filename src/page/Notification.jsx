import React from "react";
import { BiArrowBack } from "react-icons/bi";

import { FaCoins } from "react-icons/fa";
import { GiPill } from "react-icons/gi";
import { BsAlarm } from "react-icons/bs";
import { Link } from "react-router-dom";


const CardData = ({dt}) => {
    return (
      <div className={`${dt.title !== 'sickness' ? 'bg-blue-100' : 'bg-white'} p-4 flex flex-row gap-2`}>
        <div className="rounded-lg flex p-3 h-1/2 flex-row bg-CardHeader">
          {dt.title === "sickness" && <GiPill size="20" color="yellow" />}
          {dt.title === "overtime" && <BsAlarm size="20" color="yellow" />}
          {dt.title === "Reimbursement" && <FaCoins size="20" color="yellow" />}
        </div>

        <div className=" flex flex-col gap-2">
          <div className="flex flex-row justify-between ">
            <h3 className="font-bold text-[12px]">{dt.title}</h3>
            <h4 className="text-gray-500 font-medium text-[9px]">Today</h4>
          </div>
          <div className="flex flex-row ">
            <h4 className="text-[12px] text-black">
              your submission "Description" has been rejected, please check your
              detail
            </h4>
          </div>
        </div>
      </div>
    );
}



const CardNotication = () => {
    const data = [
      { id: 1, title: "sickness" },
      { id: 2, title: "overtime" },
      { id: 3, title: "Reimbursement" },
    ];
    return (
      <div className=" flex flex-col">
        {data.map((dt) => (
          <CardData dt={dt}/>
        ))}
      </div>
    );
}

const TopNotification = () => {
    return (
      <div className="bg-white flex border border-white border-b-gray-200 drop-shadow-lg flex-row justify-start p-3 gap-3 items-center">
        <Link to="/">
          <BiArrowBack size="20" />
        </Link>

        <h3 className="text-lg font-bold text-[#ff4218]">Notification</h3>
      </div>
    );
}





const Notification = () => {
    return (
        <div>
            <TopNotification/>
            <CardNotication/>
        </div>
    )
}

export default Notification;