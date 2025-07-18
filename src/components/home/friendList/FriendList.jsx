import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { friendRqst } from "../User";

function FriendList() {
  return (
    <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:shadow-none md:w-[427px]  rounded-[20px] h-[48%] p-[20px] relative overflow-y-scroll">
      <div>
        <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
          friend request
        </h1>
        <PiDotsThreeOutlineVerticalFill
          className="absolute right-[23px] top-[20px] cursor-pointer mt-1"
          size={20}
        />
        <div>
          {friendRqst.map((friendRqst, index) => (
            <div
              key={index}
              className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none"
            >
              <div className="flex items-center mb-[13px]">
                <img
                  src={friendRqst.img}
                  alt="#profile_img"
                  className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
                />
                <div className="mx-[14px]">
                  <h1 className="capitalize font-regular text-[18px] text-black font-semibold">
                    {friendRqst.title}
                  </h1>
                  <p className="font-regular font-medium text-[14px] text-[#4D4D4D] capitalize">
                    {friendRqst.subtitle}
                  </p>
                </div>
              </div>
              <div className="bg-primary rounded-[5px] h-[25px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer">
                <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[16px]">
                  Accept
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendList;
