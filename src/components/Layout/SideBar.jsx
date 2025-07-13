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

function SideBar() {
  const data = useSelector((state) => state.userInfo.value);
  // console.log(data);
  const location = useLocation();
  const currentPath = location.pathname;
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(userLoginInfo(null));
      localStorage.removeItem("userLoginInfo");
      toast.info("Logout successful. See you soon!");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    });
  };
  return (
    <>
      <div className="p-[25px] md:p-0 h-[100px] md:w-[186px] md:h-full bg-primary md:rounded-[20px] md:flex md:flex-col md:py-[38px] md:justify-between mb-[46px] md:mb-0">
        <div>
          <div className="mb-[9px] md:mb-[78px] flex justify-between md:justify-center items-center">
            <p className="block md:hidden text-white font-primary text-[30px]">
              liveChat
            </p>
            <div className="flex flex-col items-center">
              <img
                src={profilePic}
                alt="#profile_pic"
                className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full object-cover cursor-pointer"
              />
              <p className="text-white font-regular font-semibold text-[22px] mt-5 capitalize">
                {data.user.displayName}
              </p>
            </div>
          </div>
          <div className="flex md:flex-col items-end relative justify-between">
            <div
              className={`relative cursor-pointer h-[89px]  ${
                currentPath === "/home"
                  ? "md:bg-white text-[#1e1e1e] "
                  : "text-[#C3C3C3]"
              } duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group`}
            >
              <GoHomeFill
                className="text-[33px] md:text-[46px]"
                onClick={() => navigate("/home")}
              />
              <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
            </div>
            <div
              className={`relative cursor-pointer h-[89px]  ${
                currentPath === "/messages"
                  ? "md:bg-white text-[#1e1e1e]"
                  : "text-[#C3C3C3]"
              } duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group`}
            >
              <AiFillMessage
                className="text-[33px] md:text-[46px]"
                onClick={() => navigate("/messages")}
              />
              <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
            </div>
            <div
              className={`relative cursor-pointer h-[89px]    ${
                currentPath === "/settings"
                  ? "md:bg-white text-[#1e1e1e]"
                  : "text-[#C3C3C3]"
              } duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center md:pl-[45px] md:group`}
            >
              <IoSettingsSharp
                className="text-[33px] md:text-[46px]"
                onClick={() => navigate("/settings")}
              />
              <div className="hidden md:block absolute w-[46px] h-[8px] md:w-[8px] md:h-[89px] bg-[#1e1e1e] bottom-0  md:top-0 md:right-0 rounded-b-2xl md:rounded-l-[25px] md:rounded-br-[0] group-hover:shadow-[-2px_0px_4px_0px_rgba(0,0,0,0.25)] duration-300"></div>
            </div>
            <div
              className="md:hidden relative cursor-pointer h-[89px] text-[#C3C3C3]  md:hover:bg-white hover:text-[#1e1e1e] duration-300 mb-[26px] md:w-[161px] rounded-l-[20px] flex items-center"
              onClick={handleLogout}
            >
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
    </>
  );
}

export default SideBar;
