"use client";

import React, { useState } from "react";
import data from "../../../../../../public/_data/userData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsFilter,
  faBriefcase,
  faCalendar,
  faClock,
  faEllipsisVertical,
  faEnvelope,
  faGrid2,
  faHospital,
  faKey,
  faListCheck,
  faLocationDot,
  faLock,
  faMessageDots,
  faPenToSquare,
  faPhone,
  faShareNodes,
} from "@fortawesome/pro-regular-svg-icons";
import { Images } from "../../../../ui/images";
import Image from "next/image";
import { faLoader } from "@fortawesome/pro-light-svg-icons";

type TabId = "Overview" | "AvailabilitySetup" | "Schedule" | "inbox";

const Page = ({ params }) => {
  const [activeTab, setActiveTab] = useState<TabId>("Schedule"); // Default active tab is 'Overview'

  const { id } = params;

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };
  const [view, setView] = useState("grid");
  const user = data.find((item) => item.id === parseInt(id, 10));

  return (
    <>
      {/* <div>
        <h1>User Detail</h1>
        <p>User ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Status: {user.status}</p>
        <p>User Status: {user.userStatus}</p>
        <p>Date: {user.date}</p>
        <p>Role: {user.role}</p>
      </div> */}

      <div className="overflow-auto h-[calc(100vh-100px)] scrollbar-hide pb-12">
        <div className="pt-6 bg-white shadow px-7 rounded-xl ">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4 pb-6">
              <img
                src={user.avatar}
                className="bg-gray-100 border border-gray-100 rounded-full w-21 h-21"
                alt=""
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {user.name}
                  </h2>
                  <span
                    className={`inline-flex items-center ${
                      user.status === "Active"
                        ? "bg-success50 text-success700"
                        : "bg-red-100 text-red-700"
                    } text-xs font-medium px-2 py-0.5 rounded-full`}
                  >
                    {user.status}
                  </span>
                </div>
                <h3 className="mb-1 text-sm text-gray-500 font-noraml">
                  {user.role}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    <span>(270) 555-0117</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative inline-block text-left">
              <button
                className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 peer"
                type="button"
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="w-5 h-5 text-sm"
                ></FontAwesomeIcon>
              </button>

              <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 peer-focus:block">
                <ul className="p-2 text-sm text-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faShareNodes}
                        className="me-2 text-slate-600"
                      ></FontAwesomeIcon>
                      Share
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faLock}
                        className="me-2 text-slate-600"
                      ></FontAwesomeIcon>
                      Add Internal Note
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faKey}
                        className="me-2 text-slate-600"
                      ></FontAwesomeIcon>
                      Reset Password
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-3 py-2 rounded-md hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="me-2 text-slate-600"
                      ></FontAwesomeIcon>
                      Edit Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-4 border-b border-gray-200 ">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li className="" role="presentation">
                <button
                  className={`inline-block px-4 pb-2 border-b-2 rounded-t-lg ${
                    activeTab === "Overview"
                      ? "border-primary text-primary"
                      : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("Overview")}
                >
                  Overview
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-block  px-4 pb-2 border-b-2 rounded-t-lg ${
                    activeTab === "AvailabilitySetup"
                      ? "border-primary text-primary"
                      : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("AvailabilitySetup")}
                >
                  Availability Setup
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-block  px-4 pb-2 border-b-2 rounded-t-lg ${
                    activeTab === "Schedule"
                      ? "border-primary text-primary"
                      : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("Schedule")}
                >
                  Schedule
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block  px-4 pb-2 border-b-2 rounded-t-lg ${
                    activeTab === "inbox" ? "border-primary text-primary" : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("inbox")}
                >
                  Inbox
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div id="default-tab-content">
          <div
            className={`py-6 bg-white rounded-lg shadow px-7 ${
              activeTab === "Overview" ? "block" : "hidden"
            }`}
            id="Overview"
            role="tabpanel"
          >
            <div className="grid grid-cols-6 gap-4 mb-6">
              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-100">
                  <img src="/images/invitedIcon.svg" alt="" />
                </span>

                <div className="flex items-center justify-between gap-3 mt-2">
                  <span className="block text-sm font-medium text-gray-600">
                    Invited
                  </span>
                  <span className="block text-lg font-semibold text-gray-900">
                    200
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="flex items-center justify-center w-10 h-10 bg-pink-100 rounded-full">
                  <img src="/images/seenIcon.svg" alt="" />
                </span>

                <div className="flex items-center justify-between gap-3 mt-2">
                  <span className="block text-sm font-medium text-gray-600">
                    Seen
                  </span>
                  <span className="block text-lg font-semibold text-gray-900">
                    180
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  <img src="/images/appliedIcon.svg" alt="" />
                </span>

                <div className="flex items-center justify-between gap-3 mt-2">
                  <span className="block text-sm font-medium text-gray-600">
                    Applied
                  </span>
                  <span className="block text-lg font-semibold text-gray-900">
                    100
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                  <img src="/images/tentativeIcon.svg" alt="" />
                </span>

                <div className="flex items-center justify-between gap-3 mt-2">
                  <span className="block text-sm font-medium text-gray-600">
                    Tentative
                  </span>
                  <span className="block text-lg font-semibold text-gray-900">
                    30
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full">
                  <img src="/images/priorityIcon.svg" alt="" />
                </span>

                <div className="flex items-center justify-between gap-3 mt-2">
                  <span className="block text-sm font-medium text-gray-600">
                    Priority
                  </span>
                  <span className="block text-lg font-semibold text-gray-900">
                    11
                  </span>
                </div>
              </div>

              <div className="p-3 bg-white border border-gray-200 rounded-xl">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-rose-100">
                  <img src="/images/declinedIcon.svg" alt="" />
                </span>

                <div className="flex items-center justify-between gap-3 mt-2">
                  <span className="block text-sm font-medium text-gray-600">
                    Declined
                  </span>
                  <span className="block text-lg font-semibold text-gray-900">
                    11
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-base font-medium text-gray-900">Overview</h2>
              <p className="text-base text-ebonClay ">
                As a dedicated and compassionate General Practitioner with over
                12 years of experience in primary care, I am committed to
                providing comprehensive healthcare services to individuals and
                families. My expertise lies in diagnosing a wide range of
                conditions, offering preventive care, and managing chronic
                diseases. I am particularly interested in [specific interests
                like geriatric care, women's health, pediatrics, etc.].
              </p>
            </div>

            <div className="mb-6">
              <ul className="text-sm list-disc list-inside text-ebonClay">
                <li>
                  Conducting regular patient consultations and physical
                  examinations.
                </li>
                <li>Diagnosing and treating various health conditions.</li>
                <li>
                  Advising on diet, exercise, and other lifestyle choices.
                </li>
                <li>
                  Coordinating with specialists for patient referrals when
                  necessary.
                </li>
                <li>
                  Maintaining up-to-date patient records and confidentiality.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-base font-medium text-gray-900">
                Language
              </h2>
              <div className="px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                English | Urdu | Maori
              </div>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-base font-medium text-gray-900">
                Skills
              </h2>

              <span className="inline-flex items-center bg-gray-100 text-gray-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
                {user.role}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-base font-medium text-gray-900">
                Groups
              </h2>

              <span className="inline-flex items-center bg-gray-100 text-gray-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
                {user.role}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-base font-medium text-gray-900">
                Address
              </h2>
              <div className="px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                House No 123 Queen Street, Ponsonby, Auckland 1011, New Zealand
              </div>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-base font-medium text-gray-900">
                Emergency Contact Detailss
              </h2>
              <div className="px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                Hammed Khan | Brother | 064532275
              </div>
            </div>

            <div className="mb-6">
              <h2 className="mb-2 text-base font-medium text-gray-900">
                Permissions
              </h2>
              <div className="px-5 py-3 mb-3 text-gray-700 rounded-lg bg-gray-50">
                <span className="text-slate-500">Staff Type:</span> GP |
                Internal Staff | <span className="text-slate-500">Role:</span>{" "}
                Admin
              </div>

              <div className="grid grid-cols-3 px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src={Images.authPageImages.checkedGreen}
                  ></Image>
                  Allowed staff app access
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src={Images.authPageImages.checkedGreen}
                  ></Image>
                  Eligible to receive jobs
                </span>
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src={Images.authPageImages.checkedGreen}
                  ></Image>
                  Notifications Enabled
                </span>
              </div>

              <div className="mb-6">
                <h2 className="mb-2 text-base font-medium text-gray-900">
                  Department
                </h2>
                <div className="px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                  GP
                </div>
              </div>

              <div className="mb-6">
                <h2 className="mb-2 text-base font-medium text-gray-900">
                  Location
                </h2>
                <div className="px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                  Auckland
                </div>
              </div>

              <div className="mb-6">
                <h2 className="mb-2 text-base font-medium text-gray-900">
                  Employment Details:
                </h2>
                <div className="px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                  Start Date: 11 Dec 2024 | Casual | Hourly | $150 hr
                </div>
              </div>

              <div className="mb-6">
                <h2 className="mb-2 text-base font-medium text-gray-900">
                  Login Credentials
                </h2>
                <div className="grid grid-cols-3 px-5 py-3 text-gray-700 rounded-lg bg-gray-50">
                  <span className="block ">richellejes</span>
                  <span className="flex items-center gap-2">
                    <Image
                      alt=""
                      src={Images.authPageImages.checkedGreen}
                    ></Image>
                    2FA Enabled
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`py-6 bg-white rounded-lg shadow px-7 ${
              activeTab === "AvailabilitySetup" ? "block" : "hidden"
            }`}
            id="AvailabilitySetup"
            role="tabpanel"
          >
            <p className="text-sm text-gray-500 ">
              <strong className="font-medium text-gray-800 ">
                AvailabilitySetup tab's associated content
              </strong>
            </p>
          </div>
          <div
            className={`${activeTab === "Schedule" ? "block" : "hidden"}`}
            id="Schedule"
            role="tabpanel"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-modernGray900">
                Jobs
              </h2>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border rounded-lg border-slate-200 focus:outline-none hover:bg-gray-100 focus:ring-0 hover:shadow-sm focus:ring-gray-100 "
                >
                  <FontAwesomeIcon
                    icon={faBarsFilter}
                    className="text-base text-gray-700 me-2"
                  ></FontAwesomeIcon>
                  Filters
                </button>

                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    onClick={() => setView("grid")}
                    className={`px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-0 ${
                      view === "grid" ? "text-primary" : "text-gray-900"
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
                    className={`px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-0 ${
                      view === "calender" ? "text-primary" : "text-gray-900"
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
            </div>
            <div className="mt-8">
              {view === "grid" ? (
                <div className="grid grid-cols-4 gap-4">
                  <div className="">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center text-base font-medium text-slate-900">
                        <span className="flex w-2 h-2 bg-green-500 rounded-full me-3"></span>
                        Today’s Job
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-center bg-white rounded-md shadow">
                        3
                      </span>
                    </div>

                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <img src="/images/FictionalCompanyLogo.svg" alt="" />
                          <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 rounded-full leading-2 bg-success50">
                            Checked In
                          </span>

                          <div className="relative inline-block text-left">
                            <button
                              className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 peer"
                              type="button"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="w-5 h-5 text-sm"
                              ></FontAwesomeIcon>
                            </button>

                            <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 peer-focus:block">
                              <ul className="p-2 text-sm text-gray-700">
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Add Internal Note
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Reset Password
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Edit Profile
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            Virtual Consult
                          </h2>

                          <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">
                                  Job Title:
                                </span>
                                Virtual Locum for Consult, Inbox and Rx
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
                                <span className="text-slate-900">
                                  Shift ID:
                                </span>{" "}
                                After hours
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
                                <span className="text-slate-900">
                                  Date/Time:
                                </span>{" "}
                                24 Jan 8:00 AM - 24 Jan 5:00 PM
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
                                <span className="text-slate-900">
                                  Location:
                                </span>{" "}
                                711 Victoria Street, Hamilton 3210
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client:</span>{" "}
                                Victoria Clinic
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/avatar.png"
                            className="w-6 h-6 rounded-full border-slate-200 bg-gray-50"
                            alt=""
                          />
                          <h2 className="text-sm text-gray-600">
                            Bessie Cooper
                          </h2>
                        </div>

                        <div className="flex items-center gap-1 text-slate-400">
                          <FontAwesomeIcon
                            icon={faMessageDots}
                          ></FontAwesomeIcon>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center text-base font-medium text-slate-900">
                        <span className="flex w-2 h-2 rounded-full bg-primary me-3"></span>
                        Upcoming Jobs
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-center bg-white rounded-md shadow">
                        29
                      </span>
                    </div>

                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 rounded-full leading-2 bg-success50">
                            Checked In
                          </span>

                          <div className="relative inline-block text-left">
                            <button
                              className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 peer"
                              type="button"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="w-5 h-5 text-sm"
                              ></FontAwesomeIcon>
                            </button>

                            <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 peer-focus:block">
                              <ul className="p-2 text-sm text-gray-700">
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Add Internal Note
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Reset Password
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Edit Profile
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            Virtual Consult
                          </h2>

                          <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">
                                  Job Title:
                                </span>
                                Virtual Locum for Consult, Inbox and Rx
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
                                <span className="text-slate-900">
                                  Shift ID:
                                </span>{" "}
                                After hours
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
                                <span className="text-slate-900">
                                  Date/Time:
                                </span>{" "}
                                24 Jan 8:00 AM - 24 Jan 5:00 PM
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
                                <span className="text-slate-900">
                                  Location:
                                </span>{" "}
                                711 Victoria Street, Hamilton 3210
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client:</span>{" "}
                                Victoria Clinic
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/avatar.png"
                            className="w-6 h-6 rounded-full border-slate-200 bg-gray-50"
                            alt=""
                          />
                          <h2 className="text-sm text-gray-600">
                            Bessie Cooper
                          </h2>
                        </div>

                        <div className="flex items-center gap-1 text-slate-400">
                          <FontAwesomeIcon
                            icon={faMessageDots}
                          ></FontAwesomeIcon>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center text-base font-medium text-slate-900">
                        <span className="flex w-2 h-2 rounded-full bg-amber-500 me-3"></span>
                        Open
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-center bg-white rounded-md shadow">
                        12
                      </span>
                    </div>

                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 rounded-full leading-2 bg-success50">
                            Checked In
                          </span>

                          <div className="relative inline-block text-left">
                            <button
                              className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 peer"
                              type="button"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="w-5 h-5 text-sm"
                              ></FontAwesomeIcon>
                            </button>

                            <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 peer-focus:block">
                              <ul className="p-2 text-sm text-gray-700">
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Add Internal Note
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Reset Password
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Edit Profile
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            Virtual Consult
                          </h2>

                          <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">
                                  Job Title:
                                </span>
                                Virtual Locum for Consult, Inbox and Rx
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
                                <span className="text-slate-900">
                                  Shift ID:
                                </span>{" "}
                                After hours
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
                                <span className="text-slate-900">
                                  Date/Time:
                                </span>{" "}
                                24 Jan 8:00 AM - 24 Jan 5:00 PM
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
                                <span className="text-slate-900">
                                  Location:
                                </span>{" "}
                                711 Victoria Street, Hamilton 3210
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client:</span>{" "}
                                Victoria Clinic
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/avatar.png"
                            className="w-6 h-6 rounded-full border-slate-200 bg-gray-50"
                            alt=""
                          />
                          <h2 className="text-sm text-gray-600">
                            Bessie Cooper
                          </h2>
                        </div>

                        <div className="flex items-center gap-1 text-slate-400">
                          <FontAwesomeIcon
                            icon={faMessageDots}
                          ></FontAwesomeIcon>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center text-base font-medium text-slate-900">
                        <span className="flex w-2 h-2 rounded-full bg-rose-500 me-3"></span>
                        Completed Jobs
                      </span>
                      <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-center bg-white rounded-md shadow">
                        12
                      </span>
                    </div>

                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 rounded-full leading-2 bg-success50">
                            Checked In
                          </span>

                          <div className="relative inline-block text-left">
                            <button
                              className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 peer"
                              type="button"
                            >
                              <FontAwesomeIcon
                                icon={faEllipsisVertical}
                                className="w-5 h-5 text-sm"
                              ></FontAwesomeIcon>
                            </button>

                            <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 peer-focus:block">
                              <ul className="p-2 text-sm text-gray-700">
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Share
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Add Internal Note
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Reset Password
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-3 py-2 rounded-md hover:bg-gray-100"
                                  >
                                    Edit Profile
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            Virtual Consult
                          </h2>

                          <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">
                                  Job Title:
                                </span>
                                Virtual Locum for Consult, Inbox and Rx
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
                                <span className="text-slate-900">
                                  Shift ID:
                                </span>{" "}
                                After hours
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
                                <span className="text-slate-900">
                                  Date/Time:
                                </span>{" "}
                                24 Jan 8:00 AM - 24 Jan 5:00 PM
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
                                <span className="text-slate-900">
                                  Location:
                                </span>{" "}
                                711 Victoria Street, Hamilton 3210
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client:</span>{" "}
                                Victoria Clinic
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-white">
                        <div className="flex items-center gap-2">
                          <img
                            src="/images/avatar.png"
                            className="w-6 h-6 rounded-full border-slate-200 bg-gray-50"
                            alt=""
                          />
                          <h2 className="text-sm text-gray-600">
                            Bessie Cooper
                          </h2>
                        </div>

                        <div className="flex items-center gap-1 text-slate-400">
                          <FontAwesomeIcon
                            icon={faMessageDots}
                          ></FontAwesomeIcon>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : view === "list" ? (
                <div> List </div>
              ) : (
                <ul>Calendar</ul>
              )}
            </div>
          </div>
          <div
            className={`py-6 bg-white rounded-lg shadow px-7 ${
              activeTab === "inbox" ? "block" : "hidden"
            }`}
            id="inbox"
            role="tabpanel"
          >
            <p className="text-sm text-gray-500 ">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 ">
                inbox tab&apos;s associated content
              </strong>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
