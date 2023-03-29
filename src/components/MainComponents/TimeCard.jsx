import React from "react";
import {BiTime} from "react-icons/bi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import {  WiTime6} from "react-icons/wi";



const TextCard = () => {
    return (
      <div className=" flex flex-row justify-between">
        <div className=" w-1/3 flex flex-col items-center p-2 gap-1">
          <div className="flex flex-row ">
            <BiTime size="29" color="#ff4218" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h4 className="font-bold text-[12px]">08:30</h4>
            <h5 className="text-[9px] font-semibold">Check In</h5>
          </div>
        </div>

        <div className=" w-1/3 flex flex-col items-center p-2 gap-2">
          <div className="flex flex-row ">
            <RxCounterClockwiseClock size="24" color="#ff4218" />
          </div>
          <div className="flex flex-col items-center  gap-1">
            <h4 className="font-extrabold text-[12px] text-[#ff4218]">03:00:00</h4>
            <h5 className="text-[9px] font-semibold">Working Hours</h5>
          </div>
        </div>

        <div className=" w-1/3 flex flex-col items-center p-2 ">
          <div className="flex flex-row ">
            <WiTime6 size="29" color="#ff4218" />
          </div>
          <div className="flex flex-col items-center  gap-1">
            <h4 className="font-bold text-[12px]">--:--</h4>
            <h5 className="text-[9px] font-semibold">Check Out</h5>
          </div>
        </div>
      </div>
    );
}

const TextTime = () => {
    return (
        <div className=" text-black">
            <h3 className="font-bold text-black text-[14px] ml-2">
                Today's activity
            </h3>
        </div>
    )
}



const TimeCard = () => {
    return (
      <div className="flex flex-col justify-between gap-2 p-2 mt-2 ">
        <TextTime />
        <TextCard/>
      </div>
    );
}

export default TimeCard;