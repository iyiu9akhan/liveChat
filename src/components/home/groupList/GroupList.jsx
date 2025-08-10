import React, { useEffect, useState } from "react";
import { groupList } from "../User";
import { MdGroupAdd } from "react-icons/md";
import { IoIosBackspace } from "react-icons/io";
import Search from "../../search/Search";
import TextField from "@mui/material/TextField";
import random_profile from "../../../assets/home/random_profile.jpg";
import { set, getDatabase, ref, push, onValue } from "firebase/database";
import { useSelector } from "react-redux";
import { MdGroups } from "react-icons/md";

function GroupList() {
  const db = getDatabase();
  const [searchUser, setSearchUser] = useState([]);
  const [show, setShow] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameErr, setGroupNameErr] = useState("");
  const [shakeGroupName, setShakeGroupName] = useState(false);
  const data = useSelector((state) => state.userInfo.value.user);
  const [groupList, setGroupList] = useState([]);

  // console.log(data);

  useEffect(() => {
    const groupRef = ref(db, "groups/");
    onValue(groupRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        //  console.log("Fetched group:", item.val());
        if (data.uid !== item.val().adminId) {
          arr.push(item.val());
        }
      });
      setGroupList(arr);
    });
  }, []);

  const triggerShakeEmail = () => {
    setShakeGroupName(false);
    setTimeout(() => {
      setShakeGroupName(true);
    }, 10);
  };
  const handleAnimationEnd = () => {
    setShakeGroupName(false);
  };
  const searchHandler = (e) => {
    const value = e.target.value.toLowerCase();
    if (value === "") {
      setSearchUser([]);
    } else {
      const filtered = groupList.filter((item) =>
        item.groupName.toLowerCase().includes(value)
      );
      setSearchUser(filtered);
    }
  };

  const CreateGroupIconHandler = () => {
    if (show) {
      setGroupName("");
      setGroupNameErr("");
      // setShakeGroupName(false);
    }
    setShow(!show);
  };
  const handleGroupName = (e) => {
    setGroupName(e.target.value);
    setGroupNameErr("");
  };
  const handleCreateGroup = () => {
    if (!groupName) {
      setGroupNameErr("Group name is required !");
      triggerShakeEmail();
    }
    if (groupName) {
      set(push(ref(db, "groups/")), {
        groupName: groupName,
        adminId: data.uid,
        adminName: data.displayName,
      }).then(() => {
        setGroupName("");
        setGroupNameErr("");
      });
    }
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
          className="cursor-pointer text-cancel hover:text-hoverCancel"
          onClick={CreateGroupIconHandler}
          size={35}
        />
      ) : (
        <div className="flex justify-between items-center pr-6">
          <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
            group list
          </h1>
          <div className="flex gap-3 items-center justify-center">
            <Search onChange={searchHandler} />
            <div>
              <MdGroupAdd
                title="Create Group"
                onClick={CreateGroupIconHandler}
                className="cursor-pointer w-[27px] text-sideBar"
                size={25}
              />
            </div>
          </div>
        </div>
      )}

      {show ? (
        <div className="flex flex-col items-center h-full">
          <div className="flex flex-col justify-center items-center w-full gap-[40px]">
            {/* <img
              src={random_profile}
              alt="#profile_pic"
              className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full object-cover cursor-pointer"
            /> */}
            <div className="bg-userBg  h-[50px] w-[50px] md:h-[100px] md:w-[100px] rounded-full flex justify-center items-center cursor-pointer">
              <MdGroups className="text-[65px] text-white" />
            </div>
            <TextField
              value={groupName}
              className={shakeGroupName ? "shake" : ""}
              label="Group Name"
              variant="standard"
              onChange={handleGroupName}
              // value={groupName}
              type="text"
              helperText={groupNameErr}
              error={!!groupNameErr}
              onAnimationEnd={handleAnimationEnd}
              // sx={{
              //   width: "368px",
              //   "& .MuiInput-root": {
              //     borderRadius: "8.6px",
              //     "& fieldset": {
              //       borderWidth: "2px",
              //       opacity: 0.8,
              //     },
              //     "& input": {
              //       fontSize: "20px",
              //       color: "#11175D",
              //     },
              //   },
              //   "& label": {
              //     fontSize: "19px",
              //     top: "-5px",
              //   },
              //   "& label.MuiInputLabel-shrink": {
              //     fontSize: "16px",
              //     backgroundColor: "#fff",
              //     letterSpacing: "3px",
              //   },
              // }}
              sx={{
                width: "368px",
                "& .MuiInput-root": {
                  // height: "81px",
                  borderRadius: "8.6px",
                  "& fieldset": {
                    borderColor: groupNameErr ? "#FF0000" : "#11175D4D",
                    borderWidth: "2px",
                    opacity: 0.8,
                  },
                  "&:after": {
                    borderBottom: `2px solid ${
                      groupNameErr ? "#FF0000" : "#11175D4D"
                    }`,
                  },
                  "&:hover:before": {
                    borderBottomColor: groupNameErr ? "#FF0000" : "#11175D4D",
                  },
                  "&:hover fieldset": {
                    borderColor: groupNameErr ? "#FF0000" : "#11175D4D",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: groupNameErr ? "#FF0000" : "#11175D4D",
                  },
                  "& input::placeholder": {
                    color: groupNameErr ? "#FF0000" : "#999",
                  },
                  "& input": {
                    fontSize: "20px",
                    color: "#11175D",
                  },
                },
                "& label": {
                  fontSize: "19px",
                  top: "-5px",
                  color: groupNameErr ? "#FF0000" : "#11175D",
                },
                "& label.MuiInputLabel-shrink": {
                  fontSize: "16px",
                  color: groupNameErr ? "#FF0000" : "#11175D",
                  backgroundColor: "#fff",
                  letterSpacing: "3px",
                },
              }}
            />
            {/* <p>{groupNameErr}</p> */}
            <button
              className="bg-confirmBtn hover:bg-hoverConfirmBtn text-white px-4 py-2 rounded font-semibold cursor-pointer font-regular"
              onClick={handleCreateGroup}
            >
              Create Group
            </button>
          </div>
        </div>
      ) : groupList.length === 0 ? (
        <div className="text-center text-gray-500 mt-6 text-[17px] font-regular capitalize">
          No group exists
        </div>
      ) : (
        <div className="overflow-y-scroll h-[94%] pr-2">
          {(searchUser.length > 0 ? searchUser : groupList).map(
            (Group, index) => (
              <div
                key={index}
                className="flex items-center py-[13px] justify-between border-b-1 border-black/25 last:border-none"
              >
                <div className="flex items-center ">
                  {/* <img
                    src={random_profile}
                    alt="#"
                    className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
                  /> */}
                  <div className="bg-userBg  h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full flex justify-center items-center">
                    <MdGroups className="text-[35px] text-white" />
                  </div>
                  <div className="mx-[14px] ">
                    <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                      {Group.groupName}
                    </h1>
                    <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                      {Group.adminName}
                    </p>
                  </div>
                </div>
                <div className="bg-confirmBtn hover:bg-hoverConfirmBtn rounded-[5px] h-[23px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer">
                  <span className="capitalize text-white font-regular font-semibold text-[13px] md:text-[16px]">
                    join
                  </span>
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
