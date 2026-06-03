import { Title } from "@/components/mt24/title";
import { Car, Train, MapPin, Info } from "lucide-react";

export const LandingPracticalInfo = () => {
  const infos = [
    {
      icon: <MapPin className="text-primary" />,
      title: "Venues",
      items: [
        "Palais des Sports: 81 Rue Raymond Teisseire, 13009 Marseille",
        "Prado Beaches: Avenue du Prado, 13008 Marseille",
      ],
    },
    {
      icon: <Train className="text-primary" />,
      title: "Public Transport",
      items: [
        "Palais des Sports: Metro M2 (Sainte-Marguerite Dromel)",
        "Prado: Bus 19 or 83 from the Old Port",
      ],
    },
    {
      icon: <Car className="text-primary" />,
      title: "Parking",
      items: [
        "Palais des Sports: Public parking available nearby",
        "Prado: Multiple public parking lots along the coast",
      ],
    },
    {
      icon: <Info className="text-primary" />,
      title: "Spectators",
      items: [
        "Tickets available now",
        "Free access to the beach events",
        "Food & drink village onsite",
      ],
    },
  ];

  return (
    <section id="practical" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <Title className="text-center mb-20">
          <Title.subTitle>Logistics</Title.subTitle>
          <Title.mainTitle>Practical Info</Title.mainTitle>
        </Title>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infos.map((info) => (
            <div
              key={info.title}
              className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/30 transition-all group flex flex-col items-center text-center"
            >
              <div className="mb-8 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                {info.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors">
                {info.title}
              </h3>
              <ul className="space-y-3 w-full">
                {info.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-400 leading-relaxed font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
