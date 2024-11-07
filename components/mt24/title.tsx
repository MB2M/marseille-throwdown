import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};

export function SubTitle({ children }: PropsWithChildren) {
  return (
    <div className={"text-accent font-extrabold lg:text-lg "}>{children}</div>
  );
}

export function MainTitle({ children }: PropsWithChildren) {
  return (
    <div className={"font-strasua text-2xl lg:text-3xl xl:text-4xl"}>
      {children}{" "}
    </div>
  );
}

Title.subTitle = SubTitle;
Title.mainTitle = MainTitle;

export { Title };
