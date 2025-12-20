import { LogoMT } from "@/components/mt24/logo-MT";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div
      className={
        "py-8 px-5 lg:py-12 lg:px-10 xl:px-20  border-gradient border-b-0 border-l-0 border-r-0 flex flex-col gap-8 lg:gap-10"
      }
    >
      <div className={"flex flex-col gap-8 lg:flex-row"}>
        <div className={"flex flex-col gap-3.5 w-[341px]"}>
          <LogoMT showText={true} />
          <div className={"text-sm text-gray-500 lg:text-base"}>
            <div>Massilia Barbell Club</div>
            <div>2 impasses Paradou</div>
            <div>13009 Marseille</div>
          </div>
          <div className={"flex gap-1.5 font-bold items-center"}>
            <div>
              <Image
                src={"/img/mail.png"}
                alt={"mail"}
                width={18}
                height={18}
              />
            </div>
            marseille.throwdown@gmail.com
          </div>
        </div>

        <div
          className={
            "grid grid-cols-2 lg:grid-cols-3 gap-5 flex-grow lg:justify-items-center"
          }
        >
          <div className={"flex flex-col gap-3.5"}>
            <div className={"font-bold"}>COMPETITION</div>
            <div className={"text-grayMT"}>
              <Link href={""}>Qualifications</Link>
            </div>
            <div className={"text-grayMT"}>
              <Link href={"/volunteers/contact"}>Volunteers</Link>
            </div>
            <div className={"text-grayMT"}>
              <Link href={"/partners/contact"}>Partners</Link>
            </div>
          </div>
          <div className={"flex flex-col gap-3.5"}>
            <div className={"font-bold"}>SOCIAL NETWORK</div>
            <div className={"text-grayMT"}>
              <Link
                href={"https://www.youtube.com/@marseillethrowdown1845"}
                target={"_blank"}
              >
                Youtube
              </Link>
            </div>
            <div className={"text-grayMT"}>
              <Link
                href={"https://www.instagram.com/marseille.throwdown/"}
                target={"_blank"}
              >
                Instagram
              </Link>
            </div>
            <div className={"text-grayMT"}>
              <Link
                href={"https://www.facebook.com/marseille.throwdown"}
                target={"_blank"}
              >
                Facebook
              </Link>
            </div>
          </div>
          <div className={"flex flex-col gap-3.5"}>
            <div className={"font-bold"}>HELP</div>
            <div className={"text-grayMT"}>
              <Link
                href={"https://marseille-throwdown.on.spiceworks.com/portal"}
                target={"_blank"}
              >
                Help Center
              </Link>
            </div>
            <div className={"text-grayMT"}>
              <Link href={"/contact"}>Contact</Link>
            </div>
            {/*Todo*/}
            {/*<div className={"text-grayMT"}>*/}
            {/*  <Link href={""}>Terms of service</Link>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
      <div className={"w-full border-gradient-light h-[1px]"} />
      <div>
        <p className={"text-grayMT text-xs lg:text-sm"}>
          © 2025 Marseille Throwdown. All rights reserved.
        </p>
      </div>
    </div>
  );
};
