import { PropsWithChildren } from "react";

export function MainTitle({ children }: PropsWithChildren) {
  return (
    <div className={"font-strasua text-2xl lg:text-3xl xl:text-4xl"}>
      {children}{" "}
    </div>
  );
}
