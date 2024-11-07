"use client";

import { MainTitle } from "@/components/mt24/main-title";
import { SubTitle } from "@/components/mt24/sub-title";
import { Title } from "@/components/mt24/title";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { HTMLAttributes, useRef } from "react";

export function LandingFollowCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="py-14 lg:pt-16 xl:pt-20   flex flex-col gap-20 ">
      <div className="flex gap-6  justify-center lg:items-center text-center">
        <Title>
          <MainTitle>FOLLOW US</MainTitle>
          <SubTitle>@MARSEILLE.THROWDOWN</SubTitle>
        </Title>
      </div>
      <div className={"flex  gap-5 "}>
        <Swiper
          loop={true}
          spaceBetween={14}
          centeredSlides={true}
          ref={swiperRef}
          slidesPerView={2}
          breakpoints={{
            1024: {
              slidesPerView: 4.4,
            },
            1280: {
              slidesPerView: 5,
            },
            1536: {
              slidesPerView: 6,
            },
            1921: {
              slidesPerView: 7,
            },
          }}
        >
          {Array.from({ length: 11 }).map((_, i) => (
            <SwiperSlide key={i}>
              <Image
                src={`/img/carousel${i + 1}.jpg`}
                alt={`carousel${i + 1}`}
                width={400}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export function SlideButtons() {
  const swiper = useSwiper();

  return (
    <div className={"flex gap-21 justify-between"}>
      <ArrowButton onClick={() => swiper.slidePrev()} />

      <ArrowButton
        onClick={() => swiper.slideNext()}
        className={"rotate-180"}
      />
    </div>
  );
}

export function ArrowButton({
  className,
  ...props
}: HTMLAttributes<HTMLImageElement>) {
  return (
    <Image
      src={"/img/arrow-left-button.png"}
      alt={"arrow-left"}
      width={40}
      height={40}
      className={`cursor-pointer ${className}`}
      {...props}
    />
  );
}
