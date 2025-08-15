import React from "react";
import SideBar from "../components/Layout/SideBar";
import Container from "../components/Layout/Container";
import { FaUser } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { MdInsertComment } from "react-icons/md";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

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
            <div className="ml-[16px] flex items-center gap-[31px] pb-[30px] border-b-2 border-gray-300">
              <div className="bg-groupBg  h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full flex justify-center items-center cursor-pointer">
                <FaUser className="text-[60px] text-white" />
              </div>
              <div>
                <h1 className="capitalize font-regular font-semibold text-[25px]">
                  sameer khan
                </h1>
                <h1 className="capitalize font-regular font-normal text-[20px]">
                  stay home stay safe
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-[37px] ml-[60px] mt-[34px] w-fit">
              <div className="flex items-center gap-[29px] cursor-pointer">
                <RiEdit2Fill size={25} />
                <p className="font-regular font-normal text-[20px] capitalize">
                  edit profile name
                </p>
              </div>{" "}
              <div className="flex items-center gap-[29px] cursor-pointer ">
                <MdInsertComment size={25} />
                <p className="font-regular font-normal text-[20px] capitalize">
                  edit profile status info
                </p>
              </div>{" "}
              <div className="flex items-center gap-[29px] cursor-pointer ">
                <MdAddPhotoAlternate size={25} />
                <p className="font-regular font-normal text-[20px] capitalize">
                  edit profile photo
                </p>
              </div>
              <div className="flex items-center gap-[29px] cursor-pointer">
                <MdHelpCenter size={25} />
                <p className="font-regular font-normal text-[20px] capitalize">
                  help
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[40%] rounded-[20px] p-[26px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <h1 className="font-regular capitalize font-semibold text-[20px]">
              account settings
            </h1>
            <div className="flex flex-col gap-[37px] ml-[60px] mt-[34px] w-fit">
              <div className="flex items-center gap-[29px] cursor-pointer">
                <FaKey size={25} />
                <p className="font-regular font-normal text-[20px] capitalize">
                  change password
                </p>
              </div>
              <div className="flex items-center gap-[29px] cursor-pointer">
                <MdDeleteForever size={25} />
                <p className="font-regular font-normal text-[20px] capitalize">
                  delete account
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Settings;
