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
          <SubTitle>TAKE PARTS</SubTitle>
          <MainTitle>VOLUNTEERS</MainTitle>
        </Title>
        <p className={"text-grayMT text-sm lg:text-base"}>
          We need your energy, passion, and team spirit to make our CrossFit
          competition an unforgettable event! Whether you&#39;re a sports
          enthusiast, someone who loves challenges, or just looking to get
          involved in a rewarding experience, your help is invaluable.
        </p>
        <p className={"text-grayMT text-sm lg:text-base"}>
          By dedicating just one to three days of your time, you&#39;ll have the
          chance to be at the heart of the action, support inspiring athletes,
          and contribute to organizing an event where effort and camaraderie
          reign supreme. Join us, meet new people, and discover the incredible
          world of CrossFit!
        </p>
        <p className={"text-grayMT text-sm lg:text-lg"}>
          Together, we can make a difference !
        </p>
        <div className={"gap-4 hidden lg:flex"}>
          <Link href={"/volunteers/contact"}>
            <Button variant={"gradient"}>BECOME VOLUNTEER</Button>
          </Link>
          {/*<Button variant={"outline"}>LEARN MORE</Button>*/}
        </div>
      </div>
      <div className="lg:w-1/2  justify-center items-center grid grid-cols-2 gap-4 self-stretch">
        <div className={"self-stretch relative"}>
          <Image
            src={"/img/volunteer1.jpg"}
            alt={"volunteer1"}
            fill
            className={"border border-[#3E495D]  object-cover"}
          />
        </div>
        <div className={"self-stretch relative min-h-[237px]"}>
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
            BECOME VOLUNTEER
          </Button>
        </Link>
        {/*<Button variant={"outline"}>LEARN MORE</Button>*/}
      </div>
    </div>
  );
}
