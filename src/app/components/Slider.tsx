"use client";

import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Images } from "../ui/images";

interface Slide {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  rating: number;
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface SliderProps {
  data: Slide[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div className="">
        <ul className="relative w-full ">
          <Swiper
            navigation
            pagination={{ clickable: true }}
            autoplay={false}
            loop={false}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(({ id, name, image, description, title, rating }) => (
              <SwiperSlide className="mb-2" key={id}>
                <div className="absolute bottom-0 left-0 w-full h-full bg-white rounded-xl opacity-5"></div>
                <div className="relative z-10 flex items-center justify-center h-full p-5">
                  <div className="">
                    <h3 className="mb-2 text-xl font-semibold text-white ">
                      {title}
                    </h3>

                    <p className="text-sm font-light text-white ">
                      {description}
                    </p>

                    <div className="flex items-center justify-between gap-3 mt-3">
                      <div className="flex items-center gap-3 ">
                        {image ? (
                          <Image
                            src={image}
                            width={500}
                            height={500}
                            className="bg-gray-300 rounded-full w-9 h-9"
                            alt="user image"
                          />
                        ) : (
                          <Image
                            src="/images/avatar.png"
                            width={500}
                            height={500}
                            className="bg-gray-300 rounded-full w-9 h-9"
                            alt="avatar"
                          />
                        )}

                        <h3 className="text-base font-semibold text-white">
                          {name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: rating }).map((_, index) => (
                          <Image
                            key={index}
                            src={Images.authPageImages.starIcon}
                            className="w-4 h-4"
                            alt="star"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
