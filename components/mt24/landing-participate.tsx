import { RegisterButton } from "@/components/mt24/register-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LandingParticipate() {
  const items = [
    {
      title: "I'm an Athlete",
      desc: "Start your journey",
      highlight: true,
      cta: <RegisterButton />,
    },
    {
      title: "I'm a Spectator",
      desc: "Experience the show live",
      highlight: false,
      cta: (
        <Link href="/ticketing">
          <Button variant="outline" className="rounded-2xl px-8" disabled>
            MORE TO COME
          </Button>
        </Link>
      ),
    },
    {
      title: "I want to Volunteer",
      desc: "Join the community",
      highlight: false,
      cta: (
        <Link href="/volunteers">
          <Button variant="outline" className="rounded-2xl px-8">
            JOIN THE TEAM
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <section
      id={"participate"}
      className="py-24 px-6 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      {items.map((item) => (
        <div
          key={item.title}
          className={`p-10 rounded-[2rem] border text-center transition flex flex-col items-center gap-6 group ${
            item.highlight
              ? "border-primary/50 bg-primary/10 shadow-[0_0_30px_rgba(var(--primary),0.1)]"
              : "border-white/10 hover:border-white/30 bg-white/5"
          }`}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-strasua group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 font-medium tracking-wide">
              {item.desc}
            </p>
          </div>
          <div className="mt-2 w-full">{item.cta}</div>
        </div>
      ))}
    </section>
  );
}
