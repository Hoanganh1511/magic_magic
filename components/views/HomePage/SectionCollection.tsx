"use client";

import { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import "swiper/css";
import "swiper/css/navigation";

interface CollectionSectionProps {
  title: string;
  items: {
    id: string | number;
    name: string;
    image: string;
    verified?: boolean;
    floorPrice: string;
    volumeChange: string;
  }[];
  rightSlot?: ReactNode; // optional: nút xem tất cả, filter...
}

export default function CollectionSection({
  title,
  items,
  rightSlot,
}: CollectionSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-primaryBg relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {rightSlot}
      </div>

      {/* Nút prev */}
      <button
        ref={prevRef}
        className="absolute size-[32px] disabled:hidden flex items-center justify-center -left-4 top-1/2 -translate-y-1/2 z-10 bg-primaryPink hover:brightness-75 duration-100 rounded-full shadow-md"
      >
        <LuChevronLeft className="size-[23px] mr-[1px]" />
      </button>

      {/* Nút next */}
      <button
        ref={nextRef}
        className="absolute size-[32px] disabled:hidden flex items-center justify-center -right-4 top-1/2 -translate-y-1/2 z-10 bg-primaryPink hover:brightness-75 duration-100 rounded-full shadow-md"
      >
        <LuChevronRight className="size-[23px] ml-[1px]" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={24} // gap giữa các slide
        slidesPerView={4} // hiển thị 4 card / view
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
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-[#141018] border border-primary-border rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 ">
                  <span className="font-semibold text-white text-[18px]">
                    {" "}
                    {item.name}
                  </span>
                  {item.verified && <span className="text-pink-500">✔</span>}
                </div>
                <div className="mt-2 flex">
                  <div className="w-1/2 flex flex-col text-sm text-gray-400">
                    <span className="text-xs">FLOOR PRICE</span>{" "}
                    <span className="text-white font-semibold">
                      {item.floorPrice}
                    </span>
                  </div>
                  <div className="w-1/2  flex flex-col text-sm text-gray-400">
                    <span className="text-xs">1d VOL. CHANGE</span>{" "}
                    <span className="text-green-400 font-semibold">
                      {item.volumeChange}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
