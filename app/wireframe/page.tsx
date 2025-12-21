export default function MarseilleThrowdownWireframe() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 gap-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          International Fitness Showdown
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Summer 2026 — Marseille
        </p>
        <p className="text-sm md:text-base text-gray-400">
          3 days • 24 categories • 700+ athletes
        </p>
        <button className="mt-4 px-8 py-4 bg-red-600 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition">
          REGISTER NOW
        </button>
      </section>

      {/* ENTRY POINTS */}
      <section className="py-20 px-6 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { title: "I'm an Athlete", highlight: true },
          { title: "I'm a Spectator" },
          { title: "I want to Volunteer" },
        ].map((item) => (
          <div
            key={item.title}
            className={`p-8 rounded-2xl border text-center cursor-pointer transition ${
              item.highlight
                ? "border-red-600 bg-red-600/10"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400 mt-2">Start here</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About the Competition</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
          <li>3 days of competition</li>
          <li>Online qualification phase</li>
          <li>Onsite final in Marseille</li>
          <li>Elite & community divisions</li>
          <li>International athletes</li>
        </ul>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 bg-white/5">
        <h2 className="text-3xl font-bold text-center mb-10">
          Categories & Levels
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Elite", "RX", "Scaled", "Masters", "Teens", "Teams"].map((cat) => (
            <div key={cat} className="p-6 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold">{cat}</h3>
              <p className="text-sm text-gray-400 mt-2">Who it’s for</p>
              <button className="mt-4 text-red-500">View details →</button>
            </div>
          ))}
        </div>
      </section>

      {/* SEASON OVERVIEW */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Season Overview</h2>
        <div className="grid md:grid-cols-4 gap-6 text-gray-300">
          <div>Online Qualifiers</div>
          <div>Score Submission</div>
          <div>Final Announcement</div>
          <div>Onsite Final — Marseille</div>
        </div>
        <button className="mt-10 px-8 py-4 bg-red-600 rounded-2xl text-lg font-semibold">
          START QUALIFIERS
        </button>
      </section>

      {/* VENUE */}
      <section className="py-20 px-6 bg-white/5 text-center">
        <h2 className="text-3xl font-bold mb-6">Marseille Experience</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Train, compete and perform between the iconic Palais des Sports and
          the Prado beaches.
        </p>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">They are part of the show</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300">
          <div>700+ Athletes</div>
          <div>24 Categories</div>
          <div>100+ Volunteers</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white/5 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Athletes FAQ</h2>
        <ul className="space-y-4 text-gray-300">
          <li>Who can compete?</li>
          <li>How many workouts?</li>
          <li>How are scores validated?</li>
          <li>What happens if I qualify?</li>
        </ul>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Your season starts now</h2>
        <button className="px-10 py-5 bg-red-600 rounded-2xl text-xl font-semibold shadow-lg">
          REGISTER NOW
        </button>
      </section>
    </main>
  );
}
