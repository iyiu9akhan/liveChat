import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import { userList } from '../../../pages/User'
import { FaMinus, FaPlus } from "react-icons/fa";
// import { userList } from "../User";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import random_profile from "../../../assets/home/random_profile.jpg";
import { useSelector } from "react-redux";

function UserList() {
  const data = useSelector((state) => state.userInfo.value.user);
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  useEffect(() => {
    const userRef = ref(db, "users/");
      onValue(userRef, (snapshot) => {
        let array = [];
        snapshot.forEach((item) => {
          if (data.uid !== item.key) {
            array.push({ ...item.val(), userid: item.key });
          }
        });
        setUserList(array);
      });
  }, []);
  useEffect(() => {
    const rqstRef = ref(db, "friendRqst/");
    onValue(rqstRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        const rqst = item.val();
        if (rqst.senderId == data.uid) {
          array.push(rqst.receiverId);
        }
      });
      setSentRequests(array);
    });
  }, []);
  const sendRqst = (userList) => {
    set(ref(db, "friendRqst/" + userList.userid + data.uid), {
      senderId: data.uid,
      senderNam: data.displayName,
      receiverId: userList.userid,
      receiverName: userList.username,
    });
  };
  const cancelRqst = (userList) => {
   remove(ref(db, "friendRqst/" + userList.userid + data.uid));
  };

  return (
    <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative overflow-y-scroll">
      <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
        user list
      </h1>
      <PiDotsThreeOutlineVerticalFill
        className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
        size={20}
      />
      <div>
        {userList.map((userList, index) => (
          <div
            key={index}
            className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none"
          >
            <div className="flex items-center mb-[13px]">
              <img
                src={random_profile}
                alt="#profile"
                className="h-[52px] w-[52px]"
              />
              <div className="mx-[14px] ">
                <h1 className="capitalize font-regular text-[14px] text-black font-semibold">
                  {userList.username}
                </h1>
                <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                  {userList.email}
                </p>
              </div>
            </div>
            {sentRequests.includes(userList.userid) ? (
              <div
                onClick={() => cancelRqst(userList)}
                className="h-[30px] w-[30px] rounded-[5px] bg-red-700 flex items-center justify-center cursor-pointer"
              >
                <FaMinus className="text-white" size={14} />
              </div>
            ) : (
              <div
                onClick={() => sendRqst(userList)}
                className="h-[30px] w-[30px] rounded-[5px] bg-teal-600 flex items-center justify-center cursor-pointer"
              >
                <FaPlus className="text-white" size={14} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
