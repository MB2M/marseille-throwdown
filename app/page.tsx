import { LandingTop } from "@/components/mt24/landing-top";
import { LandingParticipate } from "@/components/mt24/landing-participate";
import { LandingCategoriesV2 } from "@/components/mt24/landing-categories-v2";
import { LandingFollowCarousel } from "@/components/mt24/landing-follow-carousel";
import { LandingBottom } from "@/components/mt24/landing-bottom";
import PartnersBanner from "@/components/mt24/partners-banner";
import { LandingFinaleAbout } from "@/components/mt24/landing-finale-about";
import { SeasonOverview } from "@/components/mt24/season-overview";
import { LandingVenue } from "@/components/mt24/landing-venue";
import { LandingSocialProof } from "@/components/mt24/landing-social-proof";
import { LandingFAQ } from "@/components/mt24/landing-faq";
import { LandingFinalCTA } from "@/components/mt24/landing-final-cta";
import { LandingPracticalInfo } from "@/components/mt24/landing-practical-info";

export default function Page() {
  return (
    <main className="flex flex-col">
      <LandingTop />
      <PartnersBanner />
      <div className="flex flex-col gap-12 lg:gap-24">
        <LandingParticipate />
        <LandingFinaleAbout />
        <LandingCategoriesV2 />
        <SeasonOverview />
        <LandingVenue />
        <LandingPracticalInfo />
        <LandingSocialProof />
        <LandingFAQ />
        <LandingFinalCTA />
        <LandingFollowCarousel />
      </div>
      <LandingBottom />
    </main>
  );
}
