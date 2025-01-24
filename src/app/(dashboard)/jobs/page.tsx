"use client";

import {
  faBarsFilter,
  faChevronDown,
  faClock,
  faEllipsisVertical,
  faGrid2,
  faHospital,
  faKey,
  faListCheck,
  faLoader,
  faLocationDot,
  faLock,
  faMessageDots,
  faPenToSquare,
  faPlus,
  faShareNodes,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import CircularLoader from "../../components/CircularLoader";
import Link from "next/link";
import CreateJobForm from "../../components/CreateJobForm";

const Page = () => {
  const [view, setView] = useState("grid");
  const [addStaff, setAddStaff] = useState(false);
  const [listView, setListView] = useState("TodayJobs");

  if (addStaff) {
    return (
      <>
        <div className="h-[calc(100vh-100px)] ">
          <div className="mb-4 ">
            <h2 className="text-lg font-medium text-gray-800">Create Job</h2>
          </div>
          <div className="h-[calc(100vh-140px)] overflow-y-auto  scrollbar-hide">
            <CreateJobForm
              onClickHandler={(newStep: boolean) => setAddStaff(newStep)}
            ></CreateJobForm>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className=" h-[calc(100vh-120px)]">
      <div>
        <button
          onClick={() => setAddStaff(true)}
          className="absolute w-12 h-12 text-white rounded-full shadow bottom-5 bg-primary end-5"
        >
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>

      <div className="flex items-center justify-between gap-3">
        <h2 className="text-2xl font-semibold text-modernGray900">Jobs</h2>

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

              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
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

              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
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

              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
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

              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>

              <Link
                href="/jobs/jobdetail"
                className="block mb-4 overflow-hidden bg-white rounded-md shadow "
              >
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
                          <span className="text-slate-900">Date/Time:</span> 24
                          Jan 8:00 AM - 24 Jan 5:00 PM
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
                    <h2 className="text-sm text-gray-600">Bessie Cooper</h2>
                  </div>

                  <div className="flex items-center gap-1 text-slate-400">
                    <FontAwesomeIcon icon={faMessageDots}></FontAwesomeIcon>
                    <span>0</span>
                  </div>
                </div>
              </Link>
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
                <Link
                  href="/jobs/jobdetail"
                  className="block py-4 bg-white border-b last:border-b-0 ps-6 pe-3"
                >
                  <img src="/images/jobs/focalPoint.svg" className="" alt="" />
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
                        <span className="block text-sm font-medium">Mon</span>
                        <span className="block text-3xl font-semibold">21</span>
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
                      <div className="inline-block text-left group ">
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
                </Link>
                <Link
                  href="/jobs/jobdetail"
                  className="block py-4 border-b bg-slate-100 last:border-b-0 ps-6 pe-3"
                >
                  <img src="/images/jobs/Luminous.svg" className="" alt="" />
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
                        <span className="block text-sm font-medium">Mon</span>
                        <span className="block text-3xl font-semibold">21</span>
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
                </Link>
                <Link
                  href="/jobs/jobdetail"
                  className="block py-4 border-b bg-red-50 last:border-b-0 ps-6 pe-3"
                >
                  <img src="/images/jobs/Galileo.svg" className="" alt="" />
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
                        <span className="block text-sm font-medium">Mon</span>
                        <span className="block text-3xl font-semibold">21</span>
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
                </Link>
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
  );
};

export default Page;
