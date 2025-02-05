import { faInfoCircle } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Images } from "../../../ui/images";
import Image from "next/image";

const page = () => {
  return (
    <div className=" scrollbar-hide">
      <div className="flex items-center gap-2 mb-4">
        <span className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-lg shadow-sm">
          <FontAwesomeIcon className="w-4 h-4" icon={faInfoCircle} />
        </span>
        <h2 className="text-lg font-medium text-gray-800">
          Job Configurations
        </h2>
      </div>

      <div className="overflow-scroll h-[calc(100vh-160px)] pb-8 scrollbar-hide bg-white rounded-xl">
        <div className="grid grid-cols-12">
          <div className="col-span-6 col-start-4">
            <div className="col-span-8 px-4 py-5 pb-8 bg-white rounded-xl">
              <h2 className="mb-4 text-xl font-medium text-haiti">
                Job Requirements
              </h2>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job1"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Clients
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job2"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Job title
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job3"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Job description
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job4"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Location
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job5"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Worktype
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job6"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Department
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job7"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Shift
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job8"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Skills
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job9"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Experience
                  </label>
                </div>

                <div className="flex items-center ">
                  <input
                    id="default-radio-1"
                    type="checkbox"
                    value=""
                    name="job10"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="text-base font-medium text-gray-500 ms-2 "
                  >
                    Custom group tags
                  </label>
                </div>
              </div>
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
                      <span className="text-sm text-gray-500">Notify next</span>
                      <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 py-2 max-w-24"
                        placeholder="0"
                        required
                      />
                      <span className="text-sm text-gray-500">staff after</span>
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
                      <span className="text-sm text-gray-500">Notify next</span>
                      <input
                        type="number"
                        id="number-input"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full px-2.5 py-2 max-w-24"
                        placeholder="0"
                        required
                      />
                      <span className="text-sm text-gray-500">staff after</span>
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
                        <option value="Wellington">No check-in required</option>
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
                        <option value="Wellington">No check-in required</option>
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
                      Notify staff if not checked In 5 minutes after start time
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
                      Notify staff 15 minutes before job end time for check-out
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3">
              <button className="px-4 py-2 mt-4 bg-white border border-gray-300 rounded-md text-slate-900">
                Cancel
              </button>
              <button className="px-4 py-2 mt-4 text-white border rounded-md bg-primary border-primary">
                Save & Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
