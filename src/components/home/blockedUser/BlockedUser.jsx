import React from 'react'
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi'
import { blockedUsers } from '../User'
import { FaUserCheck } from "react-icons/fa";

function BlockedUser() {
  return (
      <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px] relative overflow-y-scroll">
                     <h1 className="capitalize font-regular font-semibold text-[20px] text-black ">
                       blocked users
                     </h1>
                     <PiDotsThreeOutlineVerticalFill
                       className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                       size={20}
                     />
                     <div>
                       {blockedUsers.map((blockedUsers, index) => (
                         <div
                           key={index}
                           className="flex items-center mt-[17px] justify-between border-b-1 border-black/25 last:border-none"
                         >
                           <div className="flex items-center mb-[13px]">
                             <img src={blockedUsers.img} alt="#friend_img" />
                             <div className="mx-[14px] ">
                               <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                                 {blockedUsers.title}
                               </h1>
                               <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                                 {blockedUsers.time}
                               </p>
                             </div>
                           </div>
                           <div className="bg-primary rounded-[5px] h-[25px] w-[70px] md:h-[30px] md:w-[30px] flex justify-center items-center cursor-pointer">
                             {/* <p className="capitalize cursor-pointer text-white font-regular font-semibold text-[13px] md:text-[16px]">
                               unblock
                             </p> */}
                             <FaUserCheck  className="text-white text-[18px]"/>

                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
  )
}

export default BlockedUser