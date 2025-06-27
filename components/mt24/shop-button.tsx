import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ShopButton = () => {
  return (
    <Link href={"/shop"}>
      <Button variant={"gradient"}>SHOP</Button>
    </Link>
  );
};
