import React from "react";
import { Images } from "../ui/images";
import Image from "next/image";

interface AddOrganizationFormProps {
  onClickHandler: (step: boolean) => void;
}
const AddOrganizationForm: React.FC<AddOrganizationFormProps> = ({
  onClickHandler,
}) => {
  const handleBack = () => {
    onClickHandler(false); // Proceed to the next step
  };

  return (
    <div className="px-6 bg-white py-7 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <img src="/images/remediLogo.png" className="w-24 h-24" alt="" />
        <button className="px-4 py-1.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50">
          Change Logo
        </button>
      </div>

      <h2 className="mb-2 text-xl font-medium text-black">Address:</h2>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Building/Unit
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
            Building/Unit Required
          </div>
        </div>
        <div className="col-span-12 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Street Address
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
            Street Address Required
          </div>
        </div>
        <div className="col-span-4 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Suburb
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
        <div className="col-span-4 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              City
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
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Country
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

        <div className="col-span-12 mt-4">
          <h2 className="text-xl font-medium text-black ">
            Billing information:
          </h2>
        </div>

        <div className="col-span-6 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Billing Email Address
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="email"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Billing Email Address Required
          </div>
        </div>

        <div className="col-span-6">
          <label className="block">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Preferred Currency
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
              First Name
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

          <div className="mt-1 text-sm text-red-500">First Name Required</div>
        </div>
        <div className="col-span-6 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Last Name
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

          <div className="mt-1 text-sm text-red-500">Last Name Required</div>
        </div>
        <div className="col-span-6 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Email Address
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="email"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder=""
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Email Address Required
          </div>
        </div>
        <div className="col-span-6 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Phone Number
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

          <div className="mt-1 text-sm text-red-500">Phone Number Required</div>
        </div>
        <div className="col-span-12 ">
          <label className="block ">
            <span className="block mb-1 text-base font-medium text-gray-700">
              Position Title
              <span className="text-red-500 ms-1">*</span>
            </span>

            <input
              id="state"
              type="text"
              className={`w-full px-3 py-2.5 border border-gray-300 focus:ring-primary shadow-sm rounded-lg outline-none placeholder:text-gray-m-500`}
              name="state"
              placeholder="e.g., Agency Manager, HR Lead."
            ></input>
          </label>

          <div className="mt-1 text-sm text-red-500">
            Position Title Required
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3">
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
  );
};

export default AddOrganizationForm;
