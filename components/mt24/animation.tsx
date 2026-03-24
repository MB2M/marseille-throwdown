"use client";

import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

type Element = {
  img?: string;
  width: number;
  widthSmall: number;
  className?: string;
  component?: React.ReactNode;
};

interface Props {
  elements: Element[];
}

const Animation = ({ elements }: Props) => {
  const [_, setMounted] = useState(false);
  const { width } = useWindowSize();

  const isDesktop = (width || 0) > 1024;

  const GAP = isDesktop ? 80 : 24;
  const tailwindGap = isDesktop ? "gap-20" : "gap-6";
  const height = isDesktop ? 45 : 31.5;

  const totalPartnersWidth = elements.reduce(
    (acc, element) =>
      acc + (isDesktop ? element.width : element.widthSmall) + GAP,
    0,
  );

  const props = useSpring({
    from: { x: 0 },
    to: { x: -totalPartnersWidth },
    loop: true,
    config: {
      duration: 15000,
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <animated.div
      className={`flex flex-wrap justify-center ${tailwindGap} items-center`}
      style={{
        width: `${totalPartnersWidth * 6}px`,
        ...props,
      }}
    >
      {[
        ...elements,
        ...elements,
        ...elements,
        ...elements,
        ...elements,
        ...elements,
      ].map((partner, index) => (
        <div key={`O-${partner.img || index}-${index}`} className="relative h-full flex items-center justify-center">
          {partner.component ? (
            partner.component
          ) : (
            <Image
              alt={partner.img || ""}
              width={isDesktop ? partner.width : partner.widthSmall}
              height={height}
              src={`/img/${partner.img}`}
              className={partner.className}
            />
          )}
        </div>
      ))}
    </animated.div>
  );
};

export default Animation;
