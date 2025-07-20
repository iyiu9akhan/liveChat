import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {
  getDatabase,
  ref,
  onValue,
  set,
  remove,
  push,
} from "firebase/database";
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
  }, [data.uid]);

  useEffect(() => {
    const rqstRef = ref(db, "friendRqst/");
    onValue(rqstRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        const rqst = item.val();
        if (rqst.senderId === data.uid) {
          array.push({
            receiverId: rqst.receiverId,
            key: item.key,
          });
        }
      });
      setSentRequests(array);
    });
  }, [data.uid]);

  const sendRqst = (user) => {
    const rqstRef = push(ref(db, "friendRqst/"));
    set(rqstRef, {
      senderId: data.uid,
      senderName: data.displayName,
      senderEmail: data.email,
      receiverId: user.userid,
      receiverName: user.username,
    });
  };

  const cancelRqst = (rqstKey) => {
    remove(ref(db, `friendRqst/${rqstKey}`));
  };

  return (
    <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative overflow-y-scroll">
      <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
        user list
      </h1>
      <PiDotsThreeOutlineVerticalFill
        className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
        size={20}
      />
      <div>
        {userList.map((user, index) => {
          const request = sentRequests.find(
            (rq) => rq.receiverId === user.userid
          );

          return (
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
                    {user.username}
                  </h1>
                  <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                    {user.email}
                  </p>
                </div>
              </div>
              {request ? (
                <div
                  onClick={() => cancelRqst(request.key)}
                  className="h-[30px] w-[30px] rounded-[5px] bg-red-700 flex items-center justify-center cursor-pointer"
                >
                  <ImCross className="text-white" size={13} />
                </div>
              ) : (
                <div
                  onClick={() => sendRqst(user)}
                  className="h-[30px] w-[30px] rounded-[5px] bg-teal-600 flex items-center justify-center cursor-pointer"
                >
                  <FaPlus className="text-white" size={16} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
