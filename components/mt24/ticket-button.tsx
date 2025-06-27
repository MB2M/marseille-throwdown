import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TicketButton = () => {
  return (
    <Link href={"/ticketing"}>
      <Button variant={"gradient"}>TICKETING</Button>
    </Link>
  );
};
