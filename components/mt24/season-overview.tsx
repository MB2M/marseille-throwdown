import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SeasonOverview = () => {
  return (
    <div className={" bg-gradient-full-vertical  bg-repeat"}>
      <div
        className={
          "flex flex-col gap-11 relative px-5 lg:px-10 xl:px-20 py-14 lg:py-16 xl:py-20 items-center justify-center z-10"
        }
      >
        <Title className={"text-center"}>
          <Title.subTitle>2025</Title.subTitle>
          <Title.mainTitle>SEASON OVERVIEW</Title.mainTitle>
        </Title>
        <div
          className={
            "flex flex-col gap-6 lg:gap-8 items-center justify-center lg:flex-row w-full"
          }
        >
          <div className={"w-full max-w-[520px]"}>
            <div className={"py-3 px-6 bg-primary font-extrabold"}>
              QUALIFICATIONS
            </div>
            <div className={"flex flex-col bg-background py-4 px-6 gap-5"}>
              <div className="flex flex-col gap-1">
                <div className={"text-foreground font-extrabold text-lg"}>
                  ONLINE QUALIFICATION PHASE
                </div>
                <div className={"text-primary font-bold text-sm"}>
                  JAN 24 - FEB 14
                </div>
              </div>
              <p className={"text-sm lg:text-base text-grayMT"}>
                From 1 to 3 workouts of we be required depending the category.
                Workouts will be revealed during the first week. You will be
                able to submit your scores until the February 14th.
              </p>
            </div>
          </div>
          <div className={"w-full max-w-[520px] "}>
            <div className={"py-3 px-6 bg-secondary font-extrabold"}>
              FINALE
            </div>
            <div className={"flex flex-col bg-background py-4 px-6 gap-5"}>
              <div className="flex flex-col gap-1">
                <div className={"text-foreground font-extrabold text-lg"}>
                  ONSITE FINALE AT MARSEILLE
                </div>
                <div className={"text-secondary font-bold text-sm"}>
                  JULY 25 - JULY 27
                </div>
              </div>
              <p className={"text-sm lg:text-base text-grayMT"}>
                Win your ticket during the qualification phase and experience 3
                days of competition at the Palais des Sports of Marseille and on
                the Prado beaches.
              </p>
            </div>
          </div>
        </div>
        <Link
          href={"https://competitioncorner.net/events/mt25-qualifs/register"}
          target={"_blank"}
        >
          <Button variant={"ghost"} className={"bg-foreground text-background"}>
            REGISTER
          </Button>
        </Link>
      </div>
    </div>
  );
};
