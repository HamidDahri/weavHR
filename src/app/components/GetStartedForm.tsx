import React, { useState } from "react";
import { Images } from "../ui/images";
import Image from "next/image";

interface GetStartedFormProps {
  onClickHandler: (step: number) => void;
}

const GetStartedForm: React.FC<GetStartedFormProps> = ({ onClickHandler }) => {
  const [submittedData, setSubmittedData] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    organizationName: "",
    businessNumber: "",
    industryType: "Healthcare",
    organizationType: "Private Company",
    organizationSize: "1-10",
  });

  const [errors, setErrors] = useState<{
    organizationName?: string;
    businessNumber?: string;
    industryType?: string;
    organizationType?: string;
    organizationSize?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization Name is required.";
    }

    if (!formData.businessNumber.trim()) {
      newErrors.businessNumber = "Business Number/Tax ID is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmittedData((prev) => [...prev, formData]); // Save data
      console.log("Submitted Data:", [...submittedData, formData]); // Log data
      onClickHandler(1); // Proceed to the next step
    }
  };
  return (
    <div className="grid justify-center grid-cols-12 gap-4 mt-12">
      <div className="col-span-12">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Organization Name
            <span className="text-red-500 ms-1">*</span>
          </span>
          <input
            id="organizationName"
            type="text"
            className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500 ${
              errors.organizationName ? "border-red-500" : ""
            }`}
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
          />
        </label>
        {errors.organizationName && (
          <div className="mt-1 text-sm text-red-500">
            {errors.organizationName}
          </div>
        )}
      </div>

      <div className="col-span-12">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Business Number/Tax/ID
            <span className="text-red-500 ms-1">*</span>
          </span>
          <input
            id="businessNumber"
            type="text"
            className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm rounded-lg outline-none placeholder:text-gray-m-500 ${
              errors.businessNumber ? "border-red-500" : ""
            }`}
            name="businessNumber"
            value={formData.businessNumber}
            onChange={handleChange}
          />
        </label>
        {errors.businessNumber && (
          <div className="mt-1 text-sm text-red-500">
            {errors.businessNumber}
          </div>
        )}
      </div>

      <div className="col-span-12">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Industry
            <span className="text-red-500 ms-1">*</span>
          </span>
          <div className="relative">
            <select
              id="industryType"
              name="industryType"
              className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
              value={formData.industryType}
              onChange={handleChange}
            >
              <option value="Healthcare">Healthcare</option>
              <option value="IT">IT</option>
              <option value="Retail">Retail</option>
            </select>
            <Image
              alt="chevron down icon"
              className="absolute w-5 h-5 top-3 end-2"
              src={Images.authPageImages.arrowHeadDown}
            />
          </div>
        </label>
      </div>

      <div className="col-span-12">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Organization Type
            <span className="text-red-500 ms-1">*</span>
          </span>
          <div className="relative">
            <select
              id="organizationType"
              name="organizationType"
              className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
              value={formData.organizationType}
              onChange={handleChange}
            >
              <option value="Private Company">Private Company</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="Public Sector">Public Sector</option>
              <option value="Partnership">Partnership</option>
              <option value="Other">Other</option>
            </select>
            <Image
              alt="chevron down icon"
              className="absolute w-5 h-5 top-3 end-2"
              src={Images.authPageImages.arrowHeadDown}
            />
          </div>
        </label>
      </div>

      <div className="col-span-12">
        <label className="block">
          <span className="block mb-1 text-base font-medium text-gray-700">
            Organization Size
            <span className="text-red-500 ms-1">*</span>
          </span>
          <div className="relative">
            <select
              id="organizationSize"
              name="organizationSize"
              className="w-full px-3 py-2.5 border rounded-lg border-gray-300 outline-none appearance-none outline-gray-m-400 select-wrapper"
              value={formData.organizationSize}
              onChange={handleChange}
            >
              <option value="1-10">1-10</option>
              <option value="10-50">10-50</option>
              <option value="50-100">50-100</option>
            </select>
            <Image
              alt="chevron down icon"
              className="absolute w-5 h-5 top-3 end-2"
              src={Images.authPageImages.arrowHeadDown}
            />
          </div>
        </label>
      </div>

      <div className="col-span-12">
        <button
          onClick={handleSubmit}
          className="w-full py-3 text-base font-semibold text-white rounded-lg bg-primary"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStartedForm;
