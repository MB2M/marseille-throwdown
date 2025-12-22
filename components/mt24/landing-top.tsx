"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { RegisterButton } from "@/components/mt24/register-button";

const IMGS = [
  "/img/MT_25_BG_1.jpg",
  "/img/MT_25_BG_2.jpg",
  "/img/MT_25_BG_3.jpg",
  "/img/MT_25_BG_4.jpg",
];

export const LandingTop = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let syncTimeout: NodeJS.Timeout;

    const interval = setInterval(() => {
      setOpacity(0);

      syncTimeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMGS.length);
        setOpacity(1);
      }, 1000);
    }, 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(syncTimeout);
    };
  }, []);

  return (
    <div className={"relative"}>
      <Image
        src={IMGS[currentImageIndex]}
        alt={"landing"}
        width={1920}
        height={1280}
        className={
          "h-[600px] xl:h-[782px] min-w-full w-auto object-cover transition-opacity duration-1000"
        }
        style={{ opacity }}
        priority
      />
      <div
        className={
          " lg:block z-10 h-full w-full absolute top-0 left-0 bg-white"
        }
        style={{
          background:
            "linear-gradient(180deg, rgba(14, 12, 16, 0) 0%, rgba(14, 12, 16, 0.35) 45%, #0E0C10 100%)",
        }}
      />
      <div
        className={
          "absolute inset-0 flex flex-col justify-center items-center text-center px-6 gap-6 z-20"
        }
      >
        <div className={"flex flex-col items-center"}>
          <p
            className={
              "text-accent font-extrabold mb-2 tracking-widest uppercase"
            }
          >
            International Fitness Showdown
          </p>
          <h1
            className={
              "text-5xl md:text-7xl xl:text-9xl font-strasua max-w-7xl tracking-tighter leading-tight"
            }
          >
            WHO WILL BE THE FITTEST ON MARS ?
          </h1>
          <p
            className={
              "text-xl md:text-3xl font-extrabold mt-6 text-primary tracking-wide uppercase"
            }
          >
            Summer 2026 — Marseille
          </p>
          <p
            className={
              "text-base md:text-lg text-gray-300 mt-4 max-w-2xl font-medium"
            }
          >
            3 days of intense competition • 24 categories • 700+ athletes
          </p>
        </div>
        <div className={"flex flex-col items-center gap-4 mt-8"}>
          <RegisterButton />
          <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] animate-pulse">
            Registration Now Open
          </p>
          {/*<p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">*/}
          {/*  Divisions Adaptive comming soon*/}
          {/*</p>*/}
        </div>
      </div>
    </div>
  );
};
/* Text */
