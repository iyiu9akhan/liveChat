import React from "react";
import SideBar from "../components/Layout/SideBar";
import Container from "../components/Layout/Container";
import { FaUser } from "react-icons/fa";

function Settings() {
  return (
    <div>
      <Container>
        <div className="md:flex md:h-screen md:py-[35px] justify-between">
          <SideBar />
          <div className="w-[40%] rounded-[20px] p-[26px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <h1 className="font-regular capitalize font-semibold text-[20px] mb-[50px]">
              profile settings
            </h1>
            <div>
              <div className="bg-groupBg  h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full flex justify-center items-center cursor-pointer">
                <FaUser className="text-[50px] text-white" />
              </div>
            </div>
          </div>
          <div className=" w-[40%] rounded-[20px] p-[26px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <h1 className="font-regular capitalize font-semibold text-[20px]">
              account settings
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Settings;
