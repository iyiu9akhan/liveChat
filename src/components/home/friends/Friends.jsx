import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import { friends } from "../User";
import { useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import random_profile from "../../../assets/home/random_profile.jpg";
import { FaUserAltSlash } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Search from "../../search/Search";

function Friends({ className = "" }) {
  const data = useSelector((state) => state.userInfo.value.user);
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const friendListRef = ref(db, "friends/");
    onValue(friendListRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().receiverId ||
          data.uid == item.val().senderId
        ) {
          array.push({
            ...item.val(),
            friendKey: item.key,
          });
        }
        // console.log(item.key);
      });
      setFriendList(array);
    });
  }, []);

  const handleBlock = (item) => {
    const blockRef = push(ref(db, "blockedUsers/"));

    set(blockRef, {
      blockById: data.uid,
      blockByName: data.displayName,
      blockedId: data.uid === item.senderId ? item.receiverId : item.senderId,
      blockedName:
        data.uid === item.senderId ? item.receiverName : item.senderName,
      blockedEmail:
        data.uid === item.senderEmail ? item.receiverEmail : item.senderEmail,

      // blocker: friend.receiverName,
      // blockerId: friend.receiverId,
      // blocked: friend.senderName,
      // blockedId: friend.senderId,
    }).then(() => {
      remove(ref(db, "friends/" + item.friendKey));
    });
  };

  return (
    <div
      className={`md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] pr-[10px] relative  ${className}`}
    >
      <div className="flex justify-between items-center pr-[18px]">
        <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
        friends
      </h1>
      {/* <FaSearch
        className="absolute right-[40px] top-[20px] cursor-pointer mt-2"
        size={20}
      /> */}
      <Search/>
      </div>
      <div className="overflow-y-scroll h-[95%] pr-2">
        {friendList.length === 0 ? (
          <p className="text-center text-gray-500 mt-6 text-[17px] font-regular">
            No friends in your network
          </p>
        ) : (
          friendList.map((item, index) => (
            <div
              key={index}
              className="flex items-center mt-[17px] justify-between  border-b-1 border-black/25 last:border-none pb-[13px]"
            >
              <div className="flex items-center ">
                <img
                  src={random_profile}
                  alt="#"
                  className="h-[40px] w-[40px] md:h-[50px] md:w-[50px]"
                />
                <div className="mx-[14px] ">
                  <h1 className="capitalize font-regular text-[14px] text-black font-semibold">
                    {data.uid == item.senderId
                      ? item.receiverName
                      : item.senderName}
                  </h1>
                  <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                    {/* {data.uid == item.senderId
                    ? item.receiverEmail
                    : item.senderEmail} */}
                    demo msg
                  </p>
                </div>
              </div>
              <div className="flex gap-x-3">
                <div
                  className="bg-[#3D77BE] hover:bg-[#3164A5] rounded-[5px] h-[25px] w-[25px] md:h-[30px] md:w-[30px] flex justify-center items-center cursor-pointer"
                  title="Message"
                >
                  {/* <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[15px]">
                block
              </p> */}
                  <AiFillMessage className="text-white text-[18px]" />
                </div>
                <div
                  onClick={() => {
                    handleBlock(item);
                  }}
                  className="bg-[#EF4444] hover:bg-[#DC2626] rounded-[5px] h-[25px] w-[25px] md:h-[30px] md:w-[30px] flex justify-center items-center cursor-pointer"
                  title="Block"
                >
                  {/* <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[15px]">
                block
              </p> */}
                  <FaUserAltSlash className="text-white text-[18px]" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Friends;
