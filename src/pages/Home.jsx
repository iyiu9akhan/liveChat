import React from "react";
import Container from "../components/Layout/Container";
import profilePic from "../assets/home/profilePic.jpg";
import { GoHomeFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <Container>
        <div className="flex justify-between h-screen p-[35px]">
          <div className="w-[185px] h-full bg-primary rounded-[20px] flex flex-col  py-[38px] justify-between">
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
          <div></div>
        </div>
      </Container>
    </>
  );
}

export default Home;
