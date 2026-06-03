import { SubTitle } from "@/components/mt24/sub-title";
import { MainTitle } from "@/components/mt24/main-title";
import { Title } from "@/components/mt24/title";
import HelloAssoTicket from "@/components/HelloAssoTicket";

export default function Page() {
  return (
    <div className={"flex flex-col items-center p-8"}>
      <div className={"p-8"}>
        <Title>
          <SubTitle>Marseille Throwdown 2026</SubTitle>
          <MainTitle>Get your tickets for the finale</MainTitle>
        </Title>
      </div>
      <HelloAssoTicket />
    </div>
  );
}
