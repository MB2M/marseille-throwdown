import { RegisterButton } from "@/components/mt24/register-button";
import { Title } from "@/components/mt24/title";

export const LandingFinalCTA = () => {
  return (
    <section className="py-40 px-6 text-center bg-gradient-to-b from-background to-black">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <Title>
          <Title.subTitle>The Battle Awaits</Title.subTitle>
          <Title.mainTitle>Your season starts now</Title.mainTitle>
        </Title>
        <div className="scale-150 mt-4">
          <RegisterButton textOverwrite="REGISTER NOW" />
        </div>
        <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mt-8">
          Join 700+ athletes on the road to Marseille
        </p>
      </div>
    </section>
  );
};
