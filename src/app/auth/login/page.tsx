import React from "react";
import Link from "next/link";
import SideSection from "../../components/SideSection";

const Login = () => {
  return (
    <div className="grid h-screen grid-cols-12 bg-white">
      <div className="hidden md:col-span-4 lg:col-span-3 md:block bg-primary">
        <SideSection></SideSection>
      </div>
      <div className="flex items-center justify-center col-span-12 md:col-span-8 lg:col-span-9">
        <div className="grid grid-cols-12 ">
          <div className="flex flex-col items-center justify-center col-span-12 md:col-start-4 md:col-span-6">
            <h2 className="mb-4 text-4xl font-semibold text-gray-900">
              👋 Welcome Back
            </h2>
            <h3 className="mb-4 text-xl text-gray-500">
              Get Started managing your operation efficiently
            </h3>
          </div>
          <div className="col-span-10 col-start-2 mb-4">
            <label className="block">
              <span className="block mb-1 text-base font-medium text-gray-700">
                Username
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

            <div className="mt-1 text-sm text-red-500">Username Required</div>
          </div>
          <div className="col-span-10 col-start-2">
            <label className="block">
              <span className="block mb-1 text-base font-medium text-gray-700">
                Password
                <span className="text-red-500 ms-1">*</span>
              </span>

              <input
                id="state"
                type="password"
                className={`w-full px-3 py-2.5 border-0  rounded-lg focus:ring-primary focus:shadow bg-slate-100 focus:bg-white focus:ring-[0.5px] outline-none placeholder:text-gray-m-500`}
                name="state"
                placeholder=""
              ></input>
            </label>

            <div className="mt-1 text-sm text-red-500">Password Required</div>
          </div>

          <div className="col-span-10 col-start-2">
            <div className="flex items-center justify-between gap-3 mt-4">
              <div className="flex items-center gap-2">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-white rounded border-slate-300 text-primary focus:ring-primary focus:ring-2 "
                />
                <span className="text-sm font-medium text-gray-700">
                  Remember me
                </span>
              </div>
              <Link
                href={"forget"}
                className="text-sm font-semibold text-primary"
              >
                Forgot password?
              </Link>
            </div>

            <Link
              href="/settings/staff"
              className="block w-full py-3 my-4 text-base font-semibold text-center text-white rounded-lg bg-primary hover:bg-primaryDark"
            >
              Log In
            </Link>

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

export default Login;
