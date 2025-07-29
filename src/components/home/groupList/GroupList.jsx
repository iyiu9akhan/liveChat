import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { groupList } from "../User";
import { MdGroupAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function GroupList() {
  return (
    <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[20px] md:w-[427px] h-full relative">
      <div className="flex justify-between pr-6">
        <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
          group list
        </h1>
        <div className="flex gap-7 items-center justify-center">
          <FaSearch
            className=" right-[18px] top-[20px] cursor-pointer mt-1"
            size={20}
          />
          <MdGroupAdd
            className=" right-[18px] top-[20px] cursor-pointer mt-1"
            size={25}
          />
        </div>
      </div>
      <div className="overflow-y-scroll h-[97%] pr-2">
        {groupList.map((group, index) => (
          <div
            key={index}
            className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none"
          >
            <div className="flex items-center mb-[13px]">
              <img
                src={group.img}
                alt="#group_img"
                className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
              />
              <div className="mx-[14px] ">
                <h1 className="capitalize font-regular text-[18px] text-black font-semibold">
                  {group.title}
                </h1>
                <p className="font-regular font-medium text-[14px] text-[#4D4D4D]">
                  {group.subtitle}
                </p>
              </div>
            </div>
            <div className="bg-[#3D77BE] hover:bg-[#3164A5] rounded-[5px] h-[23px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer">
              <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[16px]">
                join
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupList;
