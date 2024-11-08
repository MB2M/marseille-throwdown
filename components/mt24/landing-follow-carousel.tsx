"use client";

import { MainTitle } from "@/components/mt24/main-title";
import { SubTitle } from "@/components/mt24/sub-title";
import { Title } from "@/components/mt24/title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingFollowCarousel() {
  const swiperRef = useRef(null);

  return (
    <div className="py-14 lg:pt-16 xl:pt-20   flex flex-col gap-11 ">
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
      <div
        className={
          "flex flex-col items-center justify-center gap-3.5 lg:flex-row lg:gap-6 px-4"
        }
      >
        <div className={"w-full lg:w-auto"}>
          <Link
            href={"https://www.facebook.com/marseille.throwdown"}
            target={"_blank"}
          >
            <Button
              className={"w-full bg-[#F0F7F7] hover:bg-grayMT text-[#0E1010]"}
            >
              <Image
                src={"/img/facebook.png"}
                alt={"facebook"}
                width={18}
                height={18}
              />
              FACEBOOK
            </Button>
          </Link>
        </div>
        <div className={"w-full lg:w-auto"}>
          <Link
            href={"https://www.instagram.com/marseille.throwdown/"}
            target={"_blank"}
          >
            <Button
              className={"w-full bg-[#F0F7F7] hover:bg-grayMT text-[#0E1010]"}
            >
              <Image
                src={"/img/instagram.png"}
                alt={"instagram"}
                width={18}
                height={18}
              />
              INSTAGRAM
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
