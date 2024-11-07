import { Banner } from "@/components/mt24/banner";
import Animation from "@/components/mt24/animation";

const partners = [
  {
    img: "TOULOUSE-THROWDOWN.jpg",
    width: 60,
    widthSmall: 42,
  },
  {
    img: "happy-master.jpeg",
    width: 60,
    widthSmall: 42,
  },
  {
    img: "Cannes.jpg",
    width: 60,
    widthSmall: 42,
  },
  { img: "carolo.jpg", width: 60, widthSmall: 42 },
];

export function CompetitionsBanner() {
  return (
    <Banner>
      <div className={"flex flex-col  lg:flex-row relative items-stretch"}>
        <div
          className={
            "font-strasua text-lg lg:text-xl flex items-center gap-2 px-10 justify-center leading-8"
          }
        >
          Linked Competitions
          {/*  <Image*/}
          {/*    src={"/img/top-right-arrow.png"}*/}
          {/*    alt={"arrow"}*/}
          {/*    width={20}*/}
          {/*    height={20}*/}
          {/*  />*/}
        </div>
        <div className={"w-[1px] bg-white hidden lg:block"} />
        <div className={"overflow-hidden lg:ml-1 py-1.5"}>
          <Animation elements={partners} />
        </div>
      </div>
    </Banner>
  );
}
