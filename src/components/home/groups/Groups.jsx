import React, { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { myGroup } from "../User";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Search from "../../search/Search";

function Groups() {
  const [searchUser, setSearchUser] = useState([]);

  const searchHandler = (e) => {
    let arr = [];
    if (e.target.value.length == 0) {
      setSearchUser([]);
    } else {
      myGroup.filter((item) => {
        if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
          arr.push(item);
          setSearchUser(arr);
        }
      });
    }
  };

  return (
    <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] pr-[10px]  relative">
      <div className="flex justify-between pr-5">
        <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
          my groups
        </h1>
        <div className="flex gap-2 items-center justify-center">
          {/* <FaSearch
            className=" right-[18px] top-[20px] cursor-pointer mt-1"
            size={20}
          /> */}
          <Search onChange={searchHandler} />
          <IoNotificationsSharp
            className=" right-[18px] top-[20px] cursor-pointer"
            size={25}
          />
        </div>
      </div>
      <div className="overflow-y-scroll h-[95%] pr-2">
        {searchUser.length > 0
          ? searchUser.map((Group, index) => (
              <div
                key={index}
                className={`flex items-center mt-[17px] justify-between cursor-pointer border-b-1 border-black/25 last:border-none`}
              >
                <div className="flex items-center mb-[13px]">
                  <img src={Group.img} alt="#friend_img" />
                  <div className="mx-[14px] ">
                    <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                      {Group.title}
                    </h1>
                    <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                      {Group.subtitle}
                    </p>
                  </div>
                </div>
                <p className="capitalize text-black/50 font-regular font-medium text-[10px]">
                  {Group.time}
                </p>
              </div>
            ))
          : myGroup.map((Group, index) => (
              <div
                key={index}
                className={`flex items-center mt-[17px] justify-between cursor-pointer border-b-1 border-black/25 last:border-none`}
              >
                <div className="flex items-center mb-[13px]">
                  <img src={Group.img} alt="#friend_img" />
                  <div className="mx-[14px] ">
                    <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                      {Group.title}
                    </h1>
                    <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                      {Group.subtitle}
                    </p>
                  </div>
                </div>
                <p className="capitalize text-black/50 font-regular font-medium text-[10px]">
                  {Group.time}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Groups;
