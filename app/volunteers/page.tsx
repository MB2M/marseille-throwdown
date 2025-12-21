import Image from "next/image";
import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VolunteersPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      {/* HERO with background image */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
        {/* HERO IMAGE */}
        <Image
          src="/img/volunteer_hero.jpg"
          alt="Marseille Throwdown volunteers"
          fill
          priority
          className="object-cover opacity-50 transition-transform duration-1000 scale-105"
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(14, 12, 16, 0) 0%, rgba(14, 12, 16, 0.4) 45%, #0E0C10 100%)",
          }}
        />
        <div className="relative z-20 max-w-4xl flex flex-col gap-8 items-center">
          <Title className="items-center">
            <Title.subTitle>JOIN THE CREW</Title.subTitle>
            <Title.mainTitle>JOIN THE TEAM</Title.mainTitle>
          </Title>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl">
            Be part of the heart of the competition. Without you, the show
            doesn&#39;t exist.
          </p>
          <div className="scale-125 mt-4">
            <Link href="/volunteers/contact">
              <Button
                variant="gradient"
                size="lg"
                className="rounded-2xl px-10"
              >
                APPLY NOW
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-24 lg:gap-32 pb-32">
        {/* WHY VOLUNTEER + IMAGE */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <Title>
              <Title.subTitle>Community</Title.subTitle>
              <Title.mainTitle>Why volunteering?</Title.mainTitle>
            </Title>
            <p className="text-gray-400 text-lg leading-relaxed">
              Volunteers are the backbone of the Marseille Throwdown. By joining
              the team, you step behind the scenes of a major international
              fitness competition and live the event from the inside.
            </p>
            <ul className="space-y-4">
              {[
                "Be part of a passionate and welcoming team",
                "Support elite & community athletes",
                "Experience the event from the inside",
                "Get exclusive staff gear and meals",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <span className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.6)]" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[450px] rounded-[3rem] overflow-hidden border-gradient2 group">
            <Image
              src="/img/volunteer_2.jpg"
              alt="Volunteer team Marseille Throwdown"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </section>

        {/* ROLES */}
        <section className="py-24 px-6 bg-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <Title className="text-center mb-16">
              <Title.subTitle>The Mission</Title.subTitle>
              <Title.mainTitle>Volunteer roles</Title.mainTitle>
            </Title>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Judges",
                  img: "/img/volunteer_judge.jpg",
                  desc: "Ensure fair play and support athletes on the competition floor. Knowledge of standards is required.",
                },
                {
                  title: "Builds",
                  img: "/img/volunteer_build.jpg",
                  desc: "Equipment setup, transitions and smooth event operations. The engine behind the scenes.",
                  offset: 25,
                },
                {
                  title: "Athlete Support",
                  img: "/img/volunteer_welcome.jpg",
                  desc: "Welcome, guide and assist athletes throughout the event. Ensure the best experience for them.",
                },
              ].map((role) => (
                <div
                  key={role.title}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 transition-all duration-300 hover:border-primary/50"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={role.img}
                      alt={role.title}
                      fill
                      className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
                      style={{ objectPosition: `0% ${role.offset}%` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col gap-4">
                    <h3 className="text-2xl font-strasua text-white group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-medium">
                      {role.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMITMENT + IMAGE */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[450px] rounded-[3rem] overflow-hidden border-gradient2 group lg:order-2">
            <Image
              src="/img/volunteer_1.jpg"
              alt="Volunteer helping athlete"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 object-[0%_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="flex flex-col gap-8 lg:order-1">
            <Title>
              <Title.subTitle>Organization</Title.subTitle>
              <Title.mainTitle>Flexible commitment</Title.mainTitle>
            </Title>
            <p className="text-gray-300 text-xl leading-relaxed">
              You can volunteer for <strong>one to three days</strong>,
              depending on your availability. We provide everything you need to
              live an unforgettable experience.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Staff Gear", value: "T-Shirt & Cap" },
                { label: "Meals", value: "Included" },
                { label: "Drinks", value: "Unlimited" },
                { label: "Experience", value: "100% Unique" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-white font-extrabold text-lg">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <Title className="text-center mb-16">
              <Title.subTitle>Life</Title.subTitle>
              <Title.mainTitle>Life behind the scenes</Title.mainTitle>
            </Title>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 1, 2, 1, 2, 1, 2].map((imgNum, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden border-gradient2 group"
                >
                  <Image
                    src={`/img/volunteer${imgNum}.jpg`}
                    alt="Marseille Throwdown volunteers"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
            <Title>
              <Title.subTitle>Ready?</Title.subTitle>
              <Title.mainTitle>Ready to be part of the show?</Title.mainTitle>
            </Title>
            <div className="scale-125">
              <Link href="/volunteers/contact">
                <Button variant="gradient" size="lg" className="rounded-2xl">
                  APPLY AS A VOLUNTEER
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
