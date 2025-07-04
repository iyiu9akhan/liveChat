import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { groupList } from "../User";

function GroupList() {
  return (
    <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[20px] md:w-[427px] h-full relative overflow-y-scroll">
      <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
        group list
      </h1>
      <PiDotsThreeOutlineVerticalFill
        className="absolute right-[23px] top-[20px] cursor-pointer mt-1"
        size={20}
      />
      <div>
        {groupList.map((group, index) => (
          <div
            key={index}
            className="flex items-center mt-[17px] justify-between"
          >
            <div className="flex items-center">
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
            <div className="bg-primary rounded-[5px] h-[23px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer">
              <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[20px]">
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
