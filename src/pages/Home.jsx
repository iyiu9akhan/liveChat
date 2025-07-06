import React, { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
import profilePic from "../assets/home/profilePic.jpg";
import { GoHomeFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import GroupList from "../components/home/groupList/GroupList";

import FriendList from "../components/home/friendList/FriendList";
import Friends from "../components/home/friends/Friends";
import UserList from "../components/home/userList/UserList";
import Groups from "../components/home/groups/Groups";
import BlockedUser from "../components/home/blockedUser/BlockedUser";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);
  const data = useSelector((state) => state.userInfo.value);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!data) {
      navigate("/login");
    }
  });
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user.emailVerified) {
      setVerify(true);
    }
    setLoading(false);
  });
  if (loading) {
    return null;
  }

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("userLoginInfo");
      toast.info("Logout successful. See you soon!");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    });
  };

  return (
    <>
      {verify ? (
        <Container>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
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
                <div
                  className="relative cursor-pointer h-[89px] text-[#4D4D4D] md:text-[#C3C3C3] md:hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] w-[161px] rounded-l-[20px] flex items-center pl-[45px] md:group"
                  onClick={handleLogout}
                >
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
                  <GroupList />
                </div>
                <FriendList />
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="md:flex gap-[19px] h-[48%] ">
                  <Friends />
                  <UserList />
                </div>
                <div className="md:flex gap-[19px] h-[48%]">
                  <Groups />
                  <BlockedUser />
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-screen ">
          <p className="capitalize text-[55px] font-primary font-semibold">
            verify your email address
          </p>
          <div className="flex justify-center items-center mt-6 gap-3">
            <Link to="/login">
              <span className="capitalize text-[23px] font-medium  bg-orange rounded-[8.6px]  px-5 py-2 text-white cursor-pointer">
                return
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
