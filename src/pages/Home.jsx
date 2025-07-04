import React from "react";
import Container from "../components/Layout/Container";
import profilePic from "../assets/home/profilePic.jpg";
import { GoHomeFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import {
  groupList,
  friendRqst,
  friends,
  userList,
  myGroup,
  blockedUsers,
} from "./User";

function Home() {
  return (
    <>
      <Container>
        <div className="md:flex md:h-screen md:py-[35px]">
          <div className="p-[25px] md:p-0 h-[100px] md:w-[186px] md:h-full bg-primary md:rounded-[20px] md:flex md:flex-col md:py-[38px] md:justify-between mb-[46px] md:mb-0">
            <div>
              <div className="mb-[9px] md:mb-[78px] flex justify-between md:justify-center items-center">
                <p className="block md:hidden text-white font-primary text-[30px]">
                  liveChat
                </p>
                <img
                  src={profilePic}
                  alt="#profile_pic"
                  className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full object-cover cursor-pointer"
                />
              </div>
              <div className="flex md:flex-col items-end relative justify-between">
                <div className="relative cursor-pointer h-[89px] text-[#4D4D4D] md:text-[#C3C3C3] md:hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group">
                  <GoHomeFill className="text-[33px] md:text-[46px]" />
                  <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
                </div>
                <div className="relative cursor-pointer h-[89px] text-[#4D4D4D] md:text-[#C3C3C3] md:hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group">
                  <AiFillMessage className="text-[33px] md:text-[46px]" />
                  <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
                </div>
                <div className="relative cursor-pointer h-[89px] text-[#4D4D4D] md:text-[#C3C3C3] md:hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group">
                  <IoSettingsSharp className="text-[33px] md:text-[46px]" />
                  <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
                </div>
                <div className="md:hidden relative cursor-pointer h-[89px] text-[#4D4D4D] md:text-[#C3C3C3] md:hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group">
                  <FaSignOutAlt className="text-[33px] md:text-[46px]" />
                  <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
                </div>
              </div>
            </div>
            <div className="md:flex items-end md:flex-col hidden">
              <div className="relative cursor-pointer h-[89px] text-[#4D4D4D] md:text-[#C3C3C3] md:hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] w-[161px] rounded-l-[20px] flex items-center pl-[45px] md:group">
                <FaSignOutAlt className="text-[33px] md:text-[46px]" />
                <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
              </div>
            </div>
          </div>
          <div className="md:flex ">
            <div className="flex flex-col md:ml-[43px] md:mr-[22px] h-full justify-between">
              <div className="h-[48%] flex flex-col md:gap-[40px]">
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
                          <img src={group.img} alt="#group_img" className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"/>
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
              </div>

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
                        className="flex items-center mt-[17px] justify-between"
                      >
                        <div className="flex items-center">
                          <img src={friendRqst.img} alt="#profile_img" className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"/>
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
            </div>

            <div className="flex flex-col h-full justify-between">
              <div className="md:flex gap-[19px] h-[48%] ">
                <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative overflow-y-scroll">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                    friends
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                  <div>
                    {friends.map((friends, index) => (
                      <div
                        key={index}
                        className="flex items-center mt-[17px] justify-between cursor-pointer"
                      >
                        <div className="flex items-center">
                          <img src={friends.img} alt="#friend_img" />
                          <div className="mx-[14px] ">
                            <h1 className="capitalize font-regular text-[14px] text-black font-semibold">
                              {friends.title}
                            </h1>
                            <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                              {friends.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="capitalize text-black/50 font-regular font-medium text-[10px]">
                          {friends.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>{" "}
                <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative overflow-y-scroll">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                    user list
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                  <div>
                    {userList.map((userList, index) => (
                      <div
                        key={index}
                        className="flex items-center mt-[17px] justify-between"
                      >
                        <div className="flex items-center">
                          <img src={userList.img} alt="#friend_img" />
                          <div className="mx-[14px] ">
                            <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                              {userList.title}
                            </h1>
                            <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                              {userList.time}
                            </p>
                          </div>
                        </div>
                        <div className="h-[30px] w-[30px] rounded-[5px] bg-primary flex items-center justify-center cursor-pointer">
                          <FaPlus className="text-white" size={14} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:flex gap-[19px] h-[48%]">
                <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px]  relative overflow-y-scroll">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
                    my groups
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                  <div>
                    {myGroup.map((myGroup, index) => (
                      <div
                        key={index}
                        className="flex items-center mt-[17px] justify-between cursor-pointer"
                      >
                        <div className="flex items-center">
                          <img src={myGroup.img} alt="#friend_img" />
                          <div className="mx-[14px] ">
                            <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                              {myGroup.title}
                            </h1>
                            <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                              {myGroup.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="capitalize text-black/50 font-regular font-medium text-[10px]">
                          {myGroup.time}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative overflow-y-scroll">
                  <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                    blocked users
                  </h1>
                  <PiDotsThreeOutlineVerticalFill
                    className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                    size={20}
                  />
                  <div>
                    {blockedUsers.map((blockedUsers, index) => (
                      <div
                        key={index}
                        className="flex items-center mt-[17px] justify-between"
                      >
                        <div className="flex items-center">
                          <img src={blockedUsers.img} alt="#friend_img" />
                          <div className="mx-[14px] ">
                            <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                              {blockedUsers.title}
                            </h1>
                            <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                              {blockedUsers.time}
                            </p>
                          </div>
                        </div>
                        <div className="bg-primary rounded-[5px] h-[25px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer">
                          <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[16px]">
                            unblock
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
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
