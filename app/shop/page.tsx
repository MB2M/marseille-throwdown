import HelloAssoShop from "@/components/HelloAssoShop";
import { SubTitle } from "@/components/mt24/sub-title";
import { MainTitle } from "@/components/mt24/main-title";
import { Title } from "@/components/mt24/title";

export default function Page() {
  return (
    <div className={"flex flex-col items-center p-8"}>
      <div className={"p-8"}>
        <Title>
          <SubTitle>Marseille Throwdown 2026</SubTitle>
          <MainTitle>Official store</MainTitle>
        </Title>
      </div>
      <HelloAssoShop />
    </div>
  );
}
