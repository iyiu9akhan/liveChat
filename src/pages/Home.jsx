import React from "react";
import Container from "../components/Layout/Container";
import profilePic from "../assets/home/profilePic.jpg";
import { GoHomeFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

function Home() {
  return (
    <>
      <Container>
        <div className="flex h-screen py-[35px]">
          <div className="w-[186px] h-full bg-primary rounded-[20px] flex flex-col  py-[38px] justify-between">
            <div className="mb-[78px] flex justify-center">
              <img
                src={profilePic}
                alt="#profile_pic"
                className="h-[100px] w-[100px] rounded-full object-cover cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-end relative">
              <div className="relative cursor-pointer h-[89px] text-[#C3C3C3] hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] w-[161px] rounded-l-[20px] flex items-center pl-[45px] group">
                <GoHomeFill size={46} />
                <div className="absolute w-[8px] h-[89px] bg-[#1e1e1e] top-0 right-0 rounded-l-[25px] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
              </div>
              <div className="relative cursor-pointer h-[89px] text-[#C3C3C3] hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] w-[161px] rounded-l-[20px] flex items-center pl-[45px] group">
                <AiFillMessage size={46} />
                <div className="absolute w-[8px] h-[89px] bg-[#1e1e1e] top-0 right-0 rounded-l-[25px] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
              </div>
              <div className="relative cursor-pointer h-[89px] text-[#C3C3C3] hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] w-[161px] rounded-l-[20px] flex items-center pl-[45px] group">
                <IoSettingsSharp size={46} />
                <div className="absolute w-[8px] h-[89px] bg-[#1e1e1e] top-0 right-0 rounded-l-[25px] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
              </div>
            </div>
            <div className="flex items-end flex-col">
              <div className="relative cursor-pointer h-[89px] text-[#C3C3C3] hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] w-[161px] rounded-l-[20px] flex items-center pl-[45px] group">
                <FaSignOutAlt size={46} />
                <div className="absolute w-[8px] h-[89px] bg-[#1e1e1e] top-0 right-0 rounded-l-[25px] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
              </div>
            </div>
          </div>
          <div className="flex ">
            <div className="flex flex-col ml-[43px] mr-[22px] h-full">
              <div className="mb-[43px] h-[50%] flex flex-col justify-between">
                <div className="relative mb-[43px]">
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
                <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[20px] w-[427px] h-full relative">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
                    group list
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-1"
                    size={20}
                  />
                </div>
              </div>

              <div className="w-[427px]  rounded-[20px] h-[50%] p-[20px] relative">
                <div>
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
                    friend request
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-1"
                    size={20}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[43px] h-full">
              <div className="flex gap-[19px] h-[50%]">
                <div className="w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                    friends
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                </div>{" "}
                <div className="w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                    user list
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                </div>
              </div>
              <div className="flex gap-[19px] h-[50%]">
                <div className="w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px]  relative">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                    my groups
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                </div>
                <div className="w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative ">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                    blocked users
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
