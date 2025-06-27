import HelloAssoShop from "@/components/HelloAssoShop";
import { SubTitle } from "@/components/mt24/sub-title";
import { MainTitle } from "@/components/mt24/main-title";
import { Title } from "@/components/mt24/title";

export default function Page() {
  return (
    <div className={"flex flex-col items-center"}>
      <div className={"p-8 w-1/2"}>
        <Title>
          <SubTitle>FROM COMPETITION TO YOUR HOME/GYM</SubTitle>
          <MainTitle>
            COMPETITION-GRADE EQUIPMENT AT UNBEATABLE PRICES
          </MainTitle>
        </Title>
        <p className={"text-grayMT text-sm lg:text-base"}>
          This premium fitness equipment has been specially selected and used
          during our recent competitions. Now available for purchase at
          attractive prices, these machines offer you the unique opportunity to
          own the same professional-grade equipment used by competitive
          athletes.
        </p>
      </div>
      <HelloAssoShop />
    </div>
  );
}
