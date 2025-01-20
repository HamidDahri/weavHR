import React from "react";
import { Images } from "../ui/images";
import Image from "next/image";

interface OrganizationAddressFormProps {
  onClickHandler: (step: number) => void;
}

const OrganizationAddressForm: React.FC<OrganizationAddressFormProps> = ({
  onClickHandler,
}) => {
  const handleBackOnClick = () => {
    const newStep = 1;
    onClickHandler(newStep);
  };

  const handleNextOnClick = () => {
    const newStep = 3;
    onClickHandler(newStep);
  };
  return (
    <div className="grid justify-center grid-cols-12 gap-4 mt-12">
      <div className="col-span-12 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Building/Unit
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-primary placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">Building/Unit Required</div>
      </div>

      <div className="col-span-12 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Street Address
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-primary placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">Street Address Required</div>
      </div>

      <div className="col-span-6">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Suburb
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-primary placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">Suburb Required</div>
      </div>
      <div className="col-span-6">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            City
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none focus:ring-primary placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">City Name Required</div>
      </div>
      <div className="col-span-12 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Country
            <span className="text-red-500 ms-1">*</span>
          </span>

          <div className="relative">
            <select
              id="registerTypeSelection"
              name="registerTypeSelection"
              // value={values.registerTypeSelection}
              // onChange={handleChange}
              className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none focus:ring-primary appearance-none outline-gray-m-400 select-wrapper"
            >
              <option value="pk">Pakistan</option>
              <option value="in">India</option>
              <option value="us">America</option>
            </select>
            <Image
              alt="chevron down icon"
              className="absolute w-5 h-5 top-3 end-2"
              src={Images.authPageImages.arrowHeadDown}
            ></Image>
          </div>
        </label>
      </div>
      <div className="flex items-center justify-between col-span-12 gap-4">
        <button
          onClick={handleBackOnClick}
          className="w-40 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={handleNextOnClick}
          className="w-40 py-3 text-base font-semibold text-white rounded-lg bg-primary"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OrganizationAddressForm;
