"use client";

import React, { useEffect, useRef, useState } from "react";
import data from "../../../../../../public/_data/userData.json";
import timeLineData from "../../../../../../public/_data/timeLineData.json";
import documentsData from "../../../../../../public/_data/documentsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowUpFromBracket,
  faBarsFilter,
  faBriefcase,
  faCalendar,
  faChevronDown,
  faClock,
  faEllipsis,
  faEllipsisVertical,
  faEnvelope,
  faGrid2,
  faHospital,
  faKey,
  faListCheck,
  faLoader,
  faLocation,
  faLocationDot,
  faLock,
  faMessageDots,
  faPenToSquare,
  faPhone,
  faShareNodes,
  faXmark,
} from "@fortawesome/pro-regular-svg-icons";
import { Images } from "../../../../ui/images";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CircularLoader from "../../../../components/CircularLoader";
import AvailabilitySetup from "../../../../components/AvalabilitySetup";
import AvailabilityModal from "../../../../components/AvalabilityModal";
import { faBell, faClockFour } from "@fortawesome/free-solid-svg-icons";
import { BarChart } from "recharts";
import BarChartComponent from "../../../../components/BarChartComponent";
import Inbox from "../../../../components/inboxUI";

type TabId =
  | "Overview"
  | "AvailabilitySetup"
  | "Schedule"
  | "inbox"
  | "timesheet"
  | "documents";

const Page = ({ params }) => {
  const [activeTab, setActiveTab] = useState<TabId>("Overview");

  const { id } = params;

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };
  const [view, setView] = useState("list");
  const [listView, setListView] = useState("TodayJobs");

  const user = data.find((item) => item.id === parseInt(id, 10));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [screenHeight, setScreenHeight] = useState(0);
  const [infoSection, setInfoSection] = useState(true);

  const rowHeight = 72;
  const totalPadding = 80;
  const rowLimit = screenHeight / (rowHeight + totalPadding);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        openDropdownId !== null &&
        !event.target.closest(".dropdown-container")
      ) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdownId]);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight - 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setRowsPerPage(Math.floor(rowLimit));
  }, [screenHeight]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = timeLineData.slice(startIndex, endIndex);
  const currentRows2 = documentsData.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage * rowsPerPage < timeLineData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    console.log(id, newStatus);
  };

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const router = useRouter();

  const handleRowClick = (id: number) => {
    router.push(`/settings/staff/${id}`); // Navigate to the user detail page
  };

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Programmatically click the hidden input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };
  return (
    <>
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

            <div className="relative inline-block text-left group">
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
              <li role="presentation">
                <button
                  className={`inline-block  px-4 pb-2 border-b-2 rounded-t-lg ${
                    activeTab === "timesheet"
                      ? "border-primary text-primary"
                      : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("timesheet")}
                >
                  Timesheet
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block  px-4 pb-2 border-b-2 rounded-t-lg ${
                    activeTab === "documents"
                      ? "border-primary text-primary"
                      : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("documents")}
                >
                  Documents
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div id="default-tab-content">
          <div
            className={` ${activeTab === "Overview" ? "block" : "hidden"}`}
            id="Overview"
            role="tabpanel"
          >
            {infoSection && (
              <div className="relative p-4 mb-3 bg-[#FFF7D1] border border-yellow-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <span className="text-base font-medium text-black">
                    Gordon Munro
                  </span>
                  <span className="block w-2 h-2 bg-yellow-300 rounded-full"></span>

                  <span className="text-base font-medium text-black">
                    30 min ago Edited
                  </span>
                  <span className="block w-2 h-2 bg-yellow-300 rounded-full"></span>
                  <span className="text-base font-medium text-black">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="me-1 text-slate-700"
                    ></FontAwesomeIcon>{" "}
                    Internal notes
                  </span>
                </div>

                <p className="mt-2 text-base text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button
                  className="absolute top-2 end-4"
                  onClick={() => setInfoSection(false)}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="text-lg text-primary"
                  ></FontAwesomeIcon>
                </button>
              </div>
            )}

            <div className="py-6 bg-white rounded-lg shadow px-7">
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
                <h2 className="text-base font-medium text-gray-900">
                  Overview
                </h2>
                <p className="text-base text-ebonClay ">
                  As a dedicated and compassionate General Practitioner with
                  over 12 years of experience in primary care, I am committed to
                  providing comprehensive healthcare services to individuals and
                  families. My expertise lies in diagnosing a wide range of
                  conditions, offering preventive care, and managing chronic
                  diseases. I am particularly interested in [specific interests
                  like geriatric care, women&apos;s health, pediatrics, etc.].
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
                  House No 123 Queen Street, Ponsonby, Auckland 1011, New
                  Zealand
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
          </div>
          <div
            className={` ${
              activeTab === "AvailabilitySetup" ? "block" : "hidden"
            }`}
            id="AvailabilitySetup"
            role="tabpanel"
          >
            <div className="bg-white rounded-xl">
              <div className="flex items-center justify-between p-4 border-b last:border-b-0">
                <div>
                  <h2 className="text-sm font-medium text-slate-900">
                    Mark as temporarily unavailable
                  </h2>
                  <h3 className="text-xs text-slate-500">
                    Quickly temporarily disable availability across all days
                  </h3>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all  peer-checked:bg-primary "></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border-b last:border-b-0">
                <div>
                  <h2 className="text-sm font-medium text-slate-900">
                    Mark as temporarily unavailable
                  </h2>
                  <h3 className="text-xs text-slate-500">
                    Quickly temporarily disable availability across all days
                  </h3>
                </div>
                <div className="">
                  <label className="block">
                    <div className="relative">
                      <select
                        id="registerTypeSelection"
                        name="registerTypeSelection"
                        // value={values.registerTypeSelection}
                        // onChange={handleChange}
                        className="w-full px-3 py-2.5 border rounded-lg text-slate-500 border-gray-300 focus:ring-primary outline-none appearance-none outline-gray-m-400 select-wrapper"
                      >
                        <option value="Wellington">
                          UTC−08:00 (Pacific Time)
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
            </div>

            <div className="mt-6">
              <AvailabilitySetup
                openModal={(newStep: boolean) => setIsModalOpen(newStep)}
              ></AvailabilitySetup>

              <AvailabilityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </div>
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
                          <img src="/images/jobs/focalPoint.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 border border-green-300 rounded-full leading-2 bg-success50">
                                  Checked In
                                </span>
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
                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <img src="/images/jobs/featherDEV.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-orange-600 border border-orange-300 rounded-full leading-2 bg-orange-50">
                                  Pending Check In
                                </span>
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
                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <img src="/images/jobs/cloudWatch.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium border rounded-full text-slate-600 border-slate-300 leading-2 bg-slate-50">
                                  Checked Out
                                </span>
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
                          <img src="/images/jobs/Luminous.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-blue-600 border border-blue-300 rounded-full leading-2 bg-blue-50">
                                  Assigned
                                </span>
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
                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <img src="/images/jobs/Quotent.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-blue-600 border border-blue-300 rounded-full leading-2 bg-blue-50">
                                  Assigned
                                </span>
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
                      <span className="flex w-2 h-2 rounded-full bg-amber-500 me-1"></span>
                      <div className="relative inline-block text-left group">
                        <button
                          className="inline-flex items-center text-base font-medium text-gray-900 "
                          type="button"
                        >
                          Open
                          <FontAwesomeIcon
                            className="ms-3"
                            icon={faChevronDown}
                          ></FontAwesomeIcon>
                        </button>

                        <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-fit group-hover:block">
                          <ul className="p-2 text-sm text-gray-700">
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-between px-3 py-2 rounded-md whitespace-nowrap hover:bg-gray-200"
                              >
                                Open
                                <span className="flex items-center justify-center w-6 h-6 border rounded-full bg-gray-50 border-slate-100">
                                  2
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-between px-3 py-2 rounded-md whitespace-nowrap hover:bg-gray-200"
                              >
                                Counter Offer
                                <span className="flex items-center justify-center w-6 h-6 border rounded-full bg-gray-50 border-slate-100">
                                  2
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-between gap-4 px-3 py-2 rounded-md whitespace-nowrap hover:bg-gray-200"
                              >
                                Future Opportunity
                                <span className="flex items-center justify-center w-6 h-6 border rounded-full bg-gray-50 border-slate-100">
                                  2
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-between px-3 py-2 rounded-md whitespace-nowrap hover:bg-gray-200"
                              >
                                Stand by
                                <span className="flex items-center justify-center w-6 h-6 border rounded-full bg-gray-50 border-slate-100">
                                  2
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-between px-3 py-2 rounded-md whitespace-nowrap hover:bg-gray-200"
                              >
                                Swap Request
                                <span className="flex items-center justify-center w-6 h-6 border rounded-full bg-gray-50 border-slate-100">
                                  2
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center justify-between px-3 py-2 rounded-md whitespace-nowrap hover:bg-gray-200"
                              >
                                Cancelled
                                <span className="flex items-center justify-center w-6 h-6 border rounded-full bg-gray-50 border-slate-100">
                                  2
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-center bg-white rounded-md shadow">
                        12
                      </span>
                    </div>

                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <img src="/images/jobs/Galileo.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-orange-600 border border-orange-300 rounded-full bg-orange-50 leading-2">
                                  Draft
                                </span>
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
                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <img src="/images/jobs/interLock.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-purple-600 border border-purple-300 rounded-full bg-purple-50 leading-2">
                                  Under Offer
                                </span>
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
                          <img src="/images/jobs/focalPoint.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium border rounded-full text-slate-600 border-slate-300 leading-2 bg-slate-100">
                                  Completed
                                </span>
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

                    <div className="mb-4 overflow-hidden bg-white rounded-md shadow ">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex justify-between ">
                          <img src="/images/jobs/AltShift.svg" alt="" />
                        </div>

                        <div className="mt-4">
                          <h2 className="mb-2 text-base font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>

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

                          <div className="flex items-center gap-2 mb-1">
                            <FontAwesomeIcon
                              icon={faHospital}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Client: </span>
                                Victoria Clinic
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <FontAwesomeIcon
                              icon={faLoader}
                              className="w-5 text-slate-500"
                            ></FontAwesomeIcon>
                            <div className="flex items-center line-clamp-1">
                              <span className="line-clamp-1 text-slate-500">
                                <span className="text-slate-900">Status: </span>
                                <span className="inline-flex items-center px-4 py-1 text-sm font-medium border rounded-full text-slate-600 border-slate-300 leading-2 bg-slate-100">
                                  Completed
                                </span>
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
                <div>
                  <div className="inline-flex rounded-md" role="group">
                    <button
                      type="button"
                      onClick={() => setListView("TodayJobs")}
                      className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                        listView === "TodayJobs"
                          ? "text-primary border-b-primary"
                          : "text-gray-500 border-b-gray-100"
                      }`}
                    >
                      Today’s Jobs
                    </button>
                    <button
                      type="button"
                      onClick={() => setListView("Upcoming")}
                      className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                        listView === "Upcoming"
                          ? "text-primary border-b-primary"
                          : "text-gray-500 border-b-gray-100"
                      }`}
                    >
                      Upcoming
                    </button>
                    <button
                      type="button"
                      onClick={() => setListView("Open")}
                      className={`px-3 py-2 text-sm flex items-center gap-3 font-medium  border-b-2   hover:text-primary  ${
                        listView === "Open"
                          ? "text-primary border-b-primary"
                          : "text-gray-500 border-b-gray-100"
                      }`}
                    >
                      Open{" "}
                      <span className="flex items-center justify-center w-6 h-6 text-gray-700 border border-gray-200 rounded-full shadow bg-gray-50">
                        2
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setListView("Cancelled")}
                      className={`px-3 py-2 text-sm flex items-center gap-3 font-medium  border-b-2   hover:text-primary  ${
                        listView === "Cancelled"
                          ? "text-primary border-b-primary"
                          : "text-gray-500 border-b-gray-100"
                      }`}
                    >
                      Cancelled{" "}
                      <span className="flex items-center justify-center w-6 h-6 text-gray-700 border border-gray-200 rounded-full shadow bg-gray-50">
                        2
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setListView("Swap")}
                      className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                        listView === "Swap"
                          ? "text-primary border-b-primary"
                          : "text-gray-500 border-b-gray-100"
                      }`}
                    >
                      Swap
                    </button>
                    <button
                      type="button"
                      onClick={() => setListView("Completed")}
                      className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                        listView === "Completed"
                          ? "text-primary border-b-primary"
                          : "text-gray-500 border-b-gray-100"
                      }`}
                    >
                      Completed
                    </button>
                  </div>

                  {listView === "TodayJobs" ? (
                    <div className="overflow-hidden border rounded-xl border-slate-200">
                      <div className="py-4 bg-white border-b last:border-b-0 ps-6 pe-3">
                        <img
                          src="/images/jobs/focalPoint.svg"
                          className=""
                          alt=""
                        />
                        <div className="flex items-center gap-3 my-4">
                          <h2 className="text-lg font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>
                          <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-green-600 border border-green-300 rounded-full leading-2 bg-success50">
                            Open
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="border-r ps-4 pe-8 border-slate-200 w-fit text-slate-800">
                              <span className="block text-sm font-medium">
                                Mon
                              </span>
                              <span className="block text-3xl font-semibold">
                                21
                              </span>
                            </div>

                            <div className="ps-8 pe-4 w-fit ">
                              <span className="block mb-3 text-sm text-slate-500">
                                <FontAwesomeIcon
                                  className="w-4 me-2"
                                  icon={faClock}
                                ></FontAwesomeIcon>{" "}
                                09:00 - 12:00
                              </span>
                              <span className="block text-sm text-gray-600">
                                <FontAwesomeIcon
                                  className="w-4 me-2"
                                  icon={faLocationDot}
                                ></FontAwesomeIcon>
                                Virtual
                              </span>
                            </div>

                            <div className="ps-12 pe-4 w-fit ">
                              <span className="flex items-center gap-2 mb-3 text-sm text-slate-500">
                                <img
                                  src="/images/avatar.png"
                                  className="w-4 h-4 rounded-full"
                                  alt=""
                                />
                                Wilson Vaccaro
                              </span>
                              <span className="block text-sm text-gray-600">
                                711 Victoria Street, Hamilton
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 rounded-full leading-2 bg-success50">
                              <FontAwesomeIcon
                                className="me-2"
                                icon={faMessageDots}
                              ></FontAwesomeIcon>
                              02
                            </span>
                            <CircularLoader percentage={80}></CircularLoader>
                            <div className="inline-block text-left group">
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

                              <div className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow right-8 w-44 group-hover:block">
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
                        </div>
                      </div>
                      <div className="py-4 border-b bg-slate-100 last:border-b-0 ps-6 pe-3">
                        <img
                          src="/images/jobs/Luminous.svg"
                          className=""
                          alt=""
                        />
                        <div className="flex items-center gap-3 my-4">
                          <h2 className="text-lg font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>
                          <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-slate-600 border border-slate-300 rounded-full leading-2 bg-white">
                            Completed
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="border-r ps-4 pe-8 border-slate-200 w-fit text-slate-800">
                              <span className="block text-sm font-medium">
                                Mon
                              </span>
                              <span className="block text-3xl font-semibold">
                                21
                              </span>
                            </div>

                            <div className="ps-8 pe-4 w-fit ">
                              <span className="block mb-3 text-sm text-slate-500">
                                <FontAwesomeIcon
                                  className="w-4 me-2"
                                  icon={faClock}
                                ></FontAwesomeIcon>{" "}
                                09:00 - 12:00
                              </span>
                              <span className="block text-sm text-gray-600">
                                <FontAwesomeIcon
                                  className="w-4 me-2"
                                  icon={faLocationDot}
                                ></FontAwesomeIcon>
                                Virtual
                              </span>
                            </div>

                            <div className="ps-12 pe-4 w-fit ">
                              <span className="flex items-center gap-2 mb-3 text-sm text-slate-500">
                                <img
                                  src="/images/avatar.png"
                                  className="w-4 h-4 rounded-full"
                                  alt=""
                                />
                                Wilson Vaccaro
                              </span>
                              <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-slate-600 border border-slate-300 rounded-full leading-2 bg-white">
                                23 potential match
                              </span>
                              <span className="inline-flex ms-2 items-center px-4 py-0.5 text-sm font-medium text-slate-600 border border-slate-300 rounded-full leading-2 bg-white">
                                <img
                                  src="/images/jobs/crown.svg"
                                  className="me-2"
                                  alt=""
                                />
                                5 Priority candidates
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 rounded-full leading-2 bg-success50">
                              <FontAwesomeIcon
                                className="me-2"
                                icon={faMessageDots}
                              ></FontAwesomeIcon>
                              02
                            </span>
                            <CircularLoader percentage={80}></CircularLoader>
                            <div className="inline-block text-left group">
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

                              <div className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow right-8 w-44 group-hover:block">
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
                        </div>
                      </div>
                      <div className="py-4 border-b bg-red-50 last:border-b-0 ps-6 pe-3">
                        <img
                          src="/images/jobs/Galileo.svg"
                          className=""
                          alt=""
                        />
                        <div className="flex items-center gap-3 my-4">
                          <h2 className="text-lg font-medium text-slate-900">
                            JD1234 - Lorem ipsum is job title
                          </h2>
                          <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-green-600 border border-green-300 rounded-full leading-2 bg-success50">
                            Open
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="border-r ps-4 pe-8 border-slate-200 w-fit text-slate-800">
                              <span className="block text-sm font-medium">
                                Mon
                              </span>
                              <span className="block text-3xl font-semibold">
                                21
                              </span>
                            </div>

                            <div className="ps-8 pe-4 w-fit ">
                              <span className="block mb-3 text-sm text-slate-500">
                                <FontAwesomeIcon
                                  className="w-4 me-2"
                                  icon={faClock}
                                ></FontAwesomeIcon>{" "}
                                09:00 - 12:00
                              </span>
                              <span className="block text-sm text-gray-600">
                                <FontAwesomeIcon
                                  className="w-4 me-2"
                                  icon={faLocationDot}
                                ></FontAwesomeIcon>
                                Virtual
                              </span>
                            </div>

                            <div className="ps-12 pe-4 w-fit ">
                              <span className="flex items-center gap-2 mb-3 text-sm text-slate-500">
                                <img
                                  src="/images/avatar.png"
                                  className="w-4 h-4 rounded-full"
                                  alt=""
                                />
                                Wilson Vaccaro
                              </span>
                              {/* <span className="block text-sm text-gray-600">
                                711 Victoria Street, Hamilton
                              </span> */}
                              <span className="inline-flex items-center px-4 py-0.5 text-sm font-medium text-red-600 border border-red-300 rounded-full leading-2 bg-red-50">
                                No match found
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-4 py-1 text-sm font-medium text-green-600 rounded-full leading-2 bg-success50">
                              <FontAwesomeIcon
                                className="me-2"
                                icon={faMessageDots}
                              ></FontAwesomeIcon>
                              02
                            </span>
                            <CircularLoader percentage={80}></CircularLoader>
                            <div className="inline-block text-left group">
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

                              <div className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow right-8 w-44 group-hover:block">
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
                        </div>
                      </div>
                    </div>
                  ) : listView === "Upcoming" ? (
                    <div>Upcoming</div>
                  ) : listView === "Open" ? (
                    <div>open</div>
                  ) : listView === "Cancelled" ? (
                    <div>cancelled</div>
                  ) : listView === "Completed" ? (
                    <div>Completed</div>
                  ) : null}
                </div>
              ) : (
                <ul>Calender</ul>
              )}
            </div>
          </div>
          <div
            className={`  overflow-hidden   ${
              activeTab === "inbox" ? "block" : "hidden"
            }`}
            id="inbox"
            role="tabpanel"
          >
            <Inbox></Inbox>
          </div>

          <div
            className={`  rounded-lg   ${
              activeTab === "timesheet" ? "block" : "hidden"
            }`}
            id="timesheet"
            role="tabpanel"
          >
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="grid items-stretch col-span-3 ">
                <div className="flex flex-col justify-between gap-6 p-5 bg-white border rounded-lg">
                  <h2 className="text-sm font-medium text-slate-900">
                    Avg. Monthly Hours{" "}
                  </h2>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="flex items-end gap-1.5 mb-2 font-semibold text-slate-900">
                        <span className="text-3xl">48</span>
                        <span className="text-base">hrs</span>
                      </div>
                      <div className="whitespace-nowrap">
                        <span className="text-sm font-medium text-green-500">
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faArrowUp}
                          ></FontAwesomeIcon>{" "}
                          100%
                        </span>{" "}
                        <span className="text-sm font-medium text-gray-700">
                          vs last month
                        </span>
                      </div>
                    </div>
                    <BarChartComponent fill="#22C55E"></BarChartComponent>
                  </div>
                </div>
              </div>
              <div className="grid items-stretch col-span-3">
                <div className="flex flex-col justify-between gap-6 p-5 bg-white border rounded-lg">
                  <h2 className="text-sm font-medium text-slate-900">
                    Avg. Earning by Month
                  </h2>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="flex items-end mb-2 gap-1.5 font-semibold text-slate-900">
                        <span className="text-3xl">$9,600</span>
                      </div>
                      <div className="whitespace-nowrap">
                        <span className="text-sm font-medium text-green-500">
                          <FontAwesomeIcon
                            className="me-1"
                            icon={faArrowUp}
                          ></FontAwesomeIcon>{" "}
                          100%
                        </span>{" "}
                        <span className="text-sm font-medium text-gray-700">
                          vs last month
                        </span>
                      </div>
                    </div>
                    <BarChartComponent fill="#993AE2"></BarChartComponent>
                  </div>
                </div>
              </div>

              <div className="grid items-stretch col-span-6">
                <div className="flex bg-white border rounded-lg">
                  <div className="w-full p-5 border-r">
                    {" "}
                    <h2 className="text-sm font-medium text-slate-900">
                      Avg. Earning by Month
                    </h2>
                    <div className="flex items-end gap-1.5 mb-2 font-semibold mt-2 text-slate-900">
                      <span className="text-3xl">48</span>
                      <span className="text-base">hrs</span>
                    </div>
                    <div className="flex flex-col mt-6">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faClockFour}
                            className="w-4 h-4 text-amber-500"
                          ></FontAwesomeIcon>
                          <span className="text-sm text-slate-900">
                            Pending{" "}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-0.5 font-semibold  text-slate-900">
                          <span className="text-base">48</span>
                          <span className="text-sm">hrs</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <Image
                            alt=""
                            src={Images.authPageImages.checkedGreen}
                          ></Image>
                          <span className="text-sm text-slate-900">
                            Approve
                          </span>
                        </div>

                        <div className="flex items-baseline gap-0.5  font-semibold  text-slate-900">
                          <span className="text-lg">10.5</span>
                          <span className="text-sm">hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-5">
                    {" "}
                    <h2 className="text-sm font-medium text-slate-900">
                      Estimated Earning
                    </h2>
                    <div className="flex items-end mb-2 gap-1.5 font-semibold mt-2 text-slate-900">
                      <span className="text-3xl">$4,500</span>
                    </div>
                    <div className="flex flex-col mt-6">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <FontAwesomeIcon
                            icon={faClockFour}
                            className="w-4 h-4 text-amber-500"
                          ></FontAwesomeIcon>
                          <span className="text-sm text-slate-900">
                            Pending{" "}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-0.5 font-semibold  text-slate-900">
                          <span className="text-base">$2,100</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <Image
                            alt=""
                            src={Images.authPageImages.checkedGreen}
                          ></Image>
                          <span className="text-sm text-slate-900">
                            Approved{" "}
                          </span>
                        </div>

                        <div className="flex items-baseline gap-0.5  font-semibold  text-slate-900">
                          <span className="text-lg">$2,400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-x-auto border shadow border-slate-100 sm:rounded-xl">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
                <thead className="text-xs text-gray-700 bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Start
                    </th>
                    <th scope="col" className="px-6 py-3">
                      End
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Break
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Hrs
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Clinic Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Notes
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((item) => (
                    <tr
                      key={item.id}
                      className={`${
                        item.status === "Clocked in/out OK"
                          ? "bg-white hover:bg-slate-100"
                          : "bg-red-100 hover:bg-red-100"
                      } border-b cursor-pointer `}
                      // onClick={() => handleRowClick(item.id)}
                    >
                      <td
                        scope="row"
                        className={`px-6 py-4 ${
                          item.status === "Clocked in/out OK"
                            ? ""
                            : "relative before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[4px] before:bg-red-500"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="">
                            {item.paymentStatus === "Approved" ? (
                              <Image
                                alt=""
                                src={Images.authPageImages.checkedGreen}
                              ></Image>
                            ) : (
                              <FontAwesomeIcon
                                icon={faClockFour}
                                className="w-4 h-4 text-amber-500"
                              ></FontAwesomeIcon>
                            )}
                          </span>
                          <span className="text-sm text-gray-600">
                            {item.date}
                          </span>
                        </div>
                      </td>

                      <td scope="row" className={`px-6 py-4`}>
                        <span className="text-sm text-gray-600">
                          {item.startTime}
                        </span>
                      </td>

                      <td scope="row" className={`px-6 py-4`}>
                        <span className="text-sm text-gray-600">
                          {item.endTime}
                        </span>
                      </td>
                      <td scope="row" className={`px-6 py-4`}>
                        <span className="text-sm text-gray-600">
                          {item.breakTime}
                        </span>
                      </td>
                      <td scope="row" className={`px-6 py-4`}>
                        <span
                          className={`text-sm ${
                            item.status === "Clocked in/out OK"
                              ? "text-gray-600"
                              : "text-red-500"
                          }`}
                        >
                          {item.totalHours}
                        </span>
                      </td>
                      <td scope="row" className={`px-6 py-4`}>
                        <span className="text-sm text-gray-600">
                          {item.location}
                        </span>
                      </td>
                      <td scope="row" className={`px-6 py-4`}>
                        <span className="text-sm text-gray-600">
                          {item.clinic}
                        </span>
                      </td>
                      <td scope="row" className={`px-6 py-4`}>
                        <span
                          className={`${
                            item.status === "Clocked in/out OK"
                              ? "text-gray-600"
                              : "text-red-500"
                          } text-sm `}
                        >
                          {item.status}
                        </span>
                      </td>

                      <td className="w-32 px-6 py-4">
                        <div className="relative dropdown-container">
                          <button
                            onClick={(e) => toggleDropdown(item.id, e)}
                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={faEllipsis}
                              className="w-5 h-5"
                            />
                          </button>

                          {openDropdownId === item.id && (
                            <div className=" z-10 !fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg right-20 w-44">
                              <ul className="py-2 text-sm text-gray-700">
                                {[
                                  "Checked-in",
                                  "Assigned",
                                  "Counter Offer",
                                ].map((status) => (
                                  <li key={status}>
                                    <button
                                      onClick={() =>
                                        handleStatusChange(item.id, status)
                                      }
                                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                      {status}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between p-4 bg-white">
                <span className="font-medium text-gray-700">
                  Page {currentPage} of{" "}
                  {Math.ceil(timeLineData.length / rowsPerPage)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextPage}
                    disabled={currentPage * rowsPerPage >= timeLineData.length}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`  rounded-lg   ${
              activeTab === "documents" ? "block" : "hidden"
            }`}
            id="timesheet"
            role="tabpanel"
          >
            <div className="flex flex-col gap-2 px-6 py-4 mb-4 overflow-hidden border-l-4 rounded-lg bg-purple-50 border-primary">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-orange-400"
                ></FontAwesomeIcon>
                <span className="text-slate-900 text-[15px]">
                  Your Police Clearance Certificate is requested.
                </span>
                <button>
                  <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    className="text-primary"
                  ></FontAwesomeIcon>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-red-500"
                ></FontAwesomeIcon>
                <span className="text-slate-900 text-[15px]">
                  CPR Certification has expired. Renew and upload by the end of
                  the month.{" "}
                </span>
                <button>
                  <FontAwesomeIcon
                    icon={faArrowUpFromBracket}
                    className="text-primary"
                  ></FontAwesomeIcon>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-blue-500"
                ></FontAwesomeIcon>
                <span className="text-slate-900 text-[15px]">
                  Medical License is pending review by the manager.{" "}
                </span>
              </div>
            </div>

            <div className="relative overflow-x-auto border shadow border-slate-100 sm:rounded-xl">
              <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
                <thead className="text-xs text-gray-700 bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Documents Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Uploaded Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Expiry Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>

                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows2.map((item) => (
                    <tr
                      key={item.id}
                      className={` border-b cursor-pointer bg-white hover:bg-slate-100`}
                      // onClick={() => handleRowClick(item.id)}
                    >
                      <td scope="row" className={`px-6 py-4`}>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            {item.document}
                          </span>
                        </div>
                      </td>

                      <td scope="row" className={`px-6 py-4`}>
                        <span className="text-sm text-gray-600">
                          {item.issuedDate ? item.issuedDate : "----"}
                        </span>
                      </td>

                      <td scope="row" className={`px-6 py-4`}>
                        <span className="text-sm text-gray-600">
                          {item.expiryDate ? item.expiryDate : "----"}
                        </span>
                      </td>
                      <td scope="row" className={`px-6 py-4`}>
                        <span
                          className={`text-sm px-2 py-1 flex items-center gap-1 w-fit font-medium rounded-full ${
                            item.status === "Pending Review"
                              ? "bg-orange-50 text-orange-700"
                              : item.status === "Reviewed"
                              ? "bg-green-50 text-green-500"
                              : item.status === "Expired"
                              ? "bg-pink-50 text-pink-700"
                              : item.status === "Request Pending"
                              ? "bg-blue-50 text-blue-700"
                              : item.status === "Request Pending"
                              ? "bg-green-50 text-green-500"
                              : null
                          }`}
                        >
                          {item.status === "Signed" && (
                            <Image
                              alt=""
                              src={Images.authPageImages.checkedGreen}
                            ></Image>
                          )}{" "}
                          {item.status}
                        </span>
                      </td>
                      <td
                        scope="row"
                        className="flex items-center gap-2 px-6 py-4"
                      >
                        <div>
                          <button
                            className="px-4 py-2 text-sm font-semibold text-gray-700 border rounded-lg hover:bg-white"
                            onClick={handleButtonClick}
                          >
                            <FontAwesomeIcon
                              className="me-1"
                              icon={faArrowUpFromBracket}
                            />{" "}
                            Upload
                          </button>
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: "none" }} // Hide the file input
                          />
                        </div>

                        <span className="relative">
                          <img src="/images/chatGreen.svg"></img>
                          <span className="absolute w-3 h-3 bg-green-400 border-2 border-white rounded-full -top-2 left-6"></span>
                        </span>
                      </td>

                      <td scope="row" className="w-32 px-6 py-4">
                        <div className="relative dropdown-container">
                          <button
                            onClick={(e) => toggleDropdown(item.id, e)}
                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={faEllipsis}
                              className="w-5 h-5"
                            />
                          </button>

                          {openDropdownId === item.id && (
                            <div className=" z-10 !fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg right-20 w-44">
                              <ul className="py-2 text-sm text-gray-700">
                                {[
                                  "Checked-in",
                                  "Assigned",
                                  "Counter Offer",
                                ].map((status) => (
                                  <li key={status}>
                                    <button
                                      onClick={() =>
                                        handleStatusChange(item.id, status)
                                      }
                                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                                    >
                                      {status}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between p-4 bg-white">
                <span className="font-medium text-gray-700">
                  Page {currentPage} of{" "}
                  {Math.ceil(timeLineData.length / rowsPerPage)}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={nextPage}
                    disabled={currentPage * rowsPerPage >= timeLineData.length}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
