"use client";

import {
  faArrowsRotateReverse,
  faCalendar,
  faCalendarClock,
  faClock,
  faDoorOpen,
  faEllipsisVertical,
  faEnvelope,
  faFilePdf,
  faGrid2,
  faHospital,
  faListCheck,
  faLocationCheck,
  faLocationDot,
  faMugHot,
  faPaperclip,
  faPhone,
  faUser,
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

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" h-[calc(100vh-120px)]">
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
        <div className="grid grid-cols-12 gap-4 overflow-auto h-[calc(100vh-140px)] scrollbar-hide pb-12">
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
            <div className="p-5">
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
                <div>
                  <div className="flex items-center gap-1 mb-4 text-gray-600">
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

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3 last:mb-0">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="w-4 text-slate-500"
                      ></FontAwesomeIcon>
                      <span className="text-sm text-slate-900">Assignee</span>
                      <span className="text-sm text-primary">Olivia Rhye</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3 last:mb-0">
                      <FontAwesomeIcon
                        icon={faCalendar}
                        className="w-4 text-slate-500"
                      ></FontAwesomeIcon>
                      <span className="text-sm text-slate-900">Date</span>
                      <span className="text-sm text-slate-500">21 Jan</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 last:mb-0">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="w-4 text-slate-500"
                      ></FontAwesomeIcon>
                      <span className="text-sm text-slate-900">Time</span>
                      <span className="text-sm text-slate-500">
                        8:00 AM - 5:00 PM
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 last:mb-0">
                      <FontAwesomeIcon
                        icon={faHospital}
                        className="w-4 text-slate-500"
                      ></FontAwesomeIcon>
                      <span className="text-sm text-slate-900">Client</span>
                      <span className="text-sm text-slate-500">
                        Victoria Clinic
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 last:mb-0">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="w-4 text-slate-500"
                      ></FontAwesomeIcon>
                      <span className="text-sm text-slate-900">Location:</span>
                      <span className="text-sm text-slate-500">
                        711 Victoria Street, Hamilton 3210
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 last:mb-0">
                      <FontAwesomeIcon
                        icon={faHospital}
                        className="w-4 text-slate-500"
                      ></FontAwesomeIcon>
                      <span className="text-sm text-slate-900">Posted By:</span>
                      <span className="text-sm text-slate-500">
                        Zain Vaccaro
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3 last:mb-0">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="w-4 text-slate-500"
                      ></FontAwesomeIcon>
                      <span className="text-sm text-slate-900">Posted at:</span>
                      <span className="text-sm text-slate-500">
                        21 Jan 8:00 AM
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2 className="mb-4 text-lg font-medium text-black">
                      Contact
                    </h2>

                    <div className="flex items-center gap-3 mb-3 last:mb-0">
                      <img
                        src="/images/avatar.png"
                        className="w-6 h-6 rounded-full "
                        alt=""
                      />
                      <span className="text-sm text-gray-600">
                        Dr. Jane Doe
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3 last:mb-0">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="w-3 h-3 text-slate-800"
                        ></FontAwesomeIcon>
                      </span>
                      <span className="text-sm text-gray-600">
                        Jane.doe@email.com
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-3 last:mb-0">
                      <span className="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="w-3 h-3 text-slate-800"
                        ></FontAwesomeIcon>
                      </span>
                      <span className="text-sm text-gray-600">0221295170</span>
                    </div>

                    <p className="text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h2 className="mb-4 text-lg font-medium text-black">
                      Job Description
                    </h2>

                    <div>
                      <p className="text-slate-500">
                        {isExpanded
                          ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          provident tempore nam quidem possimus maxime, animi saepe neque dolore
          nihil minima! Unde, eligendi dicta. Explicabo cumque sunt earum
          possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Odio ratione provident tempore nam quidem possimus maxime, animi saepe
          neque dolore nihil minima! Unde, eligendi dicta. Explicabo cumque sunt
          earum possimus?`
                          : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione
          provident tempore nam quidem possimus maxime, animi saepe neque dolore
          nihil minima! Unde, eligendi dicta...`}
                        <button
                          onClick={toggleExpand}
                          className="ml-1 text-primary hover:underline"
                        >
                          {isExpanded ? "See Less" : "See More"}
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="pb-6 mb-4 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-medium text-black ">
                        Activities
                      </h2>
                      <div className="relative inline-block text-left group">
                        {/* relative */}
                        <button
                          className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                          type="button"
                        >
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className="w-5 h-5 text-sm"
                          ></FontAwesomeIcon>
                        </button>

                        <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
                          <ul className="p-2 text-sm text-gray-700">
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                              >
                                Add activity
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                              >
                                Add Comment
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                          />
                          <span className="flex w-3 h-3 bg-blue-500 rounded-full "></span>
                          <label
                            htmlFor="default-checkbox"
                            className="text-sm font-normal text-gray-600"
                          >
                            8:00 AM - 9:AM
                          </label>
                        </div>
                        <div className="flex items-start justify-center">
                          <span className="text-slate-500">Phone Consult</span>
                        </div>

                        <div className="flex items-center justify-end gap-3 text-slate-500">
                          <span>ph</span>
                          <button>
                            <FontAwesomeIcon
                              icon={faPaperclip}
                            ></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                          />
                          <span className="flex w-3 h-3 bg-green-500 rounded-full "></span>
                          <label
                            htmlFor="default-checkbox"
                            className="text-sm font-normal text-gray-600"
                          >
                            9:00 AM - 12:PM
                          </label>
                        </div>
                        <div className="flex items-start justify-center">
                          <span className="text-slate-500">Inbox</span>
                        </div>

                        <div className="flex items-center justify-end gap-3 text-slate-500">
                          <span>Inbox</span>
                          <button>
                            <FontAwesomeIcon
                              icon={faPaperclip}
                            ></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center gap-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                          />
                          <span className="flex w-3 h-3 bg-red-500 rounded-full "></span>
                          <label
                            htmlFor="default-checkbox"
                            className="text-sm font-normal text-gray-600"
                          >
                            12:00 AM - 5:PM
                          </label>
                        </div>
                        <div className="flex items-start justify-center">
                          <span className="text-slate-500">Prescription</span>
                        </div>

                        <div className="flex items-center justify-end gap-3 text-slate-500">
                          <span>Rx</span>
                          <button>
                            <FontAwesomeIcon
                              icon={faPaperclip}
                            ></FontAwesomeIcon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pb-6 mb-4 border-b">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-sm font-medium text-black ">
                        Comments
                      </h2>

                      <div className="relative inline-block text-left group">
                        {/* relative */}
                        <button
                          className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
                          type="button"
                        >
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            className="w-5 h-5 text-sm"
                          ></FontAwesomeIcon>
                        </button>

                        <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
                          <ul className="p-2 text-sm text-gray-700">
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                              >
                                Add activity
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-3 py-2 rounded-md hover:bg-gray-100"
                              >
                                Add Comment
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <img src="/images/pdfFileIcon.svg" alt="" />
                        <span className="text-sm font-medium text-gray-700">
                          Daily Activity
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pb-6 mb-4">
                    <div>
                      <p className="text-sm text-slate-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <img src="/images/pdfFileIcon.svg" alt="" />
                        <span className="text-sm font-medium text-gray-700">
                          Summary Report
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h2 className="mb-4 text-lg font-medium text-black">
                      Check-In, Check-Out & Break Details
                    </h2>

                    <div>
                      <div className="mb-3 last:mb-0">
                        <div className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faLocationCheck}
                            className="w-4 text-slate-500"
                          ></FontAwesomeIcon>

                          <span className="text-sm text-slate-900">
                            Check-in Time:
                          </span>
                          <span className="text-sm text-primary">
                            9:05 PM{" "}
                            <span className="text-xs text-red-500 ms-1">
                              (5 minutes late)
                            </span>
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-3 last:mb-0">
                        <FontAwesomeIcon
                          icon={faMugHot}
                          className="w-4 text-slate-500"
                        ></FontAwesomeIcon>
                        <span className="text-sm text-slate-900">
                          Break details:
                        </span>
                        <span className="text-sm text-slate-500">
                          11:30 PM – 11:50 PM (20 minutes)
                        </span>
                        <button className="text-primary">see more</button>
                      </div>
                      <div className="flex items-center gap-2 mb-3 last:mb-0">
                        <FontAwesomeIcon
                          icon={faDoorOpen}
                          className="w-4 text-slate-500"
                        ></FontAwesomeIcon>
                        <span className="text-sm text-slate-900">
                          Check-Out time:
                        </span>
                        <span className="text-sm text-slate-500">
                          7:00 AM <span className="text-xs">(On time)</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3 last:mb-0">
                        <FontAwesomeIcon
                          icon={faCalendarClock}
                          className="w-4 text-slate-500"
                        ></FontAwesomeIcon>
                        <span className="text-sm text-slate-900">
                          Over time:
                        </span>
                        <span className="text-sm text-slate-500">1 hour</span>
                      </div>

                      <div className="flex items-center gap-2 mb-3 last:mb-0">
                        <FontAwesomeIcon
                          icon={faCalendarClock}
                          className="w-4 text-slate-500"
                        ></FontAwesomeIcon>
                        <span className="text-sm text-slate-900">
                          Total time:
                        </span>
                        <span className="text-sm text-slate-500">
                          8 hours 20 minutes
                        </span>
                      </div>
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
