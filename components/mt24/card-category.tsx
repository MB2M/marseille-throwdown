import Image from "next/image";
import { BadgeGradient } from "@/components/mt24/badge-gradient";

interface Props {
  imagePath: string;
  badgeText: string;
  title: string;
  subTitle: string;
  description: string;
}

export const CardCategory = ({
  imagePath,
  badgeText,
  title,
  subTitle,
  description,
}: Props) => {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"relative border border-[#3E495D]"}>
        <Image
          src={imagePath}
          alt={"img"}
          width={900}
          height={900}
          className={"object-cover aspect-square"}
        />
        <div
          className={
            "absolute bottom-3 left-3 font-bold text-sm lg:text-base flex flex-col gap-1.5"
          }
        >
          QUALIFIED
          <div>
            <BadgeGradient>{badgeText}</BadgeGradient>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-1"}>
        <div className={"lg:text-lg font-extrabold leading-7"}>{title}</div>
        <div
          className={
            "text-xss lg:text-sm text-secondary font-extrabold leading-5"
          }
        >
          {subTitle}
        </div>
        <p className={"text-sm lg:text-base text-grayMT leading-6"}>
          {description}
        </p>
      </div>
    </div>
  );
};
