import { MainTitle } from "@/components/mt24/main-title";
import { SubTitle } from "@/components/mt24/sub-title";
import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function LandingVolunteers() {
  return (
    <div className="py-14 lg:pt-16 xl:pt-20 px-5 lg:px-20 flex justify-center items-center flex-col gap-12 lg:flex-row lg:gap-20">
      <div className="lg:w-1/2 flex flex-col gap-6">
        <Title>
          <SubTitle>TAKE PART</SubTitle>
          <MainTitle>VOLUNTEERS</MainTitle>
        </Title>
        <p className={"italic text-grayMT text-sm lg:text-base"}>
          Be part of theteam
        </p>
        <p className={"text-grayMT text-sm lg:text-base"}>
          We need{" "}
          <span className={"font-bold"}>energy, passion and team spirit</span>{" "}
          to make this event unforgettable.
        </p>
        <p className={"text-grayMT text-sm lg:text-base"}>
          Whether you’re a CrossFit enthusiast or simply looking for a unique
          experience, joining the volunteer team means stepping behind the
          scenes of a major competition.
        </p>
        <p className={"text-grayMT text-sm lg:text-base"}>
          Commit just <span className={"font-bold"}>one to three days</span>,
          support inspiring athletes, feel the intensity from the inside and
          share an incredible human adventure.
        </p>
        <p className={"text-grayMT text-sm lg:text-base font-bold "}>
          More than helping — you’re part of the show.
        </p>

        <div className={"gap-4 hidden lg:flex"}>
          <Link href={"/volunteers/contact"}>
            <Button variant={"gradient"}> JOIN THE TEAM</Button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2  justify-center items-center grid grid-cols-2 gap-4 self-stretch">
        <div className={"self-stretch relative rounded-[10px] overflow-hidden"}>
          <Image
            src={"/img/volunteer1.jpg"}
            alt={"volunteer1"}
            fill
            className={"border border-[#3E495D]  object-cover"}
          />
        </div>
        <div
          className={
            "self-stretch relative min-h-[237px] rounded-[10px] overflow-hidden"
          }
        >
          <Image
            src={"/img/volunteer2.jpg"}
            alt={"volunteer2"}
            fill
            className={"border border-[#3E495D] object-cover"}
          />
        </div>
      </div>
      <div className={" flex-col gap-4 lg:hidden flex w-full"}>
        <Link href={"/volunteers/contact"} className={"w-full"}>
          <Button variant={"gradient"} className={"w-full"}>
            JOIN THE TEAM
          </Button>
        </Link>
        {/*<Button variant={"outline"}>LEARN MORE</Button>*/}
      </div>
    </div>
  );
}
