"use client";

import { useState } from "react";
import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const categories = {
  individual: [
    {
      title: "Elite",
      levels: "Formats",
      imgPath: "/img/elite2.jpg",
      badge: "24 men | 12 women",
      description: "All athletes must be over 18 years old",
      topOffset: 20,
      subLevels: [
        { id: "129900", label: "Male" },
        { id: "129901", label: "Female" },
      ],
    },
    {
      title: "Teen",
      levels: "Formats",
      imgPath: "/img/teen.jpg",
      badge: "12 men | 6 women",
      description: "Athlete must be over 15 and under 18 years old",
      topOffset: 90,
      subLevels: [
        { id: "boy", label: "Boy" },
        { id: "girl", label: "Girl" },
      ],
    },
    {
      title: "Espoir",
      levels: "Formats",
      imgPath: "/img/espoir3.jpg",
      badge: "12 men | 6 women",
      description: "Athlete must be over 18 and under 22 years old",
      topOffset: 45,
      subLevels: [
        { id: "espoir-male", label: "Male" },
        { id: "espoir-female", label: "Female" },
      ],
    },
    {
      title: "Master",
      levels: "Multiple Ages",
      imgPath: "/img/master_35.jpg",
      badge: "12 men | 6 women",
      description: "Athlete must be over 35 years old",
      topOffset: -30,
      subLevels: [
        { id: "35 men", label: "35+ Men" },
        { id: "35 women", label: "35+ Women" },
        { id: "40 men", label: "40+ Men" },
        { id: "40 women", label: "40+ Women" },
      ],
    },
  ],
  team: [
    {
      title: "Elite",
      levels: "Formats",
      imgPath: "/img/team_elite.jpg",
      badge: "24 teams",
      description: "All athletes must be over 18 years old",
      topOffset: 0,
      subLevels: [{ id: "elite-team-4", label: "2 Men + 2 Women" }],
    },
    {
      title: "Intermediate",
      levels: "Multiple Formats",
      imgPath: "/img/team_inter_2.jpg",
      badge: "30 teams",
      description: "Various formats available (2+2 or 4 men)",
      topOffset: 0,
      subLevels: [
        { id: "inter-team-4-mixed", label: "2 Men + 2 Women" },
        { id: "inter-team-4-men", label: "4 Men" },
        { id: "inter-team-2-men", label: "2 Men" },
        { id: "inter-team-2-mixed", label: "1 Man + 1 Woman" },
      ],
    },
    {
      title: "Scaled",
      levels: "Multiple Formats",
      imgPath: "/img/team_scaled.jpg",
      badge: "36 teams",
      description: "Perfect for a first competition experience",
      topOffset: 0,
      subLevels: [
        { id: "scaled-team-4-mixed", label: "2 Men + 2 Women" },
        { id: "scaled-team-4-men", label: "4 Men" },
        { id: "scaled-team-2-men", label: "2 Men" },
        { id: "scaled-team-2-mixed", label: "1 Man + 1 Woman" },
      ],
    },
    {
      title: "Master",
      levels: "Multiple Formats",
      imgPath: "/img/team_scaled.jpg",
      badge: "36 teams",
      description: "Perfect for a first competition experience",
      topOffset: 0,
      subLevels: [
        { id: "master-team-75-2-men", label: "75+ 2 Men" },
        { id: "master-team-75-mixed", label: "75+ Man + 1 Woman" },
        { id: "master-team-85-2-men", label: "85+ 2 Men" },
        { id: "master-team-85-mixed", label: "85+ Man + 1 Woman" },
      ],
    },
  ],
};

export function LandingCategoriesV2() {
  const [activeTab, setActiveTab] = useState<"individual" | "team">(
    "individual",
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<{
    id: string;
    label: string;
  } | null>(null);

  const standards: Record<
    string,
    { requirements: string[]; notes?: string[] }
  > = {
    Elite: {
      requirements: [
        "Snatch: 100kg+ (Men) / 60kg+ (Women)",
        "Clean & Jerk: 130kg+ (Men) / 80kg+ (Women)",
        "Back Squat: 160kg+ (Men) / 100kg+ (Women)",
        "Strict Pull-ups: 15+ consecutive (Men) / 8+ consecutive (Women)",
        'Box Jump: 30" (Men) / 24" (Women)',
      ],
      notes: [
        "Available formats: Individual, Teams (2M+2W or 4 Men)",
        "All athletes must be over 18 years old",
        "Competition experience recommended",
      ],
    },
    Teen: {
      requirements: [
        "Snatch: 60kg+ (Boys) / 40kg+ (Girls)",
        "Clean & Jerk: 80kg+ (Boys) / 50kg+ (Girls)",
        "Back Squat: 100kg+ (Boys) / 60kg+ (Girls)",
        "Strict Pull-ups: 10+ consecutive (Boys) / 5+ consecutive (Girls)",
        'Box Jump: 24" (Boys) / 20" (Girls)',
      ],
      notes: [
        "Athletes must be between 15 and 17 years old",
        "Parental consent required",
      ],
    },
    Espoir: {
      requirements: [
        "Snatch: 80kg+ (Men) / 50kg+ (Women)",
        "Clean & Jerk: 100kg+ (Men) / 65kg+ (Women)",
        "Back Squat: 130kg+ (Men) / 80kg+ (Women)",
        "Strict Pull-ups: 12+ consecutive (Men) / 6+ consecutive (Women)",
        'Box Jump: 30" (Men) / 24" (Women)',
      ],
      notes: [
        "Athletes must be between 18 and 21 years old",
        "Great for developing athletes",
      ],
    },
    Master: {
      requirements: [
        "Snatch: 70kg+ (Men) / 45kg+ (Women)",
        "Clean & Jerk: 90kg+ (Men) / 60kg+ (Women)",
        "Back Squat: 120kg+ (Men) / 75kg+ (Women)",
        "Strict Pull-ups: 10+ consecutive (Men) / 5+ consecutive (Women)",
        'Box Jump: 24" (Men) / 20" (Women)',
      ],
      notes: [
        "Athletes must be over 35 years old",
        "Scaled movements available",
      ],
    },
    "Elite Team": {
      requirements: [
        "Combined snatch capacity: 300kg+",
        "Synchronized movements required",
        "Strong communication and teamwork",
        "Experience in team competitions recommended",
      ],
      notes: [
        "All athletes must be over 18 years old",
        "Teams: 2 Men + 2 Women or 4 Men",
      ],
    },
    Intermediate: {
      requirements: [
        "Combined snatch capacity: 250kg+",
        "Basic Olympic lifting technique",
        "Comfortable with high-intensity workouts",
        "Good gymnastics fundamentals",
      ],
      notes: [
        "Various formats: 2+2 or 4 men",
        "Suitable for experienced athletes",
      ],
    },
    Scaled: {
      requirements: [
        "Functional fitness basics",
        "Scaled movements allowed",
        "Focus on movement quality over weight",
        "Perfect for beginners",
      ],
      notes: [
        "Available formats: 2 Men, 2 Women, 1M+1W, 4 Men, 2M+2W",
        "Great first competition experience",
      ],
    },
  };

  return (
    <section id="categories" className="py-20 px-6 max-w-7xl mx-auto">
      <div
        className={
          "flex flex-col gap-11 relative px-5 lg:px-10 xl:px-20 py-14 lg:py-16 xl:py-20 items-center justify-center z-10"
        }
      >
        <Title>
          <Title.subTitle>Find your level</Title.subTitle>
          <Title.mainTitle>Categories & Divisions</Title.mainTitle>
        </Title>
        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
          <button
            onClick={() => {
              setActiveTab("individual");
              setSelectedFormat(null);
            }}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === "individual"
                ? "bg-primary text-background shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            INDIVIDUAL
          </button>
          <button
            onClick={() => {
              setActiveTab("team");
              setSelectedFormat(null);
            }}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
              activeTab === "team"
                ? "bg-primary text-background shadow-lg"
                : "text-gray-400 hover:text-white"
            }`}
          >
            TEAMS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl mx-auto ">
        {categories[activeTab].map((cat) => (
          <div
            key={cat.title}
            className={` group relative overflow-hidden rounded-3xl border transition-all duration-300 bg-black/40 h-full ${
              selectedFormat &&
              cat.subLevels.some((sub) => sub.id === selectedFormat.id)
                ? "border-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]"
                : "border-white/10 hover:border-primary/50"
            }`}
            onClick={() => {
              if (cat.subLevels.length === 1) {
                setSelectedFormat(cat.subLevels[0]);
              }
            }}
          >
            {/* Image Background with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src={cat.imgPath}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 "
                style={{
                  objectPosition: `center ${cat.topOffset ? `${cat.topOffset}%` : "center"}`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col h-full min-h-[420px]">
              {/* Top Content (Over Image) */}
              <div className="p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl font-strasua text-white mb-2 group-hover:text-primary transition-colors drop-shadow-lg">
                    {cat.title}
                  </h3>
                  <p className="text-accent text-sm font-bold uppercase tracking-widest drop-shadow-md">
                    {cat.levels}
                  </p>
                </div>
              </div>

              {/* Bottom Actions and Formats */}
              <div className="mt-auto p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  {cat.subLevels.length > 1 || activeTab === "team" ? (
                    <div className="flex flex-wrap gap-2 max-w-full">
                      {cat.subLevels.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFormat(sub);
                          }}
                          className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg border backdrop-blur-md transition-all whitespace-nowrap ${
                            selectedFormat?.id === sub.id
                              ? "bg-primary text-background border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                              : "bg-black/40 text-gray-200 border-white/20 hover:border-primary/50"
                          }`}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-200 text-sm leading-relaxed font-medium drop-shadow-md">
                      {cat.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    className="w-full justify-between hover:bg-primary/10 hover:text-primary transition-all rounded-xl border-white/20 bg-black/20 backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(cat.title);
                    }}
                  >
                    VIEW STANDARDS
                    <span className="text-lg">→</span>
                  </Button>

                  <Button
                    variant={
                      selectedFormat &&
                      cat.subLevels.some((sub) => sub.id === selectedFormat.id)
                        ? "gradient"
                        : "outline"
                    }
                    className={`w-full rounded-xl transition-transform hover:scale-[1.02] ${
                      !(
                        selectedFormat &&
                        cat.subLevels.some(
                          (sub) => sub.id === selectedFormat.id,
                        )
                      )
                        ? "bg-black/20 backdrop-blur-sm"
                        : ""
                    }`}
                    disabled={
                      !selectedFormat ||
                      !cat.subLevels.some((sub) => sub.id === selectedFormat.id)
                    }
                    asChild
                  >
                    {selectedFormat &&
                    cat.subLevels.some(
                      (sub) => sub.id === selectedFormat.id,
                    ) ? (
                      <a
                        href={`https://competitioncorner.net/events/19804/register`}
                        target="_blank"
                      >
                        REGISTER NOW
                      </a>
                    ) : (
                      <span className="text-gray-500 font-bold tracking-wider">
                        SELECT FORMAT
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedCategory}
        onOpenChange={() => setSelectedCategory(null)}
      >
        <DialogContent className="sm:max-w-[600px] bg-background border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-strasua text-primary">
              {selectedCategory} - Standards & Requirements
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Minimum requirements and recommendations for this category
            </DialogDescription>
          </DialogHeader>

          {selectedCategory && standards[selectedCategory] && (
            <div className="space-y-6 py-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Minimum Standards:
                </h3>
                <ul className="space-y-2">
                  {standards[selectedCategory].requirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {standards[selectedCategory].notes && (
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-sm font-bold text-accent mb-2 uppercase tracking-wider">
                    Important Notes:
                  </h3>
                  <ul className="space-y-1">
                    {standards[selectedCategory].notes!.map((note, idx) => (
                      <li key={idx} className="text-sm text-gray-400">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-xs text-gray-500 italic">
                * These are suggested standards. Final acceptance is at
                organizer discretion.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
