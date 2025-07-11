import React from 'react'
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi'
import { myGroup } from '../User'


function Groups() {
  return (
    <div className="md:w-[344px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] p-[22px]  relative overflow-y-scroll">
                     <h1 className="capitalize font-regular font-semibold text-[20px] text-black">
                       my groups
                     </h1>
                     <PiDotsThreeOutlineVerticalFill
                       className="absolute right-[23px] top-[20px] cursor-pointer mt-2"
                       size={20}
                     />
                     <div>
                       {myGroup.map((Group, index) => (
                         <div
                           key={index}
                           className={`flex items-center mt-[17px] justify-between cursor-pointer border-b-1 border-black/25 last:border-none`}
                         >
                           <div className="flex items-center mb-[13px]">
                             <img src={Group.img} alt="#friend_img" />
                             <div className="mx-[14px] ">
                               <h1 className="capitalize font-regular text-[14px] text-black font-semibold ">
                                 {Group.title}
                               </h1>
                               <p className="font-regular font-medium text-[12px] text-[#4D4D4D] capitalize">
                                 {Group.subtitle}
                               </p>
                             </div>
                           </div>
                           <p className="capitalize text-black/50 font-regular font-medium text-[10px]">
                             {Group.time}
                           </p>
                         </div>
                       ))}
                     </div>
                   </div>
  )
}

export default Groups