"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RegisterButton } from "@/components/mt24/register-button";

const IMGS = ["/img/MT_25_BG_1.jpg", "/img/MT_25_BG_2.jpg"];

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
          "absolute left-5 lg:left-10 xl:left-20 bottom-14 lg:bottom-10 xl:bottom-20 flex flex-col gap-11 z-20"
        }
      >
        <div className={"flex flex-col"}>
          {/*<div>*/}
          {/*  <BadgeGradient>CROSSFIT LICENSED EVENT</BadgeGradient>*/}
          {/*</div>*/}
          <div
            className={
              "text-3xl lg:text-4xl xl:text-5xl font-strasua self-stretch w-[350px] xl:w-[550px] mt-8 mb-3.5"
            }
          >
            WHO WILL BE THE FITTEST ON MARS ?
          </div>
          <div className={"text-primary font-extrabold"}>
            <span className={"text-foreground"}>Qualifications :</span> Feb 14 -
            Mar 31
          </div>
          <div className={"text-primary font-extrabold"}>
            <span className={"text-foreground"}>Finale:</span> July 31 - Aug 2
          </div>
        </div>
        <div className={"flex items-center gap-3.5 "}>
          <RegisterButton />
          {/*<TicketButton />*/}
          {/*<ShopButton />*/}
          <Link href={"/volunteers/contact"}>
            <Button variant={"outline"}>BECOME VOLUNTEER</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
/* Text */
