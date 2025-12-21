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
  const points = [
    { title: "3 Days of Competition", desc: "Intense show and challenge" },
    { title: "Online Qualifiers", desc: "Feb 14 - Mar 31" },
    { title: "Onsite Final", desc: "Marseille, Summer 2026" },
    { title: "24 Categories", desc: "From Elite to Community" },
    { title: "International Event", desc: "Athletes from all over the world" },
    { title: "700+ Athletes", desc: "Joining the battle on Mars" },
  ];

  return (
    <div id={"about"} className="py-24 px-6 max-w-7xl mx-auto">
      <Title className={"text-center mb-20"}>
        <Title.subTitle>Overview</Title.subTitle>
        <Title.mainTitle>About the Competition</Title.mainTitle>
      </Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {points.map((point) => (
          <div
            key={point.title}
            className="flex flex-col items-center text-center gap-6 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
              <span className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.6)]" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {point.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {point.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
