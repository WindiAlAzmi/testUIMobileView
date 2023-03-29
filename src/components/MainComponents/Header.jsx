import React from "react";




const CardHeader = () => {
    return (
      <div className="drop-shadow-xl rounded-lg bg-CardHeader w-full mt-2">
        <div className=" flex flex-row justify-between items-center p-2">
          <div className=" flex flex-row justify-center items-center">
            <div className="w-9 bg-white h-9 rounded-full"></div>
          </div>
          <div className="-ml-20 text-white flex flex-col p-2">
            <h3 className="text-[12px] font-semibold">Tabay</h3>
            <h5 className="text-[9px] italic">UI/UX Designer</h5>
          </div>
          <div className=" text-white justify-end flex flex-col p-2">
            <h5 className="text-[9px] italic text-right">Member since</h5>
            <h3 className="text-[10px] font-semibold">01 JUNI 2021</h3>
          </div>
        </div>
        <div className=" flex flex-row">
          <div className=" text-white w-3/4 flex flex-col p-2">
            <h5 className="text-[9px]">Location</h5>
            <h3 className="text-[10px] font-semibold">Kantor Sahid</h3>
          </div>
          <div className=" text-white w-1/4 items-end justify-end  flex flex-col p-2">
            <h5 className="text-[9px] italic">ICD</h5>
            
          </div>
        </div>
      </div>
    );
}


const TextHeader = () => {
    return (
        <div className="">
            <h3 className="text-black text-sm font-semibold ml-2">Hi, Good Morning!</h3>
        </div>
    )
}


const Header = () => {
    return (
      <div className="flex flex-col justify-between items-start px-2">
        <TextHeader />
        <CardHeader />
      </div>
    );
}

export default Header;