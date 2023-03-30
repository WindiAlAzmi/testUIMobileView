import React from "react";
import { faker } from "@faker-js/faker";


const CardUser = () => {
    const imgPerson = faker.image.avatar();
    return (
      <div className="bg-white rounded-xl drop-shadow-lg -mt-4 flex flex-row justify-center p-4 relative items-center">
        <div className=" flex flex-row relative ml-10 justify-center">
          <div className=" flex flex-col items-center z-0 relative">
            <div className="w-8 h-8 border border-black rounded-full ">
              <img src={imgPerson} alt="person" className="rounded-full" />
            </div>
            <h3 className="text-[9px] text-black font-bold">Jefri</h3>
            <h4 className="text-[8px] text-black">user</h4>
          </div>

          <div className=" flex flex-col items-center z-10 relative right-2 ">
            <div className="w-8 h-8 border border-black rounded-full">
              <img src={imgPerson} alt="person" className="rounded-full" />
            </div>
            <h3 className="text-[9px] text-black font-bold">tin</h3>
            <h4 className="text-[8px] text-black">user</h4>
          </div>

          <div className=" flex flex-col items-center z-20 relative right-4 ">
            <div className="w-8 h-8 border border-black rounded-full">
              <img src={imgPerson} alt="person" className="rounded-full" />
            </div>
            <h3 className="text-[9px] text-black font-bold">Jefri</h3>
            <h4 className="text-[8px] text-black">user</h4>
          </div>

          <div className=" flex flex-col items-center z-30 relative right-6 ">
            <div className="w-8 h-8 border border-black rounded-full">
              <img src={imgPerson} alt="person" className="rounded-full" />
            </div>
            <h3 className="text-[9px] text-black font-bold">Jefri</h3>
            <h4 className="text-[8px] text-black">user</h4>
          </div>

          <div className=" flex flex-col items-center z-40 relative right-8">
            <div className="w-8 h-8 border border-black rounded-full">
              <img src={imgPerson} alt="person" className="rounded-full" />
            </div>
            <h3 className="text-[9px] text-black font-bold">Jefri</h3>
            <h4 className="text-[8px] text-black">user</h4>
          </div>

          <div className=" flex flex-col items-center z-50 relative right-10">
            <div className="w-8 h-8 border border-black rounded-full">
              <img src={imgPerson} alt="person" className="rounded-full" />
            </div>
            <h3 className="text-[9px] text-black font-bold">Jefri</h3>
            <h4 className="text-[8px]  text-black">user</h4>
          </div>

          <div className=" flex flex-col items-center z-0 relative right-12">
            <div className="w-8 h-8 border  border-black rounded-full bg-pink-800  text-white flex flex-col text-center justify-end">
              <h4 className="text-[10px]  font-medium">10</h4>
              <h4 className="text-[9px] font-medium">More</h4>
            </div>
          </div>
        </div>
      </div>
    );
}



const TextUser = () => {
  return (
    <div className=" text-black">
      <h3 className="font-bold text-black text-[14px] ml-2">
        Online
      </h3>
    </div>
  );
};



const UserOnline = () => {
    return (
      <div className="flex flex-col justify-between gap-2 p-2 mt-2 ">
        <TextUser />
        <div className="p-3">
            <CardUser/>
        </div>
       
      </div>
    );
}

export default UserOnline;