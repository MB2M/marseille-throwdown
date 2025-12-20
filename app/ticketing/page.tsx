import { SubTitle } from "@/components/mt24/sub-title";
import { MainTitle } from "@/components/mt24/main-title";
import { Title } from "@/components/mt24/title";
import HelloAssoTicket from "@/components/HelloAssoTicket";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/");
  // return (
  //   <div className={"flex flex-col items-center p-8"}>
  //     <div className={"p-8"}>
  //       <Title>
  //         <SubTitle>Marseille Throwdown 2025</SubTitle>
  //         <MainTitle>Get your tickets for the finale</MainTitle>
  //       </Title>
  //     </div>
  //     <HelloAssoTicket />
  //   </div>
  // );
}
