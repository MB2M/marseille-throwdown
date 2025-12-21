import { Title } from "@/components/mt24/title";

export const LandingFAQ = () => {
  const faqs = [
    {
      question: "Who can compete?",
      answer:
        "Anyone! We have categories for everyone: Elite, Intermediate, Scaled, Masters (35+, 40+), Teens: Individuals and Teams (of 2 or 4).",
    },
    {
      question: "How do the Qualifiers work?",
      answer:
        "The online qualifiers consist of 2 workouts. You have several weeks to perform them and submit your scores on Competition Corner.",
    },
    {
      question: "How are scores validated?",
      answer:
        "All qualifier scores must be supported by a video recording (following the standards provided).",
    },
    {
      question: "What is the rule for Masters and Teens?",
      answer:
        "Your age category is determined by your age on the first day of the onsite final (July 31, 2026).",
    },
    {
      question: "When is the Onsite Final?",
      answer:
        "The final takes place in Marseille from July 31 to August 2, 2026, at the Palais des Sports and the Prado beaches.",
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <Title className="text-center mb-20">
          <Title.subTitle>Help Center</Title.subTitle>
          <Title.mainTitle>Athletes FAQ</Title.mainTitle>
        </Title>
        <div className="grid gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-primary/30 transition-all group"
            >
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {faq.question}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
