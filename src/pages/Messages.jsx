import React, { useEffect, useState } from "react";
import SideBar from "../components/Layout/SideBar";
import Container from "../components/Layout/Container";
import Friends from "../components/home/friends/Friends";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
} from "firebase/database";
import { activeMsgBoxInfo } from "../slice/activeMsgBox";

function Messages() {
  const db = getDatabase();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.value.user);
  const activeData = useSelector((state) => state.activeMsgBoxInfo.value);

  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [blockedByList, setBlockedByList] = useState([]);
  const [blockedList, setBlockedList] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem("activeMsgBoxInfo");
    if (savedUser && savedUser !== "undefined") {
      dispatch(activeMsgBoxInfo(JSON.parse(savedUser)));
    }
  }, []);

  const sendMsgHandler = () => {
    if (!msg.trim()) return;

    push(ref(db, "message/"), {
      msgSenderId: user.uid,
      msgSenderName: user.displayName,
      msg: msg,
      msgReceiverId: activeData.id,
      msgReceiverName: activeData.name,
    });
    setMsg("");
  };

  useEffect(() => {
    const msgRef = ref(db, "message/");
    onValue(msgRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        const val = item.val();
        const isSender = user.uid === val.msgSenderId && activeData.id === val.msgReceiverId;
        const isReceiver = activeData.id === val.msgSenderId && user.uid === val.msgReceiverId;
        if (isSender || isReceiver) arr.push({ ...val, key: item.key });
      });
      setMsgList(arr);
    });
  }, [activeData.id, user.uid]);

  useEffect(() => {
    const blockRef = ref(db, "blockedUsers/");
    onValue(blockRef, (snapshot) => {
      const list = [];
      snapshot.forEach((item) => {
        const val = item.val();
        if (val.blockedId === user.uid) {
          list.push({
            ...val,
            blockKey: item.key,
          });
        }
      });
      setBlockedByList(list);
    });
  }, [user.uid]);

  useEffect(() => {
    const blockRef = ref(db, "blockedUsers/");
    onValue(blockRef, (snapshot) => {
      const list = [];
      snapshot.forEach((item) => {
        const val = item.val();
        if (val.blockById === user.uid) {
          list.push({
            ...val,
            blockKey: item.key,
          });
        }
      });
      setBlockedList(list);
    });
  }, [user.uid]);

  const unblockUser = (blockKey) => {
    remove(ref(db, "blockedUsers/" + blockKey));
  };

  const isBlockedByUser = blockedByList.find((item) => item.blockById === activeData.id);
  const isBlockedUser = blockedList.find((item) => item.blockedId === activeData.id);

  return (
    <Container>
      <div className="md:flex md:h-screen md:py-[35px] gap-[43px] mb-5 md:mb-0 md:justify-between">
        <SideBar />

        <div className="md:w-[450px] flex flex-col h-[100%] justify-between">
          <Friends className="md:w-[450px] h-[100%]" />
        </div>

        <div className="shadow-md md:w-[700px] rounded-[20px] px-[50px] flex flex-col justify-between">
          <div className="border-b-2 border-gray-300 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-userBg h-[50px] w-[50px] md:h-[75px] md:w-[75px] rounded-full flex justify-center items-center my-[24px] mr-[33px]">
                <FaUser className="text-[39px] text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-[24px]">{activeData.name}</h1>
                <p className="text-[14px] text-gray-500">Online</p>
              </div>
            </div>
            <PiDotsThreeOutlineVerticalFill className="text-[25px]" />
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-3 py-3 hide-scrollbar justify-end">
            {msgList.map((item) => (
              <div
                key={item.key}
                className={`max-w-[70%] ${user.uid === item.msgSenderId ? "self-end" : "self-start"}`}
              >
                <p
                  className={`px-3 py-2 rounded-2xl ${
                    user.uid === item.msgSenderId
                      ? "bg-sideBar text-white rounded-br-[6px]"
                      : "bg-gray-300 text-black rounded-bl-[6px]"
                  }`}
                >
                  {item.msg}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-gray-300">
            {isBlockedByUser ? (
              <p className="w-full text-center text-warningRed py-5 font-semibold capitalize">
                You are blocked by {isBlockedByUser.blockByName}
              </p>
            ) : isBlockedUser ? (
              <div
                className="flex flex-col items-center my-4"
                title="Unblock"
              >
                <p className="text-warningRed text-base font-semibold mb-2">
                  You have blocked this user
                </p>
                <button
                  onClick={() => unblockUser(isBlockedUser.blockKey)}
                  className="bg-confirmBtn hover:bg-hoverConfirmBtn text-white text-sm px-5 py-1 rounded"
                >
                  Unblock
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between py-3">
                <div className="relative w-[90%] flex items-center">
                  <input
                    type="text"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="h-[45px] w-full bg-[#F1F1F1] rounded-[10px] outline-none pl-[20px] pr-[110px]"
                    placeholder="Type a message..."
                  />
                  <div className="absolute flex gap-5 items-center right-5 opacity-60">
                    <MdOutlineEmojiEmotions size={27} className="cursor-pointer" />
                    <IoCameraOutline size={27} className="cursor-pointer" />
                  </div>
                </div>
                <div
                  onClick={sendMsgHandler}
                  className="p-[10px] bg-sideBar rounded-[10px] cursor-pointer ml-3"
                  title="Send"
                >
                  <FaTelegramPlane className="text-[25px] text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Messages;
