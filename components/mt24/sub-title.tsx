import { PropsWithChildren } from "react";

export function SubTitle({ children }: PropsWithChildren) {
  return (
    <div className={"text-accent font-extrabold lg:text-lg "}>{children}</div>
  );
}
