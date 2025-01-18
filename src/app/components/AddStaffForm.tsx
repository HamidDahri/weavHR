import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Images } from "../ui/images";
import Image from "next/image";
import { faLock, faPlus } from "@fortawesome/pro-regular-svg-icons";
import LanguageSelector from "./DropdownSelector";

interface AddStaffFormProps {
  onClickHandler: (step: boolean) => void;
}

const AddStaffForm: React.FC<AddStaffFormProps> = ({ onClickHandler }) => {
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

  console.log(selectedLanguages, "selectedValues");

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="mb-2 text-xl font-medium text-black">
        Personal Information
      </h2>
      <h3 className="text-sm font-medium text-slate-900">Profile Photo</h3>

      <div className="flex w-full mt-1">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer w-28 h-28 bg-gray-50 hover:bg-gray-100 "
        >
          <div className="flex flex-col items-center justify-center">
            <FontAwesomeIcon
              className="text-gray-400 w-7 h-7"
              icon={faUser}
            ></FontAwesomeIcon>
            <p className="mt-2 text-sm text-gray-950 ">+ Upload</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div className="grid grid-cols-12 gap-4 pt-8">
        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              First Name
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">Username Required</div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Last Name
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">Last Name Required</div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Mobile
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="Enter Mobile"
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Mobile Number Required
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Primary Contact Email
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="Enter Email"
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Primary Contact Email Required
          </div>
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
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500 resize-none"
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
            className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 placeholder:text-slate-500 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Write a note"
          ></textarea>
        </div>

        <div className="col-span-12">
          <label
            htmlFor="default-search"
            className="block mb-2 text-base font-medium text-gray-700 "
          >
            Languages
          </label>
          <LanguageSelector
            languages
            onSelectChange={handleSelectedLanguagesChange}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label
            htmlFor="default-search"
            className="block mb-2 text-base font-medium text-gray-700 "
          >
            Skills
          </label>
          <LanguageSelector
            skills
            onSelectChange={handleSelectedSkillsChange}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label
            htmlFor="default-search"
            className="block mb-2 text-base font-medium text-gray-700 "
          >
            Shift
          </label>
          <LanguageSelector
            shift
            onSelectChange={handleSelectedShiftsChange}
          ></LanguageSelector>
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
          <hr className="h-px my-4 bg-gray-200 border-0 " />
          <h2 className="mb-2 text-xl font-medium text-black">
            Address Information
          </h2>

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
                className="block w-full p-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg placeholder:text-slate-500 pe-10 focus:ring-blue-500 focus:border-blue-500 "
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
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
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
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
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
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
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
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
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
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
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
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="col-span-12">
          <hr className="h-px my-4 bg-gray-200 border-none" />
          <h2 className="mb-2 text-xl font-medium text-black">
            Emergency Contact Details
          </h2>
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Name
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Relationship
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="col-span-12 md:col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Emergency Contact Phone
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12">
          <hr className="h-px my-4 bg-gray-200 border-none" />
          <h2 className="mb-2 text-xl font-medium text-black">
            Employment Details
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Employment Type
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
              Start Date
            </span>

            <input
              id="state"
              type="date"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>
        <div className="col-span-12 md:col-span-4">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              End Date
            </span>

            <input
              id="state"
              type="date"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Salary Type
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
              Hourly Rate / Salary
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>
        </div>

        <div className="col-span-12">
          <hr className="h-px my-4 bg-gray-200 border-none" />
          <h2 className="mb-2 text-xl font-medium text-black">
            Location & Department
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Locations
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
              Department/Unit
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
          <hr className="h-px my-4 bg-gray-200 border-none" />
          <h2 className="mb-2 text-xl font-medium text-black">
            Permissions & Login Credentials
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Role
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
              Primary Role
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
              Classification
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
              Client
              <span className="text-red-500 ms-1">*</span>
            </span>

            <div className="relative">
              <select
                id="registerTypeSelection"
                name="registerTypeSelection"
                className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
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
          <div className="flex items-center gap-4">
            <div className="flex items-center ">
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
                Allow staff app access?
              </label>
            </div>

            <div className="flex items-center ">
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
                Eligible to receive jobs?
              </label>
            </div>

            <div className="flex items-center ">
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
                Enable notifications
              </label>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-200 border-none" />
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="relative block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Username
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
            <Image
              alt="green checked icon"
              className="absolute w-5 h-5 top-10 mt-0.5 end-2"
              src={Images.authPageImages.checkedGreen}
            ></Image>
          </label>

          <div className="mt-1 text-sm text-red-500">Username Required</div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Password
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">Password Required</div>
        </div>

        <div className="flex justify-start col-span-12 md:col-span-4">
          <div className="flex items-center ">
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
              Enable 2FA
            </label>
          </div>
        </div>

        <div className="flex items-center justify-between col-span-12 mt-4 ">
          <div className="flex items-center ">
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

export default AddStaffForm;
