"use client";

import { MainTitle } from "@/components/mt24/main-title";
import { SubTitle } from "@/components/mt24/sub-title";
import { Title } from "@/components/mt24/title";
import { SwitchButton } from "@/components/mt24/switch-button";
import { CardCategory } from "@/components/mt24/card-category";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { HTMLAttributes, useRef, useState } from "react";

const categories = {
  individual: [
    {
      title: "Elite",
      levels: "Male & Female",
      imgPath: "/img/elite2.jpg",
      badge: "24 men | 12 women",
      description: "All athletes must be over 18 years old",
    },
    {
      title: "Espoir",
      levels: "Male & Female",
      imgPath: "/img/carousel2.jpg",
      badge: "12 men | 6 women",
      description:
        "Athlete must be over 18 years old and under 22 years old on the first day of the final",
    },
    {
      title: "Master 35",
      levels: "Male & Female",
      imgPath: "/img/master_35.jpg",
      badge: "12 men | 6 women",
      description:
        "Athlete must be over 35 years old on the first day of the final",
    },
    {
      title: "Master 40",
      levels: "Male & Female",
      imgPath: "/img/master_40.jpg",
      badge: "12 men | 6 women",
      description:
        "Athlete must be over 40 years old on the first day of the final",
    },
    {
      title: "Teen",
      levels: "Boy & Girl",
      imgPath: "/img/teen.jpg",
      badge: "12 men | 6 women",
      description:
        "Athlete must be over 15 years old and under 18 years old on the first day of the final",
    },
  ],
  team: [
    {
      title: "Elite",
      levels: "2 Men + 2 Women",
      imgPath: "/img/team_elite.jpg",
      badge: "24 teams",
      description: "All athletes must be over 18 years old",
    },
    {
      title: "Inter",
      levels: "4 Men | 2 Men + 2 Women",
      imgPath: "/img/team_inter.jpg",
      badge: "30 teams each",
      description: "All athletes must be over 18 years old",
    },
    {
      title: "Scaled",
      levels: "4 Men | 2 Men + 2 Women",
      imgPath: "/img/team_scaled.jpg",
      badge: "36 teams each",
      description: "All athletes must be over 18 years old",
    },
    {
      title: "Master 165+",
      levels: "2 Men + 2 Women",
      imgPath: "/img/team_master2.jpg",
      badge: "12 teams",
      description:
        "The total sum of ages must be at least 165 years. Only the age as of the final day will be considered, with no regard for the exact day or month",
    },
    {
      title: "Adaptive + Valid",
      levels: "1 adaptive + 1 valid",
      imgPath: "/img/adaptive.jpg",
      badge: "12 teams",
      description:
        "An adaptive athlete can compete with a valid athlete. The is NO qualification for this category. Registration is not open right now",
    },
  ],
};

type CategoryType = "individual" | "team";
const categoryTypes: CategoryType[] = ["individual", "team"];

export function LandingCategories() {
  const [categoryType, setCategoryType] = useState(categoryTypes[0]);

  const swiperRef = useRef(null);

  return (
    <div className="py-14 lg:pt-16 xl:pt-20 px-5 lg:px-10 xl:px-5 flex  flex-col gap-11 ">
      <div className="w-full flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center xl:px-[60px]">
        <Title>
          <SubTitle>FIND YOUR</SubTitle>
          <MainTitle>CATEGORIES</MainTitle>
        </Title>
        <SwitchButton
          labels={categoryTypes}
          onChange={(label) => {
            setCategoryType(label);
          }}
        />
      </div>
      <div className={"flex items-start gap-5"}>
        <ArrowButton
          // @ts-ignore
          onClick={() => swiperRef.current?.swiper.slideNext()}
          className={"hidden xl:block xl:mt-[114px] 2xl:mt-[165px]"}
        />

        <Swiper
          loop={true}
          slidesPerView={1.3}
          spaceBetween={16}
          ref={swiperRef}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            1921: {
              slidesPerView: 5,
            },
          }}
        >
          {categories[categoryType].map((category) => (
            <SwiperSlide key={category.title}>
              <CardCategory
                imagePath={category.imgPath}
                badgeText={category.badge}
                title={category.title}
                subTitle={category.levels}
                description={category.description}
              />
            </SwiperSlide>
          ))}
          <div className={"w-[124px] mx-auto mt-8 xl:hidden"}>
            <SlideButtons />
          </div>
        </Swiper>
        <ArrowButton
          // @ts-ignore
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          className={"rotate-180 hidden xl:block xl:mt-[114px] 2xl:mt-[165px]"}
        />
      </div>
    </div>
  );
}

export function SlideButtons() {
  const swiper = useSwiper();

  return (
    <div className={"flex gap-21 justify-between py-1.5"}>
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
