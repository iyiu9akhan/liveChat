import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import { myGroup } from "../User";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdGroupAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Search from "../../search/Search";
import { getDatabase, onValue, ref } from "firebase/database";
import random_profile from "../../../assets/home/random_profile.jpg";
import { useSelector } from "react-redux";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { MdGroups } from "react-icons/md";

function Groups() {
  const data = useSelector((state) => state.userInfo.value.user);
  const [searchUser, setSearchUser] = useState([]);
  const [myGroup, setMyGroup] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const groupRef = ref(db, "groups/");
    onValue(groupRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().adminId) {
          arr.push(item.val());
        }
      });
      setMyGroup(arr);
    });
  }, []);

  console.log(myGroup);

  const searchHandler = (e) => {
    let arr = [];
    if (e.target.value.length == 0) {
      setSearchUser([]);
    } else {
      myGroup.filter((item) => {
        if (
          item.groupName.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          arr.push(item);
          setSearchUser(arr);
        }
      });
    }
  };

  return (
    <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] py-[22px]  relative">
      <div className="flex justify-between items-center px-[22px]">
        <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
          my groups
        </h1>
        <div className="flex gap-2 items-center justify-center">
          {/* <FaSearch
            className=" right-[18px] top-[20px] cursor-pointer mt-1"
            size={20}
          /> */}
          <Search onChange={searchHandler} />
          {/* <IoNotificationsSharp
            className=" right-[18px] top-[20px] cursor-pointer text-sideBar"
            size={25}
          /> */}
        </div>
      </div>
      <div className="overflow-y-scroll h-[95%] pr-2">
        {searchUser.length > 0 ? (
          searchUser.map((Group, index) => (
            <div
              key={index}
              className={`flex items-center py-[13px] justify-between cursor-pointer border-b-1 border-black/25 last:border-none hover:bg-[#c3c3c3]/15 hover:rounded-[10px] rounded-[10px] pl-[22px] pr-[11px]`}
            >
              <div className="flex items-center ">
                {/* <img
                    src={random_profile}
                    alt="#"
                    className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                  /> */}
                <div className="bg-groupBg  h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full flex justify-center items-center">
                  <MdGroups className="text-[35px] text-white" />
                </div>
                <div className="mx-[14px] ">
                  <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                    {Group.groupName}
                  </h1>
                  <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                    <p>demo msg</p>
                  </p>
                </div>
              </div>
              <div
                title="Join Request"
                className="bg-confirmBtn hover:bg-hoverConfirmBtn rounded-[5px] h-[25px] w-[25px] md:h-[30px] md:w-[30px] flex justify-center items-center cursor-pointer"
              >
                <p className="capitalize text-white font-regular font-semibold text-[13px] md:text-[16px]">
                  <MdOutlineNotificationAdd className="text-white text-[20px]" />
                </p>
              </div>
            </div>
          ))
        ) : myGroup.length === 0 ? (
          <p className="text-center text-gray-500 mt-6 text-[17px] font-regular capitalize">
            No group exists
          </p>
        ) : (
          myGroup.map((Group, index) => (
            <div
              key={index}
              className={`flex items-center py-[13px] justify-between cursor-pointer border-b-1 border-black/25 last:border-none hover:bg-[#c3c3c3]/15 hover:rounded-[10px] rounded-[10px] pl-[22px] pr-[11px]`}
            >
              <div className="flex items-center">
                {/* <img
                    src={random_profile}
                    alt="#"
                    className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                  /> */}
                <div className="bg-groupBg  h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full flex justify-center items-center">
                  <MdGroups className="text-[35px] text-white" />
                </div>
                <div className="mx-[14px] ">
                  <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                    {Group.groupName}
                  </h1>
                  <div className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                    <p>demo msg</p>
                  </div>
                </div>
              </div>
              <div
                title="Join Request"
                className="bg-confirmBtn hover:bg-hoverConfirmBtn rounded-[5px] h-[25px] w-[25px] md:h-[30px] md:w-[30px] flex justify-center items-center cursor-pointer"
              >
                <p className="capitalize text-white font-regular font-semibold text-[13px] md:text-[16px]">
                  <MdOutlineNotificationAdd className="text-white text-[20px]" />
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Groups;
