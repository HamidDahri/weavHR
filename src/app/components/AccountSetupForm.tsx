import React from "react";
import { Images } from "../ui/images";
import Image from "next/image";

interface AccountSetupFormProps {
  onClickHandler: (step: number) => void;
}

const AccountSetupForm: React.FC<AccountSetupFormProps> = ({
  onClickHandler,
}) => {
  const handleBackOnClick = () => {
    const newStep = 2;
    onClickHandler(newStep);
  };

  const handleNextOnClick = () => {
    const newStep = 4;
    onClickHandler(newStep);
  };
  return (
    <div className="grid justify-center grid-cols-12 gap-4 mt-12">
      <div className="col-span-12 ">
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

      <div className="col-span-12 ">
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
        <div className="mt-1">
          <div className="flex items-center gap-2 mb-2">
            <Image
              alt="gray check icon"
              className="w-5 h-5 "
              src={Images.authPageImages.checkedGray}
            ></Image>
            <span className="block text-sm text-gray-400">
              Must be at least 8 characters
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Image
              alt="gray checked icon"
              className="w-5 h-5 "
              src={Images.authPageImages.checkedGray}
            ></Image>
            <span className="block text-sm text-gray-400">
              Must contain one special character
            </span>
          </div>
        </div>
      </div>

      <div className="col-span-12 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Confirm Password
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

        <div className="mt-1 text-sm text-red-500">
          Confirm Password Required
        </div>
      </div>

      <div className="col-span-12">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Time Zone
            <span className="text-red-500 ms-1">*</span>
          </span>

          <div className="relative">
            <select
              id="registerTypeSelection"
              name="registerTypeSelection"
              // value={values.registerTypeSelection}
              // onChange={handleChange}
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

export default AccountSetupForm;
