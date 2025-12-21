import { Title } from "@/components/mt24/title";
import Image from "next/image";

export const LandingSocialProof = () => {
  const stats = [
    { label: "Athletes", value: "700+" },
    { label: "Categories", value: "24" },
    { label: "Volunteers", value: "100+" },
  ];

  return (
    <div id={"social"} className={" relative"}>
      <div className={"absolute inset-0"}>
        <Image
          src={"/img/mountain.png"}
          alt={"moutain"}
          className={"object-cover object-bottom "}
          fill
        />
      </div>
      <div className={"absolute inset-0 blue-gradient object-cover z-10"} />

      <section className="relative py-32 px-6 max-w-7xl mx-auto text-center z-50">
        <Title className="mb-24">
          <Title.subTitle>The Community</Title.subTitle>
          <Title.mainTitle>They are part of the show</Title.mainTitle>
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col gap-4 hover:border-primary/40 hover:bg-white/[0.07] transition-all group shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              <span className="text-6xl font-strasua text-primary group-hover:scale-110 transition-transform block">
                {stat.value}
              </span>
              <span className="text-xl text-gray-300 font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/*<div className="grid md:grid-cols-2 gap-10 text-left">*/}
        {/*  <div className="p-12 rounded-[3rem] bg-primary/5 border border-primary/10 italic relative group hover:bg-primary/10 transition-colors">*/}
        {/*    <span className="text-8xl text-primary/10 absolute top-6 left-8 font-serif">*/}
        {/*      “*/}
        {/*    </span>*/}
        {/*    <p className="text-xl text-gray-200 relative z-10 mb-10 leading-relaxed">*/}
        {/*      The atmosphere in Marseille is unlike any other competition.*/}
        {/*      Performing on the beach and then in the arena is a dream for any*/}
        {/*      athlete.*/}
        {/*    </p>*/}
        {/*    <div className="flex items-center gap-6 relative z-10">*/}
        {/*      <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">*/}
        {/*        <Image*/}
        {/*          src="/img/ballon-icon.svg"*/}
        {/*          alt="athlete"*/}
        {/*          width={32}*/}
        {/*          height={32}*/}
        {/*          className="opacity-50"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div>*/}
        {/*        <p className="text-lg font-bold text-white uppercase tracking-wider">*/}
        {/*          Elite Athlete*/}
        {/*        </p>*/}
        {/*        <p className="text-sm text-primary font-bold">2024 Finalist</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="p-12 rounded-[3rem] bg-secondary/5 border border-secondary/10 italic relative group hover:bg-secondary/10 transition-colors">*/}
        {/*    <span className="text-8xl text-secondary/10 absolute top-6 left-8 font-serif">*/}
        {/*      “*/}
        {/*    </span>*/}
        {/*    <p className="text-xl text-gray-200 relative z-10 mb-10 leading-relaxed">*/}
        {/*      Being a volunteer at MT is being at the heart of the action. The*/}
        {/*      team spirit is incredible, and you make friends for life.*/}
        {/*    </p>*/}
        {/*    <div className="flex items-center gap-6 relative z-10">*/}
        {/*      <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">*/}
        {/*        <Image*/}
        {/*          src="/img/ballon-icon.svg"*/}
        {/*          alt="volunteer"*/}
        {/*          width={32}*/}
        {/*          height={32}*/}
        {/*          className="opacity-50"*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*      <div>*/}
        {/*        <p className="text-lg font-bold text-white uppercase tracking-wider">*/}
        {/*          Volunteer*/}
        {/*        </p>*/}
        {/*        <p className="text-sm text-secondary font-bold">Judge Crew</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>
    </div>
  );
};
