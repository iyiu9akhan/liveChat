import React, { useEffect, useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import { userList } from '../../../pages/User'
import { FaPlus } from "react-icons/fa";
// import { userList } from "../User";
import { getDatabase, ref, onValue } from "firebase/database";
import user_one from "../../../assets/home/userList/user_three.png";

function UserList() {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      // console.log(snapshot.val());
      onValue(userRef, (snapshot) => {
        let array = [];
        snapshot.forEach((item) => {
          array.push(item.val());
        });
        setUserList(array)
      });
    });
  }, []);
  console.log(userList);
  
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
              <img src={user_one} alt="#profile" />
              <div className="mx-[14px] ">
                <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                  {userList.username}
                </h1>
                <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                  {userList.email}
                </p>
              </div>
            </div>
            <div className="h-[30px] w-[30px] rounded-[5px] bg-primary flex items-center justify-center cursor-pointer">
              <FaPlus className="text-white" size={14} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
