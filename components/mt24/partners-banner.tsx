import { Banner } from "@/components/mt24/banner";
import Image from "next/image";

import Animation from "@/components/mt24/animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const partners = [
  {
    img: "cfmassilia.png",
    width: 70,
    widthSmall: 50,
  },
  {
    img: "crossliftor-white.png",
    width: 145,
    widthSmall: 102,
  },
  {
    img: "tako-logo-name-hori.png",
    width: 140,
    widthSmall: 105,
  },
  // { img: "thorus.png", width: 253, widthSmall: 177 },
  { img: "bdr.png", width: 186, widthSmall: 130 },
  { img: "bleuet.svg", width: 95, widthSmall: 63 },
  // { img: "velites_logo_letras_WHITE.avif", width: 186, widthSmall: 130 },
  { img: "mbc.jpeg", width: 75, widthSmall: 50 },
  // { img: "fitaid.webp", width: 186, widthSmall: 130 },
];

export default function PartnersBanner() {
  return (
    <Banner>
      <div className={"flex flex-col  lg:flex-row relative items-stretch"}>
        <div className={"flex items-center justify-center lg:flex-col gap-1"}>
          <div
            className={
              "font-strasua text-lg lg:text-xl flex items-center gap-2 px-10 justify-center leading-8"
            }
          >
            PARTNERS
            <Image
              src={"/img/top-right-arrow.png"}
              alt={"arrow"}
              width={20}
              height={20}
            />
          </div>
          <Link href={"/partners/contact"} className={"my-1"}>
            <Button
              variant={"outline"}
              className={"bg-transparent"}
              size={"sm"}
            >
              Become Partner
            </Button>
          </Link>
        </div>
        <div className={"w-[1px] bg-white hidden lg:block"} />
        <div className={"overflow-hidden lg:ml-1 py-1.5"}>
          <Animation elements={partners} />
        </div>
      </div>
    </Banner>
  );
}
