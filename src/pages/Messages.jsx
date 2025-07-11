import React from "react";
import SideBar from "../components/Layout/SideBar";
import Container from "../components/Layout/Container";
import Friends from "../components/home/friends/Friends";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

function Messages() {
  return (
    <div>
      <Container>
        <div className="md:flex md:h-screen md:py-[35px] gap-[43px] mb-5 md:mb-0">
          <SideBar />
          <div className="flex">
            <div className="w-[427px] flex flex-col h-[100%] justify-between">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-[59px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pl-[65px] border-none focus:outline-none placeholder:text-iconGray placeholder:font-regular placeholder:font-medium placeholder:text-base text-primary text-[19px] font-medium font-regular capitalize"
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
              </div>
              <Friends className="md:w-[427px] h-[90%]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Messages;
