"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { NavigationOptions } from "swiper/types";
import { GiRoundStar, GiAnimalHide } from "react-icons/gi";
import { Button } from "@/components/ui/button";

export default function TwoItemSwiperCarousel() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const items = [
    {
      id: 1,
      title: "Gs on Ape",
      price: 120,
      image: "/assets/images/carousel_home_item_1.webp",
    },
    {
      id: 2,
      title: "Monos",
      price: 120,
      image: "/assets/images/carousel_home_item_2.webp",
    },
    {
      id: 3,
      title: "Back in Ploom",
      price: 120,
      image: "/assets/images/carousel_home_item_3.webp",
    },
    {
      id: 4,
      title: "Clutch Puppies",
      price: 120,
      image: "/assets/images/carousel_home_item_4.webp",
    },
  ];

  return (
    <div className="relative w-full md:w-[322px] xl:w-[660px] 3xl:w-[698px]">
      {/* Nút prev */}
      <button
        ref={prevRef}
        className="absolute size-[32px] flex items-center justify-center left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-primaryPink hover:brightness-75 duration-100 rounded-full shadow-md"
      >
        <LuChevronLeft className="size-[23px] mr-[1px]" />
      </button>

      {/* Nút next */}
      <button
        ref={nextRef}
        className="absolute size-[32px] flex items-center justify-center right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 bg-primaryPink hover:brightness-75 duration-100 rounded-full shadow-md"
      >
        <LuChevronRight className="size-[23px] ml-[1px]" />
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16} // khoảng cách giữa các slide
        slidesPerView={2}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // bind ref trước khi init
          if (swiper.params.navigation) {
            (swiper.params.navigation as NavigationOptions).prevEl =
              prevRef.current;
            (swiper.params.navigation as NavigationOptions).nextEl =
              nextRef.current;
          }
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
        className="h-full rounded-[8px]"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            <div className="group relative border-primary-border border overflow-hidden rounded-md size-[320px] p-4">
              <Image
                fill
                src={item.image}
                alt=""
                className="object-cover z-[-1] group-hover:scale-[1.1] will-change-transform duration-200"
              />
              <div className="absolute top-0 left-0 w-full h-full p-4"></div>
              <div className="absolute top-0 left-0 w-full h-auto p-4 group-hover:hidden flex items-center justify-between">
                <div className="flex items-center w-fit py-1 px-2 bg-black/10 rounded-[12px] backdrop-blur-md">
                  <GiRoundStar className="text-yellow-400" />
                  <span className="ml-2 text-xs">Featured</span>
                </div>
                <div
                  className="relative size-[20px] bg-blue-500 flex items-center justify-center rounded-full
                  after:absolute after:size-[22px] after:rounded-full after:border after:border-gray-100/20 after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2
                  "
                >
                  <GiAnimalHide className="text-white size-[12px]" />
                </div>
              </div>

              <div className="z-[1] hidden group-hover:block absolute left-0 w-full  bg-black/30  h-full bottom-0"></div>
              <div className="absolute bottom-0 left-0 w-full h-full p-4 flex items-end">
                {/* Overlay gradient black */}
                <div className="z-[1] absolute left-0 w-full bg-gradient-to-t from-black/80 to-transparent h-[40%] bottom-0"></div>
                {/* Information */}

                <div className="z-[2] relative flex flex-col h-auto will-change-contents duration-300 group-hover:bottom-0 bottom-[-140px]">
                  <span className=" text-[18px] font-bold text-white ">
                    {item.title}
                  </span>
                  <span className="group-hover:hidden">{item.price} APE</span>
                  <p className=" opacity-0 group-hover:opacity-100 text-sm font-medium text-white line-clamp-4">
                    NFT are unique digital assets on the blockchain,
                    representing ownership of art, music, or in-game. Unlike
                    cryptocurrencies, each NFT has its own value and cannot be
                    exchanged one-to-one.
                  </p>
                  <Button className="opacity-0 group-hover:opacity-100  mt-4 bg-[#EC1E79] w-full text-white hover:bg-[#d4176d]">
                    Explore Collection
                  </Button>
                </div>
              </div>
              {/* {item.content} */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
