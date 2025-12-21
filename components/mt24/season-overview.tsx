import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const SeasonOverview = () => {
  return (
    <div id={"season"} className={" relative"}>
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
          "flex flex-col gap-14 relative px-5 lg:px-10 xl:px-20 py-24 lg:py-32 items-center justify-center z-10 max-w-7xl mx-auto"
        }
      >
        <Title className={"text-center"}>
          <Title.subTitle>2026</Title.subTitle>
          <Title.mainTitle>SEASON OVERVIEW</Title.mainTitle>
        </Title>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full"
          }
        >
          <div
            className={
              "w-full rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-primary/20 transition-all group"
            }
          >
            <div
              className={
                "py-4 px-6 bg-primary font-extrabold text-background text-center tracking-widest"
              }
            >
              QUALIFICATIONS
            </div>
            <div
              className={
                "flex flex-col bg-background/80 backdrop-blur-sm py-8 px-8 gap-6 flex-grow"
              }
            >
              <div className="flex flex-col gap-2">
                <div
                  className={
                    "text-foreground font-extrabold text-xl group-hover:text-primary transition-colors"
                  }
                >
                  ONLINE QUALIFIERS
                </div>
                <div
                  className={"text-primary font-bold text-sm tracking-wider"}
                >
                  FEB 14 - MAR 31
                </div>
              </div>
              <div className={"text-base text-grayMT leading-relaxed"}>
                2 individual workouts
                <p className="mt-2">
                  Workouts revealed during the first week. Submit scores before
                  March 31.
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              "w-full rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-accent/20 transition-all group"
            }
          >
            <div
              className={
                "py-4 px-6 bg-accent font-extrabold text-background text-center tracking-widest"
              }
            >
              VALIDATION
            </div>
            <div
              className={
                "flex flex-col bg-background/80 backdrop-blur-sm py-8 px-8 gap-6 flex-grow"
              }
            >
              <div className="flex flex-col gap-2">
                <div
                  className={
                    "text-foreground font-extrabold text-xl group-hover:text-accent transition-colors"
                  }
                >
                  SCORE REVIEW
                </div>
                <div className={"text-accent font-bold text-sm tracking-wider"}>
                  APR 1 - APR 14
                </div>
              </div>
              <div className={"text-base text-grayMT leading-relaxed"}>
                <p>
                  The organization reviews all submitted scores and videos to
                  ensure standards are met.
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              "w-full rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-white/20 transition-all group"
            }
          >
            <div
              className={
                "py-4 px-6 bg-white/20 font-extrabold text-white text-center tracking-widest"
              }
            >
              RANKING
            </div>
            <div
              className={
                "flex flex-col bg-background/80 backdrop-blur-sm py-8 px-8 gap-6 flex-grow"
              }
            >
              <div className="flex flex-col gap-2">
                <div
                  className={
                    "text-foreground font-extrabold text-xl group-hover:text-white transition-colors"
                  }
                >
                  LEADERBOARD
                </div>
                <div
                  className={"text-gray-400 font-bold text-sm tracking-wider"}
                >
                  MID-APRIL
                </div>
              </div>
              <div className={"text-base text-grayMT leading-relaxed"}>
                <p>
                  Publication of the definitive leaderboard and sending out
                  invitations for the Final.
                </p>
              </div>
            </div>
          </div>

          <div
            className={
              "w-full rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-secondary/20 transition-all group"
            }
          >
            <div
              className={
                "py-4 px-6 bg-secondary font-extrabold text-background text-center tracking-widest"
              }
            >
              FINALE
            </div>
            <div
              className={
                "flex flex-col bg-background/80 backdrop-blur-sm py-8 px-8 gap-6 flex-grow"
              }
            >
              <div className="flex flex-col gap-2">
                <div
                  className={
                    "text-foreground font-extrabold text-xl group-hover:text-secondary transition-colors"
                  }
                >
                  ONSITE FINAL
                </div>
                <div
                  className={"text-secondary font-bold text-sm tracking-wider"}
                >
                  JULY 31 - AUG 2
                </div>
              </div>
              <div className={"text-base text-grayMT leading-relaxed"}>
                <p>
                  Three days of competition at the Palais des Sports and Prado
                  beaches.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link
          href={"https://competitioncorner.net/events/mt26-qualifs/register"}
          target={"_blank"}
          className="mt-4"
        >
          <Button
            variant={"gradient"}
            size="lg"
            className={"px-12 py-7 text-xl"}
          >
            REGISTER NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};
