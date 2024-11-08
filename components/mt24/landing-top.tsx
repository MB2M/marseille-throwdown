import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegisterButton } from "@/components/mt24/register-button";
import { BadgeGradient } from "@/components/mt24/badge-gradient";

export const LandingTop = () => {
  return (
    <div className={"relative"}>
      <div
        className={
          " lg:block z-10 h-full w-full absolute top-0 left-0 bg-white"
        }
        style={{
          background:
            "linear-gradient(180deg, rgba(14, 12, 16, 0) 0%, rgba(14, 12, 16, 0.35) 45%, #0E0C10 100%)",
        }}
      />
      <Image
        src={"/img/landing3.jpg"}
        alt={"landing"}
        width={3840}
        height={2160}
        className={"h-[600px] xl:h-[782px] min-w-full w-auto object-cover"}
        priority
      />

      <div
        className={
          "absolute left-5 lg:left-10 xl:left-20 bottom-14 lg:bottom-10 xl:bottom-20 flex flex-col gap-11 z-20"
        }
      >
        <div className={"flex flex-col"}>
          <div>
            <BadgeGradient>CROSSFIT LICENSED EVENT</BadgeGradient>
          </div>
          <div
            className={
              "text-3xl lg:text-4xl xl:text-5xl font-strasua self-stretch w-[350px] xl:w-[550px] mt-8 mb-3.5"
            }
          >
            WHO WILL BE THE FITTEST ON MARS ?
          </div>
          <div className={"text-accent font-extrabold"}>
            JULY 25/26/27TH 2025
          </div>
        </div>
        <div className={"flex items-center gap-3.5 "}>
          <RegisterButton />
          <Button variant={"outline"}>DISCOVER</Button>
        </div>
      </div>
    </div>
  );
};
/* Text */
