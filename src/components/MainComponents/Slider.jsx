import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



const ContainerSlider = () => {
    return (
      <>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <CardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <CardSlider />
          </SwiperSlide>
          <SwiperSlide>
            <CardSlider />
          </SwiperSlide>
        </Swiper>
      </>
    );
}

const CardSlider = () => {
    return (
      <div className="border h-40  border-gray-400 drop-shadow-lg bg-white rounded-xl flex flex-col p-2">
        <div className=" flex flex-row justify-between px-2">
          <div className=" flex flex-row items-center gap-2">
            <div className="rounded-full bg-[#ff4218] w-8 h-8"></div>
            <h3 className="text-[#ff4218] text-[12px] font-bold">
              Ana Riswati
            </h3>
          </div>
          <div className="flex flex-col items-end justify-center">
            <h4 className="text-black text-[10px] font-bold">Senin</h4>
            <h4 className="text-black text-[10px] font-bold">
              30 Mei 2022
            </h4>
          </div>
        </div>

        <div className="p-2 mt-2  flex flex-col items-start m-0">
          <h4 className="text-black font-medium text-[14px]">
            Kalimat 1 - lorem ipsum{" "}
          </h4>
          <h4 className="text-black font-medium text-[14px]">
            Kalimat 2 - lorem ipsum{" "}
          </h4>
          <h4 className="text-black font-medium text-[14px]">
            Kalimat 3 - lorem ipsum{" "}
          </h4>
          <h4 className="text-black font-medium text-[14px]">
            Kalimat 4 - lorem ipsum{" "}
          </h4>
        </div>
      </div>
    );
}



const TextSlider = () => {
  return (
    <div className=" text-black">
      <h3 className="font-bold text-black text-[14px] ml-2">
        PCS News
      </h3>
    </div>
  );
};


const Slider = () => {
    return (
      <div className="flex flex-col justify-between gap-2 p-2 mt-2 ">
        <TextSlider />
        {/* <div className="p-4">
          <CardSlider />
        </div> */}
        <ContainerSlider/>
      </div>
    );
}

export default Slider;