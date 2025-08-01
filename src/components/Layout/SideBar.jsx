import React from "react";
import { GoHomeFill } from "react-icons/go";
import { AiFillMessage } from "react-icons/ai";
import { IoPhonePortrait, IoSettingsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import profilePic from "../../assets/home/profilepic.jpg";
import { getAuth, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userLoginInfo } from "../../slice/userSlice";
import random_profile from "../../assets/home/random_profile.jpg";
import { FaUser } from "react-icons/fa";

function SideBar() {
  const data = useSelector((state) => state.userInfo.value);
  const location = useLocation();
  const currentPath = location.pathname;
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.info("Logout successful. See you soon!");
      setTimeout(() => {
        dispatch(userLoginInfo(null));
        localStorage.removeItem("userLoginInfo");
        navigate("/login");
      }, 2500);
    });
  };
  return (
    <>
      <div className="p-[25px] md:p-0 h-[100px] md:w-[186px] md:h-full bg-sideBar md:rounded-[20px] md:flex md:flex-col md:py-[38px] md:justify-between mb-[46px] md:mb-0">
        <div>
          <div className="mb-[9px] md:mb-[78px] flex justify-between md:justify-center">
            <p className="block md:hidden text-white font-primary text-[30px]">
              liveChat
            </p>
            <div className="flex flex-col items-end md:items-center">
              {/* <img
                src={random_profile}
                alt="#profile_pic"
                className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full object-cover cursor-pointer"
              /> */}
              <div className="bg-[#3D77BE]  h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full flex justify-center items-center cursor-pointer">
                <FaUser className="text-[60px] text-white" />
              </div>
              <p className="text-white font-regular font-semibold text-[22px] mt-5 capitalize hidden md:block">
                {data.user.displayName}
              </p>
              <p className="text-white font-regular font-semibold text-[11px] mt-2 capitalize hidden md:block">
                {data.user.email}
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-end relative justify-between">
            <div
              className={`relative  h-[89px]  ${
                currentPath === "/"
                  ? "md:bg-white text-confirmBtn "
                  : "text-[#C3C3C3]"
              } duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group`}
            >
              <GoHomeFill
                className="text-[33px] md:text-[46px] cursor-pointer"
                onClick={() => navigate("/")}
              />
              <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-sideBar bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
            </div>
            <div
              className={`relative  h-[89px]  ${
                currentPath === "/messages"
                  ? "md:bg-white text-confirmBtn"
                  : "text-[#C3C3C3]"
              } duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group`}
            >
              <AiFillMessage
                className="text-[33px] md:text-[46px] cursor-pointer"
                onClick={() => navigate("/messages")}
              />
              <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-sideBar bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
            </div>
            <div
              className={`relative x h-[89px]  ${
                currentPath === "/settings"
                  ? "md:bg-white text-confirmBtn"
                  : "text-[#C3C3C3]"
              } duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group`}
            >
              <IoSettingsSharp
                className="text-[33px] md:text-[46px] cursor-pointer"
                onClick={() => navigate("/settings")}
              />
              <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-sideBar bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
            </div>
            <div
              className="md:hidden relative  h-[89px] text-[#C3C3C3]  md:hover:bg-white  md:hover:text-[#E88D67] hover:text-[#E88D67] duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center"
              onClick={handleLogout}
            >
              <FaSignOutAlt className="text-[33px] md:text-[46px] cursor-pointer" />
              <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-sideBar bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
            </div>
          </div>
        </div>
        <div className="md:flex items-end md:flex-col hidden">
          <div
            className="relative  h-[89px] text-[#4D4D4D] md:text-[#C3C3C3] md:hover:bg-white hover:text-[#E88D67] md:hover:text-[#E88D67] duration-300 mb-[26px] w-[161px] rounded-l-[20px] flex items-center pl-[45px] md:group"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="text-[33px] md:text-[46px] cursor-pointer" />
            <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-sideBar bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
