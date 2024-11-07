import { PropsWithChildren } from "react";

export const Banner = ({ children }: PropsWithChildren) => {
  return (
    <div className={"w-full bg-gradient-full opacity-100 py-3"}>{children}</div>
  );
};
