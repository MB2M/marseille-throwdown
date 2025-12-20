import Image from "next/image";

const pictureBorderSizes = {
  sm: { picture: "w-[222px] min-h-[295px]", border: "w-[205px] h-[290px]" },
  lg: {
    picture: "lg:w-[293px] lg:h-[391px]",
    border: "lg:w-[272px] lg:h-[384px]",
  },
  xl: {
    picture: "xl:w-[350px] xl:h-[466px]",
    border: "xl:w-[343px] xl:h-[458px]",
  },
};

interface Props {
  imagePath: string;
}

export function ImageGradientBorder({ imagePath }: Props) {
  return (
    <div className="lg:w-1/2 flex justify-center items-center ">
      <div
        className={` relative   ${pictureBorderSizes.sm.picture} ${pictureBorderSizes.lg.picture} ${pictureBorderSizes.xl.picture} `}
      >
        <div className="relative w-full h-full rounded-[10px] overflow-hidden border-gradient2 p-[1px] before:p-1">
          <Image
            src={imagePath}
            alt="gradient-image"
            width={1000}
            height={1000}
            className="relative object-cover w-full h-full rounded-[10px] "
          />
        </div>
        <div
          className={`rounded-[10px]  absolute ${pictureBorderSizes.sm.border} ${pictureBorderSizes.lg.border} ${pictureBorderSizes.xl.border} -bottom-2 lg:-bottom-3 -right-2 lg:-right-3 bg-gradient-revert-full -z-10`}
        />
      </div>
    </div>
  );
}
