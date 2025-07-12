import React, { useEffect, useState } from "react";
import Container from "../components/Layout/Container";
// import profilePic from "../assets/home/profilePic.jpg";
// import { GoHomeFill } from "react-icons/go";
// import { AiFillMessage } from "react-icons/ai";
// import { IoSettingsSharp } from "react-icons/io5";
// import { FaSignOutAlt } from "react-icons/fa";
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
import SideBar from "../components/Layout/SideBar";

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
    if (user.emailVerified) {
      setVerify(true);
    }
    setLoading(false);
  });
  if (loading) {
    return null;
  }

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
            <SideBar />
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
                  <GroupList /> {/* group list component */}
                </div>
                <FriendList /> {/* friend list component */}
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="md:flex gap-[19px] h-[48%] ">
                  <Friends /> {/* friendList component */}
                  <UserList /> {/* userList component */}
                </div>
                <div className="md:flex gap-[19px] h-[48%]">
                  <Groups /> {/*my group component*/}
                  <BlockedUser /> {/*blocked user component  */}
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
