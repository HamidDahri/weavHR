import React from "react";
import { Images } from "../ui/images";
import Image from "next/image";
import Slider from "../components/Slider";
import dataSlider from "../components/_data/slider-data.json";
const SideSection = () => {
  return (
    <div className="flex flex-col justify-between h-screen gap-3 p-8">
      <div>
        <Image alt="" src={Images.authPageImages.logo}></Image>
        <div className="lg:mt-16 md:mt-12">
          <h1 className="mb-4 text-5xl font-semibold text-white">
            Streamlining HR with Technology
          </h1>
          <p className="text-lg text-white">
            Get the HR help you need! create a free account and get full access
            to all features for 30-days. No credit card needed.
          </p>
        </div>
      </div>

      <div className="">
        <Slider data={dataSlider} />
        <div className="flex items-center justify-between gap-3 text-white">
          <h2>© WeaveHR, 2024</h2>

          <div className="flex items-center gap-1">
            <Image
              alt="mail icon"
              src={Images.authPageImages.mailIconWhite}
            ></Image>
            <h3>info@weavehr.com</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
