import { Box, Stack, TextField, Typography, easing } from "@mui/material";
import AnimatedInView from "./AnimatedInView";
import Image from "next/image";
import { animated, easings, useSpring } from "@react-spring/web";
import { config } from "@react-spring/web";
import MTModal from "./MTModal";
import { useState } from "react";

const partners = [
    "cfmassilia.png",
    "cfmassilia2.png",
    "tako.png",
    "crossliftor.webp",
    "thorus.png",
    "bdr.svg",
    // "FitFactory.png",
    // "CrossfitMassilia2.png",
    // "tako.png",
];

const AnimatedBox = animated(Box);

const Partners = () => {
    const props = useSpring({
        from: { x: 0 },
        to: { x: (-230 - 32) * partners.length },
        loop: true,
        config: {
            duration: 30000,
        },
    });

    return (
        <>
            <Box px={4} pt={4} pb={8} sx={{ backgroundColor: "#111e3e" }}>
                <Typography
                    sx={{ color: "#A5C3FA" }}
                    fontSize={"32px"}
                    fontFamily={"NunitoBlack"}
                    textAlign={"center"}
                    p={2}
                    textTransform={"uppercase"}
                >
                    Nos partenaires
                </Typography>
                <AnimatedBox
                    gap={6}
                    style={props}
                    position="relative"
                    display="flex"
                    width={partners.length * (230 + 32) * 2}
                >
                    {partners.map((partner, index) => (
                        <Box
                            key={`O-${partner}-${index}`}
                            position="relative"
                            minWidth={230}
                            maxWidth={230}
                            height={230}
                        >
                            <Image
                                alt=""
                                src={`/img/${partner}`}
                                fill
                                style={{ objectFit: "contain" }}
                                sizes={"230px"}
                            />
                        </Box>
                    ))}
                    {partners.map((partner, index) => (
                        <Box
                            key={`1-${partner}-${index}`}
                            position="relative"
                            minWidth={230}
                            maxWidth={230}
                            height={230}
                        >
                            <Image
                                alt=""
                                src={`/img/${partner}`}
                                fill
                                style={{ objectFit: "contain" }}
                                sizes={"230px"}
                            />
                        </Box>
                    ))}
                </AnimatedBox>
                {/* </animated.div> */}
            </Box>
        </>
    );
};

export default Partners;
