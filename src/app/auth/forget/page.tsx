import React from "react";
import { Images } from "../../ui/images";
import Image from "next/image";
import Link from "next/link";
import SideSection from "../../components/SideSection";

const Forget = () => {
  return (
    <div className="grid h-screen grid-cols-12 bg-white">
      <div className="hidden md:col-span-4 lg:col-span-3 md:block bg-primary">
        <SideSection></SideSection>
      </div>
      <div className="flex items-center justify-center col-span-12 md:col-span-8 lg:col-span-9">
        <div className="grid grid-cols-12 ">
          <div className="flex flex-col items-center justify-center col-span-12 md:col-start-4 md:col-span-6">
            <Image
              alt="weavhr logo colored"
              className="mb-4"
              src={Images.authPageImages.logoColor}
            ></Image>

            <h2 className="mb-4 text-4xl font-semibold text-gray-900">
              Reset password
            </h2>
            <h3 className="mb-4 text-xl text-gray-500">
              Get Started managing your operation efficiently
            </h3>
          </div>
          <div className="col-span-10 col-start-2 mb-4">
            <label className="block">
              <span className="block mb-1 text-base font-medium text-gray-700">
                Email Address
                <span className="text-red-500 ms-1">*</span>
              </span>

              <input
                id="state"
                type="text"
                className={`w-full px-3 py-2.5 border border-gray-300 shadow-sm focus:ring-primary rounded-lg outline-none placeholder:text-gray-m-500`}
                name="state"
                placeholder=""
              ></input>
            </label>

            <div className="mt-1 text-sm text-red-500">
              Email Address Required
            </div>
          </div>

          <div className="col-span-10 col-start-2">
            <button className="w-full py-3 my-4 text-base font-semibold text-white rounded-lg bg-primary">
              Submit
            </button>

            <div className="flex justify-center gap-1">
              <span className="text-gray-700">Don’t have an account?</span>
              <Link href={"register"} className="font-semibold text-primary">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
