import { useState } from "react";
import { Images } from "../ui/images";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEdit,
  faPlus,
} from "@fortawesome/pro-regular-svg-icons";

const steps = [
  { id: 1, title: "Choose Your Workforce Model" },
  { id: 2, title: "Location & Staff Structure" },
  { id: 3, title: "Check-In & Check-Out Settings" },
  { id: 4, title: "Job Posting & Client Job Requests" },
  { id: 5, title: "Batch Notification Settings" },
  { id: 6, title: "Notifications & Reminders" },
  { id: 7, title: "Review & Confirm" },
];

const Step1Content = ({ onSave }) => (
  <div className="rounded-md ">
    <div className="flex items-center gap-4 mb-6">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 1
      </span>
      <h2 className="text-base font-medium text-slate-800">
        Choose Your Workforce Model
      </h2>
    </div>

    <div className="mb-4">
      <p className="text-lg font-medium text-black ">
        Which best describes your organization’s operations?
      </p>
      <span className="text-sm font-normal text-slate-900">
        (Choose one option to configure your platform settings.)
      </span>
    </div>
    <div className="flex flex-col gap-3 mb-4">
      <label className="radio-option">
        <input
          type="radio"
          name="workforceModel"
          value="Direct Workforce Management"
          className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary"
        />
        <div className="">
          <h2 className="text-base font-medium text-black">
            Direct Workforce Management
          </h2>
          <p className="text-sm text-gray-500">
            For organizations managing their own workforce, including internal
            employees and optionally external/contract staff, but without
            external client job requests.
          </p>
        </div>
      </label>
      <label className="radio-option">
        <input
          type="radio"
          name="workforceModel"
          value="Direct Workforce Management"
          className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary"
        />
        <div>
          <h2 className="text-base font-medium text-black">
            Client & Casual Workforce
          </h2>
          <p className="text-sm text-gray-500">
            For agencies managing external clients and casual/contracted staff,
            where clients request jobs and staff apply for assignments.
          </p>
        </div>
      </label>
    </div>
    <div className="flex items-center justify-center gap-3">
      <button
        className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900"
        onClick={onSave} // Hide step content and show steps list
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary"
        onClick={onSave} // Hide step content and show steps list
      >
        Save & Close
      </button>
    </div>
  </div>
);
const Step2Content = ({ onSave }) => (
  <div className="rounded-md ">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 2
      </span>
      <h2 className="text-base font-medium text-slate-800">
        Location & Staff Structure
      </h2>
    </div>

    <div className="pb-6 mb-4 border-b">
      <p className="mb-3 text-lg font-medium text-black">
        Do you manage multiple locations?
      </p>

      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-gray-900 ms-2 "
        >
          Yes{" "}
          <span className="text-xs text-slate-500">
            (Enable location-based scheduling.)
          </span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-gray-900 ms-2 "
        >
          No{" "}
          <span className="text-xs text-slate-500">
            (Single location setup.)
          </span>
        </label>
      </div>
    </div>

    <div className="pb-6 mb-4 border-b">
      <p className="mb-3 text-lg font-medium text-black">
        Do you require staff grouping?
      </p>

      <div className="flex items-start flex-col mb-2.5">
        <div>
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio1"
            className="w-3.5 h-3.5 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
          />
          <label
            htmlFor="default-radio-1"
            className="text-sm font-medium text-gray-900 ms-2 "
          >
            Yes
          </label>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 p-4 mt-3 rounded-lg bg-slate-100">
          <div className="flex items-center me-4">
            <input
              id="red-checkbox"
              type="checkbox"
              value=""
              checked
              className="w-3.5 h-3.5 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary "
            />
            <label
              htmlFor="red-checkbox"
              className="text-sm font-medium text-slate-900 ms-2 "
            >
              Departments
              <FontAwesomeIcon
                icon={faEdit}
                className="text-primary ms-2"
              ></FontAwesomeIcon>
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="green-checkbox"
              type="checkbox"
              value=""
              className="w-3.5 h-3.5 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary "
            />
            <label
              htmlFor="green-checkbox"
              className="text-sm font-medium text-slate-900 ms-2 "
            >
              Staff Types
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="purple-checkbox"
              type="checkbox"
              value=""
              className="w-3.5 h-3.5 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary "
            />
            <label
              htmlFor="purple-checkbox"
              className="text-sm font-medium text-slate-900 ms-2 "
            >
              Work Categories
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="teal-checkbox"
              type="checkbox"
              value=""
              className="w-3.5 h-3.5 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary "
            />
            <label
              htmlFor="teal-checkbox"
              className="text-sm font-medium text-slate-900 ms-2 "
            >
              Skills
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              id="yellow-checkbox"
              type="checkbox"
              value=""
              className="w-3.5 h-3.5 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary "
            />
            <label
              htmlFor="yellow-checkbox"
              className="text-sm font-medium text-slate-900 ms-2 "
            >
              Custom Groups
            </label>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio1"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-900 ms-2 "
        >
          No{" "}
          <span className="text-xs text-slate-500">
            (Flat staff structure.)
          </span>
        </label>
      </div>
    </div>

    <div className="pb-6 mb-4 border-b">
      <div className="mb-4">
        <p className="text-lg font-medium text-black ">
          How is your organization&apos;s working schedule structured?
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <label className="radio-option">
          <input
            type="radio"
            name="workforceModel"
            value="Direct Workforce Management"
            className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary"
          />
          <div className="">
            <h2 className="text-base font-medium text-black">
              What are your organization’s standard working hours?
            </h2>
            <p className="text-xs text-slate-500">
              Example: 9 AM - 5 PM, same for all staff.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-black">Start time </span>
              <div className="overflow-hidden border rounded-md w-fit">
                <input
                  type="time"
                  className="h-8 py-2 border-0 focus:outline-none focus:ring-0"
                  name=""
                  value="13:30"
                  id=""
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-black me-1">End Time </span>
              <div className="overflow-hidden border rounded-md w-fit">
                <input
                  type="time"
                  className="h-8 py-2 border-0 focus:outline-none focus:ring-0"
                  name=""
                  value="01:30"
                  id=""
                />
              </div>
            </div>
          </div>
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="workforceModel"
            value="Direct Workforce Management"
            className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary"
          />
          <div>
            <h2 className="text-base font-medium text-black">
              Does your organization support multiple shifts?
            </h2>
            <p className="text-xs text-slate-500">
              Example: Morning Shift (7 AM - 3 PM), Evening Shift (3 PM - 11
              PM), Night Shift (11 PM - 7 AM).
            </p>
          </div>
        </label>
      </div>
    </div>
    <div className="pb-6 mb-4 ">
      <p className="mb-3 text-lg font-medium text-black">
        How will staff be assigned to shifts?
      </p>

      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Staff are assigned jobs manually by the organization.
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Staff can accept or decline Jobs.
        </label>
      </div>
      <div className="flex items-center ">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Both (Managers assign, but staff can also accept jobs.)
        </label>
      </div>
    </div>
    <div className="flex items-center justify-center gap-3">
      <button
        className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900"
        onClick={onSave} // Hide step content and show steps list
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary"
        onClick={onSave} // Hide step content and show steps list
      >
        Save & Close
      </button>
    </div>
  </div>
);
const Step3Content = ({ onSave }) => (
  <div className="rounded-md ">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 3
      </span>
      <h2 className="text-base font-semibold text-slate-800">
        Check-In & Check-Out Settings
      </h2>
    </div>

    <div className="pb-6 mb-4 border-b">
      <p className="mb-3 text-lg font-medium text-black">
        How should check-in/check-out be managed?
      </p>

      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Check-In & Check-Out Required for All Jobs
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Check-In & Check-Out Depends on the Job
          <span className="text-xs text-gray-400 ms-2">
            (Set on a per-job basis.)
          </span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          No Check-In/Check-Out Required
          <span className="text-xs text-gray-400 ms-2">
            (Staff are considered present based on assigned schedule.)
          </span>
        </label>
      </div>
    </div>

    <div className="pb-6 mb-4 border-b">
      <p className="mb-3 text-lg font-medium text-black">Check-In Options:</p>

      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Allow auto Check-In
          <span className="text-xs text-gray-400 ms-2">
            (Automatically check staff in at job start time)
          </span>
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Staff Must Check In Manually
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Staff Can Check In from Anywhere
        </label>
      </div>

      <div className="flex items-start mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Geo-Fenced Check-In
          <span className="text-xs text-gray-400 ms-2">
            (Restricted to Job Location)
          </span>
          <div className="mt-3 text-sm text-slate-500">
            Require check-in within
            <label className="relative inline-flex items-center justify-end">
              <input
                type="number"
                min={1}
                className="w-24 h-8 border-gray-300 rounded-md ms-2 focus:ring-primary"
              />
              <span className="absolute px-2 py-0.5 rounded-sm bg-slate-100 me-1">
                km
              </span>
            </label>
            <span className="ms-1">of job site</span>
          </div>
        </label>
      </div>
    </div>

    <div className="pb-6 mb-4 ">
      <p className="mb-3 text-lg font-medium text-black">Check-Out Options:</p>

      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Allow auto Check-out
          <span className="text-xs text-gray-400 ms-2">
            (Automatically check staff in at job start time)
          </span>
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Staff Must Check Out Manually
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Staff Can Check Out from Anywhere
        </label>
      </div>
      <div className="flex items-start mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Geo-Fenced Check-Out
          <span className="text-xs text-gray-400 ms-2">
            (Restricted to Job Location)
          </span>
          <div className="mt-3 text-sm text-slate-500">
            Require check-in within
            <label className="relative inline-flex items-center justify-end">
              <input
                type="number"
                min={1}
                className="w-24 h-8 border-gray-300 rounded-md ms-2 focus:ring-primary"
              />
              <span className="absolute px-2 py-0.5 rounded-sm bg-slate-100 me-1">
                km
              </span>
            </label>
            <span className="ms-1">of job site</span>
          </div>
        </label>
      </div>
    </div>

    <div className="flex items-center justify-center gap-3">
      <button
        className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900"
        onClick={onSave} // Hide step content and show steps list
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary"
        onClick={onSave} // Hide step content and show steps list
      >
        Save & Close
      </button>
    </div>
  </div>
);
const Step4Content = ({ onSave }) => (
  <div className="rounded-md ">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 4
      </span>
      <h2 className="text-base font-medium text-slate-800">
        Job Posting & Client Job Requests
      </h2>
    </div>

    <div className="pb-6 mb-4 border-b">
      <p className="mb-3 text-lg font-medium text-black">
        How should job posting work?
      </p>

      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Clients Can Post Jobs Directly
          <span className="text-xs text-gray-400 ms-2">
            (Jobs go live immediately.)
          </span>
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Clients Can Create Job Requests & Submit for Agency Approval
          <span className="text-xs text-gray-400 ms-2">
            (Agency reviews job before posting.)
          </span>
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-slate-500 ms-2 "
        >
          Agency Posts All Jobs Clients Cannot Post Jobs
          <span className="text-xs text-gray-400 ms-2">
            (Agency fully controls job postings.)
          </span>
        </label>
      </div>
    </div>
    <div className="pb-6 mb-4 ">
      <p className="mb-3 text-lg font-medium text-black">
        How should staff respond to a job?
      </p>

      <div className="flex items-center mb-2.5 group cursor-pointer">
        <input
          id="default-radio-x"
          type="checkbox"
          value=""
          name="default-radiox"
          className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-x"
          className="text-sm font-medium text-slate-900 ms-2 "
        >
          Apply
          <span className="text-xs text-slate-500 ms-2">
            (I am fully available and interested in this shift)
          </span>
          <button className="invisible group-hover:visible">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-primary ms-2"
            ></FontAwesomeIcon>
          </button>
        </label>
      </div>
      <div className="flex items-center mb-2.5 group cursor-pointer">
        <input
          id="default-radio-x"
          type="checkbox"
          value=""
          name="default-radiox"
          className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-x"
          className="text-sm font-medium text-slate-900 ms-2 "
        >
          Counter Offer
          <span className="text-xs text-slate-500 ms-2">
            (Restricted to Job Location)
          </span>
          <button className="invisible group-hover:visible">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-primary ms-2"
            ></FontAwesomeIcon>
          </button>
        </label>
      </div>

      <div className="flex items-center mb-2.5 group cursor-pointer">
        <input
          id="default-radio-22"
          type="checkbox"
          value=""
          name="default-radio2"
          className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-22"
          className="text-sm font-medium text-slate-900 ms-2 "
        >
          Standby
          <span className="text-xs text-slate-500 ms-2">
            (Consider me only if no one else is available)
          </span>
          <button className="invisible group-hover:visible">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-primary ms-2"
            ></FontAwesomeIcon>
          </button>
        </label>
      </div>
      <div className="flex items-center mb-2.5 group cursor-pointer">
        <input
          id="default-radio-22"
          type="checkbox"
          value=""
          name="default-radio2"
          className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-22"
          className="text-sm font-medium text-slate-900 ms-2 "
        >
          Skip
          <span className="text-xs text-slate-500 ms-2">
            (I am not available for this shift)
          </span>
          <button className="invisible group-hover:visible">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-primary ms-2"
            ></FontAwesomeIcon>
          </button>
        </label>
      </div>
      <button className="text-sm font-semibold text-primary">
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> add more
      </button>
    </div>
    <div className="pb-6 mb-4 ">
      <p className="mb-3 text-lg font-medium text-black">Job Swap Settings</p>

      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-1"
          className="text-sm font-medium text-gray-500 ms-2 "
        >
          Staff Cannot Swap Jobs
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-gray-500 ms-2 "
        >
          Staff Can Request Job Swap
          <span className="text-xs text-slate-500 ms-2">
            (Restricted to Job Location)
          </span>
        </label>
      </div>
      <div className="flex items-center mb-2.5">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300 text-primary focus:ring-primary "
        />
        <label
          htmlFor="default-radio-2"
          className="text-sm font-medium text-gray-500 ms-2 "
        >
          Staff Can Swap Jobs Freely
          <span className="text-xs text-slate-500 ms-2">
            (No Approval Required)
          </span>
        </label>
      </div>
    </div>

    <div className="flex items-center justify-center gap-3">
      <button
        className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900"
        onClick={onSave} // Hide step content and show steps list
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary"
        onClick={onSave} // Hide step content and show steps list
      >
        Save & Close
      </button>
    </div>
  </div>
);
const Step5Content = ({ onSave }) => (
  <div className="rounded-md ">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 5
      </span>
      <h2 className="text-base font-medium text-slate-800">
        Batch Notification Settings
      </h2>
    </div>

    <div className="mb-4">
      <p className="text-lg font-medium text-black ">
        How should notifications be sent to staff for new jobs?
      </p>
    </div>
    <div className="flex flex-col gap-3">
      <label className="radio-option">
        <input
          type="radio"
          name="workforceModel"
          value="Direct Workforce Management"
          className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary"
        />
        <div className="">
          <h2 className="text-base font-medium text-black">
            Notify all eligible staff immediately
          </h2>
          <p className="text-sm text-slate-500">
            All eligible staff are notified of the job as soon as it is posted.
          </p>
        </div>
      </label>
      <label className="radio-option">
        <input
          type="radio"
          name="workforceModel"
          value="Direct Workforce Management"
          className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary"
        />
        <div className="w-full">
          <h2 className="text-base font-medium text-black">
            Send notifications in batches
          </h2>
          <p className="text-sm text-slate-500">
            Notifications will be sent to small groups of staff over time.
          </p>

          <div className="w-full p-4 mt-4 rounded-lg bg-slate-100">
            <div className="text-sm">
              <span className="text-slate-900"> Batch Size:</span>
              <label className="relative inline-flex items-center justify-end">
                <input
                  type="number"
                  min={1}
                  max={100}
                  className="w-20 border-gray-300 rounded-md h-7 ms-2 focus:ring-primary"
                />
                <span className="absolute px-2 py-0.5 rounded-sm bg-slate-100 me-1">
                  %
                </span>
              </label>
              <span className="ms-2 text-slate-500"> staff per batch</span>
            </div>

            <div className="text-sm">
              <span className="text-slate-900">Batch Interval</span>
              <span className="ms-2 text-slate-500">
                Notify next batch after
              </span>
              <label className="relative inline-flex items-center justify-end">
                <input
                  type="number"
                  min={1}
                  max={100}
                  className="w-20 border-gray-300 rounded-md h-7 ms-2 focus:ring-primary"
                />
              </label>
              <span className="ms-2 text-slate-500"> minutes</span>
            </div>
          </div>

          <div className="w-full p-4 mt-4 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-medium text-black">
              Batch Order Priority
            </p>

            <div className="flex items-center mb-2.5">
              <input
                id="default-radio-x"
                type="checkbox"
                value=""
                name="default-radiox"
                className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
              />
              <label
                htmlFor="default-radio-x"
                className="text-sm font-medium text-slate-900 ms-2 "
              >
                Staff with prior work experience at this job
              </label>
            </div>
            <div className="flex items-center mb-2.5">
              <input
                id="default-radio-x"
                type="checkbox"
                value=""
                name="default-radiox"
                className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
              />
              <label
                htmlFor="default-radio-x"
                className="text-sm font-medium text-slate-900 ms-2 "
              >
                Staff with fewer assigned jobs
              </label>
            </div>

            <div className="flex items-center mb-2.5">
              <input
                id="default-radio-22"
                type="checkbox"
                value=""
                name="default-radio2"
                className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
              />
              <label
                htmlFor="default-radio-22"
                className="text-sm font-medium text-slate-900 ms-2 "
              >
                Staff with higher ratings
              </label>
            </div>
            <div className="flex items-center mb-2.5">
              <input
                id="default-radio-22"
                type="checkbox"
                value=""
                name="default-radio2"
                className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary "
              />
              <label
                htmlFor="default-radio-22"
                className="text-sm font-medium text-slate-900 ms-2 "
              >
                Staff closest to the job location
              </label>
            </div>
          </div>
        </div>
      </label>

      <label className="radio-option">
        <input
          type="radio"
          name="workforceModel"
          value="Direct Workforce Management"
          className="w-4 h-4 mt-1 bg-gray-100 border-gray-300 text-primary focus:ring-primary"
        />
        <div>
          <h2 className="text-base font-medium text-black">
            Notification settings can be set at each job level
          </h2>
          <p className="text-sm text-slate-500">
            Allows admins to customize notifications per job.
          </p>
        </div>
      </label>
    </div>

    <div className="flex items-center justify-center gap-3">
      <button
        className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900"
        onClick={onSave} // Hide step content and show steps list
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary"
        onClick={onSave} // Hide step content and show steps list
      >
        Save & Close
      </button>
    </div>
  </div>
);
const Step6Content = ({ onSave }) => (
  <div className="rounded-md ">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 6
      </span>
      <h2 className="text-base font-medium text-slate-800">
        Notifications & Reminders
      </h2>
    </div>

    <div className="pb-4 mb-4 border-b">
      <div className="mb-4">
        <p className="text-lg font-medium text-black ">
          Notification Methods (Choose all that apply):
        </p>
      </div>
      <div className="flex flex-col ">
        <label className="inline-flex items-start mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[1.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all  peer-checked:bg-primary "></div>
          <span className="text-base font-medium text-black ms-3 ">
            Push Notification
            <span className="block text-sm text-slate-500">
              Sent via mobile app notifications.
            </span>
          </span>
        </label>

        <label className="inline-flex items-start mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[1.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all  peer-checked:bg-primary "></div>
          <span className="text-base font-medium text-black ms-3 ">
            In-App Notification
            <span className="block text-sm text-slate-500">
              Visible within the platform.
            </span>
          </span>
        </label>

        <label className="inline-flex items-start mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[1.5px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all  peer-checked:bg-primary "></div>
          <span className="text-base font-medium text-black ms-3 ">
            Email Notification
            <span className="block text-sm text-slate-500">
              Sent to staff’s registered email.
            </span>
          </span>
        </label>
      </div>
    </div>

    <div className="pb-4 mb-4">
      <div className="mb-4">
        <p className="text-lg font-medium text-black ">
          Enable notifications for staff/admin/manager?
        </p>
      </div>

      <div className="relative overflow-x-auto border border-slate-100 sm:rounded-xl">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
          <thead className="text-xs text-gray-600 bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Enable
              </th>
              <th scope="col" className="px-6 py-3">
                Notification
              </th>
              <th scope="col" className="px-6 py-3">
                Staff
              </th>
              <th scope="col" className="px-6 py-3">
                Admin
              </th>
              <th scope="col" className="px-6 py-3">
                Manager
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  New job notification
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">Shift reminders</span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Check-In reminders
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Job no longer available status update for unsuccessful
                  candidates
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  New Client Job Requests
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Job swap approval updates
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Staff responses - apply notifications
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm b text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Staff responses - counter offer notifications
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Staff responses - standby notifications
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Staff responses - decline notifications
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Job swap approval updates
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Job under offer notifications
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Late/Missed Check-Ins
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Expiring staff documents
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  Compliance notifications
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>

            <tr className="bg-white cursor-pointer hover:bg-slate-100">
              <td
                scope="row"
                className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
              >
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <span className="text-sm text-slate-900">
                  New message notifications
                </span>
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
              <td className="w-32 px-6 py-4">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="flex items-center justify-center gap-3">
      <button
        className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900"
        onClick={onSave} // Hide step content and show steps list
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary"
        onClick={onSave} // Hide step content and show steps list
      >
        Save & Close
      </button>
    </div>
  </div>
);
const Step7Content = ({ onSave }) => (
  <div className="p-4 rounded-md">
    <div className="flex items-center gap-4 mb-4">
      <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
        Step 7
      </span>
      <h2 className="text-base font-semibold text-slate-800">
        Review & Confirm
      </h2>
    </div>

    <div className="grid justify-center grid-cols-12 ">
      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Selected Workforce Model</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Client & Casual Workforce </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Multiple Locations:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Yes </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Shift Assignment Method</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Manual & Self-Accepted</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Check-In Method:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Geo-Fenced (5 km radius)</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Auto Check-In:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Enabled</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Batch Notifications:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">
            Enabled (20 staff per batch, every 15 minutes)
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Client Job Posting:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Requires Agency Approval</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Quick Job Posting Mode:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Enabled</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Shift Structure:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Multiple Shifts </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">
            Notification Settings Mode:
          </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">
            Job-Level Configuration Enabled{" "}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Notification Methods:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Push, In-App, Email</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Compliance Tracking:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Enabled</h3>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center gap-3">
      <button
        className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900"
        onClick={onSave} // Hide step content and show steps list
      >
        Cancel
      </button>
      <button
        className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary"
        onClick={onSave} // Hide step content and show steps list
      >
        Confirm & Save
      </button>
    </div>
  </div>
);

export default function MultiStepForm({ onStepChange }) {
  const [currentStep, setCurrentStep] = useState(null); // Initially show steps list

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId); // Hide steps list and show step content
    if (onStepChange) onStepChange(false);
  };

  const handleSaveAndClose = () => {
    setCurrentStep(null); // Show steps list and hide step content
    if (onStepChange) onStepChange(true);
  };

  const renderStepContent = () => {
    if (currentStep === 1) return <Step1Content onSave={handleSaveAndClose} />;
    if (currentStep === 2) return <Step2Content onSave={handleSaveAndClose} />;
    if (currentStep === 3) return <Step3Content onSave={handleSaveAndClose} />;
    if (currentStep === 4) return <Step4Content onSave={handleSaveAndClose} />;
    if (currentStep === 5) return <Step5Content onSave={handleSaveAndClose} />;
    if (currentStep === 6) return <Step6Content onSave={handleSaveAndClose} />;
    if (currentStep === 7) return <Step7Content onSave={handleSaveAndClose} />;
    return <div>Step content goes here.</div>;
  };

  return (
    <div>
      {/* Show Steps List only if currentStep is null */}
      {currentStep === null ? (
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-center text-gray-900">
              👋 Welcome to weavHR – Organization Workflow Setup
            </h2>
            <h3 className="text-lg text-center text-slate-500">
              Configure your organization&apos;s settings{" "}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {steps.map((step) => (
              <button
                key={step.id}
                className="flex items-center justify-between gap-4 px-4 py-2.5 text-left border-b last:border-b-0"
                onClick={() => handleStepClick(step.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="px-3 py-2 text-sm font-medium rounded-md text-slate-500 bg-slate-100">
                    Step {step.id}
                  </span>
                  <span className="text-base font-medium text-gray-800">
                    {step.title}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    alt=""
                    src={Images.authPageImages.checkedGreen}
                  ></Image>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-slate-500"
                  ></FontAwesomeIcon>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="">{renderStepContent()}</div>
      )}
    </div>
  );
}
