"use client";
import { faCalculator, faCalendar } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface StandbyResponse {
  id: number;
  status:
    | "Under Offer"
    | "Applied"
    | "Counter offer"
    | "Cancelled"
    | "Default"
    | "Completed";
  title: string;
  date: string;
  description: string;
  timeElapsed: string;
}

const STATUS_COLORS = {
  "Under Offer": "text-purple-600 border-purple-300 bg-purple-50",
  Applied: "text-green-600 border-green-300 bg-green-50",
  "Counter offer": "text-orange-600 border-orange-300 bg-orange-50",
  Cancelled: "text-red-600 border-red-300 bg-red-50",
  Default: "text-gray-600 border-gray-300 bg-gray-50",
  Completed: "text-gray-600 border-gray-300 bg-gray-50",
};

const Page = () => {
  const [listView, setListView] = useState("TodayJobs");

  const responses: StandbyResponse[] = [
    {
      id: 1,
      status: "Under Offer",
      title: "Standby Response",
      date: "15 Jan 9:45 AM",
      description:
        'Dr. Emily Chen (Memorial Hospital) responded "Standby" for shift #ED205 (Jan 20)',
      timeElapsed: "25 min",
    },
    {
      id: 2,
      status: "Applied",
      title: "Standby Response",
      date: "16 Jan 2:30 PM",
      description:
        'Dr. Michael Rodriguez (Community General) responded "Standby" for shift #CC112 (Jan 22)',
      timeElapsed: "12 min",
    },
    {
      id: 3,
      status: "Counter offer",
      title: "Standby Response",
      date: "17 Jan 11:15 AM",
      description:
        'Dr. Sarah Kim (Riverside Medical Center) responded "Standby" for shift #IC098 (Jan 25)',
      timeElapsed: "45 min",
    },
    {
      id: 4,
      status: "Cancelled",
      title: "Standby Response",
      date: "18 Jan 4:55 PM",
      description:
        'Dr. Jonathan Lee (St. Mary\'s Hospital) responded "Standby" for shift #ER231 (Jan 28)',
      timeElapsed: "5 min",
    },
    {
      id: 5,
      status: "Default",
      title: "Standby Response",
      date: "19 Jan 7:40 AM",
      description:
        'Dr. Amanda Torres (North County Clinic) responded "Standby" for shift #UC176 (Feb 2)',
      timeElapsed: "38 min",
    },
    {
      id: 6,
      status: "Under Offer",
      title: "Standby Response",
      date: "20 Jan 1:20 PM",
      description:
        'Dr. David Wang (Central Hospital) responded "Standby" for shift #IC045 (Jan 30)',
      timeElapsed: "17 min",
    },
    {
      id: 7,
      status: "Under Offer",
      title: "Standby Response",
      date: "15 Jan 9:45 AM",
      description:
        'Dr. Emily Chen (Memorial Hospital) responded "Standby" for shift #ED205 (Jan 20)',
      timeElapsed: "25 min",
    },
    {
      id: 8,
      status: "Applied",
      title: "Standby Response",
      date: "16 Jan 2:30 PM",
      description:
        'Dr. Michael Rodriguez (Community General) responded "Standby" for shift #CC112 (Jan 22)',
      timeElapsed: "12 min",
    },
  ];
  const responsesSet1: StandbyResponse[] = [
    {
      id: 1,
      status: "Completed",
      title: "Standby Response",
      date: "12 Jan 10:10 AM",
      description:
        'Dr. Alice Brown (General Hospital) responded "Standby" for shift #GH100 (Jan 18)',
      timeElapsed: "40 min",
    },
    {
      id: 2,
      status: "Cancelled",
      title: "Standby Response",
      date: "13 Jan 3:15 PM",
      description:
        'Dr. John Smith (City Medical Center) responded "Standby" for shift #CM202 (Jan 19)',
      timeElapsed: "20 min",
    },
  ];

  const responsesSet2: StandbyResponse[] = [
    {
      id: 1,
      status: "Completed",
      title: "Standby Response",
      date: "14 Jan 8:00 AM",
      description:
        'Dr. Olivia Martinez (Central Clinic) responded "Standby" for shift #CC009 (Jan 22)',
      timeElapsed: "50 min",
    },
  ];

  const responsesSet3: StandbyResponse[] = [
    {
      id: 1,
      status: "Under Offer",
      title: "Standby Response",
      date: "19 Jan 6:30 PM",
      description:
        'Dr. William Johnson (West Side Hospital) responded "Standby" for shift #WS334 (Feb 1)',
      timeElapsed: "18 min",
    },
    {
      id: 2,
      status: "Applied",
      title: "Standby Response",
      date: "20 Jan 9:45 AM",
      description:
        'Dr. Sophia Hernandez (Eastview Clinic) responded "Standby" for shift #EV221 (Feb 3)',
      timeElapsed: "32 min",
    },
    {
      id: 3,
      status: "Default",
      title: "Standby Response",
      date: "21 Jan 2:20 PM",
      description:
        'Dr. Liam Davis (Hillside Medical Center) responded "Standby" for shift #HS400 (Feb 5)',
      timeElapsed: "45 min",
    },
    {
      id: 4,
      status: "Completed",
      title: "Standby Response",
      date: "22 Jan 11:15 AM",
      description:
        'Dr. Mia Clark (Downtown Clinic) responded "Standby" for shift #DC310 (Feb 6)',
      timeElapsed: "10 min",
    },
  ];

  const responsesSet4: StandbyResponse[] = [
    {
      id: 1,
      status: "Counter offer",
      title: "Standby Response",
      date: "18 Jan 7:50 PM",
      description:
        'Dr. Noah Wilson (Greenfield Hospital) responded "Standby" for shift #GF999 (Jan 29)',
      timeElapsed: "5 min",
    },
    {
      id: 2,
      status: "Cancelled",
      title: "Standby Response",
      date: "19 Jan 8:15 AM",
      description:
        'Dr. Ava Lopez (Riverfront Medical) responded "Standby" for shift #RF456 (Feb 4)',
      timeElapsed: "25 min",
    },
  ];

  const responsesSet5: StandbyResponse[] = [
    {
      id: 1,
      status: "Applied",
      title: "Standby Response",
      date: "20 Jan 5:30 AM",
      description:
        'Dr. Ethan Martinez (Pinewood Clinic) responded "Standby" for shift #PW107 (Jan 27)',
      timeElapsed: "15 min",
    },
    {
      id: 2,
      status: "Under Offer",
      title: "Standby Response",
      date: "21 Jan 4:45 PM",
      description:
        'Dr. Isabella Taylor (Metro Hospital) responded "Standby" for shift #MH212 (Feb 8)',
      timeElapsed: "33 min",
    },
    {
      id: 3,
      status: "Completed",
      title: "Standby Response",
      date: "22 Jan 9:30 AM",
      description:
        'Dr. James Anderson (Oakwood Medical) responded "Standby" for shift #OM123 (Feb 10)',
      timeElapsed: "20 min",
    },
    {
      id: 4,
      status: "Completed",
      title: "Standby Response",
      date: "23 Jan 12:00 PM",
      description:
        'Dr. Charlotte Garcia (Parkside Clinic) responded "Standby" for shift #PC567 (Feb 12)',
      timeElapsed: "12 min",
    },
    {
      id: 5,
      status: "Counter offer",
      title: "Standby Response",
      date: "24 Jan 3:40 PM",
      description:
        'Dr. Benjamin Scott (Northview Hospital) responded "Standby" for shift #NV890 (Feb 14)',
      timeElapsed: "40 min",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-5xl">
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
              className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                listView === "Open"
                  ? "text-primary border-b-primary"
                  : "text-gray-500 border-b-gray-100"
              }`}
            >
              Open
            </button>
            <button
              type="button"
              onClick={() => setListView("Cancelled")}
              className={`px-3 py-2 text-sm font-medium  border-b-2   hover:text-primary  ${
                listView === "Cancelled"
                  ? "text-primary border-b-primary"
                  : "text-gray-500 border-b-gray-100"
              }`}
            >
              Cancelled
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
            <div className=" overflow-auto h-[calc(100vh-140px)] scrollbar-hide">
              {responses.map((response) => (
                <div
                  key={response.id}
                  className="flex justify-between p-4 bg-white border-b last:border-b-0 border-b-gray-200"
                >
                  <div>
                    {response.status !== "Default" && (
                      <span
                        className={`inline-flex items-center px-4 py-1 mb-2 text-sm font-medium ${
                          STATUS_COLORS[response.status]
                        } border rounded-full leading-2`}
                      >
                        {response.status}
                      </span>
                    )}
                    <h2 className="text-base mb-0.5 font-medium text-slate-900">
                      {response.title}
                    </h2>
                    <div className="mb-1 text-sm text-slate-700">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" />
                      {response.date}
                    </div>
                    <h3 className="text-sm text-slate-800">
                      {response.description}
                    </h3>
                  </div>
                  <div>
                    <span className="mt-6 text-sm text-gray-600">
                      {response.timeElapsed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : listView === "Upcoming" ? (
            <div className=" overflow-auto h-[calc(100vh-140px)] scrollbar-hide">
              {responsesSet1.map((response) => (
                <div
                  key={response.id}
                  className="flex justify-between p-4 bg-white border-b last:border-b-0 border-b-gray-200"
                >
                  <div>
                    {response.status !== "Default" && (
                      <span
                        className={`inline-flex items-center px-4 py-1 mb-2 text-sm font-medium ${
                          STATUS_COLORS[response.status]
                        } border rounded-full leading-2`}
                      >
                        {response.status}
                      </span>
                    )}
                    <h2 className="text-base mb-0.5 font-medium text-slate-900">
                      {response.title}
                    </h2>
                    <div className="mb-1 text-sm text-slate-700">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" />
                      {response.date}
                    </div>
                    <h3 className="text-sm text-slate-800">
                      {response.description}
                    </h3>
                  </div>
                  <div>
                    <span className="mt-6 text-sm text-gray-600">
                      {response.timeElapsed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : listView === "Open" ? (
            <div className=" overflow-auto h-[calc(100vh-140px)] scrollbar-hide">
              {responsesSet2.map((response) => (
                <div
                  key={response.id}
                  className="flex justify-between p-4 bg-white border-b last:border-b-0 border-b-gray-200"
                >
                  <div>
                    {response.status !== "Default" && (
                      <span
                        className={`inline-flex items-center px-4 py-1 mb-2 text-sm font-medium ${
                          STATUS_COLORS[response.status]
                        } border rounded-full leading-2`}
                      >
                        {response.status}
                      </span>
                    )}
                    <h2 className="text-base mb-0.5 font-medium text-slate-900">
                      {response.title}
                    </h2>
                    <div className="mb-1 text-sm text-slate-700">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" />
                      {response.date}
                    </div>
                    <h3 className="text-sm text-slate-800">
                      {response.description}
                    </h3>
                  </div>
                  <div>
                    <span className="mt-6 text-sm text-gray-600">
                      {response.timeElapsed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : listView === "Cancelled" ? (
            <div className=" overflow-auto h-[calc(100vh-140px)] scrollbar-hide">
              {responsesSet3.map((response) => (
                <div
                  key={response.id}
                  className="flex justify-between p-4 bg-white border-b last:border-b-0 border-b-gray-200"
                >
                  <div>
                    {response.status !== "Default" && (
                      <span
                        className={`inline-flex items-center px-4 py-1 mb-2 text-sm font-medium ${
                          STATUS_COLORS[response.status]
                        } border rounded-full leading-2`}
                      >
                        {response.status}
                      </span>
                    )}
                    <h2 className="text-base mb-0.5 font-medium text-slate-900">
                      {response.title}
                    </h2>
                    <div className="mb-1 text-sm text-slate-700">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" />
                      {response.date}
                    </div>
                    <h3 className="text-sm text-slate-800">
                      {response.description}
                    </h3>
                  </div>
                  <div>
                    <span className="mt-6 text-sm text-gray-600">
                      {response.timeElapsed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : listView === "Completed" ? (
            <div className=" overflow-auto h-[calc(100vh-140px)] scrollbar-hide">
              {responsesSet4.map((response) => (
                <div
                  key={response.id}
                  className="flex justify-between p-4 bg-white border-b last:border-b-0 border-b-gray-200"
                >
                  <div>
                    {response.status !== "Default" && (
                      <span
                        className={`inline-flex items-center px-4 py-1 mb-2 text-sm font-medium ${
                          STATUS_COLORS[response.status]
                        } border rounded-full leading-2`}
                      >
                        {response.status}
                      </span>
                    )}
                    <h2 className="text-base mb-0.5 font-medium text-slate-900">
                      {response.title}
                    </h2>
                    <div className="mb-1 text-sm text-slate-700">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" />
                      {response.date}
                    </div>
                    <h3 className="text-sm text-slate-800">
                      {response.description}
                    </h3>
                  </div>
                  <div>
                    <span className="mt-6 text-sm text-gray-600">
                      {response.timeElapsed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : listView === "Swap" ? (
            <div className=" overflow-auto h-[calc(100vh-140px)] scrollbar-hide">
              {responsesSet5.map((response) => (
                <div
                  key={response.id}
                  className="flex justify-between p-4 bg-white border-b last:border-b-0 border-b-gray-200"
                >
                  <div>
                    {response.status !== "Default" && (
                      <span
                        className={`inline-flex items-center px-4 py-1 mb-2 text-sm font-medium ${
                          STATUS_COLORS[response.status]
                        } border rounded-full leading-2`}
                      >
                        {response.status}
                      </span>
                    )}
                    <h2 className="text-base mb-0.5 font-medium text-slate-900">
                      {response.title}
                    </h2>
                    <div className="mb-1 text-sm text-slate-700">
                      <FontAwesomeIcon icon={faCalendar} className="me-2" />
                      {response.date}
                    </div>
                    <h3 className="text-sm text-slate-800">
                      {response.description}
                    </h3>
                  </div>
                  <div>
                    <span className="mt-6 text-sm text-gray-600">
                      {response.timeElapsed}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Page;
