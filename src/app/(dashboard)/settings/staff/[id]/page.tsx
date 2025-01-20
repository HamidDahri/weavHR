import React from "react";
import data from "../../../../../../public/_data/userData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEnvelope,
  faKey,
  faLock,
  faPenToSquare,
  faPhone,
  faShareNodes,
} from "@fortawesome/pro-regular-svg-icons";
import { Images } from "../../../../ui/images";
import Image from "next/image";
const Page = ({ params }) => {
  const { id } = params;

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
                    Rimsha Hameed Khan
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

            <button
              id="dropdownMenuIconHorizontalButton"
              data-dropdown-toggle="dropdownDotsHorizontal"
              data-dropdown-placement="left-end"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
              type="button"
            >
              <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="w-5 h-5 text-sm"
              ></FontAwesomeIcon>
            </button>

            <div
              id="dropdownDotsHorizontal"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                className="p-2 text-sm text-gray-700 "
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 "
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
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 "
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
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 "
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
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 "
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
          <div className="mb-4 border-b border-gray-200 ">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              data-tabs-active-classes="text-primary border-primary"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li className="me-2" role="presentation">
                <button
                  className="inline-block px-4 pb-2 border-b-2 rounded-t-lg"
                  id="Overview-tab"
                  data-tabs-target="#Overview"
                  type="button"
                  role="tab"
                  aria-controls="Overview"
                  aria-selected="false"
                >
                  Overview
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block px-4 pb-2 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  id="Availability-setup-tab"
                  data-tabs-target="#Availability-setup"
                  type="button"
                  role="tab"
                  aria-controls="Availability-setup"
                  aria-selected="false"
                >
                  Availability Setup
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block px-4 pb-2 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  id="Schedule-tab"
                  data-tabs-target="#Schedule"
                  type="button"
                  role="tab"
                  aria-controls="Schedule"
                  aria-selected="false"
                >
                  Schedule
                </button>
              </li>
              <li role="presentation">
                <button
                  className="inline-block px-4 pb-2 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                  id="Inbox-tab"
                  data-tabs-target="#Inbox"
                  type="button"
                  role="tab"
                  aria-controls="Inbox"
                  aria-selected="false"
                >
                  Inbox
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="default-tab-content"
          className="py-6 bg-white rounded-lg shadow px-7"
        >
          <div
            className="hidden "
            id="Overview"
            role="tabpanel"
            aria-labelledby="Overview-tab"
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
            className="hidden p-4 rounded-lg bg-gray-50 "
            id="Availability-setup"
            role="tabpanel"
            aria-labelledby="Availability-setup-tab"
          >
            <p className="text-sm text-gray-500 ">
              <strong className="font-medium text-gray-800 ">
                Availability-setup tab's associated content
              </strong>
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 "
            id="Schedule"
            role="tabpanel"
            aria-labelledby="Schedule-tab"
          >
            <p className="text-sm text-gray-500 ">
              <strong className="font-medium text-gray-800 ">
                Schedule tab's associated content
              </strong>
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-50 "
            id="Inbox"
            role="tabpanel"
            aria-labelledby="Inbox-tab"
          >
            <p className="text-sm text-gray-500 ">
              <strong className="font-medium text-gray-800">
                Inbox tab's associated content
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
