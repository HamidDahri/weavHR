import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Images } from "../ui/images";
import Image from "next/image";
import {
  faLock,
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/pro-regular-svg-icons";
import LanguageSelector from "./DropdownSelector";

interface AddClinicFormProps {
  onClickHandler: (step: boolean) => void;
}

const AddClinicForm: React.FC<AddClinicFormProps> = ({ onClickHandler }) => {
  const handleBack = () => {
    onClickHandler(false); // Proceed to the next step
  };

  const [selectedLanguages, setSelectedLanguages] = useState<any[]>([]);

  const handleSelectedLanguagesChange = (selected: any) => {
    setSelectedLanguages(selected); // Update state with the selected values
  };

  const [selectedSkills, setSelectedSkills] = useState<any[]>([]);

  const handleSelectedSkillsChange = (selected: any) => {
    setSelectedSkills(selected); // Update state with the selected values
  };

  const [selectedShifts, setSelectedShifts] = useState<any[]>([]);

  const handleSelectedShiftsChange = (selected: any) => {
    setSelectedShifts(selected); // Update state with the selected values
  };

  const [selectedGroups, setSelectedGroups] = useState<any[]>([]);

  const handleSelectedGroupsChange = (selected: any) => {
    setSelectedGroups(selected); // Update state with the selected values
  };

  // console.log(selectedLanguages, "selectedValues");

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <img src="/images/remediLogo.png" className="w-24 h-24" alt="" />
        <button className="px-4 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50">
          Change Logo
        </button>
      </div>
      <h2 className="text-xl font-medium text-black">Business Information:</h2>

      <div className="grid grid-cols-12 gap-4 pt-4">
        <div className="col-span-12 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Business Name
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Business Name Required
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Business Number
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Business Number Required
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              GST
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="Enter Mobile"
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">GST Required</div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Organization Type
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

        <div className="col-span-12 md:col-span-6">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Location
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

        <div className="col-span-12">
          <label
            htmlFor="message"
            className="block mb-2 text-base font-medium text-gray-700 "
          >
            Overview
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-white focus:ring-primary rounded-lg border border-gray-300 placeholder:text-slate-500  focus:border-primary resize-none"
            placeholder="Write overview......"
          ></textarea>
        </div>
        <div className="col-span-12">
          <label
            htmlFor="message"
            className="block mb-2 text-base font-medium text-gray-700 "
          >
            Internal Note
            <FontAwesomeIcon
              icon={faLock}
              className="h-3.5 ms-1 text-black"
            ></FontAwesomeIcon>
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 placeholder:text-slate-500 focus:ring-primary focus:border-primary resize-none"
            placeholder="Write a note"
          ></textarea>
        </div>

        <div className="col-span-12">
          <label
            htmlFor="default-search"
            className="block mb-2 text-base font-medium text-gray-700 "
          >
            Custom group tags
          </label>
          <LanguageSelector
            groups
            onSelectChange={handleSelectedGroupsChange}
          ></LanguageSelector>
        </div>

        <div className="col-span-12">
          <h2 className="mb-2 text-xl font-medium text-black">Address:</h2>

          <form className="mx-auto">
            <label
              htmlFor="default-search"
              className="block mb-2 text-base font-medium text-gray-700 "
            >
              Find Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary placeholder:text-slate-500 pe-10 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search address"
                required
              />
            </div>
          </form>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Building
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border focus:ring-primary border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="Building #"
            ></input>
          </label>
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Street
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border focus:ring-primary border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="Street #"
            ></input>
          </label>
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Suburb/Town
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
        <div className="col-span-12 md:col-span-4">
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
        <div className="col-span-12 md:col-span-4">
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

        <div className="col-span-12 md:col-span-4">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Zip/Postal Code
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="Enter Postal code"
            ></input>
          </label>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Latitude
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Longitude
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Geo fence radius
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12 md:col-span-6">
          <button className="mb-4 text-base font-semibold text-primary">
            <FontAwesomeIcon icon={faPlus} className="me-1"></FontAwesomeIcon>{" "}
            Add new
          </button>

          <div className="flex items-center justify-between gap-4 px-3 py-2 rounded-lg bg-slate-100">
            <p className="mb-0 text-gray-500">
              123 Queen Street, Ponsonby, Auckland, NZ
            </p>
            <div className="flex items-center gap-3 text-slate-500">
              <button>
                <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
              </button>
              <button>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <h2 className="text-xl font-medium text-black ">
            Billing information:
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Billing Email Address
            </span>

            <input
              id="state"
              type="email"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12">
          <hr className="h-px my-4 bg-gray-200 border-none" />
          <h2 className="text-xl font-medium text-black ">
            Primary Contact Person:
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              First Name
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Last Name
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Email Address
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Phone Number
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="col-span-12 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Position Title
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="e.g., Agency Manager, HR Lead."
            ></input>
          </label>
        </div>

        <div className="flex items-center justify-between col-span-12 mt-4 ">
          <div className="flex items-center gap-3">
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
                className="text-sm font-normal text-gray-600 ms-2 "
              >
                Active
              </label>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primaryDark focus:ring-0 focus:outline-none focus:ring-blue-300"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClinicForm;
