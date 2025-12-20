import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const SeasonOverview = () => {
  return (
    <div className={" relative"}>
      <div className={"absolute inset-0"}>
        <Image
          src={"/img/mountain.png"}
          alt={"moutain"}
          className={"object-cover object-bottom "}
          fill
        />
      </div>
      <div className={"absolute inset-0 blue-gradient object-cover z-10"} />

      <div
        className={
          "flex flex-col gap-11 relative px-5 lg:px-10 xl:px-20 py-14 lg:py-16 xl:py-20 items-center justify-center z-10"
        }
      >
        <Title className={"text-center"}>
          <Title.subTitle>2026</Title.subTitle>
          <Title.mainTitle>SEASON OVERVIEW</Title.mainTitle>
        </Title>
        <div
          className={
            "flex flex-col gap-6 lg:gap-8 items-center justify-center lg:flex-row w-full "
          }
        >
          <div
            className={"w-full max-w-[520px] rounded-[10px] overflow-hidden"}
          >
            <div
              className={"py-3 px-6 bg-primary font-extrabold text-background"}
            >
              QUALIFICATIONS
            </div>
            <div className={"flex flex-col bg-background py-4 px-6 gap-5"}>
              <div className="flex flex-col gap-1">
                <div className={"text-foreground font-extrabold text-lg"}>
                  ONLINE QUALIFIERS
                </div>
                <div className={"text-primary font-bold text-sm"}>
                  FEB 14 - MAR 31
                </div>
              </div>
              <p className={"text-sm lg:text-base text-grayMT"}>
                3 individual workouts
                <p>
                  Workouts will be revealed during the first week of the season.
                  Submit your scores before March 31 and secure your chance to
                  reach the Final.
                </p>
              </p>
            </div>
          </div>
          <div
            className={"w-full max-w-[520px] rounded-[10px] overflow-hidden"}
          >
            <div
              className={
                "py-3 px-6 bg-secondary font-extrabold text-background"
              }
            >
              FINALE
            </div>
            <div className={"flex flex-col bg-background py-4 px-6 gap-5"}>
              <div className="flex flex-col gap-1">
                <div className={"text-foreground font-extrabold text-lg"}>
                  ONSITE FINAL — MARSEILLE
                </div>
                <div className={"text-secondary font-bold text-sm"}>
                  JULY 31 - AUG 2
                </div>
              </div>
              <p className={"text-sm lg:text-base text-grayMT"}>
                <p>Earn your ticket during the qualification phase.</p>
                <p>
                  Three days of intense competition at the Palais des Sports of
                  Marseille and on the iconic Prado beaches.
                </p>
              </p>
            </div>
          </div>
        </div>
        <Link
          href={"https://competitioncorner.net/events/mt25-qualifs/register"}
          target={"_blank"}
        >
          <Button variant={"ghost"} className={"bg-foreground text-background"}>
            START THE JOURNEY
          </Button>
        </Link>
      </div>
    </div>
  );
};
