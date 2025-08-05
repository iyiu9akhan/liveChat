import React, { useEffect, useState } from "react";
import SideBar from "../components/Layout/SideBar";
import Container from "../components/Layout/Container";
import Friends from "../components/home/friends/Friends";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { FaUser } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";

function Messages() {
  const data = useSelector((state) => state.activeMsgBoxInfo.value);
  const db = getDatabase();

  return (
    <div>
      <Container>
        <div className="md:flex md:h-screen md:py-[35px] gap-[43px] mb-5 md:mb-0 md:justify-between">
          <SideBar />
          <div className="md:flex md:justify-between">
            <div className="md:w-[450px] flex flex-col h-[100%] justify-between">
              {/* <div className="relative">
                <input
                  type="text"
                  className="w-full h-[59px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pl-[65px] border-none focus:outline-none placeholder:text-iconGrayplaceholder:font-regular placeholder:font-medium placeholder:text-base  text-[19px] font-medium font-regular"
                  placeholder="Search"
                />
                <IoSearch
                  className="absolute top-[20px] left-[23px]"
                  size={19}
                  color="#000000"
                />
                <PiDotsThreeOutlineVerticalFill
                  className="absolute right-[23px] top-[20px] cursor-pointer"
                  size={20}
                />
              </div> */}
              <Friends className="md:w-[450px] h-[100%]" />
            </div>
          </div>
          <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:w-[700px] rounded-[20px] px-[50px] flex flex-col justify-between">
            <div className="border-gray-300 border-b-2 flex items-center  justify-between">
              <div className="flex items-center">
                <div className="bg-userBg  h-[50px] w-[50px] md:h-[75px] md:w-[75px] rounded-full flex justify-center items-center cursor-pointer my-[24px] mr-[33px]">
                  <FaUser className="text-[39px] text-white" />
                </div>
                <div>
                  <h1 className="font-semibold font-regular text-[24px]">
                    {data.senderName}
                  </h1>
                  <p className="font-regular font-normal text-[14px] capitalize">
                    lorem
                  </p>
                </div>
              </div>
              <PiDotsThreeOutlineVerticalFill className="text-[25px]" />
            </div>
            <div className="flex-1 overflow-y-auto flex flex-col gap-3 font-regular text-[16px] py-3 hide-scrollbar justify-end group">
              <div className="self-start max-w-[70%]">
                <p className=" bg-gray-300    px-3 py-2 rounded-2xl rounded-bl-[6px] ">
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quasi, optio.
                </p>
              </div>
              <div className="self-end max-w-[70%]">
                <p className=" bg-sideBar   text-white px-3 py-2 rounded-2xl rounded-br-[6px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  maiores!lorem5
                </p>
              </div>
            </div>
            <div className="border-gray-300 border-t-2 flex justify-between items-center">
              <div className="w-[90%] relative flex items-center">
                <input
                  type="text"
                  className="h-[45px] w-full bg-[#F1F1F1] rounded-[10px] my-[35px] outline-0 pl-[20px] pr-[110px]  font-regular"
                />
                <div className="absolute flex gap-5 items-center right-5 opacity-60">
                  <MdOutlineEmojiEmotions
                    size={27}
                    className="cursor-pointer"
                  />
                  <IoCameraOutline size={27} className="cursor-pointer" />
                </div>
              </div>
              <div
                className="p-[10px] bg-sideBar rounded-[10px] cursor-pointer"
                title="send"
              >
                <FaTelegramPlane className="text-[25px] text-white" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Messages;
