import { MainTitle } from "@/components/mt24/main-title";
import { SubTitle } from "@/components/mt24/sub-title";
import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function LandingVolunteers() {
  return (
    <div
      id={"volunteer"}
      className="py-14 lg:pt-16 xl:pt-20 px-5 lg:px-20 flex justify-center items-center flex-col gap-12 lg:flex-row lg:gap-20"
    >
      <div className="lg:w-1/2 flex flex-col gap-6">
        <Title>
          <SubTitle>TAKE PART</SubTitle>
          <MainTitle>VOLUNTEERS</MainTitle>
        </Title>
        <div className="flex flex-col gap-4 text-grayMT text-sm lg:text-base">
          <p className={"italic"}>Be part of the team</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Join the 100+ volunteers making the magic happen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>1 to 3 days of immersion in an international event</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Experience the intensity behind the scenes</span>
            </li>
          </ul>
          <p className={"font-bold mt-2"}>
            More than helping — you’re part of the show.
          </p>
        </div>

        <div className={"gap-4 hidden lg:flex"}>
          <Link href={"/volunteers/contact"}>
            <Button variant={"gradient"} className="px-8">
              {" "}
              JOIN THE TEAM
            </Button>
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
