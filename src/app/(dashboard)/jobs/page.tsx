"use client";

import {
  faArrowsRotateReverse,
  faEnvelope,
  faGrid2,
  faListCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Page = () => {
  const [view, setView] = useState("list");
  const [isRotating, setIsRotating] = useState(false);

  const [listView, setListView] = useState("Overview");

  const handleRefresh = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000); // Stops the rotation after 1 second
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl font-semibold text-modernGray900">
          Victoria Clinic
        </h2>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setView("Board")}
            className={`px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-0 ${
              view === "Board" ? "text-primary" : "text-gray-900"
            } focus:text-primary`}
          >
            <FontAwesomeIcon
              icon={faGrid2}
              className="me-1.5"
            ></FontAwesomeIcon>
            Board
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={`px-4 py-2 text-sm font-medium  bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-0 ${
              view === "list" ? "text-primary" : "text-gray-900"
            } focus:text-primary `}
          >
            <FontAwesomeIcon
              icon={faListCheck}
              className="me-1.5"
            ></FontAwesomeIcon>
            List
          </button>
          <button
            type="button"
            onClick={() => setView("calender")}
            className={`px-4 py-2 text-sm font-medium  bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-0 ${
              view === "calender" ? "text-primary" : "text-gray-900"
            } focus:text-primary `}
          >
            <FontAwesomeIcon
              icon={faListCheck}
              className="me-1.5"
            ></FontAwesomeIcon>
            Calendar
          </button>
          <button
            type="button"
            onClick={() => setView("Shift View")}
            className={`px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-0 ${
              view === "Shift View" ? "text-primary" : "text-gray-900"
            } focus:text-primary `}
          >
            <FontAwesomeIcon
              icon={faGrid2}
              className="me-1.5"
            ></FontAwesomeIcon>
            Calendar
          </button>
        </div>
      </div>

      {view === "Board" ? (
        <div>test1</div>
      ) : view === "list" ? (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 bg-white rounded-xl">
            <div className="px-4 py-5">
              <div className="flex gap-4 mb-4 items-centerg">
                <img src="/images/victoriaClinicLogo.png" alt="" />
                <div className="">
                  <h2 className="mb-1.5 text-base font-medium text-modernGray900">
                    Victoria Clicnic
                  </h2>
                  <div className="text-gray-600">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="me-2 text-slate-400"
                    ></FontAwesomeIcon>
                    <span>711 Victoria Street, Hamilton 3210</span>
                  </div>
                </div>
              </div>

              <div className="px-3 py-2 rounded-lg bg-slate-50">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src="/images/avatar.png"
                    className="w-5 h-5 rounded-full"
                    alt=""
                  />
                  <span className="text-sm font-medium text-gray-600">
                    Savannah Nguyen
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-slate-400 me-2"
                    ></FontAwesomeIcon>
                    <span className="text-gray-600 ">
                      Savannah.Nguyen@gmail.com
                    </span>
                  </div>

                  <div>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-slate-400 me-2"
                    ></FontAwesomeIcon>
                    <span className="text-gray-600 ">(704) 555-0127</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-5 border-b border-b-slate-100">
              <span className="text-sm text-slate-500">Job Description:</span>
              <p className="text-sm text-slate-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="flex items-start justify-between gap-4 px-4 py-5 border-b border-b-slate-100">
              <div className="flex flex-col items-start w-full gap-1 justisfy-start">
                <span className="text-sm text-slate-500">No of positions:</span>
                <p className="text-sm text-slate-900">3</p>
              </div>

              <div className="flex flex-col items-start w-full gap-1 justisfy-start">
                <span className="text-sm text-slate-500">Job Type</span>
                <p className="text-sm text-slate-900">Full Time</p>
              </div>
            </div>
            <div className="flex items-start justify-between gap-4 px-4 py-5 border-b border-b-slate-100">
              <div className="flex flex-col items-start w-full gap-1 justisfy-start">
                <span className="text-sm text-slate-500">Admin</span>
                <p className="text-sm text-slate-900">3</p>
              </div>

              <div className="flex flex-col items-start w-full gap-1 justisfy-start">
                <span className="text-sm text-slate-500">Role</span>
                <p className="text-sm text-slate-900">GP</p>
              </div>
            </div>
            <div className="px-4 py-5 border-b border-b-slate-100">
              <span className="text-sm text-slate-500">Location</span>
              <p className="text-sm text-slate-900">Auckland, Hemilton</p>
            </div>

            <div className="px-4 py-5 border-b border-b-slate-100">
              <span className="text-sm text-slate-500">
                Required Skills/Qualifications
              </span>
              <p className="text-sm text-slate-900">Casual Shift, </p>
            </div>

            <div className="px-4 py-5 border-b border-b-slate-100">
              <span className="text-sm text-slate-500">Experience Level</span>
              <p className="text-sm text-slate-900">Entry Levels</p>
            </div>

            <div className="px-4 py-5 border-b border-b-slate-100">
              <span className="text-sm text-slate-500">Group</span>
              <p className="text-sm text-slate-900">Auckland, Hamilton</p>
            </div>
          </div>
          <div className="col-span-8 bg-white rounded-xl">
            <div className="px-4 py-5">
              <img
                src="/images/jobs/focalPoint.svg"
                className="h-10 mb-4"
                alt=""
              />
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-green-600 border border-green-300 rounded-full leading-2 bg-success50">
                  Available
                </span>
                <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-slate-900 border border-slate-200 rounded-full leading-2 bg-slate-100">
                  Under offer
                </span>
                <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-purple-600 border border-purple-300 rounded-full leading-2 bg-purple-50">
                  Future Opportunity - TBC
                </span>
              </div>

              <div className=" w-fit">
                <button
                  onClick={handleRefresh}
                  className="flex items-center gap-4 text-xl font-semibold text-modernGray900"
                >
                  1256 - Victoria clinic job details
                  <div className="relative flex items-center justify-center">
                    <span className="absolute text-[10px]"> 6</span>
                    <FontAwesomeIcon
                      className={`w-5 h-5 text-[#1C274C] transition-transform ${
                        isRotating ? "animate-spin" : ""
                      }`}
                      icon={faArrowsRotateReverse}
                    ></FontAwesomeIcon>
                  </div>
                </button>
              </div>
            </div>
            <div className="px-4 pb-5">
              <div className="inline-flex mb-4 rounded-md" role="group">
                <button
                  type="button"
                  onClick={() => setListView("Overview")}
                  className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                    listView === "Overview"
                      ? "text-primary border-b-primary"
                      : "text-gray-500 border-b-gray-100"
                  }`}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setListView("Applicants")}
                  className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                    listView === "Applicants"
                      ? "text-primary border-b-primary"
                      : "text-gray-500 border-b-gray-100"
                  }`}
                >
                  Applicants
                </button>
                <button
                  type="button"
                  onClick={() => setListView("Related Jobs")}
                  className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                    listView === "Related Jobs"
                      ? "text-primary border-b-primary"
                      : "text-gray-500 border-b-gray-100"
                  }`}
                >
                  Related Jobs
                </button>
                <button
                  type="button"
                  onClick={() => setListView("Swap Request")}
                  className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                    listView === "Swap Request"
                      ? "text-primary border-b-primary"
                      : "text-gray-500 border-b-gray-100"
                  }`}
                >
                  Swap Request
                </button>
                <button
                  type="button"
                  onClick={() => setListView("Inbox")}
                  className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                    listView === "Inbox"
                      ? "text-primary border-b-primary"
                      : "text-gray-500 border-b-gray-100"
                  }`}
                >
                  Inbox
                </button>
                <button
                  type="button"
                  onClick={() => setListView("Important Info")}
                  className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                    listView === "Important Info"
                      ? "text-primary border-b-primary"
                      : "text-gray-500 border-b-gray-100"
                  }`}
                >
                  Important Info
                </button>
              </div>

              {listView === "Overview" ? (
                <div className="flex items-center gap-1 text-gray-600">
                  <div className=" w-[10%]">
                    <div className="mb-1 text-base font-medium ">Ph</div>
                    <div className=" bg-gray-200 rounded-full h-1.5 mb-4 ">
                      <div className="h-1.5 bg-blue-500 rounded-full "></div>
                    </div>
                  </div>
                  <div className=" w-[45%]">
                    <div className="mb-1 text-base font-medium ">Inbox</div>
                    <div className=" bg-gray-200 rounded-full h-1.5 mb-4 ">
                      <div className="h-1.5 bg-green-500 rounded-full "></div>
                    </div>
                  </div>
                  <div className=" w-[45%]">
                    <div className="mb-1 text-base font-medium ">Rx</div>
                    <div className=" bg-gray-200 rounded-full h-1.5 mb-4 ">
                      <div className="h-1.5 bg-red-500 rounded-full "></div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : view === "calender" ? (
        <div>test2</div>
      ) : view === "Shift View" ? (
        <div>yes</div>
      ) : null}
    </div>
  );
};

export default Page;
