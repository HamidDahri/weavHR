import React from "react";
import { Images } from "../../ui/images";
import Image from "next/image";
import Link from "next/link";
import SideSection from "../../components/SideSection";

const Login = () => {
  return (
    <div className="grid h-screen grid-cols-12 bg-white">
      <div className="hidden md:col-span-4 lg:col-span-3 md:block bg-primary">
        <SideSection></SideSection>
      </div>
      <div className="col-span-1 md:col-span-8 lg:col-span-9">
        <div className="grid h-full grid-cols-12 ">
          <div className="flex flex-col items-center justify-center col-span-12 md:col-start-4 md:col-span-6">
            <Image
              alt="green checked icon"
              className="w-20 mb-6"
              src={Images.authPageImages.checkedGreen}
            ></Image>
            <h2 className="mb-4 text-4xl font-semibold text-gray-900">
              👋 Welcome to WEAVHR
            </h2>
            <h3 className="mb-4 text-xl text-gray-500">
              Your account has been successfully set up!
            </h3>
            <Link
              href={"login"}
              className="px-10 py-3 mb-4 text-lg font-semibold text-white rounded-lg bg-primary"
            >
              Log In to your account
            </Link>
            <h4 className="text-base text-gray-500">
              Need help? Contact our support team anytime at:
            </h4>
            <a
              href="mailto:support@weavhr.com"
              className="text-base font-semibold text-primary"
            >
              support@weavhr.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
