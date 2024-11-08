import Image from "next/image";

export function LogoMT({ showText }: { showText?: boolean }) {
  return (
    <div className={"flex items-center gap-2.5"}>
      <Image
        src={"/img/logo-no-bg.png"}
        alt={"logo"}
        width={50}
        height={50}
        priority
        className={"w-12 h-auto"}
      />
      <div
        className={`${showText === undefined ? "hidden lg:block" : showText ? "block" : "hidden"} `}
      >
        <div className={"font-strasua leading-[18px]"}>MARSEILLE</div>
        <div className={"font-strasua leading-[18px]"}>THROWDOWN</div>
      </div>
    </div>
  );
}
