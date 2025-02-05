"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faEllipsisVertical,
  faEnvelope,
  faLocationDot,
  faMagnifyingGlass,
  faPhone,
  faPlus,
} from "@fortawesome/pro-regular-svg-icons";
import AddOrganizationForm from "../../../components/AddOrganizationForm";
import Modal from "../../../components/Modal";
import { Images } from "../../../ui/images";
import Image from "next/image";

type TabId = "Overview" | "Documents" | "Locations";

const Page = ({ params }) => {
  const [activeTab, setActiveTab] = useState<TabId>("Overview");

  const [editForm, setEditForm] = useState(false);

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (editForm) {
    return (
      <div className="overflow-auto h-[calc(100vh-100px)] scrollbar-hide pb-12">
        <AddOrganizationForm
          onClickHandler={(newStep: boolean) => setEditForm(newStep)}
        ></AddOrganizationForm>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-auto h-[calc(100vh-100px)] scrollbar-hide pb-12">
        <div className="pt-6 bg-white shadow px-7 rounded-xl ">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4 pb-6">
              <img
                src="/images/remediLogo.png"
                className="bg-gray-100 border border-gray-100 rounded-full w-21 h-21"
                alt=""
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Remedi Solutions
                  </h2>
                </div>
                <h3 className="mb-1 text-sm text-gray-500 font-noraml">
                  Healthcare
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <span>rimsha.hameed@gmail.com</span>
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
                className="inline-flex items-center p-2 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                type="button"
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="w-5 h-5 text-sm"
                />
              </button>

              <div className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow group-hover:block w-44">
                <ul className="p-2 text-sm text-gray-700">
                  <li>
                    <button
                      onClick={() => setEditForm(true)}
                      className="block w-full px-3 py-2 rounded-md text-start hover:bg-gray-100"
                    >
                      Edit
                    </button>
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
                    activeTab === "Documents"
                      ? "border-primary text-primary"
                      : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("Documents")}
                >
                  Documents
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-block  px-4 pb-2 border-b-2 rounded-t-lg ${
                    activeTab === "Locations"
                      ? "border-primary text-primary"
                      : ""
                  }`}
                  type="button"
                  role="tab"
                  onClick={() => handleTabClick("Locations")}
                >
                  Locations
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
          >
            <div className="grid justify-center grid-cols-12 ">
              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Organization Name:</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">XYZ Healthcare </h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">
                    Business Number/Tax ID:
                  </h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">123456789 </h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">GST:</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">EX31231123</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Industry:</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">Healthcare</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Organization Type:</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">Private Company</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Industry</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">Healthcare</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Organization Size:</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">200 Employees, Annual</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">
                    Primary Contact Name:
                  </h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">John Doe </h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Email Address:</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">john.doe@xyz.com </h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Billing Email: </h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">accounts@xyz.com</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">
                    Preferred Currency:
                  </h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">NZD</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Phone Number: </h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">+64 21 123 4567</h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Position: </h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">Manager </h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Address: </h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">
                    123 Queen Street, Ponsonby, Auckland, NZ123 Queen Street,
                    Ponsonby, Auckland, NZ
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-12 col-span-12 py-3 border-b border-slate-100">
                <div className="col-span-4">
                  <h2 className="text-sm text-slate-500">Time Zone:</h2>
                </div>
                <div className="col-span-8 ">
                  <h3 className="text-sm text-black">GMT+12:00 Auckland</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`py-6 bg-white rounded-lg shadow px-7 ${
              activeTab === "Documents" ? "block" : "hidden"
            }`}
          >
            <p className="text-sm text-gray-500 ">
              <strong className="font-medium text-gray-800 ">
                Documents tab&apos;s associated content
              </strong>
            </p>
          </div>
          <div
            className={` ${activeTab === "Locations" ? "block" : "hidden"}`}
            id="Locations"
            role="tabpanel"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-800">Locations</h2>
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primaryDark focus:ring-0 focus:outline-none focus:ring-blue-300"
                >
                  <FontAwesomeIcon className="w-4 h-4" icon={faPlus} />
                  Add
                </button>
              </div>

              <div className="relative overflow-x-auto border border-slate-100 sm:rounded-xl">
                <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
                  <thead className="text-xs text-gray-600 bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Short code
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Suburb
                      </th>
                      <th scope="col" className="px-6 py-3">
                        City
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
                      <td
                        scope="row"
                        className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
                      >
                        <div className="text-sm font-normal text-gray-600">
                          City Centre
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">
                          55 queen street
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-normal text-gray-600">
                          CBD
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-normal text-gray-600">
                          Auckland
                        </span>
                      </td>
                      <td className="w-32 px-6 py-4">
                        <div className="relative dropdown-container">
                          <button
                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={faEllipsis}
                              className="w-5 h-5"
                            />
                          </button>

                          {/* <div className=" z-10 !fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg right-20 w-44">
                          <ul className="py-2 text-sm text-gray-700">
                            <li>
                              <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                                test
                              </button>
                            </li>
                          </ul>
                        </div> */}
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-white border-b cursor-pointer hover:bg-slate-100">
                      <td
                        scope="row"
                        className={`flex items-center px-6 py-4 text-gray-900 whitespace-nowrap`}
                      >
                        <div className="text-sm font-normal text-gray-600">
                          Rototuna
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">
                          11 Victoria street
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-normal text-gray-600">
                          Rototuna
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-normal text-gray-600">
                          Hamilton
                        </span>
                      </td>
                      <td className="w-32 px-6 py-4">
                        <div className="relative dropdown-container">
                          <button
                            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-full hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={faEllipsis}
                              className="w-5 h-5"
                            />
                          </button>

                          {/* <div className=" z-10 !fixed mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg right-20 w-44">
                          <ul className="py-2 text-sm text-gray-700">
                            <li>
                              <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                                test
                              </button>
                            </li>
                          </ul>
                        </div> */}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal} size="extraLarge">
          <span className="flex items-center justify-center w-10 h-10 mb-4 border rounded-md border-slate-300">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-gray-800"
            ></FontAwesomeIcon>
          </span>

          <h2 className="mb-3 text-lg font-semibold text-gray-900">
            Add Location
          </h2>

          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <form className="w-full mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-slate-500"
                    ></FontAwesomeIcon>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-primary focus:border-primary "
                    placeholder="Find address"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="col-span-6 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Short code
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-6 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Building/Unit
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-12">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Street address
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-12 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Suburb
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-6">
              <label className="block">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  City
                  <span className="text-red-500 ms-1">*</span>
                </span>

                <div className="relative">
                  <select
                    id="registerTypeSelection"
                    name="registerTypeSelection"
                    className="w-full px-3 py-2.5 border rounded-lg focus:ring-primary border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
                  >
                    <option value="Wellington">Wellington (GMT+13)</option>
                    <option value=" New Zealand">New Zealand (GMT+13)</option>
                  </select>
                  <Image
                    alt="chevron down icon"
                    className="absolute w-5 h-5 top-3 end-2"
                    src={Images.authPageImages.arrowHeadDown}
                  ></Image>
                </div>
              </label>
            </div>
            <div className="col-span-6">
              <label className="block">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  State
                  <span className="text-red-500 ms-1">*</span>
                </span>

                <div className="relative">
                  <select
                    id="registerTypeSelection"
                    name="registerTypeSelection"
                    className="w-full px-3 py-2.5 border rounded-lg focus:ring-primary border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
                  >
                    <option value="Wellington">Wellington (GMT+13)</option>
                    <option value=" New Zealand">New Zealand (GMT+13)</option>
                  </select>
                  <Image
                    alt="chevron down icon"
                    className="absolute w-5 h-5 top-3 end-2"
                    src={Images.authPageImages.arrowHeadDown}
                  ></Image>
                </div>
              </label>
            </div>
            <div className="col-span-6 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Latitude
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-6 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Longitude
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-12 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Geo fence radius
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-6 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  RFID
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>
            <div className="col-span-6 ">
              <label className="block ">
                <span className="block mb-1 text-base font-medium text-gray-700">
                  Barcode ID
                </span>

                <input
                  id="state"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
                  name="state"
                  placeholder=""
                ></input>
              </label>
            </div>

            <div className="col-span-12">
              <div className="flex items-center gap-3">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="text-sm font-normal text-gray-600 ms-2 "
                  >
                    Primary location
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    checked
                    readOnly
                    className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="text-sm font-normal text-gray-600 ms-2 "
                  >
                    Active
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end col-span-12 gap-3">
              <button
                onClick={closeModal}
                className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-full gap-2 px-5 py-3 text-sm font-medium text-white rounded-lg bg-primary hover:bg-primaryDark focus:ring-0 focus:outline-none focus:ring-blue-300"
              >
                Save
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Page;
