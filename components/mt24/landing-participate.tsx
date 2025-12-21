import { ImageGradientBorder } from "@/components/mt24/image-gradient-border";
import { RegisterButton } from "@/components/mt24/register-button";
import { MainTitle } from "@/components/mt24/main-title";
import { SubTitle } from "@/components/mt24/sub-title";
import { Title } from "@/components/mt24/title";

export function LandingParticipate() {
  return (
    <div className="py-14 lg:pt-16 xl:pt-20 px-5 lg:px-10 flex justify-center items-center flex-col gap-12 lg:flex-row lg:gap-20">
      <ImageGradientBorder imagePath={"/img/participate.jpg"} />
      <div className="lg:w-1/2 flex  flex-col gap-6">
        <Title>
          <SubTitle>IN FRANCE THIS SUMMER</SubTitle>
          <MainTitle>
            TAKE PART IN ONE OF THE MOST EXCITING FITNESS SHOWDOWNS IN EUROPE
          </MainTitle>
        </Title>
        <div className={"text-grayMT text-sm lg:text-base flex flex-col gap-2"}>
          <p>Push your limits. Test your strength.</p>
          <p>
            Over three intense days, athletes from all levels will face
            demanding workouts combining strength, cardio and gymnastics — both
            physically and mentally.
          </p>
          <p>This is more than a competition.</p>
          <p className={"font-bold"}>
            It’s a battle. A show. An unforgettable experience.
          </p>
          {/*This is the perfect opportunity to put your fitness to the test and*/}
          {/*measure yourself against other enthusiasts. Strength, cardio and*/}
          {/*gymnastics exercises await you for a physical and mental challenge*/}
          {/*that will push you to give the best of yourself.*/}
        </div>
        <p className={"text-grayMT  text-sm lg:text-base"}>
          Don&#39;t wait any longer and register now to take up this challenge!
        </p>
        <RegisterButton textOverwrite={"JOIN THE BATTLE"} />
      </div>
    </div>
  );
}
