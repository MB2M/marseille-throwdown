import { PropsWithChildren } from "react";

export function SubTitle({ children }: PropsWithChildren) {
  return (
    <div className={"font-extrabold lg:text-lg text-primary"}>{children}</div>
  );
}
