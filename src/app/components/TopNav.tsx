"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/pro-regular-svg-icons";
import Image from "next/image";
import { Images } from "../ui/images";

export const TopNav = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 bg-white h-fit">
      <h2 className="font-bold text-slate-900">
        Good morning, <span className="font-normal">Richelle</span>
      </h2>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end border-r w-fit pe-4">
          <h3 className="text-base font-semibold text-slate-800">08:35 PM</h3>
          <span className="block text-xs leading-3 text-[#5F5F5F]">
            Fri, 18 Oct
          </span>
        </div>

        <div className="flex items-end gap-2 w-fit ">
          <div className="flex flex-col items-end">
            <h3 className="text-base font-semibold text-slate-800">12</h3>
            <span className="block text-xs leading-3 text-[#5F5F5F]">°C°F</span>
          </div>

          <Image
            alt="weather icon"
            src={Images.dashPageImages.weatherIcon}
          ></Image>
        </div>

        <div className="max-w-md mx-auto w-80">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-4">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full py-4 text-sm text-gray-900 border-none rounded-full outline-none ps-10 placeholder:text-gray-700 placeholder:font-semibold placeholder:text-base bg-slate-100 focus:border-gray-900 focus:ring-gray-300"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-gray-900 absolute end-3.5 bottom-2.5 bg-slate-300 hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-1.5 "
            >
              ⌘ K
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-12 h-12 p-2 border border-gray-300 rounded-full">
          <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
        </div>

        <div>
          <div className="">
            <Image
              className="w-12 h-12 border border-gray-200 rounded-full"
              src="/images/avatar.png"
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
