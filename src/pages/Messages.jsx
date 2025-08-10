import React, { useEffect, useState } from "react";
import SideBar from "../components/Layout/SideBar";
import Container from "../components/Layout/Container";
import Friends from "../components/home/friends/Friends";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { activeMsgBoxInfo } from "../slice/activeMsgBox";

function Messages() {
  const data = useSelector((state) => state.userInfo.value.user);
  const activeData = useSelector((state) => state.activeMsgBoxInfo.value);
  const db = getDatabase();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  console.log(activeData);

  useEffect(() => {
    const savedUser = localStorage.getItem("activeMsgBoxInfo");
    if (savedUser && savedUser !== "undefined") {
      dispatch(activeMsgBoxInfo(JSON.parse(savedUser)));
    }
  }, []);

  const sendMsgHandler = () => {
    set(push(ref(db, "message/")), {
      msgSenderId: data.uid,
      msgSenderName: data.displayName,
      msg: msg,
      msgReceiverId: activeData.id,
      msgReceiverName: activeData.name,
    });
    setMsg("");
  };

  useEffect(() => {
    const msgRef = ref(db, "message/");
    onValue(msgRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          (data.uid == item.val().msgSenderId &&
            activeData.id == item.val().msgReceiverId) ||
          (activeData.id == item.val().msgSenderId &&
            data.uid == item.val().msgReceiverId)
        ) {
          arr.push(item.val());
        }
      });
      setMsgList(arr);
    });
  }, [activeData.id]);

  console.log(msgList);

  // const messagesEndRef = React.useRef(null);

  const [blockedByList, setBlockedByList] = useState([]);
  const blocked = blockedByList.includes(activeData.id);

  useEffect(() => {
    const blockRef = ref(db, "blockedUsers/");
    onValue(blockRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (item.val().blockedId === data.uid) {
          array.push(item.val().blockById);
        }
      });
      setBlockedByList(array);
    });
  }, []);

  const [blockedList, setBlockedList] = useState([]);
  const blocker = blockedList.find((item) => item.blockedId === activeData.id); // I blocked them

  useEffect(() => {
    const blockRef = ref(db, "blockedUsers/");
    onValue(blockRef, (snapshot) => {
      let array = [];
      snapshot.forEach((item) => {
        if (item.val().blockById === data.uid) {
          array.push({
            ...item.val(),
            blockKey: item.key,
          });
        }
      });
      setBlockedList(array);
    });
  }, []);

  const unblockUser = (blockKey) => {
    remove(ref(db, "blockedUsers/" + blockKey));
  };

  return (
    <div>
      <Container>
        <div className="md:flex md:h-screen md:py-[35px] gap-[43px] mb-5 md:mb-0 md:justify-between">
          <SideBar />
          <div className="md:flex md:justify-between">
            <div className="md:w-[450px] flex flex-col h-[100%] justify-between">
              {/* <div className="relative">
                <input
                  type="text"
                  className="w-full h-[59px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] pl-[65px] border-none focus:outline-none placeholder:text-iconGrayplaceholder:font-regular placeholder:font-medium placeholder:text-base  text-[19px] font-medium font-regular"
                  placeholder="Search"
                />
                <IoSearch
                  className="absolute top-[20px] left-[23px]"
                  size={19}
                  color="#000000"
                />
                <PiDotsThreeOutlineVerticalFill
                  className="absolute right-[23px] top-[20px] cursor-pointer"
                  size={20}
                />
              </div> */}
              <Friends className="md:w-[450px] h-[100%]" />
            </div>
          </div>
          <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:w-[700px] rounded-[20px] px-[50px] flex flex-col justify-between">
            <div className="border-gray-300 border-b-2 flex items-center  justify-between">
              <div className="flex items-center">
                <div className="bg-userBg  h-[50px] w-[50px] md:h-[75px] md:w-[75px] rounded-full flex justify-center items-center cursor-pointer my-[24px] mr-[33px]">
                  <FaUser className="text-[39px] text-white" />
                </div>
                <div>
                  <h1 className="font-semibold font-regular text-[24px]">
                    {activeData.name}
                  </h1>
                  <p className="font-regular font-normal text-[14px] capitalize">
                    lorem
                  </p>
                </div>
              </div>
              <PiDotsThreeOutlineVerticalFill className="text-[25px]" />
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-3 font-regular text-[16px] py-3 hide-scrollbar justify-end group">
              {msgList.map((item) =>
                data.uid == item.msgSenderId ? (
                  <div className="self-end max-w-[70%]">
                    <p className=" bg-sideBar   text-white px-3 py-2 rounded-2xl rounded-br-[6px] ">
                      {item.msg}
                    </p>
                  </div>
                ) : (
                  <div className="self-start max-w-[70%]">
                    <p className=" bg-gray-300    px-3 py-2 rounded-2xl rounded-bl-[6px] ">
                      {item.msg}
                    </p>
                  </div>
                )
              )}
            </div>
            <div className="border-gray-300 border-t-2 flex justify-between items-center">
              {blocked ? (
                <p className="w-full text-center text-warningRed py-5 font-semibold capitalize font-regular">
                 you're blocked
                </p>
              ) : blocker ? (
                <div
                  onClick={() => unblockUser(blocker.blockKey)}
                  className="bg-confirmBtn hover:bg-hoverConfirmBtn rounded-[5px] h-[25px]  md:h-[30px] flex justify-center items-center cursor-pointer my-[20px] mx-auto"
                  title="Unblock"
                >
                  <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[16px] px-5">
                    unblock
                  </p>
                  {/* <FaUserCheck className="text-white text-[18px]" /> */}
                </div>
              ) : (
                <div className="flex justify-between w-full items-center">
                  <div className="w-[90%] relative flex items-center">
                    <input
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      type="text"
                      className="h-[45px] w-full bg-[#F1F1F1] rounded-[10px] my-[35px] outline-0 pl-[20px] pr-[110px] font-regular"
                    />
                    <div className="absolute flex gap-5 items-center right-5 opacity-60">
                      <MdOutlineEmojiEmotions
                        size={27}
                        className="cursor-pointer"
                      />
                      <IoCameraOutline size={27} className="cursor-pointer" />
                    </div>
                  </div>
                  <div
                    onClick={sendMsgHandler}
                    className="p-[10px] bg-sideBar rounded-[10px] cursor-pointer"
                    title="send"
                  >
                    <FaTelegramPlane className="text-[25px] text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Messages;
