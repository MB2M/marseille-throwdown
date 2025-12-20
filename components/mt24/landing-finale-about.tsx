import { Title } from "@/components/mt24/title";
import Image from "next/image";

const Items = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={"flex flex-col gap-4 items-center lg:w-[405px] w-full"}>
      <Image
        src="/img/ballon-icon.svg"
        alt="1"
        width={30}
        height={30}
        className={"text-foreground"}
      />
      <div className={"flex flex-col gap-1.5 items-center"}>
        <div className={"lg:text-lg text-foreground font-extrabold leading-6"}>
          {title}
        </div>
        <div
          className={"text-sm lg:text-base text-grayMT  leading-5 text-center"}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export const LandingFinaleAbout = () => {
  return (
    <div className="py-14 lg:pt-16 xl:pt-20 px-5 lg:px-10 xl:px-20 flex  flex-col gap-9 lg:gap-16 items-center ">
      <Title className={"text-center"}>
        <Title.subTitle>About</Title.subTitle>
        <Title.mainTitle>Final Show</Title.mainTitle>
      </Title>
      {/*<div>*/}
      {/*  <Items title={"3 days of competition"} description={""} />*/}
      {/*</div>*/}
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-2  justify-center gap-9 lg:gap-20"
        }
      >
        <Items
          title={"3 days of competition"}
          description={"Three days. One goal. Total intensity."}
          // description={"To live an unforgettable experience"}
        />
        <Items
          title={"3 venues"}
          description={"Three venues. One legendary show."}
          // description={"Palais des sports de Marseille / Plages du Prado "}
        />
        {/*<Items title={"3 floors"} description={""} />*/}
      </div>
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-3 justify-center gap-9 lg:gap-20"
        }
      >
        <Items
          title={"24 categories"}
          description={"24 categories. Every level. Every style."}
        />
        <Items
          title={"700+ finalists"}
          description={"700+ finalists. One ultimate showdown."}
        />
        <Items
          title={"A large dedicated team of volunteers"}
          description={"Powered by passion. Driven by people."}
        />
      </div>
    </div>
  );
};
