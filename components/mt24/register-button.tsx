import { Button } from "@/components/ui/button";

export const RegisterButton = ({
  textOverwrite,
}: {
  textOverwrite?: string;
}) => {
  return (
    <Button variant={"gradient"} disabled className="cursor-not-allowed">
      REGISTRATIONS CLOSED
    </Button>
  );
};
