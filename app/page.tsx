import { LandingTop } from "@/components/mt24/landing-top";
import { LandingParticipate } from "@/components/mt24/landing-participate";
import { LandingCategories } from "@/components/mt24/landing-categories";
import { LandingVolunteers } from "@/components/mt24/landing-volunteers";
import { LandingFollowCarousel } from "@/components/mt24/landing-follow-carousel";
import { LandingBottom } from "@/components/mt24/landing-bottom";
import PartnersBanner from "@/components/mt24/partners-banner";
import CompetitionsBanner from "@/components/mt24/competition-banner";
import { Footer } from "@/components/mt24/footer";

export default function Page() {
  return (
    <>
      <LandingTop />
      <PartnersBanner />
      <LandingParticipate />
      <LandingCategories />
      <LandingVolunteers />
      <CompetitionsBanner />
      <LandingFollowCarousel />
      <LandingBottom />
      <Footer />
    </>
  );
}
