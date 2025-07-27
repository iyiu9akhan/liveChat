import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
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
  }, []);

  // useEffect(() => {
  //   const rqstRef = ref(db, "friendRqst/");
  //   onValue(rqstRef, (snapshot) => {
  //     let array = [];
  //     snapshot.forEach((item) => {
  //       const req = item.val();
  //       array.push(req.receiverId + req.senderId);
  //     });
  //     setSentRequests(array);
  //   });
  // }, []);
  useEffect(() => {
    const rqstRef = ref(db, "friendRqst/");
    onValue(rqstRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        const req = item.val();
        array.push({
          combo: req.receiverId + req.senderId,
          requestId: item.key, // this is the Firebase push key
        });
      });
      setSentRequests(array);
    });
  }, []);

  // const sendRqst = (user) => {
  //   const rqstRef = push(ref(db, "friendRqst/"));
  //   const key = rqstRef.key;
  //   // console.log(key);
  //   set(rqstRef, {
  //     senderId: data.uid,
  //     senderName: data.displayName,
  //     senderEmail: data.email,
  //     receiverId: user.userid,
  //     receiverName: user.username,
  //     requestId: key,
  //   });
  // };
  const sendRqst = (user) => {
    const rqstRef = push(ref(db, "friendRqst/"));
    const key = rqstRef.key;

    set(rqstRef, {
      senderId: data.uid,
      senderName: data.displayName,
      senderEmail: data.email,
      receiverId: user.userid,
      receiverName: user.username,
      receiverEmail:user.email,
      requestId: key,
    }).then(() => {
      setSentRequests((prev) => [
        ...prev,
        {
          combo: data.uid + user.userid,
          requestId: key,
        },
      ]);
    });
  };

  // const cancelRqst = (user) => {
  //   remove(ref(db, "friendRqst/" + user.requestId));
  //   console.log(user.requestId);
  // };
  const cancelRqst = (req) => {
    remove(ref(db, "friendRqst/" + req.requestId));
    // console.log(req.requestId);
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
          return (
            <div
              key={index}
              className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none pb-[13px]"
            >
              <div className="flex items-center ">
                <img
                  src={random_profile}
                  alt="#profile"
                  className="h-[52px] w-[52px]"
                />
                <div className="mx-[14px]">
                  <h1 className="capitalize font-regular text-[14px] text-black font-semibold">
                    {user.username}
                  </h1>
                  <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* {sentRequests.includes(data.uid + user.userid) ||
              sentRequests.includes(user.userid + data.uid) ? (
                <div
                  // onClick={() => cancelRqst(user)}
                  onClick={() => {
                    const matchedRequest = sentRequests.find(
                      (req) =>
                        req.combo === data.uid + user.userid ||
                        req.combo === user.userid + data.uid
                    );
                    if (matchedRequest) {
                      cancelRqst(matchedRequest);
                    }
                  }}
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
              )} */}

              {sentRequests.some(
                (req) =>
                  req.combo === data.uid + user.userid ||
                  req.combo === user.userid + data.uid
              ) ? (
                <div
                  onClick={() => {
                    const matchedRequest = sentRequests.find(
                      (req) =>
                        req.combo === data.uid + user.userid ||
                        req.combo === user.userid + data.uid
                    );
                    if (matchedRequest) cancelRqst(matchedRequest);
                  }}
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
