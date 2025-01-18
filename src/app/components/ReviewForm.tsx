import React from "react";
import { Images } from "../ui/images";
import Image from "next/image";
import Link from "next/link";

interface ReviewFormProps {
  onClickHandler: (step: number) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onClickHandler }) => {
  const handleBackOnClick = () => {
    const newStep = 3;
    onClickHandler(newStep);
  };

  return (
    <div className="grid justify-center grid-cols-12 mt-12">
      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Organization Name: </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">XYZ Healthcare </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Business Number/Tax ID:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">123456789 </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Industry:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Healthcare</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Organization Type:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Private Company</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Industry</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Healthcare</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Organization Size: </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">200 Employees, Annual</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Primary Contact Name:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">John Doe </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Email Address:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">john.doe@xyz.com </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Billing Email: </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">accounts@xyz.com</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Preferred Currency:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">NZD</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Phone Number: </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">+64 21 123 4567</h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Position: </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">Manager </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Address: </h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">
            123 Queen Street, Ponsonby, Auckland, NZ123 Queen Street, Ponsonby,
            Auckland, NZ
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-12 col-span-12 py-2 border-b border-slate-100">
        <div className="col-span-4">
          <h2 className="text-sm text-slate-500">Time Zone:</h2>
        </div>
        <div className="col-span-8 ">
          <h3 className="text-sm text-black">GMT+12:00 Auckland</h3>
        </div>
      </div>

      <div className="flex flex-row items-center col-span-12 gap-3 mt-4">
        <label className="w-4 mt-2 custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <span className="block text-gray-600">
          Yes, send me news and updates from WeavHR
        </span>
      </div>

      <div className="flex flex-col items-center justify-center col-span-12 my-4">
        <Link
          href={"welcome"}
          className="w-full py-3 text-base font-semibold text-center text-white rounded-lg bg-primary"
        >
          Get Started
        </Link>
        <div className="mt-3 ">
          <span className="block font-light text-center text-gray-700">
            By creating an account, you are agree to our
            <Link href={""} className="px-2 font-semibold">
              Terms of Services
            </Link>
            and
            <Link href={""} className="px-2 font-semibold">
              Privacy Policy
            </Link>
          </span>
          <span className="block font-light text-center text-gray-700">
            Questions? Give us a call.{" "}
            <Link
              href={"tel: +64-221-295170"}
              className="font-semibold text-primary"
            >
              +64-221-295170
            </Link>
          </span>
        </div>
        <button
          onClick={handleBackOnClick}
          className="flex items-center gap-3 py-3 text-base font-semibold text-gray-700 rounded-lg w-fit "
        >
          <Image
            alt="arrow icon"
            className="w-5 h-5 "
            src={Images.authPageImages.arrowWithTailIcon}
          ></Image>
          Back
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
