import React, { useState } from "react";
import { groupList } from "../User";
import { MdGroupAdd } from "react-icons/md";
import { IoIosBackspace } from "react-icons/io";
import Search from "../../search/Search";
import TextField from "@mui/material/TextField";
import random_profile from "../../../assets/home/random_profile.jpg";

function GroupList() {
  const [searchUser, setSearchUser] = useState([]);
  const [show, setShow] = useState(false);

  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setSearchUser([]);
    } else {
      const filtered = groupList.filter((item) =>
        item.title.toLowerCase().includes(value)
      );
      setSearchUser(filtered);
    }
  };

  const CreateGroupHandler = () => {
    setShow(!show);
  };

  return (
    <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[20px] pr-[10px] md:w-[427px] h-full relative">
      {/* <div className="flex justify-between pr-6">
        <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
          group list
        </h1>
        <div className="flex gap-3 items-center justify-center">
          <Search onChange={searchHandler} />
          <div>
            {show ? (
              <IoIosBackspace
                className="cursor-pointer w-[27px] text-[#EF4444]"
                onClick={CreateGroupHandler}
                size={27}
              />
            ) : (
              <MdGroupAdd
                onClick={CreateGroupHandler}
                className="cursor-pointer w-[27px]"
                size={25}
              />
            )}
          </div>
        </div>
      </div> */}
      {show ? (
        <IoIosBackspace
          className="cursor-pointer text-[#EF4444]"
          onClick={CreateGroupHandler}
          size={35}
        />
      ) : (
        <div className="flex justify-between pr-6">
          <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
            group list
          </h1>
          <div className="flex gap-3 items-center justify-center">
            <Search onChange={searchHandler} />
            <div>
              <MdGroupAdd
                onClick={CreateGroupHandler}
                className="cursor-pointer w-[27px]"
                size={25}
              />
            </div>
          </div>
        </div>
      )}

      {show ? (
        <div className="flex flex-col items-center h-full">
          <form className="flex flex-col justify-center items-center w-full gap-[40px]">
            <img
              src={random_profile}
              alt="#profile_pic"
              className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full object-cover cursor-pointer"
            />
            <TextField
              label="Group Name"
              variant="standard"
              type="text"
              sx={{
                width: "368px",
                "& .MuiInput-root": {
                  borderRadius: "8.6px",
                  "& fieldset": {
                    borderWidth: "2px",
                    opacity: 0.8,
                  },
                  "& input": {
                    fontSize: "20px",
                    color: "#11175D",
                  },
                },
                "& label": {
                  fontSize: "19px",
                  top: "-5px",
                },
                "& label.MuiInputLabel-shrink": {
                  fontSize: "16px",
                  backgroundColor: "#fff",
                  letterSpacing: "3px",
                },
              }}
            />
            <button className="bg-[#3D77BE] hover:bg-[#3164A5] text-white px-4 py-2 rounded font-semibold cursor-pointer font-regular">
              Create Group
            </button>
          </form>
        </div>
      ) : (
        <div className="overflow-y-scroll h-[94%] pr-2">
          {(searchUser.length > 0 ? searchUser : groupList).map(
            (group, index) => (
              <div
                key={index}
                className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none"
              >
                <div className="flex items-center mb-[13px]">
                  <img
                    src={group.img}
                    alt="#group_img"
                    className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
                  />
                  <div className="mx-[14px]">
                    <h1 className="capitalize font-regular text-[18px] text-black font-semibold">
                      {group.title}
                    </h1>
                    <p className="font-regular font-medium text-[14px] text-[#4D4D4D]">
                      {group.subtitle}
                    </p>
                  </div>
                </div>
                <div className="bg-[#3D77BE] hover:bg-[#3164A5] rounded-[5px] h-[23px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer">
                  <p className="capitalize text-white font-regular font-semibold text-[13px] md:text-[16px]">
                    join
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default GroupList;
