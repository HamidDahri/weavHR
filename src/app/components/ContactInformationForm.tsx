import React from "react";
import { Images } from "../ui/images";
import Image from "next/image";

interface ContactInformationFormProps {
  onClickHandler: (step: number) => void;
}

const ContactInformationForm: React.FC<ContactInformationFormProps> = ({
  onClickHandler,
}) => {
  const handleBackOnClick = () => {
    const newStep = 0;
    onClickHandler(newStep);
  };

  const handleNextOnClick = () => {
    const newStep = 2;
    onClickHandler(newStep);
  };

  return (
    <div className="grid justify-center grid-cols-12 gap-4 mt-12">
      <div className="col-span-6 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            First Name
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">First Name Required</div>
      </div>
      <div className="col-span-6 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Last Name
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">Last Name Required</div>
      </div>

      <div className="col-span-12 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Email Address
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">Email Address Required</div>
      </div>
      <div className="col-span-12 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Phone Number
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">Phone Number</div>
      </div>

      <div className="col-span-12 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Position Title
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="text"
            className={`w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">Position Title Required</div>
      </div>
      <div className="col-span-6 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Billing Email Address
            <span className="text-red-500 ms-1">*</span>
          </span>

          <input
            id="state"
            type="email"
            className={`w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500`}
            name="state"
            placeholder=""
          ></input>
        </label>

        <div className="mt-1 text-sm text-red-500">
          Billing Email Address Required
        </div>
      </div>
      <div className="col-span-6 ">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Preferred Currency
            <span className="text-red-500 ms-1">*</span>
          </span>

          <div className="relative">
            <select
              id="registerTypeSelection"
              name="registerTypeSelection"
              // value={values.registerTypeSelection}
              // onChange={handleChange}
              className="w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500 appearance-none select-wrapper"
            >
              <option value="NZD">NZD</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
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

export default ContactInformationForm;
function onClickHandler(arg0: string) {
  throw new Error("Function not implemented.");
}
