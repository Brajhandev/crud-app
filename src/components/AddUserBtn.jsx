import React, { useState } from 'react';
import { HiOutlineUserAdd } from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai'

const AddUserBtn = ({setshowModal, showModal}) => {
    const [isHovering, setIsHovering] = useState(false);

const activeModal = () => {
  setshowModal((showModal) => !showModal)
 
}
    return (
<div className="sticky bottom-3 z-20 self-end flex flex-col gap-2 md:gap-4 lg:gap-2">
        {isHovering ? (
          <div className="w-[176px] h-[34px] shadow-xl rounded-lg flex justify-center items-center bg-white">
            <p className=" text-[#7B7B7B]  "> {showModal ? 'Close form' : 'Add new user'}</p>
          </div>
        ) : (
          <div className="w-[176px] h-[34px] shadow-xl rounded-lg flex justify-center items-center bg-white invisible">
            <p className=" text-[#7B7B7B]  ">Add new user</p>
          </div>
        )}
        <button
          className={`flex justify-center items-center bg-[#5465FF] ${showModal && 'opacity-40'} text-white w-[67px] h-[67px] rounded-full text-3xl self-end shadow-inner`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={activeModal}
        >
          {
            showModal ?
            <AiOutlineClose/> :
            <HiOutlineUserAdd />
          }
          
        </button>
      </div>
    );
};

export default AddUserBtn;