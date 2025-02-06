"use client";

import {
  faArrowsRotateReverse,
  faBriefcase,
  faCalendar,
  faCalendarClock,
  faClock,
  faDoorOpen,
  faEllipsisVertical,
  faEnvelope,
  faGrid2,
  faHospital,
  faListCheck,
  faLoader,
  faLocationCheck,
  faLocationDot,
  faMessageDots,
  faMugHot,
  faPaperclip,
  faPhone,
  faPlus,
  faUser,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Images } from "../../../ui/images";
import Image from "next/image";
import Link from "next/link";

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

  const [jobForm, setJobForm] = useState(false);
  const [successNoti, setSuccessNoti] = useState(false);

  if (successNoti) {
    return (
      <div className=" h-[calc(100vh-100px)] flex justify-center items-center">
        <div className="w-full max-w-4xl p-5 bg-white shadow rounded-xl">
          <div className="block mb-4 overflow-hidden ">
            <div className="grid-cols-[50px_1fr] grid overflow-hidden rounded-xl mb-6">
              <div className="flex items-center justify-center py-8 bg-green-400">
                <img
                  src="/images/checkedWhite.svg"
                  className="w-8 h-8 "
                  alt=""
                />
              </div>

              <div className="bg-green-100 ">
                <div className="p-4">
                  <h2 className="text-lg font-medium text-slate-900">
                    Success
                  </h2>
                  <p className="text-base text-slate-800">
                    Your job has been successfully scheduled for posting. This
                    process may take up several minutes as we notified to
                    eligible staff
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between ">
                <img
                  src="/images/jobs/focalPoint.svg"
                  className="h-14"
                  alt=""
                />
              </div>

              <div className="mt-4">
                <h2 className="mb-2 text-base font-medium text-slate-900">
                  JD1234 - Lorem ipsum is job title
                </h2>

                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Job Title:</span> Virtual
                      Locum for Consult, Inbox and Rx
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Shift ID:</span> 1256
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Date: </span>
                      21 Jan
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Time:</span> 8:00 AM -
                      5:00 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Client:</span> Victoria
                      Clinic
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Location:</span> 711
                      Victoria Street, Hamilton 3210
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faHospital}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Posted By:</span> Zain
                      Vaccaro
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-5 text-slate-500"
                  ></FontAwesomeIcon>
                  <div className="flex items-center line-clamp-1">
                    <span className="line-clamp-1 text-slate-500">
                      <span className="text-slate-900">Posted at:</span> 21 Jan
                      8:00 AM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute p-3 bg-white border rounded-full bottom-4 border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setSuccessNoti(false);
                setJobForm(false);
              }}
              className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              View job details
            </button>

            <Link
              href={"/jobs"}
              // onClick={handleBack}
              className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
            >
              Go to job list
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" h-[calc(100vh-100px)]">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h2 className="text-2xl font-semibold text-modernGray900">
          Victoria Clinic
        </h2>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {/* <button
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
          </button> */}
          <Link
            href={"/jobs"}
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
          </Link>
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
        <div className="flex justify-center">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="flex items-start justify-between gap-4 px-4 py-5 border-b border-b-slate-100">
                <div className="flex flex-col items-start w-full gap-1 justisfy-start">
                  <span className="text-sm text-slate-500">
                    No of positions:
                  </span>
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
            {!jobForm ? (
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
                          <div className="mb-1 text-base font-medium ">
                            Inbox
                          </div>
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
                          <span className="text-sm text-slate-900">
                            Assignee
                          </span>
                          <span className="text-sm text-primary">
                            Olivia Rhye
                          </span>
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
                          <span className="text-sm text-slate-900">
                            Location:
                          </span>
                          <span className="text-sm text-slate-500">
                            711 Victoria Street, Hamilton 3210
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-3 last:mb-0">
                          <FontAwesomeIcon
                            icon={faHospital}
                            className="w-4 text-slate-500"
                          ></FontAwesomeIcon>
                          <span className="text-sm text-slate-900">
                            Posted By:
                          </span>
                          <span className="text-sm text-slate-500">
                            Zain Vaccaro
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-3 last:mb-0">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="w-4 text-slate-500"
                          ></FontAwesomeIcon>
                          <span className="text-sm text-slate-900">
                            Posted at:
                          </span>
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
                          <span className="text-sm text-gray-600">
                            0221295170
                          </span>
                        </div>

                        <p className="text-slate-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
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
                              <span className="text-slate-500">
                                Phone Consult
                              </span>
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
                              <span className="text-slate-500">
                                Prescription
                              </span>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
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
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.
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
                            <span className="text-sm text-slate-500">
                              1 hour
                            </span>
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
            ) : (
              <div className="col-span-8 px-4 py-5 pb-8 bg-white rounded-xl">
                <h2 className="mb-4 text-xl font-medium text-haiti">
                  Notification Preferences
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-normal text-black">
                    Notify Eligible Staff
                  </span>
                  <div className="flex items-center ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary focus:ring-2 "
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="text-base font-medium text-gray-500 ms-2 "
                    >
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary focus:ring-2 "
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="text-base font-medium text-gray-500 ms-2 "
                    >
                      No
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-normal text-black">
                    Notification Method
                  </span>
                  <div className="flex items-center gap-4">
                    <div>
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="text-base font-normal text-gray-500 ms-2 "
                      >
                        Email
                      </label>
                    </div>

                    <div>
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        checked
                        readOnly
                        value=""
                        className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="text-base font-normal text-gray-500 ms-2 "
                      >
                        In-App Notification
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-normal text-haiti">
                    Notification Preferences
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center ">
                      <input
                        id="default-radio-3"
                        type="radio"
                        value=""
                        name="default-radio1"
                        className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary focus:ring-2 "
                      />
                      <label
                        htmlFor="default-radio-3"
                        className="text-base font-medium text-gray-500 ms-2 "
                      >
                        Notify in Batches
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="default-radio-4"
                        type="radio"
                        value=""
                        name="default-radio1"
                        className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary focus:ring-2 "
                      />
                      <label
                        htmlFor="default-radio-4"
                        className="text-base font-medium text-gray-500 ms-2 "
                      >
                        Notify All Available Staff Immediately
                      </label>
                    </div>
                  </div>
                </div>

                <div className="px-5 py-3 mb-4 rounded-xl bg-slate-100">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-2">
                      <span className="text-sm font-medium text-slate-900">
                        First Batch:
                      </span>
                    </div>
                    <div className="col-span-10">
                      <div className="flex items-center gap-2">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          checked
                          readOnly
                          value=""
                          className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                        />
                        <img src="/images/jobs/crown.svg"></img>
                        <label
                          htmlFor="default-checkbox"
                          className="text-sm font-normal text-gray-500 "
                        >
                          Notify Priority Staff staff immediately
                        </label>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <span className="text-sm font-medium text-slate-900">
                        Second Batch:
                      </span>
                    </div>
                    <div className="col-span-10">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          Notify next
                        </span>
                        <input
                          type="number"
                          id="number-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 py-2 max-w-24"
                          placeholder="0"
                          required
                        />
                        <span className="text-sm text-gray-500">
                          staff after
                        </span>
                        <input
                          type="number"
                          id="number-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 py-2 max-w-24"
                          placeholder="0"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <span className="text-sm font-medium text-slate-900">
                        Third Batch:
                      </span>
                    </div>
                    <div className="col-span-10">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          Notify next
                        </span>
                        <input
                          type="number"
                          id="number-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 py-2 max-w-24"
                          placeholder="0"
                          required
                        />
                        <span className="text-sm text-gray-500">
                          staff after
                        </span>
                        <input
                          type="number"
                          id="number-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 py-2 max-w-24"
                          placeholder="0"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-span-2">
                      <span className="text-sm font-medium text-slate-900">
                        Last Batch:
                      </span>
                    </div>
                    <div className="col-span-10">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          Notify remaining staff after
                        </span>
                        <input
                          type="number"
                          id="number-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 py-2 max-w-24"
                          placeholder="0"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="mb-4 text-xl font-medium text-haiti">
                  Check in/Check out settings
                </h2>

                <div className="grid grid-cols-12 gap-4 mb-4">
                  <div className="col-span-12">
                    <label className="block ">
                      <span className="block mb-1 text-base font-medium text-black">
                        Check-In required?
                      </span>

                      <div className="relative">
                        <select
                          id="registerTypeSelection"
                          name="registerTypeSelection"
                          className="w-full px-3 py-2.5 border text-slate-900 rounded-lg focus:ring-primary border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
                        >
                          <option value="Wellington">
                            No check-in required
                          </option>
                          <option value=" New Zealand">
                            Yes, check-in from anywhere
                          </option>
                          <option value="">
                            Yes, check-in required from of job location
                          </option>
                        </select>
                        <Image
                          alt="chevron down icon"
                          className="absolute w-5 h-5 top-3 end-2"
                          src={Images.authPageImages.arrowHeadDown}
                        ></Image>
                      </div>
                    </label>
                  </div>

                  <div className="col-span-12">
                    <label className="block ">
                      <span className="block mb-1 text-base font-medium text-black">
                        Check-out required?
                      </span>

                      <div className="relative">
                        <select
                          id="registerTypeSelection"
                          name="registerTypeSelection"
                          className="w-full px-3 py-2.5 border text-slate-900 rounded-lg focus:ring-primary border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
                        >
                          <option value="Wellington">
                            No check-in required
                          </option>
                          <option value=" New Zealand">
                            Yes, check-in from anywhere
                          </option>
                          <option value="">
                            Yes, check-in required from of job location
                          </option>
                        </select>
                        <Image
                          alt="chevron down icon"
                          className="absolute w-5 h-5 top-3 end-2"
                          src={Images.authPageImages.arrowHeadDown}
                        ></Image>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="">
                  <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-primary "></div>
                    <span className="text-sm font-medium text-black ms-3 ">
                      Automatically check-in staff at job start time
                      <span className="text-slate-500 ms-2">
                        (Enable if manual check-in/out is not required)
                      </span>
                    </span>
                  </label>
                </div>

                <div className="mb-4">
                  <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-primary "></div>
                    <span className="text-sm font-medium text-black ms-3 ">
                      Automatically check-out staff at job end time
                      <span className="text-slate-500 ms-2">
                        (Enable if manual check-in/out is not required)
                      </span>
                    </span>
                  </label>
                </div>

                <h2 className="mb-4 text-xl font-medium text-haiti">
                  Notifications for Check-In/Check-Out
                </h2>

                <div className="flex flex-col gap-2 mb-4">
                  <span className="text-sm font-normal text-black">
                    Enable reminders for staff to check in or check out:
                  </span>
                  <div className="flex flex-col gap-2">
                    <div>
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="text-base font-normal text-gray-500 ms-2 "
                      >
                        Notify staff 15 minutes before job start time
                      </label>
                    </div>

                    <div>
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        checked
                        readOnly
                        value=""
                        className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="text-base font-normal text-gray-500 ms-2 "
                      >
                        Notify staff if not checked In 5 minutes after start
                        time
                      </label>
                    </div>

                    <div>
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        checked
                        readOnly
                        value=""
                        className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="text-base font-normal text-gray-500 ms-2 "
                      >
                        Notify staff 15 minutes before job end time for
                        check-out
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          {jobForm ? (
            <div className="absolute p-3 bg-white border rounded-full bottom-4 border-slate-200">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setJobForm(false)}
                  className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={() => setSuccessNoti(true)}
                  className="flex items-center justify-center gap-2 px-5 py-2 text-base font-semibold text-center text-white rounded-full bg-primary hover:bg-primaryDark focus:ring-0 focus:outline-none focus:ring-blue-300"
                >
                  Post
                </button>
              </div>
            </div>
          ) : (
            <div className="absolute p-3 bg-white border rounded-full bottom-4 border-slate-200">
              <div className="flex items-center gap-3">
                <button
                  // onClick={handleBack}
                  className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  // onClick={handleBack}
                  className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                >
                  Sav as Draft
                </button>
                <button
                  // onClick={handleBack}
                  className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                >
                  Generate Schedule
                </button>
                <button
                  type="button"
                  onClick={() => setJobForm(true)}
                  className="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold text-center text-white rounded-full bg-primary hover:bg-primaryDark focus:ring-0 focus:outline-none focus:ring-blue-300"
                >
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
                <button
                  // onClick={handleBack}
                  className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                >
                  Preview Job
                </button>
                <button
                  // onClick={handleBack}
                  className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
                >
                  Publish Job
                </button>
              </div>
            </div>
          )}
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
