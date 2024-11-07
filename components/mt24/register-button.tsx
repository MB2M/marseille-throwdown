import { Button } from "@/components/ui/button";
import Link from "next/link";

export const RegisterButton = () => {
  return (
    <Link
      href={"https://competitioncorner.net/events/mt25-qualifs/register"}
      target={"_blank"}
    >
      <Button variant={"gradient"}>REGISTER</Button>
    </Link>
  );
};
