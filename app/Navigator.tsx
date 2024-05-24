import React from "react";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface INavigation {
  moveForward: any;
  moveBackward: any;
  currentStep: number;
  totalSteps: number;
}

export const Navigations = (props: INavigation) => {
  const { currentStep, moveBackward, moveForward, totalSteps } = props;

  return (
    <div className="w-full flex items-center justify-center my-16 md:my-24 border text-black">

    <div className="flex items-center gap-6 ">
      <button
        className="rounded-md p-3 bg-primary cursor-pointer text-black  transition-all duration-300 ease-in-out "
        onClick={moveBackward}
      >
        <IoMdArrowDropleft />
      </button>
      <span className="text-gray-text text-center">
        {currentStep}/{totalSteps}
      </span>
      <button
        className="rounded-md p-3 bg-primary cursor-pointer text-black  transition-all duration-300 ease-in-out "
        onClick={moveForward}
      >
        <IoMdArrowDropright />
      </button>
    </div>
    </div>
  );
};
