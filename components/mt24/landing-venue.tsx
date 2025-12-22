import { Title } from "@/components/mt24/title";
import Image from "next/image";

export const LandingVenue = () => {
  return (
    <section
      id="venue"
      className="py-24 px-6 bg-white/5 text-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <Title className="mb-12">
          <Title.subTitle>The Experience</Title.subTitle>
          <Title.mainTitle>Marseille Experience</Title.mainTitle>
        </Title>
        <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
          Train, compete and perform between the iconic Palais des Sports and
          the Prado beaches. Marseille offers a unique backdrop for an
          international fitness competition.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="relative h-80 md:h-[500px] rounded-[2.5rem] overflow-hidden border-gradient2 group">
          <Image
            src="/img/MT_25_BG_4.jpg"
            alt="Marseille Palais des Sports"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent flex items-end p-10">
            <div className="flex flex-col items-start gap-2">
              <p className="text-3xl font-strasua text-white">
                Palais des Sports
              </p>
              <p className="text-primary font-bold tracking-widest uppercase text-sm">
                Main Arena • Finals
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-80 md:h-[500px] rounded-[2.5rem] overflow-hidden border-gradient2 group">
          <Image
            src="/img/beach.jpg"
            alt="Prado Beaches"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent flex items-end p-10">
            <div className="flex flex-col items-start gap-2">
              <p className="text-3xl font-strasua text-white">Prado Beaches</p>
              <p className="text-primary font-bold tracking-widest uppercase text-sm">
                Outdoor WODs • Marseille Sun
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
