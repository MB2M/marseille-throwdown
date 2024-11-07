import { Badge } from "@/components/ui/badge";
import { PropsWithChildren } from "react";

export const BadgeGradient = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <Badge
      variant={"gradient"}
      className={
        "text-xs lg:text-sm border-gradient2 rounded-full px-2.5 py-1.5 leading-5 " +
        `${className}`
      }
    >
      {children}
    </Badge>
  );
};
