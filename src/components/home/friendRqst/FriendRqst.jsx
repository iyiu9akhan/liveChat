import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import random_profile from "../../../assets/home/random_profile.jpg";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import Search from "../../search/Search";
import { FaUser } from "react-icons/fa";

function FriendRqst() {
  const data = useSelector((state) => state.userInfo.value.user);
  const db = getDatabase();
  const [friendRqst, setFriendRqst] = useState([]);
  useEffect(() => {
    const friendRqstRef = ref(db, "friendRqst/");
    onValue(friendRqstRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (data.uid == item.val().receiverId) {
          array.push(item.val());
        }
      });
      setFriendRqst(array);
    });
  }, []);

  const friendRqstAccept = (item) => {
    // console.log(item);
    set(push(ref(db, "friends/")), {
      ...item,
    }).then(() => {
      remove(ref(db, "friendRqst/" + item.requestId));
    });
  };

  const [searchUser, setSearchUser] = useState([]);

  const searchHandler = (e) => {
    let arr = [];
    if (e.target.value.length == 0) {
      setSearchUser([]);
    } else {
      friendRqst.filter((item) => {
        if (
          item.senderName.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          arr.push(item);
          setSearchUser(arr);
        }
      });
    }
  };
  return (
    <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:shadow-none md:w-[427px]  rounded-[20px] h-[48%] p-[20px] relative overflow-y-scroll">
      <div>
        <div className="flex  justify-between items-center">
          <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
            friend request
          </h1>
          {/* <FaSearch
          className="absolute right-[23px] top-[20px] cursor-pointer mt-1"
          size={20}
        /> */}
          <Search onChange={searchHandler} />
        </div>
        <div>
          {searchUser.length > 0 ? (
            searchUser.length === 0 ? (
              <p className="text-center text-gray-500 mt-6 text-[17px] font-regular">
                No requests detected
              </p>
            ) : (
              searchUser.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none pb-[13px]"
                >
                  <div className="flex items-center ">
                    {/* <img
                      src={random_profile}
                      alt="#"
                      className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
                    /> */}
                    <div className="bg-userBg  h-[50px] w-[50px] md:h-[50px] md:w-[50px] rounded-full flex justify-center items-center cursor-pointer">
                      <FaUser className="text-[29px] text-white" />
                    </div>
                    <div className="mx-[14px]">
                      <h1 className="capitalize font-regular text-[18px] text-black font-semibold">
                        {item.senderName}
                      </h1>
                      <p className="font-regular font-medium text-[13px] text-[#4D4D4D] capitalize">
                        {item.senderEmail}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => friendRqstAccept(item)}
                    className="bg-confirmBtn hover:bg-hoverConfirmBtn rounded-[5px] h-[25px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer"
                  >
                    <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[14px]">
                      Accept
                    </p>
                  </div>
                </div>
              ))
            )
          ) : friendRqst.length === 0 ? (
            <p className="text-center text-gray-500 mt-6 text-[17px] font-regular">
              No requests detected
            </p>
          ) : (
            friendRqst.map((item, index) => (
              <div
                key={index}
                className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none pb-[13px]"
              >
                <div className="flex items-center ">
                  {/* <img
                    src={random_profile}
                    alt="#"
                    className="h-[50px] w-[50px] md:h-[70px] md:w-[70px]"
                  /> */}
                  <div className="bg-userBg  h-[50px] w-[50px] md:h-[50px] md:w-[50px] rounded-full flex justify-center items-center cursor-pointer">
                    <FaUser className="text-[29px] text-white" />
                  </div>
                  <div className="mx-[14px]">
                    <h1 className="capitalize font-regular text-[18px] text-black font-semibold">
                      {item.senderName}
                    </h1>
                    <p className="font-regular font-medium text-[13px] text-[#4D4D4D] capitalize">
                      {item.senderEmail}
                    </p>
                  </div>
                </div>
                <div
                  onClick={() => friendRqstAccept(item)}
                  className="bg-confirmBtn hover:bg-hoverConfirmBtn rounded-[5px] h-[25px] w-[70px] md:h-[30px] md:w-[87px] flex justify-center items-center cursor-pointer"
                >
                  <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[14px]">
                    Accept
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendRqst;
