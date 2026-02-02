import React from "react";
import { MdDateRange } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuBell } from "react-icons/lu";
import { IoGrid } from "react-icons/io5";
import SAMSLogo from '../../../assets/images/SAMS_360_logo.png';

export default function TopNav(): JSX.Element {
  return (
    <header className="w-full bg-[#F4F6F9] border-b border-gray-200">
      <div className="w-full h-1 bg-[rgb(45,42,84)]" />
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3">
                <div className="w-28 h-10 flex items-center justify-center">
                  <img src={SAMSLogo} alt="SAMS360 logo" className="max-h-full max-w-full object-contain" />
                </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-orange-500">SAMS Planner</span>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Calendar" className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
            <MdDateRange className="h-5 w-5" />
          </button>

          <button aria-label="Alert" className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
            <AiOutlineExclamationCircle className="h-5 w-5" />
          </button>

          <button aria-label="Notifications" className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
            <LuBell className="h-5 w-5" />
          </button>

          <button aria-label="Apps" className="p-2 rounded-md hover:bg-gray-100 text-gray-600">
            <IoGrid className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 pl-2 border-l border-gray-100">
            
            <button aria-label="Log in" className="ml-2 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">Log in</button>
          </div>
        </div>
      </div>
    </header>
  );
}
