import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const BtnSave = ({createUser}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="absolute bottom-3 right-28 md:bottom-10 md:right-36 lg:right-10 lg:bottom-40 z-20 self-end flex flex-col gap-2 md:gap-4">
      {isHovering ? (
        <div className="w-[176px] h-[34px] shadow-xl rounded-lg flex justify-center items-center bg-white">
          <p className=" text-[#7B7B7B]  ">Save Form</p>
        </div>
      ) : (
        <div className="w-[176px] h-[34px] shadow-xl rounded-lg flex justify-center items-center bg-white invisible">
          <p className=" text-[#7B7B7B]  ">Save Form</p>
        </div>
      )}
      <button
        className="flex justify-center items-center bg-[#5465FF] text-white w-[67px] h-[67px] rounded-full text-3xl self-end shadow-inner"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={createUser}
      >
        <AiOutlineCheck />
      </button>
    </div>
  );
};

export default BtnSave;
