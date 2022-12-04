import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const NextStepBtn = ({ title }) => {
  return (
    <button className="bg-darkBlue text-base text-white px-6 py-3 rounded-xl flex items-center justify-center gap-1 shadow-xl hover:bg-blue-800 hover:cursor-pointer transition-hover duration-300">
      {title}
      <span className="text-lg">
        <HiOutlineArrowRight />
      </span>
    </button>
  );
};

export default NextStepBtn;
