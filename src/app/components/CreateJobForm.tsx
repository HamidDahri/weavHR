import React, { useState } from "react";
import { Images } from "../ui/images";
import Image from "next/image";
import DaySelector from "./DaySelector";
import LanguageSelector from "./DropdownSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";

interface CreateJobFormProps {
  onClickHandler: (step: boolean) => void;
}

const CreateJobForm: React.FC<CreateJobFormProps> = ({ onClickHandler }) => {
  // const [selectedLanguages, setSelectedLanguages] = useState<any[]>([]);

  // const handleSelectedLanguagesChange = (selected: any) => {
  //   setSelectedLanguages(selected); // Update state with the selected values
  // };

  // const [selectedSkills, setSelectedSkills] = useState<any[]>([]);

  // const handleSelectedSkillsChange = (selected: any) => {
  //   setSelectedSkills(selected); // Update state with the selected values
  // };

  // const [selectedShifts, setSelectedShifts] = useState<any[]>([]);

  // const handleSelectedShiftsChange = (selected: any) => {
  //   setSelectedShifts(selected); // Update state with the selected values
  // };

  // const [selectedGroups, setSelectedGroups] = useState<any[]>([]);

  // const handleSelectedGroupsChange = (selected: any) => {
  //   setSelectedGroups(selected); // Update state with the selected values
  // };

  const handleBack = () => {
    onClickHandler(false); // Proceed to the next step
  };
  return (
    <div className="flex justify-center p-6 pb-24 bg-white rounded-lg shadow-sm">
      <div className="grid w-full max-w-4xl col-span-12 gap-4 ">
        <div className="col-span-12">
          <h2 className="mb-4 text-xl font-medium text-slate-900">Client</h2>
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
                placeholder="Search client to post job"
                required
              />
            </div>
          </form>
        </div>

        <div className="col-span-12">
          <h2 className="mb-4 text-xl font-medium text-slate-900">
            Job Details
          </h2>

          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Job Title
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

          <div className="mt-1 text-sm text-red-500">Job Title Required</div>
        </div>

        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Job Description
              <span className="text-red-500 ms-1">*</span>
            </span>

            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-white focus:ring-primary rounded-lg border border-gray-300 placeholder:text-slate-500  focus:border-primary resize-none"
              placeholder=""
            ></textarea>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Job Description Required
          </div>
        </div>

        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              No. of Positions
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
            No. of Positions Required
          </div>
        </div>

        <div className="col-span-12">
          <h2 className="mb-4 text-xl font-medium text-slate-900">Schedule</h2>

          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Client Location
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

          <div className="mt-1 text-sm text-red-500">
            Client Location Required
          </div>
        </div>

        <div className="col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Start Date
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="date"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">Start Date Required</div>
        </div>

        <div className="col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              End Date
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="date"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">End Date Required</div>
        </div>

        <div className="col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Start Date
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="time"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">Start Date Required</div>
        </div>

        <div className="col-span-6">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              End Date
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="time"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">End Date Required</div>
        </div>
        <div className="col-span-12">
          <DaySelector></DaySelector>
        </div>

        <div className="col-span-12">
          <h2 className="mb-4 text-xl font-medium text-slate-900">Criteria</h2>

          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Work Type
            </span>
          </label>
          <LanguageSelector
            workstype
            onSelectChange={() => console.log("")}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Shift
            </span>
          </label>
          <LanguageSelector
            shift
            onSelectChange={() => console.log("")}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Job Type
            </span>
          </label>
          <LanguageSelector
            jobType
            onSelectChange={() => console.log("")}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Departments
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

          <div className="mt-1 text-sm text-red-500">Departments Required</div>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Role
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

          <div className="mt-1 text-sm text-red-500">Role Required</div>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Required Location
            </span>
          </label>
          <LanguageSelector
            locationOpt
            onSelectChange={() => console.log("")}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Required Skills/Qualifications
            </span>
          </label>
          <LanguageSelector
            reqSkills
            onSelectChange={() => console.log("")}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Experience Level
            </span>
          </label>
          <LanguageSelector
            expLevel
            onSelectChange={() => console.log("")}
          ></LanguageSelector>
        </div>
        <div className="col-span-12">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Custom Group Tag
            </span>
          </label>
          <LanguageSelector
            groups
            onSelectChange={() => console.log("")}
          ></LanguageSelector>
        </div>
      </div>

      <div className="absolute p-3 bg-white border rounded-full bottom-4 border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleBack}
            className="px-4 py-2 font-semibold text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            Save as Draft
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-center text-white rounded-full bg-primary hover:bg-primaryDark focus:ring-0 focus:outline-none focus:ring-blue-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobForm;
