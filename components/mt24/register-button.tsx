import { Button } from "@/components/ui/button";
import Link from "next/link";

export const RegisterButton = ({
  textOverwrite,
}: {
  textOverwrite?: string;
}) => {
  return (
    <Link
      href={"https://competitioncorner.net/events/mt26-qualifs/register"}
      target={"_blank"}
    >
      <Button variant={"gradient"}>{textOverwrite ?? "REGISTER"}</Button>
    </Link>
  );
};
