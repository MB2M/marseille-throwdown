import { Banner } from "@/components/mt24/banner";
import Image from "next/image";
import dynamic from "next/dynamic";
const Animation = dynamic(() => import("@/components/mt24/animation"), {
  ssr: false,
});
const partners = [
  {
    img: "cfmassilia.png",
    width: 60,
    widthSmall: 42,
  },
  {
    img: "tako-white.png",
    width: 105,
    widthSmall: 74,
  },
  {
    img: "crossliftor-white.png",
    width: 145,
    widthSmall: 102,
  },
  { img: "thorus.png", width: 253, widthSmall: 177 },
  { img: "bdr.svg", width: 186, widthSmall: 130 },
];

export function PartnersBanner() {
  return (
    <Banner>
      <div className={"flex flex-col  lg:flex-row relative items-stretch"}>
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
        <div className={"w-[1px] bg-white hidden lg:block"} />
        <div className={"overflow-hidden lg:ml-1 py-1.5"}>
          <Animation elements={partners} />
        </div>
      </div>
    </Banner>
  );
}
