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
import { FaUserFriends } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Search from "../../search/Search";

function UserList() {
  const data = useSelector((state) => state.userInfo.value.user);
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [friends, setFriends] = useState([]);

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

  useEffect(() => {
    const friendRef = ref(db, "friends/");
    onValue(friendRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        const val = item.val();
        if (val.senderId === data.uid || val.receiverId === data.uid) {
          const friendId =
            val.senderId === data.uid ? val.receiverId : val.senderId;
          array.push(friendId);
        }
      });
      setFriends(array);
    });
  }, []);

  const [blockedUsers, setBlockedUsers] = useState([]);

  useEffect(() => {
    const blockRef = ref(db, "blockedUsers/");
    onValue(blockRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        const val = item.val();
        if (val.blockById === data.uid || val.blockedId === data.uid) {
          array.push(
            val.blockById === data.uid ? val.blockedId : val.blockById
          );
        }
      });
      setBlockedUsers(array);
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
      receiverEmail: user.email,
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

  const [searchUser, setSearchUser] = useState([]);

  const searchHandler = (e) => {
    let arr = [];
    if (e.target.value.length == 0) {
      setSearchUser([]);
    } else {
      userList.filter((item) => {
        if (
          item.username.toLowerCase().includes(e.target.value.toLowerCase())
        ) {
          arr.push(item);
          setSearchUser(arr);
        }
      });
    }
  };
  // console.log(searchUser);

  return (
    <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] pr-[10px] relative">
      <div className="flex justify-between items-center pr-[18px]">
        <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
          user list
        </h1>
        {/* <FaSearch
        className="absolute right-[40px] top-[20px] cursor-pointer mt-2"
        size={20}
      /> */}
        <Search onChange={searchHandler} />
      </div>
      <div className="overflow-y-scroll h-[95%] pr-2">
        {searchUser.length > 0
          ? searchUser.map((user, index) => {
              const isFriend = friends.includes(user.userid);
              const isBlocked = blockedUsers.includes(user.userid);

              return (
                <div
                  key={index}
                  className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none pb-[13px]"
                >
                  <div className="flex items-center">
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

                  {isBlocked ? (
                    <div
                      title="Blocked"
                      className="bg-[#9CA3AF] rounded-[5px] h-[30px] w-[30px] flex justify-center items-center cursor-not-allowed"
                    >
                      <FaUserAltSlash className="text-white text-[16px]" />
                    </div>
                  ) : isFriend ? (
                    <div className="bg-[#16A34A] rounded-[5px] h-[25px] w-[25px] md:h-[30px] md:w-[30px] flex justify-center items-center cursor-not-allowed">
                      {/* <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[15px]">
                block
              </p> */}
                      <FaUserFriends className="text-white text-[18px]" />
                    </div>
                  ) : sentRequests.some(
                      (req) =>
                        req.combo === data.uid + user.userid ||
                        req.combo === user.userid + data.uid
                    ) ? (
                    <div
                      title="Cancel"
                      onClick={() => {
                        const matchedRequest = sentRequests.find(
                          (req) =>
                            req.combo === data.uid + user.userid ||
                            req.combo === user.userid + data.uid
                        );
                        if (matchedRequest) cancelRqst(matchedRequest);
                      }}
                      className="h-[30px] w-[30px] rounded-[5px] bg-[#9CA3AF] flex items-center justify-center cursor-pointer hover:bg-[#6B7280]"
                    >
                      <ImCross className="text-white" size={13} />
                    </div>
                  ) : (
                    <div
                      title="Send"
                      onClick={() => sendRqst(user)}
                      className="h-[30px] w-[30px] rounded-[5px] bg-[#3D77BE] hover:bg-[#3164A5] flex items-center justify-center cursor-pointer"
                    >
                      <FaPlus className="text-white" size={16} />
                    </div>
                  )}
                </div>
              );
            })
          : userList.map((user, index) => {
              const isFriend = friends.includes(user.userid);
              const isBlocked = blockedUsers.includes(user.userid);

              return (
                <div
                  key={index}
                  className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none pb-[13px]"
                >
                  <div className="flex items-center">
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

                  {isBlocked ? (
                    <div
                      title="Blocked"
                      className="bg-[#9CA3AF] rounded-[5px] h-[30px] w-[30px] flex justify-center items-center cursor-not-allowed"
                    >
                      <FaUserAltSlash className="text-white text-[16px]" />
                    </div>
                  ) : isFriend ? (
                    <div className="bg-friendsIcon rounded-[5px] h-[25px] w-[25px] md:h-[30px] md:w-[30px] flex justify-center items-center cursor-not-allowed">
                      {/* <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[15px]">
                block
              </p> */}
                      <FaUserFriends className="text-white text-[18px]" />
                    </div>
                  ) : sentRequests.some(
                      (req) =>
                        req.combo === data.uid + user.userid ||
                        req.combo === user.userid + data.uid
                    ) ? (
                    <div
                      title="Cancel"
                      onClick={() => {
                        const matchedRequest = sentRequests.find(
                          (req) =>
                            req.combo === data.uid + user.userid ||
                            req.combo === user.userid + data.uid
                        );
                        if (matchedRequest) cancelRqst(matchedRequest);
                      }}
                      className="h-[30px] w-[30px] rounded-[5px] bg-[#9CA3AF] flex items-center justify-center cursor-pointer hover:bg-[#6B7280]"
                    >
                      <ImCross className="text-white" size={13} />
                    </div>
                  ) : (
                    <div
                      title="Send"
                      onClick={() => sendRqst(user)}
                      className="h-[30px] w-[30px] rounded-[5px] bg-[#3D77BE] hover:bg-[#3164A5] flex items-center justify-center cursor-pointer"
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
