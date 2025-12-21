import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/mt24/title";
import { SubTitle } from "@/components/mt24/sub-title";
import { MainTitle } from "@/components/mt24/main-title";
import Link from "next/link";
import { RegisterButton } from "@/components/mt24/register-button";

export const LandingBottom = () => {
  return (
    <div className={"relative"}>
      <div
        className={
          "hidden lg:block z-10 h-full w-full absolute top-0 left-0 bg-white"
        }
        style={{
          background:
            "linear-gradient(90deg, #0E1010 0%, rgba(14, 16, 16, 0.884374) 42.18%, rgba(14, 16, 16, 0) 100%)",
        }}
      />
      <Image
        src={"/img/footer.jpg"}
        alt={"landing"}
        width={3840}
        height={2160}
        className={
          "h-[636px] lg:h-[368px] min-w-full w-auto object-cover lg:object-[0px,-220px] xl:object-[0px,-420px] 2xl:object-[0px,-620px] "
        }
        priority
      />

      <div
        className={
          "z-20 absolute left-5 lg:left-10 xl:left-20 top-14 lg:top-16 xl:top-20 flex flex-col gap-11"
        }
      >
        <div className={"flex flex-col"}>
          <Title>
            <SubTitle>IN FRANCE THIS SUMMER</SubTitle>
            <MainTitle>WANT TO PARTICIPATE ?</MainTitle>
          </Title>
        </div>
        <div className={"flex items-center gap-3.5"}>
          <RegisterButton />
          <Link href={"/volunteers/contact"} className={"w-full"}>
            <Button variant={"outline"}>JOIN THE TEAM</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
